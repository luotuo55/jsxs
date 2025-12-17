import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
          {/* Scene Description with SVG Illustration */}
          <div className="flex flex-col items-center justify-center mb-8 bg-gradient-to-b from-blue-50 to-white p-2 sm:p-6 rounded-2xl border border-blue-100 relative">
             
             {/* Custom SVG Illustration of the Slide */}
             <div className="relative w-full max-w-[600px] aspect-[16/10] select-none">
                <svg viewBox="0 0 600 380" className="w-full h-full drop-shadow-lg">
                   {/* Defs for gradients */}
                   <defs>
                      <linearGradient id="woodGradient" x1="0" y1="0" x2="1" y2="0">
                         <stop offset="0%" stopColor="#d4a373" />
                         <stop offset="50%" stopColor="#faedcd" />
                         <stop offset="100%" stopColor="#d4a373" />
                      </linearGradient>
                      <linearGradient id="slideGradient" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="0%" stopColor="#e07a5f" />
                         <stop offset="100%" stopColor="#f4a261" />
                      </linearGradient>
                   </defs>

                   {/* --- Structure --- */}
                   
                   {/* Back Legs */}
                   <path d="M350,300 L350,150" stroke="#a3b18a" strokeWidth="12" strokeLinecap="round" />
                   <path d="M500,300 L500,150" stroke="#a3b18a" strokeWidth="12" strokeLinecap="round" />

                   {/* Platform House */}
                   <rect x="330" y="150" width="190" height="130" rx="4" fill="#faedcd" stroke="#8d6e63" strokeWidth="3" />
                   {/* Wood planks texture */}
                   <path d="M330,180 H520 M330,210 H520 M330,240 H520" stroke="#d4a373" strokeWidth="1" opacity="0.5" />
                   
                   {/* Roof */}
                   <path d="M320,150 Q425,110 530,150" fill="none" stroke="#a3b18a" strokeWidth="10" strokeLinecap="round" />
                   <path d="M320,150 Q425,110 530,150" fill="none" stroke="#d4a373" strokeWidth="4" />
                   
                   {/* Window */}
                   <rect x="380" y="190" width="50" height="50" rx="2" fill="#fff" stroke="#8d6e63" strokeWidth="4" />
                   <line x1="405" y1="190" x2="405" y2="240" stroke="#8d6e63" strokeWidth="3" />
                   <line x1="380" y1="215" x2="430" y2="215" stroke="#8d6e63" strokeWidth="3" />

                   {/* Front Legs */}
                   <path d="M330,300 L330,150" stroke="#dad7cd" strokeWidth="12" strokeLinecap="round" />
                   <path d="M520,300 L520,150" stroke="#dad7cd" strokeWidth="12" strokeLinecap="round" />

                   {/* Horizontal Ladder Section (Top Left) */}
                   <path d="M150,130 L330,140" stroke="#8d6e63" strokeWidth="10" strokeLinecap="round" /> {/* Bar */}
                   <path d="M150,130 L150,220" stroke="#8d6e63" strokeWidth="8" strokeLinecap="round" /> {/* Ladder post */}
                   
                   {/* Slide (Curving down left) */}
                   <path d="M340,270 Q200,300 120,360" fill="none" stroke="#e07a5f" strokeWidth="35" strokeLinecap="round" />
                   <path d="M340,270 Q200,300 120,360" fill="none" stroke="#f2cc8f" strokeWidth="25" strokeLinecap="round" />
                   
                   {/* --- Characters (Abstracted for simplicity but recognizable) --- */}

                   {/* 8. Dongdong (Top Left on Ladder) */}
                   <g transform="translate(180, 100)">
                      {/* Speech Bubble */}
                      <g transform="translate(-10, -60)">
                        <path d="M0,0 H80 Q90,0 90,10 V30 Q90,40 80,40 H40 L30,50 L20,40 H10 Q0,40 0,30 V10 Q0,0 10,0 Z" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                        <text x="45" y="26" fontSize="14" textAnchor="middle" fill="#374151" fontWeight="bold">我排第 8</text>
                      </g>
                      {/* Avatar */}
                      <circle cx="25" cy="25" r="16" fill="#fca5a5" stroke="#374151" strokeWidth="1" /> {/* Head */}
                      <path d="M15,15 Q25,35 35,15" fill="none" stroke="#374151" strokeWidth="2" /> {/* Smile */}
                      <rect x="10" y="42" width="30" height="35" rx="5" fill="#60a5fa" /> {/* Blue Shirt */}
                      <path d="M10,45 L-5,60" stroke="#60a5fa" strokeWidth="6" strokeLinecap="round" /> {/* Arm */}
                      <path d="M40,45 L55,60" stroke="#60a5fa" strokeWidth="6" strokeLinecap="round" /> {/* Arm */}
                      <path d="M15,75 L15,95" stroke="#4b5563" strokeWidth="6" strokeLinecap="round" /> {/* Leg */}
                      <path d="M35,75 L35,95" stroke="#4b5563" strokeWidth="6" strokeLinecap="round" /> {/* Leg */}
                      <text x="25" y="65" fontSize="10" textAnchor="middle" fill="white" fontWeight="bold">东</text>
                   </g>

                   {/* 7. Kid on Horizontal Bar (Between Dongdong and House) */}
                   <g transform="translate(260, 130) scale(0.8)">
                      <circle cx="20" cy="20" r="15" fill="#fdba74" />
                      <rect x="8" y="35" width="24" height="30" rx="4" fill="#a3e635" />
                      <path d="M8,40 L-5,30" stroke="#a3e635" strokeWidth="6" strokeLinecap="round" />
                   </g>

                   {/* 6. Kid in Window (Inside House) */}
                   <g transform="translate(405, 215) scale(0.85)">
                       <circle cx="0" cy="0" r="15" fill="#e9d5ff" />
                       <path d="M-12,-5 Q0,-15 12,-5" fill="#374151" />
                       <rect x="-12" y="15" width="24" height="20" fill="#f87171" rx="4" />
                   </g>

                   {/* 5. Kid Sliding Down */}
                   <g transform="translate(240, 290) rotate(-30) scale(0.9)">
                      <circle cx="20" cy="15" r="15" fill="#bfdbfe" />
                      <rect x="8" y="30" width="24" height="30" rx="4" fill="#fbbf24" />
                      <path d="M8,35 L-5,25" stroke="#fbbf24" strokeWidth="6" strokeLinecap="round" /> {/* Arms up */}
                   </g>

                   {/* 4. Lingling (Bottom Left) */}
                   <g transform="translate(60, 310)">
                       {/* Speech Bubble */}
                       <g transform="translate(50, -20)">
                          <path d="M10,0 H140 Q150,0 150,10 V30 Q150,40 140,40 H40 L30,50 L35,40 H10 Q0,40 0,30 V10 Q0,0 10,0 Z" fill="white" stroke="#e5e7eb" strokeWidth="2" />
                          <text x="75" y="26" fontSize="13" textAnchor="middle" fill="#374151" fontWeight="bold">我排第 4，该我滑了</text>
                       </g>
                       {/* Avatar */}
                       <circle cx="25" cy="25" r="16" fill="#fbcfe8" stroke="#374151" strokeWidth="1" /> {/* Head */}
                       <path d="M10,15 Q25,5 40,15" fill="none" stroke="#374151" strokeWidth="2" /> {/* Hair/Headband */}
                       <rect x="10" y="42" width="30" height="35" rx="5" fill="#f472b6" /> {/* Pink Shirt */}
                       <path d="M10,45 L-5,35" stroke="#f472b6" strokeWidth="6" strokeLinecap="round" /> {/* Arm up */}
                       <path d="M40,45 L50,55" stroke="#f472b6" strokeWidth="6" strokeLinecap="round" /> {/* Arm down */}
                       <path d="M15,75 L10,95" stroke="#374151" strokeWidth="6" strokeLinecap="round" /> {/* Leg */}
                       <path d="M35,75 L40,95" stroke="#374151" strokeWidth="6" strokeLinecap="round" /> {/* Leg */}
                       <text x="25" y="65" fontSize="10" textAnchor="middle" fill="white" fontWeight="bold">玲</text>
                   </g>

                </svg>
             </div>

             <div className="bg-white/80 backdrop-blur-sm p-4 rounded-xl border border-blue-200 text-gray-700 text-sm font-medium flex gap-3 items-center shadow-sm max-w-2xl">
                <HelpCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <span>
                   <span className="text-blue-600 font-bold">东东</span>在上面（第8），<span className="text-pink-600 font-bold">玲玲</span>在下面（第4）。
                   请数一数，或者在下方画图圈一圈，找出他们中间有几个人？
                </span>
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
             <div className="flex flex-col items-center justify-center pt-8 border-t border-gray-100">
                <p className="text-gray-600 mb-4 font-bold text-lg">东东和玲玲之间有几人？</p>
                <div className="flex items-center gap-4">
                   <div className="relative">
                      <input 
                        type="number" 
                        value={inputValue}
                        onChange={(e) => {
                          setInputValue(e.target.value);
                          setFeedback('idle');
                        }}
                        className={`w-24 h-16 text-center text-3xl font-bold border-4 rounded-xl outline-none transition-all shadow-inner
                           ${feedback === 'success' ? 'border-green-400 bg-green-50 text-green-600' : 
                             feedback === 'error' ? 'border-red-300 bg-red-50' : 'border-gray-200 focus:border-teal-400'}
                        `}
                      />
                      {feedback === 'success' && (
                        <motion.div initial={{scale:0}} animate={{scale:1}} className="absolute -right-12 top-1/2 -translate-y-1/2 text-green-500">
                           <Check className="w-10 h-10 drop-shadow-sm" />
                        </motion.div>
                      )}
                      {feedback === 'error' && (
                        <motion.div initial={{scale:0}} animate={{scale:1}} className="absolute -right-12 top-1/2 -translate-y-1/2 text-red-500">
                           <X className="w-10 h-10 drop-shadow-sm" />
                        </motion.div>
                      )}
                   </div>
                   <span className="text-2xl font-bold text-gray-500">人</span>
                   
                   <Button onClick={checkAnswer} disabled={!inputValue} className="ml-6 shadow-xl">
                     提交答案
                   </Button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};