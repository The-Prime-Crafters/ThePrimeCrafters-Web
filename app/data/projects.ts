export interface Project {
    title: string;
    industry: string;
    description: string;
    results: string[];
    image: string;
    slug: string;
    screenshot?: string;
    fullDescription: string;
    challenge: string;
    solution: string;
    technologies: string[];
    keyFeatures: string[];
    impact: {
        metric: string;
        value: string;
    }[];
}

export const projectsData: Project[] = [
    {
        title: "3vltn",
        industry: "Domain Investment",
        description:
            "A premier domain selling and purchasing platform tailored for domain investors with AI-powered campaigns and autonomous deal closing.",
        results: ["AI Email Agent", "Automated Campaigns", "Deal Closing"],
        image: "🌐",
        slug: "3vltn",
        screenshot: "/3vltn.png",
        fullDescription:
            "3vltn is a cutting-edge domain investment platform that revolutionizes how domain investors buy, sell, and market their domain portfolios. By leveraging advanced AI technology, the platform automates the entire sales process from campaign creation to deal closure.",
        challenge:
            "Domain investors struggled with manually reaching out to potential buyers, creating effective marketing campaigns, and managing negotiations across hundreds of domains. The traditional approach was time-consuming and often resulted in missed opportunities.",
        solution:
            "We developed an AI-powered platform that automatically creates targeted marketing campaigns for each domain in an investor's portfolio. The AI email agent engages with potential buyers, answers questions, negotiates prices, and closes deals autonomously, allowing investors to scale their operations dramatically.",
        technologies: [
            "Next.js",
            "OpenAI GPT-4",
            "Python",
            "PostgreSQL",
            "Redis",
            "Stripe",
        ],
        keyFeatures: [
            "AI-generated marketing campaigns tailored to each domain's niche",
            "Autonomous email agent that handles customer conversations",
            "Intelligent pricing recommendations based on market data",
            "Automated deal closing and payment processing",
            "Portfolio analytics and performance tracking",
            "Integration with major domain registrars",
        ],
        impact: [
            { metric: "Deal Closure Rate", value: "+250%" },
            { metric: "Time Saved", value: "40 hrs/week" },
            { metric: "Revenue Increase", value: "+180%" },
        ],
    },
    {
        title: "lmn8 Ketamine Therapy AI",
        industry: "Healthcare & AI",
        description:
            "An innovative platform connecting ketamine therapy clinics with patients, streamlining the intake and matching process through AI.",
        results: [
            "Patient-Clinic Matching",
            "AI Screening",
            "Appointment Management",
        ],
        image: "🏥",
        slug: "lmn8-ketamine-therapy",
        screenshot: "/lmn8.png",
        fullDescription:
            "lmn8 is a healthcare technology platform that bridges the gap between ketamine therapy clinics and patients seeking treatment. The platform uses AI to match patients with the most suitable clinics based on their specific needs, location, and treatment requirements.",
        challenge:
            "Patients seeking ketamine therapy faced difficulty finding qualified clinics, while clinics struggled with inefficient intake processes and patient screening. The lack of a centralized platform made it hard for both parties to connect effectively.",
        solution:
            "We built an intelligent matching platform that uses AI to pre-screen patients, assess their suitability for ketamine therapy, and connect them with appropriate clinics. The system automates appointment scheduling, intake forms, and follow-up communications.",
        technologies: [
            "React Native",
            "Node.js",
            "MongoDB",
            "AWS",
            "Twilio",
            "HIPAA-compliant infrastructure",
        ],
        keyFeatures: [
            "AI-powered patient-clinic matching algorithm",
            "Automated pre-screening questionnaires",
            "Secure HIPAA-compliant data handling",
            "Integrated appointment scheduling system",
            "Telehealth consultation support",
            "Patient progress tracking and analytics",
        ],
        impact: [
            { metric: "Patient Matching Accuracy", value: "94%" },
            { metric: "Intake Time Reduction", value: "-65%" },
            { metric: "Clinic Capacity Increase", value: "+45%" },
        ],
    },
    {
        title: "Faithful Companion",
        industry: "Mobile Application",
        description:
            "A dedicated spiritual companion app for the Christian community, offering daily devotionals, prayer support, and church integration.",
        results: ["Daily Devotionals", "Prayer Community", "Church Finder"],
        image: "✝️",
        slug: "faithful-companion",
        screenshot: "/faithful-companion.png",
        fullDescription:
            "Faithful Companion is a comprehensive mobile application designed to support Christians in their daily spiritual journey. Similar to popular Islamic apps, it provides a centralized platform for prayer, scripture reading, community engagement, and church discovery.",
        challenge:
            "While there were several Islamic spiritual apps available, the Christian community lacked a comprehensive, modern app that combined devotionals, prayer tracking, community features, and church integration in one seamless experience.",
        solution:
            "We created a beautifully designed mobile app that serves as a daily spiritual companion. The app includes curated devotionals, Bible reading plans, prayer request sharing, church finder with event integration, and a supportive community platform.",
        technologies: [
            "React Native",
            "Firebase",
            "GraphQL",
            "Google Maps API",
            "Push Notifications",
        ],
        keyFeatures: [
            "Daily devotionals and scripture readings",
            "Personalized Bible reading plans",
            "Community prayer request board",
            "Church finder with location-based search",
            "Event calendar and reminders",
            "Prayer journal and tracking",
            "Audio Bible and worship music integration",
        ],
        impact: [
            { metric: "Daily Active Users", value: "50K+" },
            { metric: "Prayer Requests Shared", value: "200K+" },
            { metric: "App Store Rating", value: "4.8/5" },
        ],
    },
    {
        title: "RV Park AI Voice Agent",
        industry: "Voice AI Automation",
        description:
            "A specialized AI voice agent designed for RV parks across the US, handling reservations, inquiries, and customer service calls 24/7.",
        results: ["24/7 Availability", "Automated Bookings", "Customer Support"],
        image: "🚐",
        slug: "rv-park-voice-agent",
        screenshot: "/rv-park.png",
        fullDescription:
            "The RV Park AI Voice Agent is an intelligent phone system that handles all incoming calls for RV parks, from reservation inquiries to amenity questions. The AI agent understands natural language, accesses real-time availability, and can complete bookings without human intervention.",
        challenge:
            "RV parks often operate with limited staff and struggle to answer calls during peak seasons or after hours. Missed calls translate directly to lost revenue, and staff time spent on phone inquiries reduces time available for on-site customer service.",
        solution:
            "We developed a sophisticated voice AI agent that integrates with the park's reservation system. The agent can check availability, quote prices, explain amenities, answer FAQs, and complete bookings. It operates 24/7 and can handle multiple calls simultaneously.",
        technologies: [
            "OpenAI Whisper",
            "ElevenLabs Voice AI",
            "Twilio",
            "Python",
            "FastAPI",
            "PostgreSQL",
        ],
        keyFeatures: [
            "Natural language understanding and conversation",
            "Real-time availability checking",
            "Automated reservation booking and confirmation",
            "FAQ answering about park amenities and policies",
            "Multi-language support",
            "Integration with existing park management systems",
            "Call analytics and reporting",
        ],
        impact: [
            { metric: "Call Answer Rate", value: "100%" },
            { metric: "Booking Conversion", value: "+85%" },
            { metric: "Staff Time Saved", value: "30 hrs/week" },
        ],
    },
    {
        title: "Spectrum Voice Agent",
        industry: "Enterprise Sales AI",
        description:
            "A high-performance voice agent developed for Spectrum to automate sales calls, qualify leads, and close deals efficiently.",
        results: ["Sales Automation", "Lead Qualification", "Custom Interface"],
        image: "📞",
        slug: "spectrum-voice-agent",
        screenshot: "/spectrum.png",
        fullDescription:
            "The Spectrum Voice Agent is an enterprise-grade AI sales representative that handles outbound and inbound sales calls for Spectrum. The agent qualifies leads, presents service packages, handles objections, and closes deals with a natural, conversational approach.",
        challenge:
            "Spectrum needed to scale their sales operations without proportionally increasing headcount. Traditional sales calls were expensive, inconsistent in quality, and limited by human availability. Lead qualification was time-consuming and often inaccurate.",
        solution:
            "We built a sophisticated voice AI system that mimics top-performing sales representatives. The agent uses advanced NLP to understand customer needs, presents tailored solutions, handles objections intelligently, and closes deals. A custom dashboard provides real-time monitoring and analytics.",
        technologies: [
            "GPT-4 Turbo",
            "Custom Voice Models",
            "WebRTC",
            "React",
            "Node.js",
            "MongoDB",
            "AWS",
        ],
        keyFeatures: [
            "Advanced natural language processing for sales conversations",
            "Dynamic script adaptation based on customer responses",
            "Real-time objection handling",
            "Automated deal closing and processing",
            "Custom monitoring interface with live call tracking",
            "Performance analytics and A/B testing",
            "CRM integration for seamless data flow",
        ],
        impact: [
            { metric: "Sales Calls Handled", value: "10K+/month" },
            { metric: "Conversion Rate", value: "+45%" },
            { metric: "Cost Reduction", value: "-70%" },
        ],
    },
    {
        title: "Lead Generation Tools",
        industry: "Marketing Tools",
        description:
            "A suite of powerful lead generation tools designed to identify, qualify, and engage potential prospects across various industries.",
        results: ["Multi-Channel Scraping", "CRM Integration", "Auto Outreach"],
        image: "🎯",
        slug: "lead-generation-tools",
        screenshot: "/lead-gen.png",
        fullDescription:
            "Our Lead Generation Tools suite is a comprehensive platform that automates the entire lead generation process. From identifying potential prospects across multiple channels to qualifying them and initiating outreach, the tools streamline what traditionally takes weeks into hours.",
        challenge:
            "Businesses struggled with manual lead generation processes that were time-consuming, inconsistent, and difficult to scale. Data was scattered across multiple sources, qualification was subjective, and outreach was often delayed or forgotten.",
        solution:
            "We created an integrated suite of tools that scrapes data from multiple sources, enriches it with additional information, scores and qualifies leads using AI, and automatically initiates personalized outreach campaigns. Everything integrates seamlessly with major CRMs.",
        technologies: [
            "Python",
            "Scrapy",
            "OpenAI API",
            "PostgreSQL",
            "Redis",
            "Celery",
            "React",
        ],
        keyFeatures: [
            "Multi-channel data scraping (LinkedIn, websites, directories)",
            "AI-powered lead scoring and qualification",
            "Automated email and LinkedIn outreach sequences",
            "Data enrichment with company and contact information",
            "Integration with Salesforce, HubSpot, and other CRMs",
            "Custom filters and targeting criteria",
            "Performance analytics and ROI tracking",
        ],
        impact: [
            { metric: "Leads Generated", value: "50K+/month" },
            { metric: "Time Saved", value: "-90%" },
            { metric: "Qualified Lead Rate", value: "+120%" },
        ],
    },
];
