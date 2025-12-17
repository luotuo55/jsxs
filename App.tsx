import React, { useState } from 'react';
import { QueueVisualizer } from './components/QueueVisualizer';
import { PracticeMatch } from './components/PracticeMatch';
import { PracticeDoIt } from './components/PracticeDoIt';
import { PracticeCompare } from './components/PracticeCompare';
import { NumberLine } from './components/NumberLine';
import { Button } from './components/Button';
import { LessonStage } from './types';
import { BookOpen, Calculator, PenTool, Layout, ChevronRight, ChevronLeft, Eye, Check, X, RefreshCw, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// A component that recreates the textbook scene visually using CSS/SVG
const TextbookScene: React.FC = () => {
  return (
    <div className="w-full bg-white border-2 border-yellow-400 rounded-3xl p-4 sm:p-6 relative overflow-hidden shadow-lg select-none">
      {/* Title Section */}
      <div className="flex items-center gap-3 mb-4 sm:mb-8 relative z-10 border-b border-dashed border-gray-100 pb-4">
         <div className="w-8 h-8 rounded-full border-2 border-cyan-500 text-cyan-600 flex items-center justify-center font-bold text-lg bg-white shrink-0">
          6
        </div>
        <h2 className="text-lg sm:text-2xl font-medium text-gray-800 tracking-wider font-serif">
          小悦和小宇之间有几人？
        </h2>
      </div>

      {/* Main Illustration Container */}
      <div className="relative w-full h-[260px] sm:h-[300px] mt-4 overflow-hidden rounded-xl">
        
        {/* --- Background / Context --- */}
        {/* Floor/Ground line */}
        <div className="absolute bottom-4 left-0 right-0 h-2 bg-amber-50 rounded-full blur-sm"></div>

        {/* --- LEFT SIDE: Xiao Yue & Banana Plant --- */}
        
        {/* Banana Plant (Far Left) */}
        <div className="absolute bottom-0 left-[-20px] sm:left-0 w-[140px] sm:w-[180px] h-[300px] z-20 pointer-events-none">
           <svg viewBox="0 0 100 200" className="w-full h-full drop-shadow-sm" preserveAspectRatio="none">
             {/* Stems */}
             <path d="M45,200 Q40,150 30,100" stroke="#4d7c0f" strokeWidth="4" fill="none" />
             <path d="M50,200 Q60,140 70,80" stroke="#4d7c0f" strokeWidth="4" fill="none" />
             {/* Leaves */}
             <path d="M30,100 Q-10,80 0,20 Q40,60 50,110 Z" fill="#65a30d" stroke="#365314" strokeWidth="0.5" />
             <path d="M70,80 Q110,60 100,10 Q60,40 55,90 Z" fill="#84cc16" stroke="#365314" strokeWidth="0.5" />
             <path d="M40,140 Q10,120 5,60 Q50,100 60,150 Z" fill="#4d7c0f" stroke="#365314" strokeWidth="0.5" />
             {/* Pot Edge */}
             <path d="M20,190 L80,190" stroke="#a8a29e" strokeWidth="15" strokeLinecap="round" opacity="0.5"/>
           </svg>
        </div>

        {/* Xiao Yue (Student 10) */}
        <div className="absolute bottom-6 left-[70px] sm:left-[130px] z-10 flex flex-col items-center">
            {/* Speech Bubble */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.2 }}
               className="absolute -top-12 -right-8 bg-white border border-gray-200 px-3 py-1.5 rounded-xl rounded-bl-none shadow-sm text-sm text-gray-600 whitespace-nowrap z-50"
            >
               我排第 10。
            </motion.div>

            {/* Avatar */}
            <svg width="70" height="130" viewBox="0 0 70 130" className="drop-shadow-md">
               {/* Legs */}
               <path d="M25,90 L25,125" stroke="#ef4444" strokeWidth="10" strokeLinecap="round" />
               <path d="M45,90 L45,125" stroke="#ef4444" strokeWidth="10" strokeLinecap="round" />
               {/* Shoes */}
               <ellipse cx="25" cy="128" rx="7" ry="3" fill="#9ca3af" />
               <ellipse cx="45" cy="128" rx="7" ry="3" fill="#9ca3af" />
               {/* Body (Orange) */}
               <rect x="15" y="50" width="40" height="45" rx="5" fill="#f97316" />
               <rect x="15" y="50" width="40" height="8" fill="#fdba74" /> {/* Collar area */}
               {/* Arms holding camera */}
               <path d="M15,55 Q5,75 25,65" stroke="#f97316" strokeWidth="6" fill="none" strokeLinecap="round" /> 
               <path d="M55,55 Q65,75 45,65" stroke="#f97316" strokeWidth="6" fill="none" strokeLinecap="round" />
               {/* Camera */}
               <rect x="25" y="60" width="20" height="12" rx="2" fill="#374151" />
               {/* Head */}
               <circle cx="35" cy="30" r="14" fill="#fde68a" />
               <path d="M20,25 Q35,5 50,25 Q52,35 48,38 L22,38 Q18,35 20,25" fill="#1f2937" /> {/* Hair */}
               <circle cx="52" cy="28" r="3" fill="#1f2937" /> {/* Side ponytail */}
            </svg>
            <span className="text-xs font-bold text-gray-500 mt-1 bg-white/80 px-2 rounded-full">小悦</span>
        </div>

        {/* --- MIDDLE SECTION: The Queue & Plants --- */}
        {/* The students between are 11, 12, 13, 14. */}
        <div className="absolute bottom-10 left-[140px] sm:left-[220px] right-[90px] sm:right-[140px] h-[200px] z-10 flex items-end justify-center gap-2 sm:gap-6">
            
            {/* Student 11 */}
            <div className="relative w-10 h-24 mb-6 translate-y-2">
               <svg viewBox="0 0 40 80" className="w-full h-full">
                  <circle cx="20" cy="20" r="12" fill="#fde68a" />
                  <path d="M8,15 Q20,0 32,15" fill="#1f2937" /> {/* Short hair */}
                  <rect x="10" y="32" width="20" height="40" fill="#3b82f6" rx="4" /> {/* Blue clothes */}
               </svg>
            </div>
             {/* Student 12 (Peeking higher) */}
            <div className="relative w-10 h-28 mb-10 -ml-2 z-0">
               <svg viewBox="0 0 40 80" className="w-full h-full">
                  <circle cx="20" cy="20" r="12" fill="#fecaca" />
                  <path d="M5,20 Q20,-5 35,20 L35,30 Q20,35 5,30 Z" fill="#1f2937" /> {/* Girl hair */}
                  <rect x="8" y="32" width="24" height="40" fill="#fcd34d" rx="4" /> {/* Yellow clothes */}
               </svg>
            </div>
             {/* Student 13 */}
            <div className="relative w-10 h-24 mb-6 -ml-2 z-0">
               <svg viewBox="0 0 40 80" className="w-full h-full">
                  <circle cx="20" cy="20" r="12" fill="#fde68a" />
                  <path d="M8,15 Q20,0 32,15" fill="#4b5563" /> 
                  <rect x="10" y="32" width="20" height="40" fill="#9ca3af" rx="4" /> {/* Grey clothes */}
               </svg>
            </div>
            {/* Student 14 */}
            <div className="relative w-10 h-26 mb-8 -ml-2 z-0">
               <svg viewBox="0 0 40 80" className="w-full h-full">
                  <circle cx="20" cy="20" r="12" fill="#fde68a" />
                  <path d="M8,15 Q20,0 32,15" fill="#1f2937" /> 
                  <rect x="10" y="32" width="20" height="40" fill="#22c55e" rx="4" /> {/* Green clothes */}
               </svg>
            </div>

        </div>

        {/* --- FOREGROUND PLANTS (Hiding the middle bodies) --- */}
        <div className="absolute bottom-4 left-[130px] sm:left-[180px] right-[60px] sm:right-[100px] h-[220px] z-30 pointer-events-none flex items-end justify-center">
             
             {/* Middle Large Plant Group (Elephant Ear) */}
             <div className="relative w-full h-full">
                {/* Pots */}
                <div className="absolute bottom-0 left-[10%] w-12 h-10 bg-pink-200 border-2 border-pink-300 rounded-b-lg shadow-sm z-10"></div>
                <div className="absolute bottom-0 left-[35%] w-14 h-12 bg-yellow-100 border-2 border-yellow-300 rounded-b-lg shadow-sm z-20"></div>
                <div className="absolute bottom-0 left-[60%] w-16 h-10 bg-orange-100 border-2 border-orange-300 rounded-b-lg shadow-sm z-10"></div>

                {/* Wooden Fence */}
                <div className="absolute bottom-2 left-[-20px] right-[-20px] h-12 flex items-end z-0 opacity-90">
                   {Array.from({length: 15}).map((_, i) => (
                      <div key={i} className="flex-1 mx-0.5 bg-amber-600 rounded-t-md border-t border-r border-l border-amber-700 shadow-sm" style={{height: 25 + Math.random() * 15 + 'px'}}></div>
                   ))}
                </div>

                {/* Leaves Layer 1 */}
                <motion.svg initial={{ scale: 0.95 }} animate={{ scale: 1.02 }} transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }} className="absolute bottom-10 left-0 w-32 h-40 text-emerald-600 drop-shadow-md z-20" viewBox="0 0 100 100">
                    <path d="M50,100 C10,40 0,20 20,10 C50,-10 80,10 80,30 C90,60 50,100 50,100" fill="currentColor" />
                    <line x1="50" y1="100" x2="50" y2="20" stroke="#065f46" strokeWidth="1" />
                </motion.svg>

                {/* Leaves Layer 2 */}
                <motion.svg initial={{ scale: 0.98 }} animate={{ scale: 1.05 }} transition={{ duration: 2.5, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }} className="absolute bottom-12 left-[30%] w-40 h-50 text-green-500 drop-shadow-md z-30" viewBox="0 0 100 100">
                    <path d="M50,100 Q0,40 20,10 Q50,-10 80,10 Q100,40 50,100" fill="currentColor" />
                    <line x1="50" y1="100" x2="50" y2="15" stroke="#166534" strokeWidth="1" />
                </motion.svg>

                 {/* Leaves Layer 3 */}
                <motion.svg initial={{ rotate: -2 }} animate={{ rotate: 2 }} transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut" }} className="absolute bottom-8 right-0 w-36 h-44 text-emerald-500 drop-shadow-md z-20" viewBox="0 0 100 100">
                    <path d="M50,100 Q10,50 10,20 Q50,0 90,20 Q90,50 50,100" fill="currentColor" />
                    <line x1="50" y1="100" x2="50" y2="15" stroke="#065f46" strokeWidth="1" />
                </motion.svg>
             </div>
        </div>

        {/* --- RIGHT SIDE: Xiao Yu & Plants --- */}
        <div className="absolute bottom-6 right-2 sm:right-[40px] z-10 flex flex-col items-center">
            {/* Speech Bubble */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.4 }}
               className="absolute -top-12 -left-12 bg-white border border-gray-200 px-3 py-1.5 rounded-xl rounded-br-none shadow-sm text-sm text-gray-600 whitespace-nowrap z-50"
            >
               我排第 15。
            </motion.div>

             {/* Avatar (Xiao Yu) */}
            <svg width="70" height="130" viewBox="0 0 70 130" className="drop-shadow-md">
               {/* Legs */}
               <path d="M25,90 L25,125" stroke="#facc15" strokeWidth="10" strokeLinecap="round" />
               <path d="M45,90 L45,125" stroke="#facc15" strokeWidth="10" strokeLinecap="round" />
               {/* Shoes */}
               <ellipse cx="25" cy="128" rx="7" ry="3" fill="#d97706" />
               <ellipse cx="45" cy="128" rx="7" ry="3" fill="#d97706" />
               {/* Body (Yellow/Orange) */}
               <rect x="15" y="50" width="40" height="45" rx="5" fill="#fb923c" />
               <path d="M15,50 L55,50 L55,60 L15,60 Z" fill="#fdba74" /> {/* Collar */}
               {/* Arms */}
               <rect x="10" y="52" width="8" height="35" rx="4" fill="#fb923c" transform="rotate(5 10 52)" />
               <rect x="52" y="52" width="8" height="35" rx="4" fill="#fb923c" transform="rotate(-5 52 52)" />
               {/* Head */}
               <circle cx="35" cy="30" r="14" fill="#fde68a" />
               <path d="M20,25 Q35,5 50,25 L50,30 Q35,35 20,30 Z" fill="#1f2937" /> {/* Short Hair */}
            </svg>
            <span className="text-xs font-bold text-gray-500 mt-1 bg-white/80 px-2 rounded-full">小宇</span>
        </div>

        {/* Far Right Plant Decor */}
         <div className="absolute bottom-0 right-[-10px] w-24 h-40 pointer-events-none z-40 hidden sm:block">
           <svg viewBox="0 0 100 100" className="w-full h-full text-teal-600">
              <path d="M80,100 Q60,40 20,60 Q0,80 10,100" fill="#115e59" opacity="0.8" />
              <path d="M90,100 Q100,20 40,40 Q50,80 60,100" fill="#0f766e" />
           </svg>
         </div>

      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [stage, setStage] = useState<LessonStage>(LessonStage.INTRO);
  const [methodTab, setMethodTab] = useState<'count' | 'draw' | 'calc'>('count');
  const [showIntroVisual, setShowIntroVisual] = useState(false);
  
  // Drawing Method State
  const [isDrawn, setIsDrawn] = useState(false);

  // Calculation Method State
  // Adjustable start/end for the calculation method
  const [calcStart, setCalcStart] = useState(10);
  const [calcEnd, setCalcEnd] = useState(15);
  const [calcInputs, setCalcInputs] = useState({ big: '', small: '', result: '' });
  const [calcFeedback, setCalcFeedback] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [showCalcSecret, setShowCalcSecret] = useState(false);

  // Core Example 1 Data (Static for other parts)
  const ex1Start = 10;
  const ex1End = 15;
  const ex1StartName = "小悦";
  const ex1EndName = "小宇";
  const ex1Diff = ex1End - ex1Start - 1;

  const handleCalcCheck = () => {
    const big = parseInt(calcInputs.big);
    const small = parseInt(calcInputs.small);
    const res = parseInt(calcInputs.result);
    const targetDiff = calcEnd - calcStart - 1;

    if (big === calcEnd && small === calcStart && res === targetDiff) {
      setCalcFeedback('correct');
    } else {
      setCalcFeedback('incorrect');
    }
  };

  const resetCalc = () => {
    setCalcInputs({ big: '', small: '', result: '' });
    setCalcFeedback('idle');
  }

  // Adjust Calc Variables
  const adjustCalcStart = (delta: number) => {
    const newVal = calcStart + delta;
    if (newVal >= 1 && newVal < calcEnd - 1) {
      setCalcStart(newVal);
      setCalcInputs({ big: '', small: '', result: '' });
      setCalcFeedback('idle');
    }
  };

  const adjustCalcEnd = (delta: number) => {
    const newVal = calcEnd + delta;
    if (newVal > calcStart + 1 && newVal <= 17) {
      setCalcEnd(newVal);
      setCalcInputs({ big: '', small: '', result: '' });
      setCalcFeedback('idle');
    }
  };

  const renderContent = () => {
    switch (stage) {
      case LessonStage.INTRO:
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto"
          >
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border-b-8 border-blue-200 w-full relative overflow-hidden">
              
              {/* Top Label */}
              <div className="absolute top-0 left-0 bg-blue-500 text-white px-4 py-1 rounded-br-xl font-bold text-sm z-10">
                排队问题
              </div>

              {/* Textbook Scene Component */}
              <div className="mt-8 mb-8">
                <TextbookScene />
              </div>
              
              {/* Interactive Problem Data */}
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 bg-blue-50/50 p-6 rounded-2xl border border-blue-100 border-dashed">
                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl border border-orange-200 shadow-sm w-full md:w-auto justify-center">
                  <div className="w-8 h-8 rounded-full bg-orange-400 text-white flex items-center justify-center font-bold text-sm">悦</div>
                  <span className="text-lg text-gray-700">排第 <span className="text-3xl font-bold text-orange-500 font-mono ml-1">10</span></span>
                </div>
                
                <div className="hidden md:block text-gray-400 font-bold">...</div>

                <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-xl border border-green-200 shadow-sm w-full md:w-auto justify-center">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">宇</div>
                  <span className="text-lg text-gray-700">排第 <span className="text-3xl font-bold text-green-600 font-mono ml-1">15</span></span>
                </div>
              </div>

              {/* Initial Visualization - NOW INTERACTIVE */}
              <div className="flex justify-center bg-gray-50 p-6 rounded-2xl border border-gray-100 min-h-[140px] items-center transition-all">
                 {!showIntroVisual ? (
                    <button 
                      onClick={() => setShowIntroVisual(true)}
                      className="group flex flex-col items-center gap-3 text-gray-500 hover:text-blue-600 transition-colors"
                    >
                       <div className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 group-hover:border-blue-400 flex items-center justify-center shadow-sm">
                         <Eye className="w-6 h-6" />
                       </div>
                       <span className="font-bold text-sm bg-white px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                         点击把小朋友转化成圆圈
                       </span>
                    </button>
                 ) : (
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     className="w-full"
                   >
                     <div className="flex justify-between items-center mb-2">
                        <p className="text-sm text-gray-400 font-medium">我们可以用圆圈代表小朋友：</p>
                        <button 
                          onClick={() => setShowIntroVisual(false)}
                          className="text-xs text-gray-400 hover:text-gray-600 underline"
                        >
                          隐藏
                        </button>
                     </div>
                     <QueueVisualizer 
                       start={ex1Start} 
                       end={ex1End} 
                       startName={ex1StartName} 
                       endName={ex1EndName} 
                       showNumbers={true}
                       mode="simple"
                       maxRange={15}
                     />
                   </motion.div>
                 )}
              </div>
            </div>
            
            <Button size="lg" onClick={() => setStage(LessonStage.METHODS)} className="animate-bounce shadow-blue-300/50 shadow-lg">
              开始探索解法 <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        );

      case LessonStage.METHODS:
        return (
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">三种解题宝典</h2>
            
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button
                onClick={() => setMethodTab('count')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                  methodTab === 'count' 
                    ? 'bg-orange-500 text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Layout className="w-5 h-5" /> 数数法
              </button>
              <button
                onClick={() => setMethodTab('draw')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                  methodTab === 'draw' 
                    ? 'bg-purple-500 text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <PenTool className="w-5 h-5" /> 画图法
              </button>
              <button
                onClick={() => setMethodTab('calc')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                  methodTab === 'calc' 
                    ? 'bg-blue-500 text-white shadow-lg scale-105' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Calculator className="w-5 h-5" /> 计算法
              </button>
            </div>

            {/* Content Area */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border-2 border-gray-100 min-h-[400px]">
              <AnimatePresence mode="wait">
                {methodTab === 'count' && (
                  <motion.div 
                    key="count"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    <div className="bg-orange-50 p-4 rounded-xl border-l-4 border-orange-400">
                      <h3 className="font-bold text-lg text-orange-800 mb-2">💡 方法秘籍</h3>
                      <p className="text-gray-700">
                        从第<span className="font-bold">{ex1Start}</span>人的<span className="font-bold text-red-500">后面</span>开始数，
                        一直数到第<span className="font-bold">{ex1End}</span>人的<span className="font-bold text-red-500">前面</span>。
                        <br/>
                        <span className="font-bold text-blue-600 block mt-2">请用鼠标点击中间的圆圈数一数！</span>
                      </p>
                    </div>

                    <QueueVisualizer 
                      start={ex1Start} 
                      end={ex1End} 
                      startName={ex1StartName} 
                      endName={ex1EndName} 
                      highlightBetween={true}
                      mode="counting"
                      maxRange={15}
                      interactiveCounting={true}
                    />

                    <div className="text-center text-lg text-gray-500 mt-4">
                      如果不包含两端的人，中间有几个人呢？
                    </div>
                  </motion.div>
                )}

                {methodTab === 'draw' && (
                  <motion.div 
                    key="draw"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                     <div className="bg-purple-50 p-4 rounded-xl border-l-4 border-purple-400">
                      <h3 className="font-bold text-lg text-purple-800 mb-2">💡 方法秘籍</h3>
                      <p className="text-gray-700">
                        用简单的图形（如圆圈）代表同学。只需画出<span className="font-bold">第3到第15</span>之间的圆圈示意。
                        然后圈出<span className="font-bold">第{ex1Start}到第{ex1End}</span>之间的人。
                      </p>
                    </div>

                    <div className="flex flex-col items-center gap-6 py-4">
                       <QueueVisualizer 
                          start={ex1Start} 
                          end={ex1End} 
                          startName={ex1StartName} 
                          endName={ex1EndName} 
                          showNumbers={true}
                          highlightBetween={true}
                          mode="simple"
                          visualMin={3}
                          maxRange={15}
                          showEnclosure={isDrawn}
                        />

                        {!isDrawn ? (
                          <Button 
                            variant="secondary" 
                            onClick={() => setIsDrawn(true)}
                            className="animate-pulse"
                          >
                            <PenTool className="w-5 h-5 mr-2" />
                            点击圈出中间的人
                          </Button>
                        ) : (
                          <motion.div 
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            className="bg-purple-100 text-purple-700 px-6 py-2 rounded-full font-bold flex items-center gap-2"
                          >
                            <Check className="w-5 h-5" />
                            圈出来了！是 {ex1Diff} 人
                            <button onClick={() => setIsDrawn(false)} className="ml-4 text-sm underline text-purple-500">重置</button>
                          </motion.div>
                        )}
                    </div>
                  </motion.div>
                )}

                {methodTab === 'calc' && (
                  <motion.div 
                    key="calc"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    className="space-y-6"
                  >
                    {/* Controls to adjust numbers */}
                    <div className="flex justify-center gap-8 bg-gray-50 p-4 rounded-xl">
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-xs font-bold text-gray-500">小悦 (小数)</span>
                        <div className="flex items-center gap-2">
                          <button onClick={() => adjustCalcStart(-1)} className="p-2 bg-white rounded-lg shadow-sm hover:bg-gray-100 disabled:opacity-50"><Minus className="w-4 h-4"/></button>
                          <span className="text-xl font-bold w-8 text-center">{calcStart}</span>
                          <button onClick={() => adjustCalcStart(1)} className="p-2 bg-white rounded-lg shadow-sm hover:bg-gray-100 disabled:opacity-50"><Plus className="w-4 h-4"/></button>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                         <span className="text-xs font-bold text-gray-500">小宇 (大数)</span>
                         <div className="flex items-center gap-2">
                          <button onClick={() => adjustCalcEnd(-1)} className="p-2 bg-white rounded-lg shadow-sm hover:bg-gray-100 disabled:opacity-50"><Minus className="w-4 h-4"/></button>
                          <span className="text-xl font-bold w-8 text-center">{calcEnd}</span>
                          <button onClick={() => adjustCalcEnd(1)} className="p-2 bg-white rounded-lg shadow-sm hover:bg-gray-100 disabled:opacity-50"><Plus className="w-4 h-4"/></button>
                        </div>
                      </div>
                    </div>

                    <NumberLine 
                      startValue={calcStart} 
                      endValue={calcEnd} 
                      startName={ex1StartName} 
                      endName={ex1EndName}
                      min={1}
                      max={17}
                    />

                    {/* Interactive Calculation Form */}
                    <div className="flex flex-col items-center gap-4 py-6">
                      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                         {/* Input: Big Number */}
                         <div className="flex flex-col items-center">
                           <input 
                             type="number" 
                             value={calcInputs.big}
                             onChange={(e) => setCalcInputs({...calcInputs, big: e.target.value})}
                             disabled={calcFeedback === 'correct'}
                             className={`w-16 h-16 sm:w-20 sm:h-20 text-center text-2xl sm:text-3xl font-bold rounded-xl border-4 outline-none transition-all
                               ${calcFeedback === 'correct' ? 'border-green-400 bg-green-50 text-green-700' : 'border-gray-200 focus:border-blue-400'}
                             `}
                             placeholder="?"
                           />
                           <span className="text-xs text-gray-400 mt-1 font-bold">大数</span>
                         </div>

                         <span className="text-2xl font-bold text-gray-400">-</span>

                         {/* Input: Small Number */}
                         <div className="flex flex-col items-center">
                           <input 
                             type="number" 
                             value={calcInputs.small}
                             onChange={(e) => setCalcInputs({...calcInputs, small: e.target.value})}
                             disabled={calcFeedback === 'correct'}
                             className={`w-16 h-16 sm:w-20 sm:h-20 text-center text-2xl sm:text-3xl font-bold rounded-xl border-4 outline-none transition-all
                               ${calcFeedback === 'correct' ? 'border-green-400 bg-green-50 text-green-700' : 'border-gray-200 focus:border-blue-400'}
                             `}
                             placeholder="?"
                           />
                           <span className="text-xs text-gray-400 mt-1 font-bold">小数</span>
                         </div>

                         <div className="flex flex-col items-center">
                           <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-2xl sm:text-3xl font-bold text-red-500 bg-red-50 rounded-xl border-4 border-red-100">
                             - 1
                           </div>
                           <span className="text-xs text-gray-400 mt-1 font-bold">固定减1</span>
                         </div>

                         <span className="text-2xl font-bold text-gray-400">=</span>

                         {/* Input: Result */}
                         <div className="flex flex-col items-center">
                           <input 
                             type="number" 
                             value={calcInputs.result}
                             onChange={(e) => setCalcInputs({...calcInputs, result: e.target.value})}
                             disabled={calcFeedback === 'correct'}
                             className={`w-16 h-16 sm:w-20 sm:h-20 text-center text-2xl sm:text-3xl font-bold rounded-xl border-4 outline-none transition-all
                               ${calcFeedback === 'correct' ? 'border-blue-400 bg-blue-50 text-blue-700' : 'border-gray-200 focus:border-blue-400'}
                             `}
                             placeholder="?"
                           />
                           <span className="text-xs text-gray-400 mt-1 font-bold">结果</span>
                         </div>
                      </div>

                      <div className="mt-4 h-12">
                         {calcFeedback === 'idle' && (
                           <Button onClick={handleCalcCheck} disabled={!calcInputs.big || !calcInputs.small || !calcInputs.result}>
                             检查答案
                           </Button>
                         )}
                         {calcFeedback === 'incorrect' && (
                           <div className="flex items-center gap-4">
                             <span className="text-red-500 font-bold flex items-center gap-2"><X /> 哎呀，再想想！</span>
                             <Button size="sm" variant="outline" onClick={() => setCalcFeedback('idle')}>再试一次</Button>
                           </div>
                         )}
                         {calcFeedback === 'correct' && (
                           <div className="flex items-center gap-4">
                             <motion.span 
                               initial={{ scale: 0 }} animate={{ scale: 1 }}
                               className="text-green-600 font-bold flex items-center gap-2 text-xl"
                             >
                               <Check className="w-6 h-6" /> 回答正确！
                             </motion.span>
                             <Button size="sm" variant="outline" onClick={resetCalc}><RefreshCw className="w-4 h-4 mr-2"/> 重置</Button>
                           </div>
                         )}
                      </div>
                    </div>

                    {/* Secret Block - Moved to bottom and initially hidden */}
                    <div className="mt-4">
                      {!showCalcSecret ? (
                          <div className="flex justify-center">
                              <button 
                                  onClick={() => setShowCalcSecret(true)}
                                  className="group flex flex-col items-center gap-2 text-blue-500 hover:text-blue-700 transition-colors"
                              >
                                  <div className="w-12 h-12 rounded-full bg-blue-50 border-2 border-blue-200 group-hover:border-blue-400 flex items-center justify-center shadow-sm">
                                      <Eye className="w-6 h-6" />
                                  </div>
                                  <span className="font-bold text-sm bg-blue-50 px-3 py-1 rounded-full border border-blue-100 shadow-sm">
                                      点击查看方法秘籍
                                  </span>
                              </button>
                          </div>
                      ) : (
                           <motion.div 
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-400 relative"
                           >
                              <button 
                                  onClick={() => setShowCalcSecret(false)}
                                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-sm underline"
                              >
                                  隐藏
                              </button>
                              <h3 className="font-bold text-lg text-blue-800 mb-2">💡 方法秘籍</h3>
                              <p className="text-gray-700">
                                  公式：<span className="font-mono bg-white px-2 py-1 rounded border font-bold">大数 - 小数 - 1</span>
                              </p>
                              <p className="text-sm text-gray-500 mt-2">
                                  你可以调节上方小悦和小宇的位置，然后填出正确的算式！
                              </p>
                          </motion.div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex justify-between pt-4">
              <Button variant="outline" onClick={() => setStage(LessonStage.INTRO)}>
                <ChevronLeft className="mr-2 w-4 h-4" /> 返回例题
              </Button>
              <Button variant="success" onClick={() => setStage(LessonStage.DO_IT)}>
                做一做 <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        );

      case LessonStage.DO_IT:
         return (
            <div className="max-w-4xl mx-auto">
               <PracticeDoIt />
               <div className="flex justify-between pt-8">
                  <Button variant="outline" onClick={() => setStage(LessonStage.METHODS)}>
                     <ChevronLeft className="mr-2 w-4 h-4" /> 复习方法
                  </Button>
                  <Button variant="primary" onClick={() => setStage(LessonStage.PRACTICE_MATCH)}>
                     去练习 <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
               </div>
            </div>
         )

      case LessonStage.PRACTICE_MATCH:
        return (
          <div className="max-w-4xl mx-auto">
            <PracticeMatch />
            <div className="flex justify-between pt-8">
              <Button variant="outline" onClick={() => setStage(LessonStage.DO_IT)}>
                <ChevronLeft className="mr-2 w-4 h-4" /> 做一做
              </Button>
              <Button variant="primary" onClick={() => setStage(LessonStage.PRACTICE_COMPARE)}>
                下一关 <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        );

      case LessonStage.PRACTICE_COMPARE:
        return (
           <div className="max-w-4xl mx-auto">
            <PracticeCompare />
            <div className="flex justify-between pt-8">
              <Button variant="outline" onClick={() => setStage(LessonStage.PRACTICE_MATCH)}>
                <ChevronLeft className="mr-2 w-4 h-4" /> 上一关
              </Button>
              <Button variant="success" onClick={() => setStage(LessonStage.SUMMARY)}>
                完成课程 <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        );

      case LessonStage.SUMMARY:
        return (
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center space-y-8 max-w-2xl mx-auto"
          >
            <div className="bg-white p-10 rounded-3xl shadow-xl border-t-8 border-green-400">
               <div className="text-6xl mb-4">🌟</div>
               <h2 className="text-3xl font-bold text-gray-800 mb-4">课程完成！</h2>
               <p className="text-gray-600 mb-8">
                 你已经掌握了解决“两人之间有几人”的三种方法：
               </p>
               <ul className="text-left space-y-4 text-lg bg-gray-50 p-6 rounded-xl inline-block w-full">
                 <li className="flex items-center gap-3">
                   <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">1</span>
                   数数法：一个一个数，不数两头。
                 </li>
                 <li className="flex items-center gap-3">
                   <span className="w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold">2</span>
                   画图法：画圈圈，最直观。
                 </li>
                 <li className="flex items-center gap-3">
                   <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">3</span>
                   计算法：大数 - 小数 - 1。
                 </li>
               </ul>
            </div>
            <Button onClick={() => setStage(LessonStage.INTRO)}>
              重新学习
            </Button>
          </motion.div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="text-blue-600 w-6 h-6" />
            <span className="font-bold text-lg text-gray-800">数学课堂</span>
          </div>
          <div className="flex gap-2 text-sm font-medium text-gray-500">
             <span>当前进度:</span>
             <span className="text-blue-600">{
                stage === LessonStage.INTRO ? '1/6' :
                stage === LessonStage.METHODS ? '2/6' :
                stage === LessonStage.DO_IT ? '3/6' :
                stage === LessonStage.PRACTICE_MATCH ? '4/6' :
                stage === LessonStage.PRACTICE_COMPARE ? '5/6' : '6/6'
             }</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;