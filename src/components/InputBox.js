"use client"; 

import React, { useState } from 'react';
import '../components/styles/Chatbot.css';

const InputBox = ({ onSendMessage }) => {
    const [inputText, setInputText] = useState('');

    const handleSend = () => {
        if (inputText.trim()) {
            onSendMessage(inputText);
            setInputText('');
        }
    };

    return (
        <div className="input-box">
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Escribe tu pregunta..."
            />
            <button onClick={handleSend}>Enviar</button>
        </div>
    );
};

export default InputBox;