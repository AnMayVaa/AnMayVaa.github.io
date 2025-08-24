import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Terminal from './components/Terminal';
import Portfolio from './components/Portfolio';

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  // ฟังก์ชันนี้มีหน้าที่แค่เปลี่ยน state เท่านั้น ไม่ต้อง return JSX
  const launchPortfolio = () => {
    setShowPortfolio(true);
  };

  return (
    // เราจะแก้ div ตัวนอกสุดที่นี่ครับ
    // div นี้จะเป็นพื้นหลังสีเข้มให้กับทั้ง Terminal และ Portfolio
    <div>
      <AnimatePresence mode="wait">
        {!showPortfolio ? (
          <motion.div
            key="terminal"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Terminal onLaunch={launchPortfolio} />
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Portfolio />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;