"use client"; // This component uses state and effects, so it must be a Client Component

import React, { useState, useRef, useEffect, FormEvent } from 'react';

// Define the structure for a chat message
interface Message {
  sender: 'user' | 'bot';
  text: string;
}

// Define the primary color
const PRIMARY_COLOR = '#E50067'; // <<< --- YOUR COLOR

const styles = {
  chatContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1000,
  } as React.CSSProperties,
  chatButton: {
    backgroundColor: PRIMARY_COLOR, // <<< --- Use primary color
    color: 'white',
    padding: '10px 15px',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as React.CSSProperties,
  chatWindow: {
    width: '350px',
    height: '450px',
    backgroundColor: 'white',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
  } as React.CSSProperties,
  chatHeader: {
    backgroundColor: '#f1f1f1',
    padding: '10px',
    borderBottom: '1px solid #ccc',
    display: 'flex', // <<< --- Use flex to position elements
    justifyContent: 'space-between', // <<< --- Space out title and button
    alignItems: 'center', // <<< --- Vertically align items
    fontWeight: 'bold',
  } as React.CSSProperties,
  chatTitle: { // <<< --- Added style for title
    flexGrow: 1, // Allow title to take available space
    textAlign: 'center', // Center the title
    paddingLeft: '28px', // Add padding to re-center title now that close button exists
  } as React.CSSProperties,
  chatCloseButton: { // <<< --- Style for the close button
    background: 'none',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    color: '#666',
    padding: '0 5px', // Add some clickable area
  } as React.CSSProperties,
  messageList: {
    flexGrow: 1,
    overflowY: 'auto',
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  } as React.CSSProperties,
  messageBubble: (sender: 'user' | 'bot') => ({
    padding: '8px 12px',
    borderRadius: '15px',
    maxWidth: '75%',
    wordWrap: 'break-word',
    alignSelf: sender === 'user' ? 'flex-end' : 'flex-start',
    backgroundColor: sender === 'user' ? PRIMARY_COLOR : '#e5e5ea', // <<< Use primary color for user
    color: sender === 'user' ? 'white' : 'black',
  } as React.CSSProperties),
  inputArea: {
    display: 'flex',
    padding: '10px',
    borderTop: '1px solid #ccc',
  } as React.CSSProperties,
  inputField: {
    flexGrow: 1,
    border: '1px solid #ccc',
    borderRadius: '15px',
    padding: '8px 12px',
    marginRight: '5px',
    outline: 'none',
  } as React.CSSProperties,
  sendButton: {
    border: 'none',
    backgroundColor: PRIMARY_COLOR, // <<< --- Use primary color
    color: 'white',
    borderRadius: '15px',
    padding: '8px 15px',
    cursor: 'pointer',
  } as React.CSSProperties,
  loadingIndicator: {
      padding: '8px 12px',
      borderRadius: '15px',
      maxWidth: '75%',
      wordWrap: 'break-word',
      alignSelf: 'flex-start',
      backgroundColor: '#e5e5ea',
      color: 'black',
      fontStyle: 'italic',
  } as React.CSSProperties
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Hi there! Ask me anything about Grooftop.' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messageListRef = useRef<HTMLDivElement>(null);

  // --- Configuration ---
  // Replace with your actual backend URL when ready
  const BACKEND_URL = 'http://localhost:8081/ask';
  // Set to false to use actual fetch, true to simulate
  const SIMULATE_BACKEND = false;

  // Scroll to bottom when new messages are added
  useEffect(() => {
    if (messageListRef.current) {
      messageListRef.current.scrollTop = messageListRef.current.scrollHeight;
    }
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const fetchBotResponse = async (userQuestion: string) => {
     setIsLoading(true);
     setError(null); // Clear previous errors

     if (SIMULATE_BACKEND) {
        // --- Simulation Logic ---
        console.log("Simulating fetch for:", userQuestion);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay
        const botAnswer = `This is a simulated answer to: "${userQuestion}"`;
        setMessages(prev => [...prev, { sender: 'bot', text: botAnswer }]);
        // --- End Simulation Logic ---
     } else {
        // --- Actual Fetch Logic ---
        try {
            const response = await fetch(BACKEND_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ question: userQuestion })
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
        // --- End Actual Fetch Logic ---
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
    <div style={styles.chatContainer}>
      {isOpen ? (
        <div style={styles.chatWindow}>
          {/* Header with Close Button */}
          <div style={styles.chatHeader}>
            <span style={styles.chatTitle}>Grooftop Assistant</span> {/* Title */}
            <button
              onClick={toggleChat} // Use the same toggle function to close
              style={styles.chatCloseButton}
              aria-label="Close chat"
            >
              ✕ {/* Simple 'X' character for close */}
            </button>
          </div>

          {/* Messages */}
          <div ref={messageListRef} style={styles.messageList}>
            {messages.map((msg, index) => (
              <div key={index} style={styles.messageBubble(msg.sender)}>
                {msg.text}
              </div>
            ))}
            {/* Loading indicator */}
            {isLoading && <div style={styles.loadingIndicator}>Thinking...</div>}
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} style={styles.inputArea}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              style={styles.inputField}
              placeholder="Ask about Grooftop..."
              disabled={isLoading}
              aria-label="Chat input"
            />
            <button type="submit" style={styles.sendButton} disabled={isLoading}>
              Send
            </button>
          </form>
        </div>
      ) : (
        <button onClick={toggleChat} style={styles.chatButton} aria-label="Open chat">
          {/* You can use an SVG icon here */}
          💬
        </button>
      )}
    </div>
  );
};

export default Chatbot;