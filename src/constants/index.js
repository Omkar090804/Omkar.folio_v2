import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    feedback_system,
    investment_portfolio,
    object_detection,
    mnnist,
    jobit,
    tripguide,
    threejs,
    python,
    php,
    mysql,
    logo,
    frameskip,
    offmind,
    java,
    metamask,
    bioledger,
  } from "../assets";
  
  
 
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
   
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
      link:'https://github.com/stars/Omkar090804/lists/webdev',
    },
    {
      title: "Java Enthusiast",
      icon: mobile,
      link:'https://github.com/stars/Omkar090804/lists/java',
    },
    {
      title: " Some DIY's",
      icon: creator,
      link:'https://github.com/stars/Omkar090804/lists/some-diy-s',
    },
    {
      title: "Content Creator",
      icon: creator,
      link:'https://youtube.com/@omkardarekar3586?si=pLj5wtldZILg92-1',
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },

    {
      name: "React JS",
      icon: reactjs,
    },
   
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
   
    {
      name: "git",
      icon: git,
    },
   
    {
      name: "MYSQL",
      icon: mysql,
    },

    {
      name: "Python",
      icon: python,
    },

    {
      name: "Java",
      icon: java,
    },
    ];
  
  const experiences = [
    {
      title: "Developer",
      company_name: "Project Human City",
      icon: logo,
      iconBg: "#383E56",
      date: "September 2024 - Ongoing",
      points: [
        "Created an engaging user interface with React.js to showcase personal projects and skills.",
        "Implemented responsive design techniques to ensure optimal performance on various devices and screen sizes.",
        "Demonstrated a keen eye for design by crafting a visually impressive portfolio that reflects personal style and professionalism.",
      ],
    },

    {
      title: "Intern",
      company_name: "Cisco",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "May 2024 -July 2024",
      points: [
        "Completed, showcasing your understanding of core networking concepts.",
        "Gained hands-on experience in simulating and troubleshooting network configurations.",
        "Successfully executed a project addressing practical networking challenges, applying your skills effectively.",
      ],
    },

    {
      title: "Webmaster",
      company_name: "Circuits and Systems Society",
      icon: frameskip,
      iconBg: "#383E56",
      date: "September 2024 - Ongoing",
      points: [
        "Optimized operational efficiency by implementing new procedures and systems.",
        "Developed and implemented company policies and procedures to ensure compliance with industry standards and regulations.",
        "Fostered a positive and collaborative work environment by encouraging open communication and providing mentorship and guidance to team members.",
      ],
    },

  ];
   
  const projects = [
    {
      name: "Investment Portfolio Tracker",
      description:
        "It is a web-based application designed to help investors manage their investment portfolios efficiently. This platform provides users with a comprehensive toolset to monitor, analyze, and optimize their investments in real-time..",
      tags: [
        {
          name: "JAVA",
          color: "blue-text-gradient",
        },
        {
          name: "API'S",
          color: "green-text-gradient",
        },
        {
          name: "MYSQL",
          color: "pink-text-gradient",
        },
      ],
      image: investment_portfolio,
      source_code_link: "https://github.com/Omkar090804/InvestmentPortfolioTracker",
    },

    {
      name: "BioLedger: A Blockchain-Based System for Biodiversity Conservation",
      description:
        "Developed a comprehensive Fund Management System to effectively track and manage donations allocated for zoos and biodiversity conservation projects. .",
      tags: [
        {
          name: "html,css",
          color: "blue-text-gradient",
        },
        {
          name: "Js",
          color: "green-text-gradient",
        },
        {
          name: "Ejs",
          color: "pink-text-gradient",
        },
      ],
      image: bioledger,
      source_code_link: "https://github.com/Omkar090804/HACK1.0",
    },

    {
      name: "Blockchain Based Fund Management System for temples",
      description:
        "This web-technology solves the problem of discrepancies in fund management occurring in today's time it has increased the level of transparency and eradicates middlemen between the user and temple.",
      tags: [
        {
          name: "Blockchain",
          color: "blue-text-gradient",
        },
        {
          name: "Ejs",
          color: "green-text-gradient",
        },
        {
          name: "Solidity",
          color: "pink-text-gradient",
        },
      ],
      image: metamask,
      source_code_link: "https://github.com/Omkar090804/Temple_Fund_Management_System",
    },
    
  ];
  
  

  export { services, technologies, experiences, projects };