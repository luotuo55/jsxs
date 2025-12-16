import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QueueVisualizer } from './QueueVisualizer';
import { Button } from './Button';
import { PenTool, Check, X, HelpCircle } from 'lucide-react';

export const PracticeDoIt: React.FC = () => {
  const [isDrawn, setIsDrawn] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [feedback, setFeedback] = useState<'idle' | 'success' | 'error'>('idle');

  const correctAns = 3; // 4 to 8, between is 5, 6, 7 (3 people)

  const checkAnswer = () => {
    if (parseInt(inputValue) === correctAns) {
      setFeedback('success');
    } else {
      setFeedback('error');
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <div className="bg-white rounded-3xl shadow-xl border-4 border-teal-200 overflow-hidden">
        {/* Header */}
        <div className="bg-teal-50 p-4 border-b border-teal-100 flex items-center gap-3">
          <div className="bg-teal-500 text-white p-2 rounded-lg font-bold shadow-sm">
             <PenTool className="w-5 h-5" />
          </div>
          <h2 className="text-xl font-bold text-teal-800">做一做：东东和玲玲之间有几人？</h2>
        </div>

        <div className="p-6 md:p-8">
          {/* Scene Description */}
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-8 bg-gradient-to-b from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
             {/* Slide Visual Representation */}
             <div className="relative w-64 h-48 flex-shrink-0">
                {/* Slide Structure */}
                <div className="absolute right-4 top-4 w-4 h-32 bg-yellow-400 rounded-t-lg"></div> {/* Ladder */}
                <div className="absolute right-4 top-4 w-32 h-4 bg-yellow-400 rounded-full"></div> {/* Top Platform */}
                <path d="M 150 20 L 20 180" stroke="#fca5a5" strokeWidth="12" fill="none" strokeLinecap="round" className="absolute"/> {/* Slide Ramp (CSS hack) */}
                <div className="absolute right-[80px] top-[20px] w-32 h-40 border-l-[12px] border-red-300 transform -skew-x-[30deg]"></div> 

                {/* Dongdong at top */}
                <motion.div 
                   animate={{ y: [0, -5, 0] }}
                   transition={{ repeat: Infinity, duration: 2 }}
                   className="absolute right-2 top-0 flex flex-col items-center z-10"
                >
                   <div className="bg-white px-2 py-1 rounded-lg border border-gray-200 text-xs font-bold shadow-sm mb-1 whitespace-nowrap">我排第 8</div>
                   <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white shadow-md flex items-center justify-center text-white font-bold">东</div>
                </motion.div>

                {/* Lingling at bottom */}
                 <motion.div 
                   className="absolute left-0 bottom-0 flex flex-col items-center z-10"
                >
                   <div className="bg-white px-2 py-1 rounded-lg border border-gray-200 text-xs font-bold shadow-sm mb-1 whitespace-nowrap">我排第 4</div>
                   <div className="w-10 h-10 bg-pink-500 rounded-full border-2 border-white shadow-md flex items-center justify-center text-white font-bold">玲</div>
                </motion.div>
                
                {/* Kids in between (abstract) */}
                <div className="absolute left-16 bottom-16 w-6 h-6 bg-gray-200 rounded-full opacity-50"></div>
                <div className="absolute left-24 bottom-24 w-6 h-6 bg-gray-200 rounded-full opacity-50"></div>
                <div className="absolute left-32 bottom-32 w-6 h-6 bg-gray-200 rounded-full opacity-50"></div>
             </div>

             {/* Text Instruction */}
             <div className="flex-1 space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                   <span className="font-bold text-blue-600">东东</span> 排第 <span className="font-bold text-2xl">8</span>，
                   <span className="font-bold text-pink-600">玲玲</span> 排第 <span className="font-bold text-2xl">4</span>。
                </p>
                <div className="bg-teal-100/50 p-4 rounded-xl border border-teal-200 text-teal-800 text-sm font-medium flex gap-2 items-start">
                  <HelpCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  请参照图片，在下方用“画图法”圈出他们之间的人，并填空。
                </div>
             </div>
          </div>

          {/* Interactive Visualizer */}
          <div className="space-y-6">
             <div className="flex justify-center">
                {!isDrawn ? (
                   <Button variant="secondary" onClick={() => setIsDrawn(true)}>
                     <PenTool className="w-4 h-4 mr-2" />
                     开始画图
                   </Button>
                ) : (
                   <Button variant="outline" onClick={() => setIsDrawn(false)}>
                     重置画图
                   </Button>
                )}
             </div>

             <QueueVisualizer 
                start={4} 
                end={8} 
                startName="玲玲" 
                endName="东东" 
                visualMin={1}
                maxRange={10}
                mode="simple"
                highlightBetween={true}
                showEnclosure={isDrawn}
             />

             {/* Answer Section */}
             <div className="flex flex-col items-center justify-center pt-4 border-t border-gray-100">
                <p className="text-gray-600 mb-4 font-medium">东东和玲玲之间有几人？</p>
                <div className="flex items-center gap-4">
                   <div className="relative">
                      <input 
                        type="number" 
                        value={inputValue}
                        onChange={(e) => {
                          setInputValue(e.target.value);
                          setFeedback('idle');
                        }}
                        className={`w-24 h-16 text-center text-3xl font-bold border-4 rounded-xl outline-none transition-all
                           ${feedback === 'success' ? 'border-green-400 bg-green-50 text-green-600' : 
                             feedback === 'error' ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-teal-400'}
                        `}
                      />
                      {feedback === 'success' && (
                        <motion.div initial={{scale:0}} animate={{scale:1}} className="absolute -right-8 top-1/2 -translate-y-1/2 text-green-500">
                           <Check className="w-8 h-8" />
                        </motion.div>
                      )}
                      {feedback === 'error' && (
                        <motion.div initial={{scale:0}} animate={{scale:1}} className="absolute -right-8 top-1/2 -translate-y-1/2 text-red-500">
                           <X className="w-8 h-8" />
                        </motion.div>
                      )}
                   </div>
                   <span className="text-xl font-bold text-gray-500">人</span>
                   
                   <Button onClick={checkAnswer} disabled={!inputValue} className="ml-4">
                     提交
                   </Button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};