import React, { useState, useEffect } from 'react';

const Terminal = ({ onLaunch }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const username = 'guest';
  const hostname = 'ohmpatumwan.dev';

  const commands = {
    'help': 'Available commands: whoami, projects, clear, start',
    'whoami': 'Ohm Patumwan, a Computer Engineering Student.',
    'projects': 'My key projects include Unity Games and IoT devices.',
    'start': 'Launching GUI... Please wait.',
    'clear': () => { setOutput([]); return ''; },
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const command = input.trim().toLowerCase();
      const newOutput = [...output, { type: 'command', text: input }];

      if (command === 'start') {
        setOutput([...newOutput, { type: 'response', text: commands[command] }]);
        setInput('');
        setTimeout(() => onLaunch(), 1500); // รอ 1.5 วินาทีแล้วค่อยเปิด Portfolio
        return;
      }

      if (command in commands) {
        const response = typeof commands[command] === 'function' ? commands[command]() : commands[command];
        if (response) {
          setOutput([...newOutput, { type: 'response', text: response }]);
        }
      } else if (command) {
        setOutput([...newOutput, { type: 'response', text: `command not found: ${command}` }]);
      }
      setInput('');
    }
  };

  useEffect(() => {
    setOutput([{ type: 'response', text: "Welcome to my interactive portfolio. Type 'help' to start." }]);
  }, []);

  return (
    <div className="h-screen p-4" onClick={() => document.getElementById('terminal-input').focus()}>
      <div>
        {output.map((line, index) => (
          <div key={index}>
            {line.type === 'command' && (
              <div>
                <span className="text-green-400">{username}@{hostname}</span>
                <span className="text-gray-400">:~$</span> {line.text}
              </div>
            )}
            {line.type === 'response' && <div className="text-gray-200">{line.text}</div>}
          </div>
        ))}
      </div>
      <div className="flex">
        <span className="text-green-400">{username}@{hostname}</span>
        <span className="text-gray-400">:~$</span>
        <input
          id="terminal-input"
          type="text"
          className="flex-1 bg-transparent border-none outline-none text-white ml-2"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;