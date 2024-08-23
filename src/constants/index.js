import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `
I am a dedicated and versatile full stack developer 
with a passion for creating efficient and user-friendly 
web applications. With 2 years of professional experience, 
I have worked with a variety of technologies, including React, 
Next.js, Node.js, MySQL and MongoDB. My journey in web development 
began with a deep curiosity for how things work, and it has evolved 
into a career where I continuously strive to learn and 
adapt to new challenges. I thrive in collaborative 
environments and enjoy solving complex problems to 
deliver high-quality solutions. Outside of coding, I 
enjoy staying active, exploring new technologies, and 
contributing to open-source projects.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jan 2024 - Feb 2024",
    role: "Frontend Developer",
    company: "Valsco Technology",
    description: `Worked in startup pre-incubated under VIT-TBI.
    Built Homepage and Notification Panel for a School’s Alumni Website using React.js and Typescript.
    Integrated API services to fetch and display dynamic data, enhancing the website’s functionality.`,
    technologies: ["Javascript", "React.js", "TypeScript"],
  },
  {
    year: "Oct 2023 - Dec 2024",
    role: "Backend Intern",
    company: "Jio Platforms Limited",
    description: `Gained knowledge about IT processes and Networking.
    Worked with REST APIs to retrieve and display data from databases.
    Developed a backend project on Jio Face App using Nodejs, Express and gained valuable experience in applying
    software development principles in an industry setting.`,
    technologies: ["Javascript", "Node.js", "Express", "Postman"],
  },
];

export const PROJECTS = [
  {
    title: "WildCampsy",
    link: "https://github.com/TechTirth/WildCampsy",
    image: project1,
    description:
      "WildCampsy is a website where users can create and review campgrounds. In order to review or create a campground, you must have an account. Search campground by name or location. Sort campgrounds by highest rating, most reviewed, lowest price, or highest price.",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
  },
  {
    title: "TalkHub",
    link: "https://github.com/TechTirth/TalkHub",
    image: project4,
    description:
      "A MERN based Messaging application, with features such as 1 on 1 messaging, group messaging and also real time chatting with an indication when the other user is typing.",
    technologies: ["JavaScript", "React", "Node.js", "Express", "Socket.io"],
  },
  {
    title: "Bankify",
    image: project3,
    link: "https://github.com/TechTirth/Bankify-alt",
    description:
      "Built with Next.js, Bankify is a financial SaaS platform that connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Appwrite",
      "Plaid",
      "Dwolla",
      "ShadCN",
    ],
  },
  {
    title: "Promptopia",
    link: "https://github.com/TechTirth/Promptopia",
    image: project2,
    description:
      "Next.js application that highlights the key features of Next.js along with a comprehensive CRUD AI Prompt sharing system utilizing a MongoDB database and implementing NextAuth authentication.",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
  },
];

export const CONTACT = {
  email: "t1eerth.v@gmail.com",
};
