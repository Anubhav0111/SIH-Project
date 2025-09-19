import React, { useState, useRef, useEffect } from 'react';

const Aid = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello there! I'm MindCare, your mental health support companion. I'm here to provide confidential guidance and a listening ear. How are you feeling today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced response database with more detailed, AI-like responses
  const responses = {
    'hello': "Hello! It's good to connect with you. I'm here to listen and offer support with whatever's on your mind. How has your day been so far?",
    'hi': "Hi there! Thanks for reaching out. I'm here to provide a safe space for you to share what you're experiencing. What would you like to talk about?",
    'how are you': "I'm functioning well, thank you for asking! My purpose is to be here for you whenever you need support. How are you feeling at this moment?",
    
    'anxious': "I understand that anxiety can feel overwhelming. When we feel anxious, our nervous system is responding to perceived threats. Try this breathing technique: inhale slowly for 4 counts, hold for 4, and exhale for 6 counts. This activates the parasympathetic nervous system which helps calm the body. Would you like to share what specifically is triggering these anxious feelings? Sometimes naming the source can reduce its power over us.",
    
    'stress': "Academic stress is incredibly common but no less challenging. When we're stressed, our prefrontal cortex (responsible for decision-making) actually functions less effectively. Try breaking your tasks into smaller, manageable steps using the 'chunking' method. Also, remember that taking short breaks actually improves productivity rather than hindering it. What specific responsibilities are feeling most overwhelming right now?",
    
    'depress': "I hear that you're experiencing difficult emotions, and I want you to know that what you're feeling is valid. Depression often distorts our thinking patterns, making us believe negative thoughts that aren't necessarily true. Have you noticed any small moments of relief or slight improvement, even if brief? Sometimes tracking these can help us recognize that our emotional state isn't permanent. Would talking about professional resources available to you be helpful?",
    
    'overwhelm': "That sense of being completely overwhelmed is your system telling you it needs support. When we're overwhelmed, our brain's amygdala becomes hyperactive, making it difficult to think clearly. Try the '5-4-3-2-1' grounding technique: identify 5 things you can see, 4 things you can feel, 3 things you can hear, 2 things you can smell, and 1 thing you can taste. This brings you back to the present moment. What feels most overwhelming right now?",
    
    'lonel': "Loneliness is a deeply human experience, especially during transitional periods like college. It's important to recognize that loneliness is about the quality rather than quantity of connections. Research shows that even small, meaningful interactions can significantly reduce feelings of isolation. Would you be interested in exploring some gentle ways to connect with others that feel manageable for you?",
    
    'sleep': "Sleep and mental health are deeply interconnected. Poor sleep can exacerbate emotional challenges, and emotional struggles can disrupt sleep—it's a difficult cycle. The sleep environment is crucial: cool, dark, and quiet spaces signal to your brain that it's time to rest. Also, try establishing a 'wind-down' routine 30-60 minutes before bed without screens. What aspects of sleep are you finding most challenging?",
    
    'thank you': "You're very welcome. It takes courage to reach out for support, and I'm honored you've chosen to share this space with me. Remember that I'm here whenever you need—whether you're having a difficult moment or just want to check in.",
    
    'help': "I'm here to help in whatever way I can. You might try describing what you're experiencing physically and emotionally. Sometimes starting with 'I feel...' or 'I've been noticing...' can help organize thoughts. I can offer support with anxiety, stress, depressive feelings, overwhelm, loneliness, sleep issues, or just be a listening presence. What would feel most helpful right now?",
    
    'default': "Thank you for sharing that with me. I'm listening carefully and want to understand your experience better. Could you tell me more about what this feels like for you? Sometimes exploring the physical sensations or thought patterns accompanying emotions can provide clarity. Remember, this is a judgment-free space where you can express yourself openly."
  };

  const getBotResponse = (message) => {
    const lowerMessage = message.toLowerCase();
    
    // Check for keywords in the message
    const keywordPriorities = [
      'depress', 'anxious', 'overwhelm', 'stress', 
      'lonel', 'sleep', 'hello', 'hi', 'thank you', 'help'
    ];
    
    for (const keyword of keywordPriorities) {
      if (lowerMessage.includes(keyword)) {
        return responses[keyword];
      }
    }
    
    return responses['default'];
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) return;

    const userMessage = {
      text: inputMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate typing delay based on message complexity
    const response = getBotResponse(inputMessage);
    const typingDelay = Math.max(1000, Math.min(response.length * 10, 3000));
    
    setTimeout(() => {
      const botMessage = {
        text: response,
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, typingDelay);
  };

  const handleQuickReply = (text) => {
    setInputMessage(text);
    // Auto-send the quick reply
    setTimeout(() => {
      const fakeEvent = { preventDefault: () => {} };
      handleSendMessage(fakeEvent);
    }, 100);
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '800px',
      margin: '0 auto',
      height: '70vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #4a6fa5 0%, #6b8cbc 100%)',
        color: 'white',
        padding: '20px',
        textAlign: 'center'
      }}>
        <h2 style={{ margin: '0 0 5px 0', fontSize: '1.5rem' }}>MindCare AI Support</h2>
        <p style={{ margin: 0, opacity: 0.9, fontSize: '0.9rem' }}>Confidential mental health guidance • 24/7 Available</p>
      </div>
      
      {/* Messages */}
      <div style={{
        flex: 1,
        padding: '20px',
        overflowY: 'auto',
        background: '#f8f9fa'
      }}>
        {messages.map((message, index) => (
          <div key={index} style={{
            display: 'flex',
            marginBottom: '15px',
            justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start'
          }}>
            <div style={{
              maxWidth: '70%',
              padding: '12px 16px',
              borderRadius: '18px',
              background: message.sender === 'user' ? '#4a6fa5' : '#e9ecef',
              color: message.sender === 'user' ? 'white' : '#333',
              borderBottomRightRadius: message.sender === 'user' ? '5px' : '18px',
              borderBottomLeftRadius: message.sender === 'user' ? '18px' : '5px'
            }}>
              <p style={{ margin: 0, lineHeight: '1.5' }}>{message.text}</p>
              <span style={{
                fontSize: '0.7rem',
                opacity: 0.7,
                display: 'block',
                marginTop: '5px',
                textAlign: message.sender === 'user' ? 'right' : 'left'
              }}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies */}
      <div style={{
        display: 'flex',
        gap: '10px',
        padding: '15px 20px',
        background: 'white',
        borderTop: '1px solid #e9ecef',
        flexWrap: 'wrap'
      }}>
        <button 
          onClick={() => handleQuickReply("I'm feeling anxious today")}
          style={{
            padding: '8px 15px',
            border: '1px solid #4a6fa5',
            background: 'white',
            color: '#4a6fa5',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#4a6fa5';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'white';
            e.target.style.color = '#4a6fa5';
          }}
        >
          I'm feeling anxious
        </button>
        <button 
          onClick={() => handleQuickReply("I've been really stressed lately")}
          style={{
            padding: '8px 15px',
            border: '1px solid #4a6fa5',
            background: 'white',
            color: '#4a6fa5',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#4a6fa5';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'white';
            e.target.style.color = '#4a6fa5';
          }}
        >
          I'm feeling stressed
        </button>
        <button 
          onClick={() => handleQuickReply("I think I might be depressed")}
          style={{
            padding: '8px 15px',
            border: '1px solid #4a6fa5',
            background: 'white',
            color: '#4a6fa5',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            transition: 'all 0.2s ease'
          }}
          onMouseOver={(e) => {
            e.target.style.background = '#4a6fa5';
            e.target.style.color = 'white';
          }}
          onMouseOut={(e) => {
            e.target.style.background = 'white';
            e.target.style.color = '#4a6fa5';
          }}
        >
          I'm feeling depressed
        </button>
      </div>

      {/* Input Form */}
      <form onSubmit={handleSendMessage} style={{
        display: 'flex',
        padding: '15px 20px',
        background: 'white',
        borderTop: '1px solid #e9ecef'
      }}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message here... Press Enter to send"
          style={{
            flex: 1,
            padding: '12px 15px',
            border: '1px solid #ddd',
            borderRadius: '25px',
            outline: 'none',
            fontSize: '1rem'
          }}
        />
        <button type="submit" disabled={!inputMessage.trim()} style={{
          marginLeft: '10px',
          padding: '12px 20px',
          background: inputMessage.trim() ? '#4a6fa5' : '#ccc',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          cursor: inputMessage.trim() ? 'pointer' : 'default',
          fontWeight: 500,
          transition: 'background 0.2s ease'
        }}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Aid;
