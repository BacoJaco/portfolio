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
      logo: "/acmforge.webp",
      description:
        "Led 10 members across 5 sub-teams to deliver an AI-powered surveillance system, coordinating Python and Next.js development to launch a functional prototype 2 weeks before the original deadline\nMentored team members on YOLOv8, Python multithreading, and MQTT, boosting technical proficiency\nOversaw the development of a Next.js dashboard to display live camera feeds and YOLOv8 detections",
    },
    {
      id: 2,
      role: "Lead Game Developer",
      company: "GameSpawn",
      startDate: "Sep 2025",
      endDate: "Jan 2026",
      link: "https://gamespawn.github.io/",
      logo: "/gamespawn.PNG",
      description:
        "Led a team of 3 developers to design and build a multi-level Unity game, using Agile sprints and Git for version control, and set technical direction that enabled on-time delivery\nDeveloped 7 interactive levels using C#, implementing core gameplay mechanics and player navigation systems\nDesigned the game to support both virtual reality (Oculus) and PC platforms, ensuring cross-platform compatibility and expanding the potential player base",
    },
  ],
  projects: [
    {
      title: "LiDAR Delivery",
      description: "A LiDAR-powered differential-drive robot designed to autonomously navigate and deliver food on campus.",
      tags: ["Python", "ROS", "A*"],
      Livelink: "https://www.youtube.com/@NullProj",
      gitHubLink: "https://www.youtube.com/watch?v=KDEyjlgQySA",
      imageSrc: "/lidar.png",
      date: "Apr 2026 - Present",
      working: true, // set to false if the project is no longer maintained
      liveLinkAvailable: false, // set to false if the project doesn't have a live link
      gitHubLinkAvailable: false, // set to false if the project doesn't have a GitHub link
      details: "• Developed the autonomy stack for a differential-drive robot designed for food delivery with 4 team members\n• Implemented A* path planning and GPS-tracking to compute optimal, collision-free trajectories in real time\n• Designed and integrated 2D LiDAR-based mapping and localization with ROS-based environment perception\n• Integrated an Ultralytics YOLOv8 computer vision model to detect and dynamically avoid humans",
    },
    {
      title: "UBI Web App",
      description: "A web application for UCR's University Blood Initiative, built with Next.js and Tailwind CSS. To be released June 2026.",
      tags: ["Typescript", "Next.js", "Tailwind CSS"],
      Livelink: "https://www.youtube.com/@NullProj",
      gitHubLink: "https://github.com/acm-ucr/ubi-website",
      imageSrc: "/UBI.png",
      date: "Apr 2026 - Present",
      working: true, // set to false if the project is no longer maintained
      liveLinkAvailable: false, // set to false if the project doesn't have a live link
      gitHubLinkAvailable: true, // set to false if the project doesn't have a GitHub link
      details: "• Developed a Next.js web application within a team of 8 for the UCR Chapter of University Blood Initiative, leveraging SSR (Server-Side Rendering) to reduce initial load times by up to 70% and improve SEO visibility\n• Implemented a responsive, mobile-first UI using Tailwind CSS, improving usability across desktop and mobile devices for 50+ student members",
    },
    {
      title: "Archery Team Web App",
      description: "A web application for UCR's Archery Team, built with Next.js and Tailwind CSS.",
      tags: ["Typescript", "Next.js", "Tailwind CSS"],
      Livelink: "https://archery.ucrhighlanders.org/",
      gitHubLink: "https://github.com/acm-ucr/archery-website",
      imageSrc: "/archery.png",
      date: "Jan 2026 - Apr 2026",
      working: false, // set to false if the project is no longer maintained
      liveLinkAvailable: true, // set to false if the project doesn't have a live link
      gitHubLinkAvailable: true, // set to false if the project doesn't have a GitHub link
      details: "• Developed a Next.js web application within a team of 10 for the UCR Archery Team, leveraging SSR (Server-Side Rendering) to reduce initial load times by up to 55% and improve SEO visibility\n• Implemented a responsive, mobile-first UI using Tailwind CSS, improving usability across desktop and mobile devices for 30+ student members",
    },
    {
      title: "AI Surveillance",
      description: "A real-time surveillance system using YOLOv8 for object detection, built with Python and MQTT for communication.",
      tags: ["Python", "Computer Vision", "MQTT"],
      Livelink: "https://www.youtube.com/@NullProj",
      gitHubLink: "https://github.com/acm-ucr/surveillance-camera-team4",
      imageSrc: "/yolo.jpg",
      date: "Jan 2026 - Apr 2026",
      working: false, // set to false if the project is no longer maintained
      liveLinkAvailable: false, // set to false if the project doesn't have a live link
      gitHubLinkAvailable: true, // set to false if the project doesn't have a GitHub link
      details: "• Built a real-time surveillance system using Ultralytics YOLOv8 to detect people, vehicles, and objects, enabling automated monitoring in dynamic environments\n• Designed MQTT messaging pipeline handling 30+ messages/sec for real-time system updates\n• Integrated the computer vision model with an ESP32 camera module, enabling real-time remote monitoring",
    },
    {
      title: "Crossy Road Clone",
      description: "A terminal-based replica of Crossy Road built in C++.",
      tags: ["C++", "Valgrind", "CMake"],
      Livelink: "https://www.youtube.com/@NullProj",
      gitHubLink: "https://github.com/BacoJaco/terminalcrossy",
      imageSrc: "/crossy.jpg",
      date: "Sep 2026 - Dec 2025",
      working: false, // set to false if the project is no longer maintained
      liveLinkAvailable: false, // set to false if the project doesn't have a live link
      gitHubLinkAvailable: true, // set to false if the project doesn't have a GitHub link
      details: "• Designed a replica of Crossy Road with 3 team members, leveraging SOLID principles in C++ and utilizing the terminal for visuals\n• Implemented agile methodologies using Kanban boards, UML diagrams and stand-up meetings to optimize development speed and team synchronization\n• Deployed CI/CD pipeline using Google Test to ensure 99% build stability during active development",
    },
    {
      title: "Chess Analysis Tool",
      description: "A tool for analyzing chess games and improving player performance by utilizing a custom JavaScript algorithm.",
      tags: ["JavaScript", "Next.js", "API Integration"],
      Livelink: "https://bacojaco.github.io/chessanalysis/",
      gitHubLink: "https://github.com/BacoJaco/chessanalysis",
      imageSrc: "/chess.jpg",
      date: "Aug 2025 - Sep 2025",
      working: false, // set to false if the project is no longer maintained
      liveLinkAvailable: true, // set to false if the project doesn't have a live link
      gitHubLinkAvailable: true, // set to false if the project doesn't have a GitHub link
      details: "• Built a web app using the Next.js framework that analyzes any given chess game\n• Implemented real-time analysis that evaluates move quality with a custom algorithm in JavaScript, achieving $\sim$90\% accuracy compared to subscription-based models\n• Integrated the Stockfish API to provide grandmaster-level move analysis and real-time evaluation",
    },
  ],
};

export default userData;