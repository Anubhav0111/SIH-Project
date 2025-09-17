import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// --- SVG Icons as React Components ---

const BackArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="#4A5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BotIcon = () => (
  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3 flex-shrink-0">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V12C22 6.48 17.52 2 12 2ZM12 18C10.9 18 10 17.1 10 16C10 14.9 10.9 14 12 14C13.1 14 14 14.9 14 16C14 17.1 13.1 18 12 18ZM17 12H7V10H17V12Z" fill="#4299E1"/>
    </svg>
  </div>
);

const SendIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
    <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 10V10C20 8.9 19.1 8 18 8ZM9 6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8H9V6ZM18 20H6V10H18V20ZM12 17C13.1 17 14 16.1 14 15C14 13.9 13.1 13 12 13C10.9 13 10 13.9 10 15C10 16.1 10.9 17 12 17Z" fill="#A0AEC0"/>
  </svg>
);


// --- Main ChatBot Component ---
const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! I'm here to provide you with mental health support and guidance. Everything we discuss is completely confidential. How are you feeling today?",
      timestamp: '02:09 AM',
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);
  
  const suggestionChips = ["Anything", "I'm feeling anxious", "I need to talk"];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="bg-gray-50 flex justify-center items-center min-h-screen">
      <div className="w-full max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg flex flex-col h-[90vh] max-h-[700px]">

        {/* Header */}
        <header className="flex items-center p-4 border-b border-gray-200">
          <button className="p-2 mr-2">
            <Link to="/"><BackArrowIcon /></Link>
          </button>
          <div className="flex-grow">
            <h1 className="text-base font-semibold text-gray-800">AI Support Chat</h1>
            <p className="text-xs text-gray-500">Confidential mental health support</p>
          </div>
          <div className="flex items-center text-green-700 bg-green-50 text-sm font-medium py-1 px-3 rounded-full border border-green-200">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            Online
          </div>
        </header>

        {/* Message List */}
        <div className="flex-1 p-5 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start mb-4 max-w-[80%] ${
                message.sender === 'bot' ? 'self-start' : 'self-end ml-auto'
              }`}
            >
              {message.sender === 'bot' && <BotIcon />}
              <div
                className={`rounded-2xl p-3 ${
                  message.sender === 'bot'
                    ? 'bg-gray-100 border border-gray-200'
                    : 'bg-blue-500 text-white'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <span
                  className={`text-xs mt-2 block ${
                    message.sender === 'bot' ? 'text-gray-400' : 'text-blue-200'
                  }`}
                >
                  {message.timestamp}
                </span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-5 border-t border-gray-200">
          <div className="flex justify-center gap-2 mb-3">
             {suggestionChips.map(chip => (
                  <button 
                    key={chip} 
                    className="bg-gray-700 text-white text-sm py-2 px-4 rounded-full hover:bg-gray-800 transition-colors"
                    onClick={() => setInputValue(chip)}
                  >
                      {chip}
                  </button>
              ))}
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg p-1">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here... Press Enter to send"
              className="flex-1 border-0 outline-none p-2 text-sm bg-transparent"
            />
            <button
              onClick={handleSendMessage}
              className="bg-blue-500 rounded-md w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition-colors"
            >
              <SendIcon />
            </button>
          </div>
          <div className="flex items-center justify-center text-xs text-gray-400 mt-3">
            <LockIcon />
            This conversation is confidential and secure
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;