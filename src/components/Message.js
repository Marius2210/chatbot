"use client"; 
import React from 'react';
import '../components/styles/Chatbot.css';

const Message = ({ text, sender }) => {
    return (
        <div className={`message ${sender}`}>
            <p>{text}</p>
        </div>
    );
};

export default Message;