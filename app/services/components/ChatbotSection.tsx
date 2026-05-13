export default function ChatbotSection() {
  const messages = [
    {
      type: "bot",
      text: "Hello! How can I help your business today?",
    },
    {
      type: "user",
      text: "I need help automating customer support.",
    },
    {
      type: "bot",
      text: "Perfect — we can build an AI chatbot for that.",
    },
  ];

  return (
    <section className="relative py-[clamp(4rem,8vw,7rem)] px-6 overflow-hidden">
      
      {/* subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06),transparent_65%)]" />

      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-[clamp(2rem,5vw,5rem)] items-center">
        
        {/* LEFT */}
        <div className="space-y-[clamp(1.5rem,3vw,2.5rem)]">
          
          <span className="text-[var(--gold-400)] uppercase tracking-[0.3em] text-xs md:text-sm">
            AI Chatbots
          </span>

          <h2
            className="font-bold leading-tight"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
          >
            AI Chatbot Development Solutions
          </h2>

          <p className="text-[var(--text-secondary)] text-sm md:text-lg leading-relaxed max-w-xl">
            Build intelligent chatbot systems that improve customer engagement,
            automate support, and generate qualified leads automatically.
          </p>

          <div className="space-y-4">
            {[
              "Lead generation chatbots",
              "Customer support systems",
              "Website AI assistants",
              "Custom AI conversations",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <span className="text-[var(--gold-500)] text-lg group-hover:scale-125 transition">
                  ✔
                </span>
                <span className="text-sm md:text-base group-hover:text-white transition">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - CHAT UI */}
        <div className="glass-card rounded-[2.5rem] p-[clamp(1.5rem,3vw,3rem)] border border-[var(--border-subtle)] relative overflow-hidden">
          
          {/* soft glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_70%)]" />

          <div className="relative space-y-5">
            
            {/* header */}
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg md:text-xl font-semibold text-[var(--gold-400)]">
                AI Chat Interface
              </h3>

              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[var(--gold-500)] animate-pulse" />
                <span className="text-xs text-[var(--text-secondary)]">
                  online
                </span>
              </div>
            </div>

            {/* messages */}
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.type === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`
                      max-w-[80%] p-4 rounded-2xl text-sm md:text-base
                      transition-all duration-300
                      ${
                        msg.type === "bot"
                          ? "bg-[var(--gold-500)]/10 border border-[var(--border-subtle)]"
                          : "bg-white/5 border border-[var(--border-subtle)] mr-10"
                      }
                      hover:scale-[1.02]
                    `}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* typing indicator (fake but powerful UX detail) */}
              <div className="flex items-center gap-2 text-[var(--text-secondary)] text-xs opacity-70">
                <span className="w-2 h-2 bg-[var(--gold-500)] rounded-full animate-bounce" />
                <span className="w-2 h-2 bg-[var(--gold-500)] rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-2 h-2 bg-[var(--gold-500)] rounded-full animate-bounce [animation-delay:300ms]" />
                <span>AI is thinking...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}