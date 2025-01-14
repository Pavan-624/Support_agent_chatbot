import React from 'react';
import { MessageCircle, Bot } from 'lucide-react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isBot = message.sender === 'bot';
  
  return (
    <div className={`flex gap-3 ${isBot ? 'bg-gray-50' : ''} p-4 rounded-lg`}>
      <div className="flex-shrink-0">
        {isBot ? (
          <Bot className="w-6 h-6 text-blue-600" />
        ) : (
          <MessageCircle className="w-6 h-6 text-gray-600" />
        )}
      </div>
      <div className="flex-1">
        <p className="text-sm text-gray-900">{message.content}</p>
        <span className="text-xs text-gray-500">
          {message.timestamp.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};