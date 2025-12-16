import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface QueueVisualizerProps {
  start: number;
  end: number;
  startName: string;
  endName: string;
  showNumbers?: boolean;
  highlightBetween?: boolean;
  mode?: 'simple' | 'calculation' | 'counting' | 'drawing'; // calculation highlights removal
  maxRange?: number;
  visualMin?: number;
  interactiveCounting?: boolean;
  showEnclosure?: boolean;
}

export const QueueVisualizer: React.FC<QueueVisualizerProps> = ({ 
  start, 
  end, 
  startName, 
  endName, 
  showNumbers = true, 
  highlightBetween = false,
  mode = 'simple',
  maxRange,
  visualMin = 1,
  interactiveCounting = false,
  showEnclosure = false
}) => {
  const [revealedCounts, setRevealedCounts] = useState<number[]>([]);

  // Reset revealed counts when start/end changes
  useEffect(() => {
    setRevealedCounts([]);
  }, [start, end, mode]);

  // Generate range. 
  // If maxRange is provided, limit the upper bound.
  const defaultMax = end + 2;
  const max = maxRange !== undefined ? Math.min(defaultMax, maxRange) : defaultMax;
  
  // Create the full array of numbers to display based on visualMin and max
  const numbers = Array.from({ length: max - visualMin + 1 }, (_, i) => visualMin + i);

  const handleCircleClick = (num: number) => {
    if (interactiveCounting && num > start && num < end) {
      if (!revealedCounts.includes(num)) {
        setRevealedCounts(prev => [...prev, num]);
      }
    }
  };

  const renderItem = (num: number) => {
    const isStart = num === start;
    const isEnd = num === end;
    const isBetween = num > start && num < end;
    
    let opacity = 1;
    let scale = 1;
    let color = "bg-gray-200 text-gray-500";
    let ring = "";

    if (isStart) color = "bg-orange-400 text-white ring-4 ring-orange-200";
    if (isEnd) color = "bg-green-500 text-white ring-4 ring-green-200";
    
    if (isBetween) {
        color = highlightBetween ? "bg-blue-400 text-white" : "bg-blue-100 text-blue-400";
        if (showEnclosure) {
           color = "bg-purple-500 text-white shadow-md";
        }
    }

    // Calculation mode logic: Dim the ones we subtract
    if (mode === 'calculation') {
       if (num <= start) opacity = 0.3; // Subtract front
       if (num === end) opacity = 0.3; // Subtract last person
       if (isBetween) scale = 1.1; // Highlight result
    }

    const countIndex = num - start;
    const isRevealed = revealedCounts.includes(num);
    const isClickable = interactiveCounting && isBetween;

    return (
      <motion.div
        key={num}
        initial={{ scale: 0 }}
        animate={{ scale: scale, opacity: opacity }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className={`flex flex-col items-center gap-1 relative z-10 ${isClickable ? 'cursor-pointer' : ''}`}
        onClick={() => handleCircleClick(num)}
        whileTap={isClickable ? { scale: 0.9 } : {}}
      >
        {/* Tooltip for names */}
        {(isStart || isEnd) && (
          <span className="text-xs font-bold text-gray-700 mb-1 whitespace-nowrap px-2 py-0.5 bg-white rounded shadow-sm border">
            {isStart ? startName : endName}
          </span>
        )}
        
        {/* The Person Circle */}
        <div 
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-sm transition-all duration-300 ${color} ${ring}`}
        >
          {showNumbers ? num : ''}
        </div>
        
        {/* Label for 'Between' counts */}
        {highlightBetween && isBetween && mode === 'counting' && (
            <div className="h-6 flex items-center justify-center">
                {interactiveCounting ? (
                    <AnimatePresence>
                        {isRevealed ? (
                            <motion.div 
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="text-sm font-bold text-blue-600"
                            >
                                {countIndex}
                            </motion.div>
                        ) : (
                            <motion.span 
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ repeat: Infinity, duration: 1.5 }}
                              className="text-[10px] text-blue-400"
                            >
                              点击
                            </motion.span>
                        )}
                    </AnimatePresence>
                ) : (
                    <motion.div 
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-xs font-bold text-blue-600"
                    >
                        {countIndex}
                    </motion.div>
                )}
            </div>
        )}
      </motion.div>
    );
  };

  // If showEnclosure is active, we group the items to render the border around the middle group
  if (showEnclosure) {
    const groupPre = numbers.filter(n => n <= start);
    const groupMiddle = numbers.filter(n => n > start && n < end);
    const groupPost = numbers.filter(n => n >= end);

    return (
      <div className="relative flex flex-wrap gap-2 justify-center items-end min-h-[160px] p-4 bg-white/50 rounded-2xl border-2 border-blue-100 select-none">
        {groupPre.map(renderItem)}
        
        {groupMiddle.length > 0 && (
          <motion.div 
            initial={{ borderColor: 'transparent', backgroundColor: 'transparent' }}
            animate={{ borderColor: '#a855f7', backgroundColor: 'rgba(168, 85, 247, 0.1)' }}
            className="flex gap-2 p-2 border-2 border-dashed rounded-xl items-end mx-1"
          >
             {groupMiddle.map(renderItem)}
          </motion.div>
        )}
        
        {groupPost.map(renderItem)}
      </div>
    );
  }

  // Default rendering
  return (
    <div className="relative flex flex-wrap gap-2 justify-center items-end min-h-[160px] p-4 bg-white/50 rounded-2xl border-2 border-blue-100 select-none">
      {numbers.map(renderItem)}
    </div>
  );
};