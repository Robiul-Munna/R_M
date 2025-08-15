"use client";
import { useState, useRef, useEffect } from "react";

export default function ChatbotWidget() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  async function sendMessage() {
    if (!input.trim()) return;
    setLoading(true);
    setMessages(msgs => [...msgs, { role: "user", text: input }]);
    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages(msgs => [...msgs, { role: "assistant", text: data.result }]);
    } catch {
      setMessages(msgs => [...msgs, { role: "assistant", text: "Error: Could not get response." }]);
    } finally {
      setInput("");
      setLoading(false);
    }
  }

  // Add typing indicator and chat bubble animation
  const TypingIndicator = () => (
    <div className="flex items-center gap-1 mt-2 animate-pulse">
      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
      <span className="text-xs text-blue-600 ml-2">AI is typing...</span>
    </div>
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 bg-white dark:bg-gray-900 rounded-lg shadow-lg flex flex-col animate-fade-in">
      <div className="p-4 border-b font-bold text-blue-700">Chat with Robiul Munna's Assistant</div>
      <div className="flex-1 p-4 overflow-y-auto max-h-96">
        {messages.map((msg, i) => (
          <div key={i} className={msg.role === "user" ? "text-right mb-2" : "text-left mb-2 animate-chat-bubble"}>
            <span className={msg.role === "user" ? "bg-blue-100 text-blue-800 px-2 py-1 rounded shadow-sm" : "bg-gray-100 text-gray-800 px-2 py-1 rounded shadow-sm"}>
              {msg.text}
            </span>
          </div>
        ))}
        {loading && <TypingIndicator />}
        <div ref={chatEndRef} />
      </div>
      <div className="p-2 border-t flex bg-gray-50 rounded-b">
        <input
          className="flex-1 p-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          disabled={loading}
        />
        <button
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition-colors"
          onClick={sendMessage}
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
}
