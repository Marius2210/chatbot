"use client"; 

import React, { useState } from 'react';
import Message from './Message';
import InputBox from './InputBox';
import responses from '../utils/data'; 
import './styles/Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (text) => {
    const userMessage = { text, sender: 'user' };
    setMessages([...messages, userMessage]);

   
    setTimeout(() => {
      const botResponse = { text: getBotResponse(text), sender: 'bot' };
      setMessages([...messages, userMessage, botResponse]);
    }, 1000);
  };

  const getBotResponse = (text) => {
    
    const lowerText = text.toLowerCase();

   
    for (const key in responses) {
      if (lowerText.includes(key)) {
        return responses[key];
      }
    }

    
    return responses["default"];
  };

  return (
    <div className="chatbot-container">
      <h2 className="chatbot-title">Chatbot Estudiantil</h2> {/* Título */}
      <p className="chatbot-description">¿En qué puedo ayudarte?</p> {/* Descripción */}
      <div className="messages">
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} sender={msg.sender} />
        ))}
      </div>
      <InputBox onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chatbot;