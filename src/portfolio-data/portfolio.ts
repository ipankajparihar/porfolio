import {
  Github,
  Linkedin,
  Mail,
  Code,
  Palette,
  Rocket,
  Users,
  Phone,
  MapPin,
} from "lucide-react";

export const urls = {
  linkedin: "https://www.linkedin.com/in/pankaj-parihar-559276208/",
  github: "https://github.com/ipankajparihar",
  email: "pankajsinghparihar211@gmail.com",
  resume:
    "https://drive.google.com/file/d/1sB9VHUeIMQTX-IAeyW_W1lpbhRKSzS95/view?usp=sharing",
};

export const personalInfo = {
  name: "Pankaj Parihar",
  title: "Full Stack Developer",
  description:
    "Passionate about building scalable web applications and creating exceptional user experiences. Skilled in both frontend and backend technologies, with a focus on performance and clean code.",
  location: "Delhi, India",
  email: urls.email,
  phone: "+91 8923055173",
};

// About Section
export const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable code that stands the test of time",
  },
  {
    icon: Palette,
    title: "Creative Design",
    description:
      "Blending aesthetics with functionality for exceptional user experiences",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Optimizing every pixel and line of code for blazing-fast experiences",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with teams to bring visionary ideas to life",
  },
];

// Experience section
export const experiences = [
  {
    id: "1",
    company: "Excelerate",
    position: "Associate Software Engineer",
    duration: "2024 - Present",
    description: [
      "Developed 20 User stories for a large-scale ed-tech platform",
      "Mentored junior interns and established coding standards across the team",
      "Reduced application load time by 20% through performance optimizations",
      "Implemented backend test cases improving code coverage to 90%",
    ],
    technologies: [
      "React",
      "Node.js",
      "AWS",
      "Docker",
      "Redis",
      "TypeScript",
      "Express",
      "DynamoDB",
    ],
  },
  {
    id: "2",
    company: "Excelerate",
    position: "Full Stack Developer Intern",
    duration: "Jan 2024 - April 2024",
    description: [
      "Built the entire frontend and backend from scratch for Eval Bridge",
      "Developed secure authentication processing systems handling 100k+ requests",
      "Created responsive web applications used by 50k+ customers",
      "Collaborated with design team to implement pixel-perfect UI components",
    ],
    technologies: ["React.js", "Express", "DynamoDB", "JWT", "Redis"],
  },
  {
    id: "3",
    company: "Yajat Soft",
    position: "Technical Writer",
    duration: "2023 - Dec 2023",
    description: [
      "Authored technical documentation for 10+ software products",
      "Created user manuals and API documentation improving user onboarding",
      "Collaborated with developers to ensure accuracy and clarity of content",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "SASS"],
  },
];

export const projects = [
  {
    title: "Bingo Online Multiplayer Game",
    description:
      "Real-time multiplayer bingo game with dynamic leaderboard, and dynamic game rooms. Built with React and Node.js.",
    image:
      "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "Express", "Bootstrap"],
    liveUrl: "https://bingo-frontend-zjww.onrender.com/",
    githubUrl: "https://github.com/ipankajparihar/",
  },
  {
    title: "Algo Visualizer App",
    description:
      "Visual representation of algorithms with interactive animations. Supports sorting, searching, and pathfinding algorithms.",
    image:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Angular", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://ipankajparihar.github.io/algo-visualizer/",
    githubUrl: "https://github.com/ipankajparihar/algo-visualizer",
  },
  {
    title: "Lab: 3dCube",
    description:
      "3D rotating cube with rotation , size and color handling dashboard.",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["React", "OpenAI API", "PostgreSQL", "Tailwind"],
    liveUrl: "https://ipankajparihar.github.io/3dcube/",
    githubUrl: "https://github.com/ipankajparihar/3dcube",
  },
];

// Skill Section

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Angular", level: 90 },
      { name: "Redux", level: 85 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "DynamoDB", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "Mocha", level: 90 },
    ],
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git & GitHub", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 85 },
      { name: "Figma", level: 90 },
      { name: "Linux & Finance", level: 90 },
    ],
  },
];

export const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Angular",
  "Docker",
  "AWS",
  "Figma",
];

//Contact Section
export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: urls.email,
    link: `mailto:${urls.email}`,
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 8923055173",
    link: "tel:+918923055173",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Delhi, India",
    link: "#",
  },
];

// Footer Section
export const socialLinks = [
  { icon: Github, href: urls.github, label: "GitHub" },
  { icon: Linkedin, href: urls.linkedin, label: "LinkedIn" },
];

export const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const emailJsKeys = {
  public_key: "B56uUPBcROFU61vCx",
  private_key: "_isCp5bFJE-Lnm9oAJRO5",
  service_key: "service_kihl3fa",
  email_template_id: "template_7zuj3b9",
};
