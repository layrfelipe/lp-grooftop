"use client"; // This component uses state and effects, so it must be a Client Component

import React, { useState, useRef, useEffect, FormEvent } from 'react';
import styles from './ChatBot.module.scss';

// Define the structure for a chat message
interface Message {
  sender: 'user' | 'bot';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isApiHealthy, setIsApiHealthy] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Hi there! Ask me anything about Grooftop.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messageListRef = useRef<HTMLDivElement>(null);

  const BACKEND_URL = 'http://localhost:8003';

  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChat = async () => {
    if (isOpen) {
      console.log("Closing chat");
      setIsOpen(false);
      return
    }

    if (!isApiHealthy) {
      console.log("Checking API health");
      const healthCheck = await fetch(BACKEND_URL + '/health');
      if (!healthCheck.ok) {
        setIsApiHealthy(false);
        return
      }
      setIsApiHealthy(true);
    }
    console.log("Opening chat");
    setIsOpen(true);
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const fetchBotResponse = async (userQuestion: string) => {
     setIsLoading(true);
     setError(null);

     const conversationHistory = messages;

      try {
          const response = await fetch(BACKEND_URL + '/ask', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ question: userQuestion, history: conversationHistory })
          });

          if (!response.ok) {
              // Try to get error details from response if possible
              let errorMsg = `Error: ${response.status} ${response.statusText}`;
              try {
                  const errorData = await response.json();
                  errorMsg = errorData.detail || errorMsg; // Use detail if available from FastAPI HTTPExceptions
              } catch (parseError) {
                  // Ignore if response body isn't JSON
              }
              throw new Error(errorMsg);
          }

          const data = await response.json();

          if (data.error) {
              // Handle errors returned *within* the JSON response
              setError(data.error);
              setMessages(prev => [...prev, { sender: 'bot', text: `Sorry, I encountered an error: ${data.error}` }]);
          } else if (data.answer) {
              setMessages(prev => [...prev, { sender: 'bot', text: data.answer }]);
          } else {
                throw new Error("Received an unexpected response format from the backend.");
          }

      } catch (err) {
            console.error("Fetch error:", err);
            const errorText = err instanceof Error ? err.message : "An unknown error occurred.";
            setError(errorText);
            setMessages(prev => [...prev, { sender: 'bot', text: `Sorry, I couldn't connect or process your request. Error: ${errorText}` }]);
      }
     setIsLoading(false);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const trimmedInput = inputValue.trim();
    if (!trimmedInput || isLoading) return;

    // Add user message to state
    setMessages(prev => [...prev, { sender: 'user', text: trimmedInput }]);
    setInputValue(''); // Clear input field

    // Fetch bot response
    fetchBotResponse(trimmedInput);
  };

  return (
    <div className={styles.chatContainer}>
      {isOpen ? (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <span className={styles.chatTitle}>Grooftop Assistant</span>
            <button
              onClick={toggleChat}
              className={styles.chatCloseButton}
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div ref={messageListRef} className={styles.messageList}>
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={msg.sender === 'user' ? styles.userMessage : styles.botMessage}
              >
                {msg.text}
              </div>
            ))}
            {/* Loading indicator */}
            {isLoading && <div className={styles.loadingIndicator}>Thinking...</div>}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className={styles.inputArea}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className={styles.inputField}
              placeholder="Ask about Grooftop..."
              disabled={isLoading}
              aria-label="Chat input"
            />
            <button type="submit" className={styles.sendButton} disabled={isLoading}>
              Send
            </button>
          </form>
        </div>
      ) : (
        <button onClick={toggleChat} className={styles.chatButton} aria-label="Open chat">
          💬
        </button>
      )}
    </div>
  );
};

export default Chatbot;