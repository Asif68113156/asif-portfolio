export const personalInfo = {
  name: "Asifali Siddiqui",
  title: "Full Stack Developer",
  subtitle: "MCA Student | AI Developer | Full Stack Engineer",
  tagline: "Designing intelligent systems powered by AI to solve real-world challenges",
  email: "sasifai363@gmail.com",
  github: "https://github.com/Asif68113156",
  linkedin: "https://www.linkedin.com/in/asifali-siddiqui-a03850350?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  location: "India",
}

export const aboutContent = {
  summary: `I'm a passionate Full Stack Developer pursuing my postgraduate degree at a top-tier institution. 
  I specialize in building scalable, user-centric web applications that solve complex real-world problems.`,
  details: [
    "Expertise in designing and implementing end-to-end solutions from database architecture to responsive frontends",
    "Strong focus on writing clean, maintainable code with comprehensive documentation",
    "Experience building production-ready applications with secure authentication and RESTful APIs",
    "Passionate about system design, performance optimization, and delivering exceptional user experiences",
  ],
}

export const skills = {
  frontend: [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "JavaScript", level: 90 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "REST APIs", level: 90 },
    { name: "GraphQL", level: 70 },
  ],
  database: [
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "Redis", level: 65 },
    { name: "MySQL", level: 75 },
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "Postman", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "Linux", level: 70 },
    { name: "AWS", level: 65 },
  ],
}

export const projects = [
  {
    id: "mobile-shoppee",
    title: "Mobile Shoppee",
    subtitle: "Full-Stack E-Commerce Platform",
    description: "A comprehensive e-commerce platform designed for mobile accessories and electronics. Built with scalability and user experience in mind, featuring a complete shopping workflow from browsing to checkout.",
    problem: "Small electronics retailers struggle with managing inventory, processing orders, and providing a seamless shopping experience without expensive enterprise solutions.",
    solution: "Developed a full-featured e-commerce platform with intuitive admin controls, real-time inventory management, and a streamlined checkout process that reduces cart abandonment.",
    features: [
      "Product catalog with advanced filtering and search",
      "Shopping cart with persistent storage",
      "Secure checkout with multiple payment options",
      "User authentication and profile management",
      "Admin dashboard for inventory and order management",
      "Order tracking and notification system",
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe", "JWT"],
    architecture: "Microservices-inspired architecture with separate services for authentication, products, orders, and payments. Uses Redux for state management and MongoDB for flexible product schemas.",
    github: "https://github.com/yourusername/mobile-shoppee",
    demo: "https://mobile-shoppee.vercel.app",
    category: "fullstack",
  },
  {
    id: "blood-donation",
    title: "Blood Donation Management System",
    subtitle: "Healthcare Management Platform",
    description: "A life-saving platform connecting blood donors with recipients. Streamlines the blood donation process with smart matching algorithms and real-time availability tracking.",
    problem: "Blood banks face challenges in maintaining donor databases, matching blood types quickly during emergencies, and coordinating donations across multiple locations.",
    solution: "Created a centralized platform that automates donor registration, provides instant blood type matching, and enables emergency request broadcasting to nearby compatible donors.",
    features: [
      "Donor registration with health history tracking",
      "Smart search by blood group and location",
      "Emergency request system with notifications",
      "Blood bank inventory management",
      "Donation history and certificate generation",
      "Admin analytics and reporting dashboard",
    ],
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Redis", "Socket.io", "Twilio"],
    architecture: "Event-driven architecture using Socket.io for real-time notifications. PostgreSQL ensures data integrity for critical health records, while Redis handles session management and caching.",
    github: "https://github.com/yourusername/blood-donation-system",
    demo: "https://blood-donation.vercel.app",
    category: "fullstack",
  },
]

export const advancedFeatures = [
  {
    title: "Scalable Backend Design",
    description: "Architected with horizontal scaling in mind, using load balancers, database replication, and caching strategies to handle high traffic loads.",
    icon: "server",
  },
  {
    title: "Secure Authentication",
    description: "Implemented JWT-based authentication with refresh tokens, password hashing using bcrypt, and role-based access control for secure user management.",
    icon: "shield",
  },
  {
    title: "RESTful API Design",
    description: "Designed clean, documented APIs following REST best practices with proper error handling, validation, and versioning for maintainability.",
    icon: "code",
  },
  {
    title: "Database Optimization",
    description: "Optimized database queries with proper indexing, connection pooling, and implemented caching layers to reduce response times significantly.",
    icon: "database",
  },
]

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
]

export const techCategories = ["all", "frontend", "backend", "fullstack"] as const
export type TechCategory = typeof techCategories[number]
