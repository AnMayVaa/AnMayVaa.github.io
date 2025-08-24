// Trigger new deployment to refresh GitHub Pages

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// สมมติว่าเรามี Component สองตัวนี้ (เดี๋ยวเราจะไปสร้างกัน)
import Terminal from './components/Terminal';
import Portfolio from './components/Portfolio';

function App() {
  const [showPortfolio, setShowPortfolio] = useState(false);

  // ฟังก์ชันนี้จะถูกเรียกจาก Terminal เพื่อเปิดหน้า Portfolio
  const launchPortfolio = () => {
    setShowPortfolio(true);
  };

  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <AnimatePresence>
        {!showPortfolio ? (
          <motion.div
            key="terminal"
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5 }}
          >
            <Terminal onLaunch={launchPortfolio} />
          </motion.div>
        ) : (
          <motion.div
            key="portfolio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Portfolio />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;