import React, { useState, useRef, useEffect } from 'react';
import { Bot } from 'lucide-react';
import { ChatMessage } from './components/ChatMessage';
import { ChatInput } from './components/ChatInput';
import { Message } from './types';
import { processQuestion } from './utils/nlp';

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I can help you with questions about Segment, mParticle, Lytics, and Zeotap. What would you like to know?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);

    // Process the question
    const processed = processQuestion(content);
    
    // TODO: Implement actual CDP documentation search logic
    // For now, return a placeholder response
    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      content: `I'm processing your question about ${processed.topics.map(t => t.text).join(', ')}. This feature is under development.`,
      sender: 'bot',
      timestamp: new Date(),
    };

    setTimeout(() => {
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto max-w-4xl">
        <div className="min-h-screen bg-white shadow-lg flex flex-col">
          {/* Header */}
          <div className="bg-blue-600 text-white p-4 flex items-center gap-3">
            <Bot className="w-8 h-8" />
            <h1 className="text-xl font-semibold">CDP Support Assistant</h1>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
}

export default App;