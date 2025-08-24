import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ children }) => {
  return (
    <motion.section 
      className="h-screen flex flex-col justify-center items-center p-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
};

const Portfolio = () => {
  return (
    // เปลี่ยน font กลับเป็นแบบปกติ ไม่ใช่ font-mono
    <div className="font-sans text-gray-300"> 
      <Section>
        <h1 className="text-6xl font-bold">Ohm Patumwan</h1>
        <p className="text-xl mt-4">Computer Engineering Student & Game Developer</p>
      </Section>

      <Section>
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="max-w-2xl text-center">
          ผมสนใจในเรื่อง IoT, Game Development ด้วย Unity และอื่นๆ อีกมากมาย
        </p>
      </Section>

      <Section>
        <h2 className="text-4xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ตัวอย่าง Project Card */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold">Unity 2D Game</h3>
            <p className="mt-2">โปรเจกต์เกม 2 มิติที่สร้างด้วย Unity...</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-2xl font-bold">IoT Smart Home</h3>
            <p className="mt-2">โปรเจกต์ควบคุมอุปกรณ์ในบ้านด้วย ESP32...</p>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <p>You can reach me at: pitakpatumwan14@gmail.com</p>
        {/* ใส่ Social Links เพิ่มเติม */}
      </Section>
    </div>
  );
};

export default Portfolio;