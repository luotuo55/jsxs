import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SQUIRRELS_COUNT, PINE_CONES_COUNT } from '../constants';

export const PracticeCompare: React.FC = () => {
  const [showLine, setShowLine] = useState(false);

  const diff = PINE_CONES_COUNT - SQUIRRELS_COUNT;

  return (
    <div className="w-full max-w-3xl mx-auto p-6 bg-white rounded-3xl shadow-xl border-4 border-green-200">
       <h3 className="text-2xl font-bold text-center text-green-800 mb-6 flex items-center justify-center gap-2">
        <span>🐿️</span> 练习二：比一比
      </h3>

      <div className="space-y-8">
        {/* Pinecones */}
        <div className="flex items-center gap-4">
          <div className="w-24 font-bold text-lg text-amber-800">松果 ({PINE_CONES_COUNT})</div>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: PINE_CONES_COUNT }).map((_, i) => (
              <motion.div 
                key={`pine-${i}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="text-2xl w-8 h-8 flex items-center justify-center bg-amber-100 rounded-full"
              >
                🌰
              </motion.div>
            ))}
          </div>
        </div>

        {/* Squirrels */}
        <div className="flex items-center gap-4 relative">
          <div className="w-24 font-bold text-lg text-orange-800">松鼠 ({SQUIRRELS_COUNT})</div>
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: SQUIRRELS_COUNT }).map((_, i) => (
              <div key={`sq-${i}`} className="relative">
                 <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: i * 0.05 + 0.5 }}
                    className="text-2xl w-8 h-8 flex items-center justify-center bg-orange-100 rounded-full z-10 relative"
                  >
                    🐿️
                  </motion.div>
                  {/* Connection Line */}
                  {showLine && (
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: 40 }}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 w-0.5 bg-gray-400 -z-0 origin-bottom"
                      style={{ top: '-40px' }} // Drawing line upwards to the pinecone above
                    />
                  )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-green-50 rounded-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
           <button 
             onClick={() => setShowLine(!showLine)}
             className="px-6 py-2 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition-colors"
           >
             {showLine ? '隐藏连线' : '连一连'}
           </button>

           <div className="flex items-center gap-4 text-xl font-bold">
             <span>松果比松鼠多</span>
             <div className="w-12 h-12 border-b-2 border-black flex items-center justify-center text-blue-600 text-2xl">
               {showLine ? diff : '?'}
             </div>
             <span>个</span>
           </div>

           {showLine && (
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               className="bg-white px-4 py-2 rounded-lg border border-gray-200 font-mono text-lg text-gray-700"
             >
               {PINE_CONES_COUNT} - {SQUIRRELS_COUNT} = {diff}
             </motion.div>
           )}
        </div>
      </div>
    </div>
  );
};