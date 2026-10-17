export const personalInfo = {
  name: "Harsh Mishra",
  title: "Full-Stack Developer & Business Automation Expert",
  tagline: "Main businesses ko automate karta hun",
  location: "Gorakhpur, Uttar Pradesh",
  email: "harsh@example.com", // Apna email daalo
  phone: "+91 XXXXX XXXXX", // Apna number daalo
  github: "https://github.com/yourusername", // Apna GitHub
  linkedin: "https://linkedin.com/in/yourusername", // Apna LinkedIn
  twitter: "https://twitter.com/yourusername"
};

export const about = {
  description: `Full-Stack Developer with expertise in building revenue-generating systems. 
  I don't just code - I create complete business solutions that automate workflows, 
  generate leads, and increase revenue.
  
  From AI-powered platforms (ApnoAI.com) to complete CRM systems (RedStone Studio), 
  I transform traditional businesses into digital powerhouses.`,
  
  skills: [
    "Next.js, React, TypeScript",
    "Node.js, Express, Supabase",
    "n8n Automation, Google App Script",
    "Meta Lead API, Google Ads API",
    "SEO & Digital Marketing",
    "Database Design & Management"
  ]
};

export const projects = [
  {
    title: "ApnoAI - India's Own AI Platform",
    description: `Complete platform featuring AI tools, automated internship database, 
    auto PDF certificate generation, blog system, Data Studio with AI API integration, 
    and online code compiler.`,
    tech: ["Next.js", "Supabase", "Google App Script", "AI APIs", "Render"],
    liveUrl: "https://apnoai.com",
    features: [
      "AI Tools & Career Resources",
      "Automated Internship Database (Render + Google Sheets)",
      "Auto PDF Generation via App Script",
      "Meta & Google Ads Integration",
      "SEO Optimized Blog System",
      "Online Code Compiler"
    ],
    image: "/images/apnoai-screenshot.png"
  },
  
  {
    title: "RedStone Studio - Complete Business OS",
    description: `20+ module admin panel for wedding photography studio including 
    CRM, bookings, tasks, finance, analytics, and QR-verified ID cards.`,
    tech: ["Next.js", "React", "Meta API", "n8n", "Tailwind CSS"],
    liveUrl: "https://theredstonestudio.com",
    features: [
      "Complete CRM & Lead Management",
      "Booking & Task Management",
      "Finance & Analytics Dashboard",
      "QR-Verified ID Cards",
      "Meta Lead Forms Integration",
      "Automated Workflows (n8n)"
    ],
    image: "/images/redstone-screenshot.png"
  },
  
  {
    title: "Blueway Aqua - RO Service Business OS",
    description: `Complete business management system for water purifier company 
    with AMC automation, B2B pipeline, and 10 integrated systems.`,
    tech: ["Next.js", "Vercel", "n8n", "WhatsApp Business API"],
    liveUrl: "https://bluewayaqua.com",
    features: [
      "10 Integrated Systems",
      "AMC Renewal Automation",
      "B2B Pipeline Management",
      "Lead Capture & Follow-up",
      "Technician Assignment Portal",
      "Google Review Automation"
    ],
    image: "/images/blueway-screenshot.png"
  }
];

export const services = [
  {
    icon: "",
    title: "School Management Systems",
    description: "Student database, automated reports, parent communication"
  },
  {
    icon: "🏥",
    title: "Hospital/Clinic Systems",
    description: "Patient management, appointment booking, medical records"
  },
  {
    icon: "🏨",
    title: "Hotel/Restaurant Systems",
    description: "Booking management, inventory system, customer CRM"
  },
  {
    icon: "🛠️",
    title: "Service Business Systems",
    description: "Lead management, AMC tracking, technician portal"
  },
  {
    icon: "🤖",
    title: "Business Automation",
    description: "n8n workflows, Google App Script, PDF generation"
  },
  {
    icon: "📈",
    title: "Digital Marketing Setup",
    description: "Meta Lead Forms, Google Ads, SEO optimization"
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" }
];