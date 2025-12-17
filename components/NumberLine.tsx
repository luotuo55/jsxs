import React from 'react';
import { motion } from 'framer-motion';

interface NumberLineProps {
  startValue: number;
  endValue: number;
  startName?: string;
  endName?: string;
  min?: number;
  max?: number;
}

export const NumberLine: React.FC<NumberLineProps> = ({
  startValue,
  endValue,
  startName,
  endName,
  min = 1,
  max = 17
}) => {
  const paddingX = 40;
  const height = 260; // Increased height to accommodate bottom arc and question mark
  const width = 800;
  const contentWidth = width - paddingX * 2;
  const step = contentWidth / (max - min);

  const getX = (val: number) => paddingX + (val - min) * step;

  const ticks = Array.from({ length: max - min + 1 }, (_, i) => min + i);
  const rangeStart = Math.min(startValue, endValue);
  const rangeEnd = Math.max(startValue, endValue);

  const yAxis = 160; 
  const xOrigin = getX(1);
  const xStart = getX(rangeStart);
  const xEnd = getX(rangeEnd);

  return (
    <div className="w-full overflow-x-auto bg-white rounded-xl border border-gray-100 p-4 shadow-inner">
      <div className="min-w-[600px] max-w-full mx-auto">
        <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto select-none">
          
          {/* Arc: 1 to Start (Xiao Yue) - Text Removed */}
          {rangeStart > 1 && (
             <g>
                <path 
                  d={`M${xOrigin} ${yAxis - 15} Q${(xOrigin + xStart)/2} ${yAxis - 80} ${xStart} ${yAxis - 15}`} 
                  fill="none" 
                  stroke="#f97316" 
                  strokeWidth="2" 
                  strokeDasharray="6 4"
                />
             </g>
          )}

          {/* Arc: 1 to End (Xiao Yu) - Text Removed */}
          {rangeEnd > 1 && (
             <g>
                <path 
                  d={`M${xOrigin} ${yAxis - 15} Q${(xOrigin + xEnd)/2} ${yAxis - 140} ${xEnd} ${yAxis - 15}`} 
                  fill="none" 
                  stroke="#22c55e" 
                  strokeWidth="2" 
                  strokeDasharray="6 4"
                />
             </g>
          )}

          {/* Main Axis Line */}
          <line 
            x1={paddingX} 
            y1={yAxis} 
            x2={width - paddingX} 
            y2={yAxis} 
            stroke="#94a3b8" 
            strokeWidth="4" 
            strokeLinecap="round" 
          />
          
          {/* Arrow Head */}
           <path 
             d={`M${width - paddingX + 2} ${yAxis} L${width - paddingX - 10} ${yAxis - 6} L${width - paddingX - 10} ${yAxis + 6} Z`} 
             fill="#94a3b8" 
           />

          {/* Ticks and Labels */}
          {ticks.map(num => {
             const x = getX(num);
             const isStart = num === startValue;
             const isEnd = num === endValue;
             const isBetween = num > rangeStart && num < rangeEnd;
             const isOrigin = num === 1;
             
             return (
               <g key={num}>
                 {/* Tick */}
                 <line 
                   x1={x} 
                   y1={yAxis - 8} 
                   x2={x} 
                   y2={yAxis + 8} 
                   stroke={isBetween ? '#3b82f6' : '#cbd5e1'} 
                   strokeWidth={isBetween ? 3 : 2} 
                 />
                 
                 {/* Number */}
                 <text 
                   x={x} 
                   y={yAxis + 35} 
                   textAnchor="middle" 
                   fontSize={isStart || isEnd || isOrigin ? 18 : 14} 
                   fontWeight={isStart || isEnd || isOrigin ? "bold" : "normal"}
                   fill={isStart ? '#f97316' : isEnd ? '#22c55e' : isBetween ? '#3b82f6' : '#94a3b8'}
                   style={{ fontFamily: 'monospace' }}
                 >
                   {num}
                 </text>

                 {/* Start/End Markers */}
                 {isStart && (
                    <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <circle cx={x} cy={yAxis} r={8} fill="#f97316" stroke="white" strokeWidth="2" />
                        <foreignObject x={x - 30} y={yAxis - 45} width="60" height="30">
                            <div className="flex justify-center">
                                <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-md font-bold whitespace-nowrap shadow-sm">
                                    {startName || '小数'}
                                </span>
                            </div>
                        </foreignObject>
                    </motion.g>
                 )}
                 {isEnd && (
                    <motion.g initial={{ scale: 0 }} animate={{ scale: 1 }}>
                        <circle cx={x} cy={yAxis} r={8} fill="#22c55e" stroke="white" strokeWidth="2" />
                        <foreignObject x={x - 30} y={yAxis - 45} width="60" height="30">
                            <div className="flex justify-center">
                                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-md font-bold whitespace-nowrap shadow-sm">
                                    {endName || '大数'}
                                </span>
                            </div>
                        </foreignObject>
                    </motion.g>
                 )}
                 
                 {/* Between Highlight Dots */}
                 {isBetween && (
                     <motion.circle 
                       initial={{ scale: 0 }}
                       animate={{ scale: 1 }}
                       cx={x} 
                       cy={yAxis} 
                       r={5} 
                       fill="#3b82f6" 
                     />
                 )}
               </g>
             );
          })}
          
          {/* Connector Curve to emphasize the range (bottom) */}
          <g>
            <path 
               d={`M${getX(rangeStart)} ${yAxis + 15} Q${(getX(rangeStart) + getX(rangeEnd))/2} ${yAxis + 60} ${getX(rangeEnd)} ${yAxis + 15}`} 
               fill="none" 
               stroke="#3b82f6" 
               strokeWidth="2" 
               strokeDasharray="4 4" 
               opacity="0.6"
            />
            {/* Question Mark Label below the arc */}
            <motion.text
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               x={(getX(rangeStart) + getX(rangeEnd))/2}
               y={yAxis + 75}
               textAnchor="middle"
               fontSize="24"
               fontWeight="bold"
               fill="#3b82f6"
            >
              ?
            </motion.text>
          </g>

        </svg>
      </div>
    </div>
  );
};