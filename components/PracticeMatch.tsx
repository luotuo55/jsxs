import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MATCH_DATA } from '../constants';
import { MatchItem } from '../types';
import { Check, ArrowRight, RefreshCw } from 'lucide-react';
import { Button } from './Button';

interface Point {
  x: number;
  y: number;
}

interface ConnectedPair {
  leftId: string;
  rightId: string;
  color: string;
}

const COLORS = [
  '#ef4444', // red
  '#3b82f6', // blue
  '#10b981', // green
  '#f59e0b', // amber
  '#8b5cf6', // violet
];

export const PracticeMatch: React.FC = () => {
  const [leftSelected, setLeftSelected] = useState<string | null>(null);
  const [connections, setConnections] = useState<ConnectedPair[]>([]);
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null);
  
  // Refs to track positions of buttons
  const leftRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const rightRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const containerRef = useRef<HTMLDivElement>(null);

  // Update container rect on resize/scroll
  useEffect(() => {
    const updateRect = () => {
      if (containerRef.current) {
        setContainerRect(containerRef.current.getBoundingClientRect());
      }
    };
    
    updateRect();
    window.addEventListener('resize', updateRect);
    // Use a timeout to ensure layout is settled for initial render
    const timer = setTimeout(updateRect, 100);
    return () => {
      window.removeEventListener('resize', updateRect);
      clearTimeout(timer);
    };
  }, []);

  const handleLeftClick = (id: string) => {
    // If already connected, do nothing
    if (connections.some(c => c.leftId === id)) return;
    setLeftSelected(id);
  };

  const handleRightClick = (rightItem: MatchItem) => {
    if (!leftSelected) return;
    
    // If already connected, do nothing
    if (connections.some(c => c.rightId === rightItem.id)) return;

    // Check match
    const leftItem = MATCH_DATA.left.find(i => i.id === leftSelected);
    if (leftItem && leftItem.value === rightItem.value) {
      // Correct Match
      const newConnection: ConnectedPair = {
        leftId: leftSelected,
        rightId: rightItem.id,
        color: COLORS[connections.length % COLORS.length]
      };
      setConnections([...connections, newConnection]);
      setLeftSelected(null);
    } else {
      // Incorrect - visual feedback handled by animation/shake could be added here
      // For now, simple reset selection
      const btn = rightRefs.current.get(rightItem.id);
      if(btn) {
        btn.classList.add('animate-shake');
        setTimeout(() => btn.classList.remove('animate-shake'), 500);
      }
      setLeftSelected(null);
    }
  };

  const getPoint = (side: 'left' | 'right', id: string): Point => {
    const map = side === 'left' ? leftRefs.current : rightRefs.current;
    const el = map.get(id);
    if (!el || !containerRect) return { x: 0, y: 0 };

    const rect = el.getBoundingClientRect();
    // Connect from the right edge of left items, left edge of right items
    const x = side === 'left' 
      ? rect.right - containerRect.left 
      : rect.left - containerRect.left;
    const y = rect.top + rect.height / 2 - containerRect.top;
    
    return { x, y };
  };

  const isComplete = connections.length === MATCH_DATA.left.length;

  const reset = () => {
    setConnections([]);
    setLeftSelected(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8 bg-white rounded-3xl shadow-xl border-4 border-yellow-200 relative">
      <h3 className="text-2xl font-bold text-center text-yellow-800 mb-8 flex items-center justify-center gap-2">
        <span>✏️</span> 练习一：连一连 (算一算，连出得数相同的算式)
      </h3>

      {isComplete && (
        <motion.div 
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          className="absolute top-4 right-4 z-50 bg-green-100 border-2 border-green-500 text-green-700 px-4 py-2 rounded-xl font-bold shadow-lg flex items-center gap-2"
        >
          <Check className="w-6 h-6" /> 全部正确！
          <button onClick={reset} className="ml-2 p-1 bg-white rounded-full hover:bg-green-50">
             <RefreshCw className="w-4 h-4" />
          </button>
        </motion.div>
      )}

      <div className="relative flex justify-between gap-12 sm:gap-24" ref={containerRef}>
        
        {/* SVG Overlay for Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10">
           {connections.map(conn => {
             const start = getPoint('left', conn.leftId);
             const end = getPoint('right', conn.rightId);
             if (start.x === 0 && start.y === 0) return null; // Not ready

             return (
               <motion.line
                 key={`${conn.leftId}-${conn.rightId}`}
                 initial={{ pathLength: 0 }}
                 animate={{ pathLength: 1 }}
                 transition={{ duration: 0.5, ease: "easeInOut" }}
                 x1={start.x}
                 y1={start.y}
                 x2={end.x}
                 y2={end.y}
                 stroke={conn.color}
                 strokeWidth="4"
                 strokeLinecap="round"
               />
             );
           })}
           {/* Temporary line for selection could go here if we tracked mouse position */}
        </svg>

        {/* Left Column */}
        <div className="flex flex-col gap-6 w-full z-20">
          {MATCH_DATA.left.map(item => {
            const isConnected = connections.some(c => c.leftId === item.id);
            const isSelected = leftSelected === item.id;
            return (
              <button
                key={item.id}
                ref={el => { if (el) leftRefs.current.set(item.id, el); }}
                onClick={() => handleLeftClick(item.id)}
                disabled={isConnected}
                className={`
                   relative h-20 w-full rounded-2xl border-4 flex items-center justify-between px-4 sm:px-6 transition-all shadow-sm
                   ${isConnected 
                     ? 'bg-gray-50 border-gray-200 text-gray-400 opacity-80' 
                     : isSelected 
                       ? 'bg-blue-50 border-blue-400 text-blue-700 scale-105 shadow-md ring-2 ring-blue-200 ring-offset-2' 
                       : 'bg-white border-yellow-100 text-gray-700 hover:border-yellow-300 hover:bg-yellow-50'}
                `}
              >
                 <div className="flex items-center gap-3">
                    <span className="text-3xl filter drop-shadow-sm">{item.icon}</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono tracking-wider">{item.content}</span>
                 </div>
                 {/* Connection Dot */}
                 <div className={`w-3 h-3 rounded-full ${isConnected || isSelected ? 'bg-current' : 'bg-gray-200'}`}></div>
              </button>
            );
          })}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 w-full z-20">
           {MATCH_DATA.right.map(item => {
            const isConnected = connections.some(c => c.rightId === item.id);
            return (
              <button
                key={item.id}
                ref={el => { if (el) rightRefs.current.set(item.id, el); }}
                onClick={() => handleRightClick(item)}
                disabled={isConnected}
                className={`
                   relative h-20 w-full rounded-2xl border-4 flex items-center justify-between px-4 sm:px-6 transition-all shadow-sm flex-row-reverse
                   ${isConnected 
                     ? 'bg-gray-50 border-gray-200 text-gray-400 opacity-80' 
                     : leftSelected // If left is selected, hint that these are clickable
                       ? 'bg-white border-indigo-100 text-gray-700 hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer'
                       : 'bg-white border-indigo-100 text-gray-700'}
                `}
              >
                 <div className="flex items-center gap-3 flex-row-reverse">
                    <span className="text-3xl filter drop-shadow-sm">{item.icon}</span>
                    <span className="text-xl sm:text-2xl font-bold font-mono tracking-wider">{item.content}</span>
                 </div>
                 {/* Connection Dot */}
                 <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-current' : 'bg-gray-200'}`}></div>
              </button>
            );
          })}
        </div>

      </div>
      
      {/* Help text */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        {isComplete ? '太棒了！' : leftSelected ? '请点击右边得数相同的算式' : '点击左边的算式，再点击右边得数相同的算式进行连线'}
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
};