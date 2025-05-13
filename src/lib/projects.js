import {
  Rocket,
  Cloud,
  Mic,
  Folder,
  ShieldCheck,
  Shield,
  Code,
  Zap,
  Paintbrush,
  Server,
  BarChart3,
  MessageSquare,
  LayoutDashboard,
  UserCheck,
  ShoppingCart,
  Database,
  LockKeyhole,
  Bot,
  GitCommitHorizontal,
  FileText,
  GitBranch,
  Globe,
  MonitorCheck,
  Cpu,
  Terminal,
  Braces,
  LucideLanguages,
  Book,
} from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Captionizer",
    subtitle: "Turn videos into readable transcripts using AWS.",
    role: "Full Stack Developer",
    duration: "April 2024",
    techStack: [
      { name: "Next.js", icon: <Rocket size={14} className="text-gray-700" /> },
      { name: "AWS SDK", icon: <Cloud size={14} className="text-gray-700" /> },
      {
        name: "AWS Transcribe",
        icon: <Mic size={14} className="text-gray-700" />,
      },
      { name: "AWS S3", icon: <Folder size={14} className="text-gray-700" /> },
      {
        name: "NextAuth",
        icon: <ShieldCheck size={14} className="text-gray-700" />,
      },
      {
        name: "Google Auth",
        icon: <Shield size={14} className="text-gray-700" />,
      },
      {
        name: "JavaScript",
        icon: <Code size={14} className="text-gray-700" />,
      },
      { name: "Serverless", icon: <Zap size={14} className="text-gray-700" /> },
      {
        name: "TailwindCSS",
        icon: <Paintbrush size={14} className="text-gray-700" />,
      },
      { name: "Node.js", icon: <Server size={14} className="text-gray-700" /> },
      {
        name: "MongoDB",
        icon: <Database size={14} className="text-gray-700" />,
      },
      {
        name: "REST APIs",
        icon: <LayoutDashboard size={14} className="text-gray-700" />,
      },
      { name: "Vercel", icon: <Globe size={14} className="text-gray-700" /> },
      {
        name: "CI/CD",
        icon: <GitBranch size={14} className="text-gray-700" />,
      },
    ],
    features: [
      "Automatic transcription from videos",
      "AWS S3 cloud storage for user files",
      "Authentication using NextAuth and Google",
      "Secure and scalable serverless backend",
    ],
    image:
      "https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: `
      <div className="space-y-4 text-muted-foreground">
        <p>
          Captionizer is a video transcription platform that leverages AWS Transcribe to automatically convert spoken content into accurate text transcripts.
        </p>
        <p>
          Users can securely upload video files to AWS S3, with authentication handled through Google Sign-In using NextAuth. The serverless architecture ensures scalability and efficiency, making it ideal for content creators needing fast, reliable caption generation.
        </p>
      </div>
    `,
    challenges:
      "Ensuring seamless file uploads and managing transcription queue handling.",
    impact:
      "Accelerated content repurposing for creators through automated captioning.",
    liveDemo: "https://captionizer-star.vercel.app/",
    repo: "Not specified",
  },
  {
    id: "02",
    title: "YT Comments Xpert",
    subtitle: "YouTube comment analysis with AI-driven sentiment insights.",
    role: "Full Stack Developer",
    duration: "June 2024",
    techStack: [
      { name: "Next.js", icon: <Rocket size={14} className="text-gray-700" /> },
      { name: "Groq AI", icon: <Bot size={14} className="text-gray-700" /> },
      { name: "Node.js", icon: <Server size={14} className="text-gray-700" /> },
      {
        name: "MongoDB",
        icon: <Database size={14} className="text-gray-700" />,
      },
      {
        name: "TailwindCSS",
        icon: <Paintbrush size={14} className="text-gray-700" />,
      },
      {
        name: "Framer Motion",
        icon: <GitCommitHorizontal size={14} className="text-gray-700" />,
      },
      { name: "GCP", icon: <Cloud size={14} className="text-gray-700" /> },
      {
        name: "YouTube API",
        icon: <BarChart3 size={14} className="text-gray-700" />,
      },
      { name: "Gemini AI", icon: <Bot size={14} className="text-gray-700" /> },
      {
        name: "Express.js",
        icon: <LayoutDashboard size={14} className="text-gray-700" />,
      },
      { name: "Vercel", icon: <Globe size={14} className="text-gray-700" /> },
      {
        name: "Deployment",
        icon: <MonitorCheck size={14} className="text-gray-700" />,
      },
      {
        name: "Version Control",
        icon: <GitBranch size={14} className="text-gray-700" />,
      },
    ],
    features: [
      "GCP YouTube API integration",
      "Sentiment analysis with Gemini AI",
      "Real-time comment data processing",
      "Dynamic visual charts for insights",
    ],
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: `
      <div className="space-y-4 text-muted-foreground">
        <p>
          YT Comments Xpert is a tool for analyzing YouTube video comments in real-time, extracting sentiment and engagement metrics using Gemini AI.
        </p>
        <p>
          It integrates the YouTube API to fetch comments and uses Groq-powered AI to classify emotional tone, presenting the insights through interactive charts built with TailwindCSS and Framer Motion.
        </p>
      </div>
    `,
    challenges:
      "Implementing real-time sentiment updates and visualizing them dynamically.",
    impact: "Helps creators gain deep insight into viewer sentiments at scale.",
    liveDemo: "https://yt-comments-xpert.vercel.app/",
    repo: "Not specified",
  },
  {
    id: "03",
    title: "WhisperGram",
    subtitle: "AI-assisted messaging app with smart reply suggestions.",
    role: "Full Stack Developer",
    duration: "June 2024",
    techStack: [
      { name: "Next.js", icon: <Rocket size={14} className="text-gray-700" /> },
      { name: "Gemini AI", icon: <Bot size={14} className="text-gray-700" /> },
      { name: "Node.js", icon: <Server size={14} className="text-gray-700" /> },
      {
        name: "MongoDB",
        icon: <Database size={14} className="text-gray-700" />,
      },
      {
        name: "Bootstrap",
        icon: <LayoutDashboard size={14} className="text-gray-700" />,
      },
      { name: "CSS", icon: <Paintbrush size={14} className="text-gray-700" /> },
      {
        name: "JavaScript",
        icon: <Code size={14} className="text-gray-700" />,
      },
      { name: "OAuth", icon: <Shield size={14} className="text-gray-700" /> },
      {
        name: "Responsive Design",
        icon: <MonitorCheck size={14} className="text-gray-700" />,
      },
      {
        name: "CI/CD",
        icon: <GitBranch size={14} className="text-gray-700" />,
      },
    ],
    features: [
      "AI-generated message suggestions",
      "User-friendly chat UI with Bootstrap",
      "Serverless backend architecture",
      "Real-time chat sync and updates",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: `
      <div className="space-y-4 text-muted-foreground">
        <p>
          WhisperGram is an intelligent messaging platform enhanced by Gemini AI to suggest context-aware replies and improve user communication.
        </p>
        <p>
          With a Bootstrap-based clean UI and real-time updates, it offers a modern chat experience powered by a serverless Node.js backend.
        </p>
      </div>
    `,
    challenges: "Integrating AI in real-time without latency issues.",
    impact:
      "Improved messaging efficiency with AI-driven context-aware suggestions.",
    liveDemo: "https://whisper-gram.vercel.app/",
    repo: "Not specified",
  },
  {
    id: "04",
    title: "Savor Haven",
    subtitle: "End-to-end restaurant platform with real-time order tracking.",
    role: "Full Stack Developer",
    duration: "October 2023",
    techStack: [
      { name: "React", icon: <Rocket size={14} className="text-gray-700" /> },
      {
        name: "Redux Toolkit",
        icon: <LayoutDashboard size={14} className="text-gray-700" />,
      },
      {
        name: "MongoDB",
        icon: <Database size={14} className="text-gray-700" />,
      },
      {
        name: "Stripe",
        icon: <ShoppingCart size={14} className="text-gray-700" />,
      },
      { name: "Node.js", icon: <Server size={14} className="text-gray-700" /> },
      {
        name: "Express.js",
        icon: <LayoutDashboard size={14} className="text-gray-700" />,
      },
      {
        name: "JWT Auth",
        icon: <LockKeyhole size={14} className="text-gray-700" />,
      },
      {
        name: "Mongoose",
        icon: <Database size={14} className="text-gray-700" />,
      },
      {
        name: "TailwindCSS",
        icon: <Paintbrush size={14} className="text-gray-700" />,
      },
      {
        name: "Role-Based Access",
        icon: <UserCheck size={14} className="text-gray-700" />,
      },
      {
        name: "Payment Gateway",
        icon: <ShoppingCart size={14} className="text-gray-700" />,
      },
      {
        name: "API Integration",
        icon: <Globe size={14} className="text-gray-700" />,
      },
      {
        name: "Error Handling",
        icon: <Terminal size={14} className="text-gray-700" />,
      },
    ],
    features: [
      "Online menu browsing and ordering",
      "Stripe-based secure payments",
      "Role-based access (admin & customer)",
      "Real-time order status updates",
    ],
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: `
      <div className="space-y-4 text-muted-foreground">
        <p>
          Savor Haven is a restaurant ordering platform that allows customers to browse menus, place orders, and track status in real-time.
        </p>
        <p>
          Built with React and Redux Toolkit, the platform supports secure Stripe payments and role-based access control, making it easy for admins and customers to manage operations efficiently.
        </p>
      </div>
    `,
    challenges:
      "Ensuring secure transactions and handling role-based UI experiences.",
    impact:
      "Enhanced restaurant workflows and user satisfaction with digital order management.",
    liveDemo: "https://savor-haven.vercel.app/",
    repo: "Not specified",
  },
];

export default projects;
