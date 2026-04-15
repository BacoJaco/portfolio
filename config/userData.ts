import type { UserData } from "@/types";

const userData: UserData = {
  personalInfo: {
    name: "JACOB MCLAUGHLIN",
    profession: "Computer Science@UCR",
    email: "mclaughlinjacob2005@gmail.com",
    github: "https://github.com/BacoJaco",
    linkedin: "https://www.linkedin.com/in/jacob-mcl",
    resume: "/Jacob_McLaughlin_Resume.pdf",
  },
  about:
    "Hello! I'm a Computer Science student at the University of California, Riverside with a strong interest in software engineering, AI, and full-stack development. I’m always seeking new opportunities to apply my skills and take on meaningful projects.",
  experience: [
    {
      id: 1,
      role: "Lead Computer Vision Engineer",
      company: "ACM@UCR:Forge",
      startDate: "Apr 2026",
      endDate: "Present",
      link: "https://acm.cs.ucr.edu/programs/forge",
      logo: "/portfolio/acmforge.webp",
      description:
        "Leading multiple sub-teams comprising of 15 total members to build an AI-powered surveillance system, coordinating feature delivery across Python and Next.js stacks\nMentoring team members on YOLOv8, Python multithreading, and MQTT, accelerating technical proficiency\nCoordinating weekly meetings to delegate tasks, track progress, and resolve technical blockers",
    },
    {
      id: 2,
      role: "Lead Game Developer",
      company: "GameSpawn",
      startDate: "Sep 2025",
      endDate: "Jan 2026",
      link: "https://gamespawn.github.io/",
      logo: "/portfolio/gamespawn.PNG",
      description:
        "Led a team of 3 developers to design and build a multi-level game in Unity, coordinating technical direction\nDeveloped 7 interactive levels using C#, implementing core gameplay mechanics and player navigation systems\nDesigned the game using the Unity game engine, with full virtual reality and PC support",
    },
  ],
  projects: [
    {
      title: "LiDAR Delivery",
      description: "A LiDAR-powered differential-drive robot designed to autonomously navigate and deliver food on campus.",
      tags: ["Python", "ROS", "A*"],
      Livelink: "https://www.youtube.com/@NullProj",
      gitHubLink: "https://www.youtube.com/watch?v=KDEyjlgQySA",
      imageSrc: "/portfolio/lidar.png",
      date: "Apr 2026 - Present",
      working: true, // set to false if the project is no longer maintained
      liveLinkAvailable: false, // set to false if the project doesn't have a live link
      gitHubLinkAvailable: false, // set to false if the project doesn't have a GitHub link
    },
    {
      title: "UBI Web App",
      description: "A web application for UCR's University Blood Initiative, built with Next.js and Tailwind CSS.",
      tags: ["Typescript", "Next.js", "Tailwind CSS"],
      Livelink: "https://www.youtube.com/@NullProj",
      gitHubLink: "https://github.com/acm-ucr/ubi-website",
      imageSrc: "/portfolio/UBI.png",
      date: "Apr 2026 - Present",
      working: true, // set to false if the project is no longer maintained
      liveLinkAvailable: false, // set to false if the project doesn't have a live link
      gitHubLinkAvailable: true, // set to false if the project doesn't have a GitHub link
    },
    {
      title: "Archery Team Web App",
      description: "A web application for UCR's Archery Team, built with Next.js and Tailwind CSS.",
      tags: ["Typescript", "Next.js", "Tailwind CSS"],
      Livelink: "https://archery.ucrhighlanders.org/",
      gitHubLink: "https://github.com/acm-ucr/archery-website",
      imageSrc: "/portfolio/archery.png",
      date: "Jan 2026 - Apr 2026",
      working: false, // set to false if the project is no longer maintained
      liveLinkAvailable: true, // set to false if the project doesn't have a live link
      gitHubLinkAvailable: true, // set to false if the project doesn't have a GitHub link
    },
    {
      title: "AI Surveillance",
      description: "Ar real-time surveillance system using YOLOv8 for object detection, built with Python and MQTT for communication.",
      tags: ["Python", "Computer Vision", "MQTT"],
      Livelink: "https://www.youtube.com/@NullProj",
      gitHubLink: "https://github.com/acm-ucr/surveillance-camera-team4",
      imageSrc: "/portfolio/yolo.jpg",
      date: "Jan 2026 - Apr 2026",
      working: false, // set to false if the project is no longer maintained
      liveLinkAvailable: false, // set to false if the project doesn't have a live link
      gitHubLinkAvailable: true, // set to false if the project doesn't have a GitHub link
    },
    {
      title: "Crossy Road Clone",
      description: "A terminal-based replica of Crossy Road built in C++.",
      tags: ["C++", "Valgrind", "CMake"],
      Livelink: "https://www.youtube.com/@NullProj",
      gitHubLink: "https://github.com/BacoJaco/terminalcrossy",
      imageSrc: "/portfolio/crossy.jpg",
      date: "Sep 2026 - Dec 2025",
      working: false, // set to false if the project is no longer maintained
      liveLinkAvailable: false, // set to false if the project doesn't have a live link
      gitHubLinkAvailable: true, // set to false if the project doesn't have a GitHub link
    },
    {
      title: "Chess Analysis Tool",
      description: "A tool for analyzing chess games and improving player performance, utilizing a custom JavaScript algorithm.",
      tags: ["JavaScript", "Next.js", "API Integration"],
      Livelink: "https://bacojaco.github.io/chessanalysis/",
      gitHubLink: "https://github.com/BacoJaco/chessanalysis",
      imageSrc: "/portfolio/chess.jpg",
      date: "Aug 2025 - Sep 2025",
      working: false, // set to false if the project is no longer maintained
      liveLinkAvailable: true, // set to false if the project doesn't have a live link
      gitHubLinkAvailable: true, // set to false if the project doesn't have a GitHub link
    },
  ],
};

export default userData;