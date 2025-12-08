"use client";

import { useEffect, useState } from "react";

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 relative">
            <div className="absolute inset-0 bg-gold rotate-45 group-hover:rotate-[225deg] transition-transform duration-700" />
            <div className="absolute inset-1 bg-obsidian rotate-45" />
            <div className="absolute inset-2 bg-gold rotate-45 group-hover:scale-0 transition-transform duration-500" />
          </div>
          <span className="font-display text-2xl font-semibold tracking-wide">
            <span className="text-gold">Prime</span>
            <span className="text-ivory">Crafters</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {["Services", "About", "Process", "Testimonials"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-pearl/80 hover:text-gold font-medium text-sm tracking-wider uppercase transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href="#contact" className="btn-primary ml-4">
            <span>Get Started</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-gold transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-gold transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-gold transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 glass transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center py-8 gap-6">
          {["Services", "About", "Process", "Testimonials", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-pearl hover:text-gold font-medium text-lg tracking-wider uppercase transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 radial-gold" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse-gold" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-pulse-gold delay-500" />
      
      {/* Geometric decorations */}
      <div className="absolute top-20 right-[15%] w-32 h-32 border border-gold/20 rotate-45 animate-rotate-slow" />
      <div className="absolute bottom-32 left-[10%] w-20 h-20 border border-gold/10 rotate-12 animate-float" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="opacity-0 animate-fade-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <span className="inline-block px-6 py-2 glass-gold text-gold text-sm font-medium tracking-[0.2em] uppercase mb-8">
            AI Automation Excellence
          </span>
        </div>
        
        <h1 className="opacity-0 animate-fade-up font-display" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <span className="block text-5xl md:text-7xl lg:text-8xl font-light text-ivory mb-4">
            Craft Your Future With
          </span>
          <span className="block text-6xl md:text-8xl lg:text-9xl font-semibold text-gradient-gold text-glow-gold">
            Intelligent AI
          </span>
        </h1>
        
        <p className="opacity-0 animate-fade-up max-w-2xl mx-auto mt-10 text-lg md:text-xl text-silver leading-relaxed font-light" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          We architect bespoke AI solutions that transform your workflows, 
          amplify productivity, and propel your business into the future.
        </p>
        
        <div className="opacity-0 animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-6 mt-12" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <a href="#contact" className="btn-primary">
            <span>Start Your Transformation</span>
          </a>
          <a href="#services" className="btn-secondary">
            Explore Services
          </a>
        </div>
        
        {/* Stats */}
        <div className="opacity-0 animate-fade-up grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-gold/10" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          {[
            { number: "500+", label: "Automations Deployed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "10M+", label: "Hours Saved" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-gold">{stat.number}</div>
              <div className="text-sm md:text-base text-silver mt-2 tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
        <span className="text-xs tracking-[0.3em] uppercase text-silver">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent" />
      </div>
    </section>
  );
}

// Services Section
function Services() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Workflow Automation",
      description: "Eliminate repetitive tasks with intelligent automation that learns and adapts to your business processes.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "AI Chatbots & Assistants",
      description: "Deploy conversational AI that handles customer inquiries, schedules meetings, and drives engagement 24/7.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Data Intelligence",
      description: "Transform raw data into actionable insights with AI-powered analytics and predictive modeling.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: "Custom AI Solutions",
      description: "Bespoke AI systems tailored to your unique challenges, from document processing to decision automation.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      title: "Integration Services",
      description: "Seamlessly connect AI capabilities with your existing tools, CRMs, and enterprise systems.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "AI Strategy Consulting",
      description: "Navigate the AI landscape with expert guidance on implementation, scaling, and future-proofing.",
    },
  ];

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 radial-gold-top" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">What We Offer</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6">
            <span className="text-ivory">Our </span>
            <span className="text-gradient-gold">Services</span>
          </h2>
          <div className="w-24 h-px bg-gold mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 bg-charcoal/50 border border-gold/10 card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center text-gold mb-6 border border-gold/30 group-hover:border-gold group-hover:glow-gold-sm transition-all duration-500">
                  {service.icon}
                </div>
                
                <h3 className="font-display text-2xl font-semibold text-ivory mb-4 group-hover:text-gold transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-silver leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-6 flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <span className="text-sm font-medium tracking-wider uppercase">Learn More</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="aspect-square relative">
              {/* Main frame */}
              <div className="absolute inset-8 border border-gold/30" />
              <div className="absolute inset-12 bg-gradient-to-br from-charcoal to-onyx" />
              
              {/* Central element */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-48 h-48 border-2 border-gold rotate-45 animate-pulse-gold" />
                  <div className="absolute inset-4 bg-gold/10 rotate-45" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display text-6xl font-bold text-gold">AI</span>
                  </div>
                </div>
              </div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold" />
              
              {/* Floating elements */}
              <div className="absolute top-12 right-12 w-3 h-3 bg-gold animate-float" />
              <div className="absolute bottom-20 left-20 w-2 h-2 bg-gold-light animate-float delay-300" />
            </div>
          </div>
          
          {/* Right - Content */}
          <div>
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">Who We Are</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4 mb-8">
              <span className="text-ivory">Pioneering the </span>
              <span className="text-gradient-gold">AI Revolution</span>
            </h2>
            
            <div className="space-y-6 text-silver leading-relaxed">
              <p>
                At ThePrimeCrafters, we believe that the future of business lies in the seamless 
                integration of human ingenuity and artificial intelligence. Founded by industry 
                veterans with decades of combined experience, we've made it our mission to 
                democratize AI automation.
              </p>
              <p>
                Our team of engineers, data scientists, and strategic consultants work in 
                harmony to deliver solutions that don't just automate—they transform. We 
                understand that every business is unique, which is why we craft bespoke 
                AI systems tailored to your specific needs and goals.
              </p>
              <p>
                From startups to Fortune 500 companies, we've helped organizations across 
                industries unlock unprecedented efficiency, reduce operational costs, and 
                focus their human talent on what truly matters: innovation and growth.
              </p>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-8">
              {[
                { icon: "✦", text: "Award-Winning Team" },
                { icon: "✦", text: "24/7 Expert Support" },
                { icon: "✦", text: "Proven Methodology" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-gold text-lg">{item.icon}</span>
                  <span className="text-pearl font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Process Section
function Process() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We dive deep into your business, understanding your workflows, pain points, and objectives through comprehensive analysis.",
    },
    {
      number: "02",
      title: "Strategy",
      description: "Our experts design a tailored AI roadmap, identifying the highest-impact automation opportunities for your organization.",
    },
    {
      number: "03",
      title: "Development",
      description: "We build and rigorously test your custom AI solutions, ensuring they integrate seamlessly with your existing systems.",
    },
    {
      number: "04",
      title: "Deployment",
      description: "Smooth rollout with comprehensive training, ongoing optimization, and dedicated support to ensure lasting success.",
    },
  ];

  return (
    <section id="process" className="section-padding relative overflow-hidden bg-onyx">
      <div className="absolute inset-0 radial-gold opacity-50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">How We Work</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6">
            <span className="text-ivory">Our </span>
            <span className="text-gradient-gold">Process</span>
          </h2>
          <div className="w-24 h-px bg-gold mx-auto" />
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                <div className="text-center">
                  {/* Number circle */}
                  <div className="relative mx-auto w-20 h-20 mb-8">
                    <div className="absolute inset-0 border border-gold/30 rotate-45 group-hover:rotate-[225deg] transition-transform duration-700" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-3xl font-bold text-gold">{step.number}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-display text-2xl font-semibold text-ivory mb-4">{step.title}</h3>
                  <p className="text-silver leading-relaxed">{step.description}</p>
                </div>
                
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 text-gold/50">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  const testimonials = [
    {
      quote: "ThePrimeCrafters transformed our customer service operations. Their AI chatbot handles 70% of inquiries, freeing our team to focus on complex cases. ROI was visible within months.",
      author: "Sarah Chen",
      role: "COO, TechVentures Inc.",
      image: "SC",
    },
    {
      quote: "The level of customization and attention to detail exceeded our expectations. They didn't just implement AI—they became true partners in our digital transformation journey.",
      author: "Michael Roberts",
      role: "CEO, Pinnacle Solutions",
      image: "MR",
    },
    {
      quote: "What impressed me most was their strategic approach. They identified automation opportunities we hadn't even considered, ultimately saving us over 10,000 hours annually.",
      author: "Elena Vasquez",
      role: "Director of Operations, GlobalTrade",
      image: "EV",
    },
  ];

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-6">
            <span className="text-ivory">What Our </span>
            <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <div className="w-24 h-px bg-gold mx-auto" />
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="group relative p-8 bg-charcoal/30 border border-gold/10 card-hover"
            >
              <div className="absolute top-6 left-8 text-6xl font-display text-gold/20">"</div>
              
              <div className="relative z-10">
                <p className="text-pearl leading-relaxed mb-8 italic">
                  {testimonial.quote}
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gold/20 border border-gold/30 font-display font-semibold text-gold">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-ivory">{testimonial.author}</div>
                    <div className="text-sm text-silver">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTA() {
  return (
    <section className="section-padding relative overflow-hidden bg-onyx">
      <div className="absolute inset-0 radial-gold" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 border border-gold/10 rotate-45 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 border border-gold/10 rotate-45 translate-x-1/2 translate-y-1/2" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold mb-6">
          <span className="text-ivory">Ready to </span>
          <span className="text-gradient-gold">Transform</span>
          <span className="text-ivory"> Your Business?</span>
        </h2>
        
        <p className="text-xl text-silver mb-12 max-w-2xl mx-auto leading-relaxed">
          Join hundreds of forward-thinking companies leveraging AI to achieve 
          extraordinary results. Your journey to automation excellence starts here.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#contact" className="btn-primary text-lg px-10 py-5">
            <span>Schedule a Consultation</span>
          </a>
          <a href="#services" className="btn-secondary text-lg px-10 py-5">
            View Our Work
          </a>
        </div>
        
        <p className="mt-8 text-silver text-sm">
          ✦ Free consultation ✦ No obligation ✦ Custom proposal within 48 hours
        </p>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 radial-gold-top" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Info */}
          <div>
            <span className="text-gold text-sm font-medium tracking-[0.3em] uppercase">Get In Touch</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold mt-4 mb-8">
              <span className="text-ivory">Let's Start Your </span>
              <span className="text-gradient-gold">AI Journey</span>
            </h2>
            
            <p className="text-silver leading-relaxed mb-10">
              Ready to explore how AI can transform your business? Reach out to our team 
              for a complimentary consultation. We'll discuss your unique challenges and 
              show you the possibilities.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: "📧", label: "Email", value: "hello@theprimecrafters.com" },
                { icon: "📞", label: "Phone", value: "+1 (555) 123-4567" },
                { icon: "📍", label: "Location", value: "San Francisco, CA" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 bg-charcoal/30 border border-gold/10">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="text-sm text-silver">{item.label}</div>
                    <div className="text-ivory font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right - Form */}
          <div className="bg-charcoal/30 border border-gold/10 p-8 lg:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-silver mb-2 tracking-wider uppercase">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-onyx border border-gold/20 text-ivory placeholder-ash focus:border-gold focus:outline-none transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm text-silver mb-2 tracking-wider uppercase">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-onyx border border-gold/20 text-ivory placeholder-ash focus:border-gold focus:outline-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-silver mb-2 tracking-wider uppercase">Company</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-onyx border border-gold/20 text-ivory placeholder-ash focus:border-gold focus:outline-none transition-colors"
                  placeholder="Your Company"
                />
              </div>
              
              <div>
                <label className="block text-sm text-silver mb-2 tracking-wider uppercase">How Can We Help?</label>
                <select className="w-full px-4 py-3 bg-onyx border border-gold/20 text-ivory focus:border-gold focus:outline-none transition-colors">
                  <option value="">Select a service</option>
                  <option value="workflow">Workflow Automation</option>
                  <option value="chatbot">AI Chatbots</option>
                  <option value="data">Data Intelligence</option>
                  <option value="custom">Custom AI Solution</option>
                  <option value="consulting">Strategy Consulting</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-silver mb-2 tracking-wider uppercase">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-onyx border border-gold/20 text-ivory placeholder-ash focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              
              <button type="submit" className="btn-primary w-full">
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="relative bg-onyx border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 relative">
                <div className="absolute inset-0 bg-gold rotate-45" />
                <div className="absolute inset-1 bg-onyx rotate-45" />
                <div className="absolute inset-2 bg-gold rotate-45" />
              </div>
              <span className="font-display text-2xl font-semibold">
                <span className="text-gold">Prime</span>
                <span className="text-ivory">Crafters</span>
              </span>
            </a>
            <p className="text-silver max-w-sm leading-relaxed">
              Crafting intelligent AI solutions that transform businesses and unlock 
              unprecedented potential. Your trusted partner in automation excellence.
            </p>
            
            {/* Social links */}
            <div className="flex gap-4 mt-6">
              {["LinkedIn", "Twitter", "GitHub"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border border-gold/30 text-gold hover:bg-gold hover:text-obsidian transition-all duration-300"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-ivory mb-6">Services</h4>
            <ul className="space-y-3">
              {["Workflow Automation", "AI Chatbots", "Data Intelligence", "Custom Solutions", "Consulting"].map((link) => (
                <li key={link}>
                  <a href="#services" className="text-silver hover:text-gold transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg font-semibold text-ivory mb-6">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Our Process", "Case Studies", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-silver hover:text-gold transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-silver text-sm">
            © {new Date().getFullYear()} ThePrimeCrafters. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-silver">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
