import { Code2, Database, Layout, Server, Settings, Smartphone, Terminal, Zap } from "lucide-react";

export const portfolioData = {
  hero: {
    badge: "This is Tahsin a Freelance",
    titleSolid: "Software",
    titleOutline: "Engineer.",
    location: "based in Bangladesh",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop", // Professional portrait placeholder
    username: "@taahzino",
    socialLink: "https://linkedin.com/in/taahzino"
  },
  about: {
    badge: "WHO I AM",
    titleSolid: "Crafting Digital",
    titleOutline: "Experiences.",
    description: "Hello! I'm Tahsin, a passionate Full Stack Software Engineer based in Bangladesh. I specialize in creating modern, responsive websites and applications using the React & Node.js ecosystem. With over 8+ years of experience and having served more than 50+ clients worldwide, I bring expertise in frontend development, backend architecture, and system optimization. My commitment to quality has earned me a reputation for delivering robust, scalable solutions. I don't just write code; I build sustainable digital ecosystems. From concept to deployment, I ensure every pixel serves a purpose and every function processes with efficiency. I thrive on solving complex problems and transforming ideas into impactful digital realities.",
    stats: [
      { value: "50+", label: "HAPPY CLIENTS" },
      { value: "8+", label: "YEARS EXPERIENCE" },
      { value: "120+", label: "PROJECTS COMPLETED" },
      { value: "24/7", label: "SUPPORT AVAILABLE" }
    ]
  },
  skills: {
    badge: "MY TOOLKIT",
    titleSolid: "Technical",
    titleOutline: "Proficiency.",
    description: "A comprehensive suite of modern technologies I utilize to build scalable, performant, and user-centric digital solutions.",
    categories: [
      {
        name: "Languages",
        skills: ["Go", "TypeScript", "Dart", "Java", "Bash", "Lua", "C", "JavaScript", "SQL", "CQL"]
      },
      {
        name: "Frameworks",
        skills: ["Gin", "Fiber", "React", "Next.js", "Node.js", "NestJS", "Express.js", "Hono.js", "ElysiaJS"]
      },
      {
        name: "DevOps & Cloud",
        skills: ["Docker", "Kubernetes", "Terraform", "Ansible", "AWS CDK", "AWS Lambda", "Azure Functions", "AWS SAM", "Serverless Framework", "AWS", "Azure", "S3", "CloudFront", "CloudWatch", "EC2", "SSM"]
      },
      {
        name: "Databases",
        skills: ["PostgreSQL", "DynamoDB", "MongoDB", "CockroachDB", "Cassandra", "Redis", "RabbitMQ", "Kafka", "Firebase", "Appwrite", "Supabase"]
      },
      {
        name: "AI & LLM",
        skills: ["LangChain", "Langflow", "OpenAI API", "RAG", "Crew AI"]
      },
      {
        name: "Architecture",
        skills: ["Microservices", "gRPC", "REST APIs", "CI/CD Pipelines", "Web Scraping"]
      },
      {
        name: "Mobile",
        skills: ["Flutter"]
      },
      {
        name: "Tools",
        skills: ["n8n", "Git", "Linux", "MCP"]
      }
    ],
    marquee: ["AWS", "Docker", "PostgreSQL", "GraphQL", "Redis", "Next.js", "TypeScript", "React", "Node.js", "Tailwind CSS"]
  },
  services: {
    badge: "WHAT I DO",
    titleSolid: "Solving Problems With",
    titleOutline: "Intelligent Code.",
    description: "I don't just write code; I build sustainable digital ecosystems. From concept to deployment, I ensure every pixel serves a purpose and every function processes with efficiency.",
    items: [
      {
        id: "01",
        title: "Frontend Development",
        description: "Crafting pixel-perfect, responsive, and accessible user interfaces that delight users and drive engagement across all modern devices.",
        tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
        icon: Layout
      },
      {
        id: "02",
        title: "Backend Architecture",
        description: "Architecting scalable, secure, and high-performance server-side systems to power your applications with robust data management.",
        tags: ["Node.js", "Express", "PostgreSQL", "Redis"],
        icon: Server
      },
      {
        id: "03",
        title: "App Development",
        description: "Delivering native-like mobile experiences using cross-platform technologies that save time without compromising performance.",
        tags: ["React Native", "iOS & Android", "Expo"],
        icon: Smartphone
      },
      {
        id: "04",
        title: "System Optimization",
        description: "Empowering your business by identifying bottlenecks, reducing load times, and optimizing database queries for peak performance.",
        tags: ["Performance", "Caching", "Monitoring"],
        icon: Zap
      },
      {
        id: "05",
        title: "API Development",
        description: "Designing and implementing RESTful and GraphQL APIs that serve as the reliable backbone for your web and mobile applications.",
        tags: ["REST", "GraphQL", "API Design"],
        icon: Database
      },
      {
        id: "06",
        title: "DevOps & Cloud",
        description: "Ensuring smooth deployment, scaling, and reliability of your applications with modern CI/CD pipelines and cloud infrastructure.",
        tags: ["AWS", "Docker", "CI/CD", "Linux"],
        icon: Terminal
      }
    ]
  },
  testimonials: {
    badge: "TESTIMONIALS",
    titleSolid: "Words From",
    titleOutline: "Collaborators.",
    description: "Don't just take my word for it. Here's what colleagues, partners, and clients have to say about our work together.",
    items: [
      {
        youtubeId: "dQw4w9WgXcQ",
        quote: "I had the pleasure of working with Alex on a complex SaaS project, and the experience was exceptional. Their technical depth is unmatched.",
        author: "Sarah Jenkins",
        location: "United States",
        rating: 5,
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300"
      },
      {
        quote: "Fantastic developer - did exactly what we wanted him to do. Thank you very much. Will be working with him again in the future.",
        author: "David Chen",
        location: "United Kingdom",
        rating: 5,
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
      },
      {
        youtubeId: "jNQXAC9IVRw",
        quote: "This is the second time I have worked with this freelancer to solve problems in React/Node and he has always been very professional.",
        author: "Marcus Rossi",
        location: "Italy",
        rating: 5,
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300"
      },
      {
        quote: "I would give Alex 10 stars if I could. Patient with listening to the requirements and delivered an outstanding product ahead of schedule.",
        author: "Elena Rodriguez",
        location: "Spain",
        rating: 5,
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=300&h=300"
      },
      {
        youtubeId: "tgbNymZ7vqY",
        quote: "Alex transformed our outdated platform into a modern, high-performance application. The attention to detail and technical expertise were outstanding.",
        author: "Michael Chang",
        location: "Singapore",
        rating: 5,
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300&h=300"
      },
      {
        quote: "Not only did Alex write clean, maintainable code, but he also helped us improve our overall system architecture. A true professional.",
        author: "James Wilson",
        location: "Canada",
        rating: 5,
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=300&h=300"
      }
    ],
    summary: {
      satisfaction: "100%",
      rating: "4.9",
      clients: "50+"
    }
  },
  projects: {
    badge: "MY WORK",
    titleSolid: "Featured",
    titleOutline: "Projects.",
    description: "A selection of my recent works, ranging from complex enterprise systems to creative experimental prototypes.",
    items: [
      {
        id: "01",
        title: "Nexus Dashboard",
        category: "Web Application",
        description: "A high-performance analytics dashboard built for real-time data monitoring and visualization.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
        tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
        link: "#",
        github: "#"
      },
      {
        id: "02",
        title: "Aura Mobile",
        category: "Mobile App",
        description: "A minimalist meditation and wellness app designed for a seamless user experience on iOS and Android.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
        tags: ["Flutter", "Firebase", "Dart"],
        link: "#",
        github: "#"
      },
      {
        id: "03",
        title: "Vortex Engine",
        category: "Backend System",
        description: "A distributed processing engine capable of handling millions of concurrent requests with low latency.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
        tags: ["Go", "gRPC", "Redis", "Docker"],
        link: "#",
        github: "#"
      },
      {
        id: "04",
        title: "Lumina E-commerce",
        category: "E-commerce",
        description: "A modern, headless e-commerce platform with a focus on speed, SEO, and conversion optimization.",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
        tags: ["Next.js", "Shopify API", "Tailwind CSS"],
        link: "#",
        github: "#"
      }
    ]
  },
  contact: {
    badge: "SAY HELLO",
    titleSolid: "Let's Work",
    titleOutline: "Together.",
    description: "Have a project in mind? We'd love to hear about it. Let's discuss how we can help you achieve your goals.",
    info: [
      { label: "Call Me", value: "+1 (555) 123-4567", icon: "phone" },
      { label: "Email Me", value: "hello@alexmercer.dev", icon: "mail" }
    ],
    socials: [
      { name: "GitHub", url: "#" },
      { name: "LinkedIn", url: "#" },
      { name: "Twitter", url: "#" }
    ]
  }
};
