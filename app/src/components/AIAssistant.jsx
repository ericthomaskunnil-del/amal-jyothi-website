import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, role: 'assistant', text: 'Ask me about courses, admissions, or campus life.' },
  ]);
  const [input, setInput] = useState('');
  const nextIdRef = useRef(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const userId = nextIdRef.current++;
    const assistantId = nextIdRef.current++;
    setMessages((prev) => [
      ...prev,
      { id: userId, role: 'user', text: input.trim() },
      { id: assistantId, role: 'assistant', text: "Thanks! We'll connect this to an LLM later." },
    ]);
    setInput('');
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-6 z-[1001] md:bottom-8 md:right-8 w-14 h-14 rounded-full bg-gradient-to-br from-primary-blue to-primary-crimson text-white shadow-lg hover:scale-105 focus-ring flex items-center justify-center"
        aria-label="Open AI Assistant"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5m-4 0z" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1001] bg-black/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-24 right-6 md:bottom-8 md:right-8 z-[1002] w-full max-w-md rounded-2xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden"
              role="dialog"
              aria-labelledby="ai-assistant-title"
              aria-modal="true"
            >
              <div className="p-4 border-b border-black/5 bg-gradient-to-r from-primary-blue/5 to-primary-crimson/5">
                <div className="flex items-center justify-between">
                  <h2 id="ai-assistant-title" className="font-heading font-semibold text-primary-blue flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-crimson animate-pulse" />
                    Ask AJCE
                  </h2>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="p-2 rounded-lg hover:bg-black/5 focus-ring"
                    aria-label="Close"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="h-64 overflow-y-auto p-4 space-y-3">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <span
                      className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                        m.role === 'user'
                          ? 'bg-primary-blue text-white'
                          : 'bg-bg-light text-text-main border border-black/5'
                      }`}
                    >
                      {m.text}
                    </span>
                  </div>
                ))}
              </div>
              <form onSubmit={handleSubmit} className="p-4 border-t border-black/5 flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your question..."
                  className="flex-1 rounded-xl border border-black/10 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-crimson focus:border-transparent"
                  aria-label="Message"
                />
                <button
                  type="submit"
                  className="px-4 py-3 rounded-xl bg-primary-crimson text-white font-medium text-sm hover:bg-primary-blue focus-ring transition-colors"
                >
                  Send
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
