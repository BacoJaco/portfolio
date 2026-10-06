import type { UserData } from "@/types";

const userData: UserData = {
  personalInfo: {
    name: "JACOB MCLAUGHLIN",
    profession: "Computer Science@UCSD",
    email: "mclaughlinjacob2005@gmail.com",
    github: "https://github.com/BacoJaco",
    linkedin: "https://www.linkedin.com/in/jacob-mcl",
    resume: "/Jacob_McLaughlin_Resume.pdf",
  },
  about:
    "Hello! I'm a Computer Science student at the University of California, San Diego with a strong interest in software engineering, AI, and full-stack development. I’m always seeking new opportunities to apply my skills and take on meaningful projects.",
  experience: [
    {
      id: 1,
      role: "Research Intern",
      company: "Collaborative Intelligence Systems Lab",
      startDate: "Jun 2026",
      endDate: "Present",
      link: "https://cisl.ucr.edu/",
      logo: "https://ucr-cisl.github.io//assets/avatar/cisl.png",
      description:
        "Reverse-engineered a commercial-grade differential-drive robot's undocumented interfaces for use on UCR's campus, gaining full control of sensor and control pipelines built around MPC-based obstacle avoidance\nDeployed a full end-to-end indoor autonomous navigation stack, building a custom LiDAR map with FAST-LIO, and achieving 95% goal-reaching success rate over 40 trials\nBuilt an outdoor GPS campus navigation system from scratch in Python/ROS with ENU projection, Dijkstra planner, and a pure-pursuit follower routing over a 45-building graph, completing routes of up to 0.25 miles\nIntegrated OmniVLA-edge under the obstacle avoidance system to navigate unknown environments, with an 85% success rate for goals up to 5 meters",
    },
    
    {
      id: 2,
      role: "Project Lead",
      company: "ACM@UCR:Forge",
      startDate: "Apr 2026",
      endDate: "Jun 2026",
      link: "https://acm.cs.ucr.edu/programs/forge",
      logo: "/acmforge.webp",
      description:
        "Led 10 members across 5 sub-teams to deliver an AI-powered surveillance system, coordinating Python and Next.js development to launch a functional prototype 2 weeks ahead of schedule\nMentored team members on YOLOv8, Python multithreading, and MQTT, boosting technical onboarding\nOversaw the development of a Next.js dashboard to display live camera feeds and YOLOv8 detections",
    },
    {
      id: 3,
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
      title: "Autonomous Campus Navigation",
      description:
        "An end-to-end autonomous navigation stack for a commercial-grade differential-drive robot, deployed for indoor and outdoor campus navigation at UCR's Collaborative Intelligence Systems Lab.",
      tags: ["Python", "ROS", "LiDAR", "FAST-LIO"],
      Livelink: "https://cisl.ucr.edu/",
      gitHubLink: null,
      imageSrc: "/research/campus-nav.png",
      media: [
        { type: "video", src: "/research/campus-nav-1.mp4" },
        { type: "video", src: "/research/campus-nav-2.mp4" },
        { type: "video", src: "/research/campus-nav-3.mp4" },
        { type: "image", src: "/research/campus-nav.png", alt: "Autonomous navigation robot" },
      ],
      date: "Jun 2026 - Present",
      working: true, // set to false if the project is no longer maintained
      liveLinkAvailable: false, // set to false if the project doesn't have a live link
      gitHubLinkAvailable: false, // set to false if the project doesn't have a GitHub link
      details:
        "• Reverse-engineered a commercial-grade differential-drive robot's undocumented interfaces, gaining full control of sensor and control pipelines built around MPC-based obstacle avoidance\n• Deployed a full end-to-end indoor autonomous navigation stack, building a custom LiDAR map with FAST-LIO and achieving a 95% goal-reaching success rate over 40 trials\n• Built an outdoor GPS campus navigation system from scratch in Python/ROS with ENU projection, a Dijkstra planner, and a pure-pursuit follower routing over a 45-building graph, completing routes of up to 0.25 miles\n• Integrated OmniVLA-edge under the obstacle avoidance system to navigate unknown environments, with an 85% success rate for goals up to 5 meters",
    },
    {
      title: "AI Short-Form Video Clipper",
      description: "A full-stack SaaS that turns long videos into captioned, speaker-tracked 9:16 clips through an async processing pipeline.",
      tags: ["Typescript", "Next.js", "Python", "Celery"],
      Livelink: "https://clipper-one-drab.vercel.app/",
      gitHubLink: null,
      imageSrc: "/clipsifter1.png",
      media: [
        { type: "image", src: "/clipsifter1.png", alt: "ClipSifter dashboard" },
        { type: "image", src: "/clipsifter2.png", alt: "ClipSifter clip output" },
      ],
      date: "Jun 2026 - Aug 2026",
      working: false, // set to false if the project is no longer maintained
      liveLinkAvailable: true, // set to false if the project doesn't have a live link
      gitHubLinkAvailable: false, // set to false if the project doesn't have a GitHub link
      details: "• Built and deployed a full-stack SaaS (Next.js on Vercel, Python/Celery worker on Railway) that turns long videos into captioned 9:16 clips via an async pipeline over Redis, Postgres, and Cloudflare R2\n• Implemented word-synced karaoke captions, LLM moment selection, and Groq-hosted Whisper transcription\n• Engineered speaker-tracked reframing with OpenCV YuNet face detection and crop panning\n• Built a Redis/Celery job queue with idempotent processing and Stripe billing on a per-user usage ledger",
    },
    {
      title: "LiDAR Delivery",
      description: "A LiDAR-powered differential-drive robot designed to autonomously navigate and deliver food on campus.",
      tags: ["Python", "ROS", "A*"],
      Livelink: "https://www.youtube.com/@NullProj",
      gitHubLink: "https://www.youtube.com/watch?v=KDEyjlgQySA",
      imageSrc: "/lidar.png",
      // Add more images/videos here to build a per-project slideshow.
      // Each item: { type: "image" | "video", src: "/path", alt?: "..." }
      // If omitted, the slideshow falls back to imageSrc above.
      media: [{ type: "image", src: "/lidar.png", alt: "LiDAR Delivery robot" }],
      date: "Apr 2026 - Jun 2026",
      working: false, // set to false if the project is no longer maintained
      liveLinkAvailable: false, // set to false if the project doesn't have a live link
      gitHubLinkAvailable: false, // set to false if the project doesn't have a GitHub link
      details: "• Developed the autonomy stack for a differential-drive robot designed for food delivery with 4 team members\n• Implemented A* path planning and GPS-tracking to compute optimal, collision-free trajectories in real time\n• Designed and integrated 2D LiDAR-based mapping and localization with ROS-based environment perception\n• Integrated a YOLOv8 computer vision model to detect and dynamically avoid humans",
    },
    {
      title: "University Web Applications",
      description: "Next.js web applications for several UC student organizations, including Cyber @ UCR, UCR's Archery Team, and the University Blood Initiative.",
      tags: ["Typescript", "Next.js", "Tailwind CSS"],
      Livelink: "https://cyber.ucrhighlanders.org/",
      gitHubLink: "https://github.com/acm-ucr/archery-website",
      imageSrc: "/cyber.png",
      media: [
        { type: "image", src: "/cyber.png", alt: "Cyber @ UCR website" },
        { type: "image", src: "/UBI.png", alt: "University Blood Initiative website" },
        { type: "image", src: "/archery.png", alt: "Archery Team website" },
      ],
      date: "Jan 2026 - Aug 2026",
      working: false, // set to false if the project is no longer maintained
      liveLinkAvailable: true, // set to false if the project doesn't have a live link
      gitHubLinkAvailable: true, // set to false if the project doesn't have a GitHub link
      details: "• Developed a Next.js web application within a team of 8 for Cyber @ UCR (and previously UCR's Archery Team and University Blood Initiative), leveraging SSR (Server-Side Rendering) to reduce initial load times by up to 70% and improve SEO visibility\n• Implemented a responsive, mobile-first UI using Tailwind CSS, improving usability across desktop and mobile devices for 50+ student members",
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
      details: "• Built a real-time multi-class detection system using YOLOv8, achieving over 90% accuracy across people, vehicles, and commmon objects in dynamic environments\n• Designed an MQTT messaging pipeline handling 30+ messages/sec for real-time perception output\n• Integrated the computer vision model with an ESP32 camera module, enabling live remote monitoring",
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
      details: "• Designed a replica of Crossy Road with 3 team members, leveraging SOLID principles in C++\n• Implemented agile methodologies using Kanban boards, UML diagrams and stand-up meetings to optimize development speed and team synchronization\n• Deployed CI/CD pipeline using Google Test to ensure 99% build stability during active development",
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