


import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../layouts/Layout';
import "../../../Message.css";
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;



const Message = () => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  

  const generateanswer = async (e) => {
    e.preventDefault();

    if (!question.trim()) return;

    const userMsg = { sender: 'user', text: question };
    setMessages((prev) => [...prev, userMsg]);
    setQuestion('');
    setLoading(true);

    try {
      const res = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        method: 'post',
        data: {
          contents: [{ parts: [{ text: question }] }],
        },
      });

      const botText =
        res?.data?.candidates?.[0]?.content?.parts?.[0]?.text || 'No response';

      const botMsg = { sender: 'bot', text: botText };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const errorMsg = { sender: 'bot', text: 'API Error occurred' };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
        
      <div style={{
        display:'flex',
       
        alignItems: 'center',
        justifyContent:'center',
        minHeight: '100vh',
      }}>

      

  <div className="message-container">
    <h1 style={{
        color:'black',
        textAlign:'center',
        marginBottom:'20px'
    }}>How can I help you?</h1>
    <div className="chat-box">
      <div className="chat-area">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`bubble ${msg.sender === 'user' ? 'user' : 'bot'}`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="bubble bot typing">
            Typing...
          </div>
        )}
      </div>
       
      <form onSubmit={generateanswer} className="chat-form">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your message..."
          className="chat-input"
          disabled={loading}
        ></textarea>
        <button type="submit" className="chat-button" disabled={loading}>
          {loading ? 'Wait...' : 'Send'}
        </button>
      </form>
    </div>
  </div>
  </div>

     </Layout>
  );
};



export default Message;
