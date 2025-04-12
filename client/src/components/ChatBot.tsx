import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, ArrowRight, PanelRightClose } from 'lucide-react';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: "Hi there! I'm Kisan's virtual assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Pre-defined responses
  const responses: Record<string, string> = {
    // Personal information
    "what's your name": "My name is Kisan Rai.",
    "what is your name": "My name is Kisan Rai.",
    "who are you": "I'm Kisan Rai, a passionate Full-Stack Software Developer creating seamless user experiences and solving real-world problems through technology.",
    "tell me about yourself": "I'm Kisan Rai, a passionate Full-Stack Software Developer creating seamless user experiences and solving real-world problems through technology.",
    
    // Contact information
    "what's your email": "You can reach me at kisanrai939@gmail.com.",
    "what is your email": "You can reach me at kisanrai939@gmail.com.",
    "email": "You can reach me at kisanrai939@gmail.com.",
    "contact": "You can reach me via email at kisanrai939@gmail.com or by phone at 437-661-0038.",
    "phone": "My phone number is 437-661-0038.",
    "phone number": "My phone number is 437-661-0038.",
    "what's your phone number": "My phone number is 437-661-0038.",
    
    // Social media
    "linkedin": "You can find my LinkedIn profile at https://www.linkedin.com/in/kisanrai/",
    "github": "Check out my GitHub profile at https://github.com/Kisan303",
    "resume": "You can view my resume at https://github.com/Kisan303/Kisan-Portfolio/blob/main/Portfolio/Resources/Resume.pdf",
    
    // Projects
    "projects": "Check out my projects section on this website or visit my GitHub profile at https://github.com/Kisan303",
    "what projects have you worked on": "I've worked on various projects including web applications, mobile apps, and data science projects. You can see them all in the Projects section above.",
    
    // Skills
    "skills": "I'm proficient in JavaScript, TypeScript, React, Node.js, Python, and many other technologies. Check out the Skills section on this website for more details.",
    "what technologies do you use": "I work with a range of technologies including JavaScript/TypeScript, React, Node.js, Python, and various databases and cloud platforms.",
    
    // General responses
    "hello": "Hello! How can I help you today?",
    "hi": "Hi there! What would you like to know about Kisan?",
    "hey": "Hey! How can I assist you today?",
    "thanks": "You're welcome! Anything else you'd like to know?",
    "thank you": "You're welcome! Anything else you'd like to know?",
    "bye": "Goodbye! Feel free to reach out if you have any other questions.",
    "goodbye": "Goodbye! Feel free to reach out if you have any other questions.",
    
    // Default response
    "default": "I'm not sure how to answer that. You can reach out to Kisan directly at kisanrai939@gmail.com for more information."
  };

  // Scroll to bottom of messages
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate typing
    setIsTyping(true);
    
    // Get bot response after a delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue.toLowerCase());
      const botMessage: Message = {
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 700); // Simulate typing delay
  };

  const getBotResponse = (input: string): string => {
    // Clean up input: remove punctuation and extra spaces
    const cleanInput = input.toLowerCase().replace(/[^\w\s]/gi, '').trim();
    
    // Check for direct matches
    for (const key in responses) {
      if (cleanInput === key.toLowerCase()) {
        return responses[key];
      }
    }
    
    // Check for partial matches
    for (const key in responses) {
      if (cleanInput.includes(key.toLowerCase())) {
        return responses[key];
      }
    }
    
    // Keywords matching
    if (cleanInput.includes('email')) return responses['email'];
    if (cleanInput.includes('phone')) return responses['phone'];
    if (cleanInput.includes('contact')) return responses['contact'];
    if (cleanInput.includes('linkedin')) return responses['linkedin'];
    if (cleanInput.includes('github')) return responses['github'];
    if (cleanInput.includes('resume') || cleanInput.includes('cv')) return responses['resume'];
    if (cleanInput.includes('project')) return responses['projects'];
    if (cleanInput.includes('skill') || cleanInput.includes('technology') || cleanInput.includes('tech stack')) return responses['skills'];
    if (cleanInput.includes('name')) return responses["what's your name"];
    if (cleanInput.includes('about') || cleanInput.includes('yourself')) return responses["tell me about yourself"];
    
    // Default response
    return responses['default'];
  };

  return (
    <>
      {/* Chat button */}
      <motion.button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-gradient-to-r from-[#1FB6FF] to-[#1FB6FF] shadow-lg flex items-center justify-center z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? 
          <X className="w-6 h-6 text-white" /> : 
          <MessageSquare className="w-6 h-6 text-white" />
        }
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 w-80 md:w-96 h-96 bg-[#121212] border border-gray-700 rounded-lg shadow-2xl flex flex-col z-50 overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Chat header */}
            <div className="bg-gradient-to-r from-[#1FB6FF] to-[#1FB6FF]/80 p-4 flex items-center">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center mr-3">
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-medium text-white">Kisan's Assistant</h3>
                <p className="text-xs text-white/70">Ask me anything about Kisan</p>
              </div>
            </div>

            {/* Messages container */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div 
                  key={index}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] p-3 rounded-lg ${
                      message.isUser 
                        ? 'bg-[#1FB6FF] text-white rounded-tr-none' 
                        : 'bg-gray-800 text-gray-200 rounded-tl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs opacity-70 mt-1 block">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-800 px-4 py-2 rounded-lg rounded-tl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input form */}
            <form onSubmit={handleSubmit} className="p-3 border-t border-gray-700 flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1FB6FF]"
              />
              <motion.button
                type="submit"
                className="w-9 h-9 rounded-full bg-[#1FB6FF] flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                disabled={!inputValue.trim()}
              >
                <Send className="w-4 h-4 text-white" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;