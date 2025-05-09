"use client";

export function validateEmail(value) {
  let callback = {
    valid: true,
    message: "",
  };
  if (!value) {
    callback.valid = false;
    callback.message = "empty";
    return callback;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(value)) {
    callback.valid = false;
    callback.message = "invalid";
    return callback;
  }
  return callback;
}

export function validateText(value) {
  let callback = {
    valid: true,
    message: "",
  };

  if (!value) {
    callback.valid = false;
    callback.message = "empty";
    return callback;
  }
  return callback;
}

export function validPhone(value) {
  let callback = {
    valid: true,
    message: "",
  };
  if (!value) {
    callback.valid = false;
    callback.message = "empty";
    return callback;
  }
  // ลบช่องว่างหรือขีดก่อนตรวจ
  const cleaned = value.replace(/[\s-]/g, '');
  // เช็กว่าเป็นตัวเลขทั้งหมดและมี 10 หลัก (เบอร์มือถือไทย)
  const regex = /^0\d{9}$/;
  if (!regex.test(cleaned)) {
    callback.valid = false;
    callback.message = "invalid";
  }
  return callback;
}

export function scrollTo(selector, duration = 800) {
  let element = null;

  if (selector.startsWith('#')) {
    element = document.getElementById(selector.substring(1));
  } else if (selector.startsWith('.')) {
    element = document.querySelector(selector);
  } else {
    console.error("Invalid selector. Use '#' for ID or '.' for class.");
    return;
  }

  if (!element) {
    // console.error("Element not found:", selector);
    return;
  }

  const startPosition = window.pageYOffset;
  const targetPosition = element.getBoundingClientRect().top + startPosition;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);
    window.scrollTo(0, startPosition + distance * ease);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  requestAnimationFrame(animation);
}

export function calculateAge(birthdateStr="1999-08-24") {
  // "1995-04-20"
  const today = new Date();
  const birthDate = new Date(birthdateStr);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  // ถ้ายังไม่ถึงวันเกิดปีนี้ → อายุ -1
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  return age;
}

export const skills = [
  {
    img: "/images/skills/html.svg",
    name: "html",
    label: "HTML",
    class: "",
    cate: "language",
    url: null,
  },
  {
    img: "/images/skills/css.svg",
    name: "css",
    label: "CSS",
    class: "",
    cate: "language",
    url: null,
  },
  {
    img: "/images/skills/less.svg",
    name: "less",
    label: "Less",
    class: "",
    cate: "framework&labary",
    url: null,
  },
  {
    img: "/images/skills/scss.svg",
    name: "scss",
    label: "Scss",
    class: "",
    cate: "framework&labary",
    url: null,
  },
  {
    img: "/images/skills/bootstrap.svg",
    name: "bootstrap",
    label: "Bootstrap",
    class: "",
    cate: "framework&labary",
    url: null,
  },
  {
    img: "/images/skills/tailwind.svg",
    name: "tailwind",
    label: "Tailwind",
    class: "",
    cate: "framework&labary",
    url: null,
  },
  {
    img: "/images/skills/js.svg",
    name: "js",
    label: "JavaScript",
    class: "",
    cate: "language",
    url: null,
  },
  {
    img: "/images/skills/typescript.svg",
    name: "typescript",
    label: "TypeScript",
    class: "",
    cate: "language",
    url: null,
  },
  {
    img: "/images/skills/sql.svg",
    name: "sql",
    label: "SQL",
    class: "",
    cate: "language",
    url: null,
  },
  {
    img: "/images/skills/jquery.svg",
    name: "jquery",
    label: "JQuery",
    class: "",
    cate: "framework&labary",
    url: null,
  },
  {
    img: "/images/skills/reactjs.svg",
    name: "reactjs",
    label: "ReactJS",
    class: "",
    cate: "framework&labary",
    url: null,
  },
  {
    img: "/images/skills/nextjs.svg",
    name: "nextjs",
    label: "NextJS",
    class: " theme-dark-invert",
    cate: "framework&labary",
    url: null,
  },
  {
    img: "/images/skills/php.svg",
    name: "php",
    label: "PHP",
    class: "",
    cate: "language",
    url: null,
  },
  {
    img: "/images/skills/vue.svg",
    name: "vue",
    label: "Vue",
    class: "",
    cate: "framework&labary",
    url: null,
  },
  {
    img: "/images/skills/angular.svg",
    name: "angular",
    label: "Angular",
    class: "",
    cate: "framework&labary",
    url: null,
  },
  {
    img: "/images/skills/mysql.svg",
    name: "mysql",
    label: "MySQL",
    class: "",
    cate: "tool",
    url: null,
  },
  {
    img: "/images/skills/prisma.svg",
    name: "prisma",
    label: "Prisma",
    class: " theme-dark-invert",
    cate: "tool",
    url: null,
  },
  {
    img: "/images/skills/mongodb.svg",
    name: "mongodb",
    label: "MongoDB",
    class: "",
    cate: "framework&labary",
    url: null,
  },
  {
    img: "/images/skills/postgresSQL.svg",
    name: "postgresSQL",
    label: "PostgresSQL",
    class: "",
    cate: "tool",
    url: null,
  },
  {
    img: "/images/skills/docker.svg",
    name: "docker",
    label: "Docker",
    class: "",
    cate: "tool",
    url: null,
  },
  {
    img: "/images/skills/vercel.svg",
    name: "vercel",
    label: "Vercel",
    class: " theme-dark-invert",
    cate: "tool",
    url: null,
  },
  {
    img: "/images/skills/postman.svg",
    name: "postman",
    label: "Postman",
    class: "",
    cate: "tool",
    url: null,
  },
  {
    img: "/images/skills/sourcetree.svg",
    name: "sourcetree",
    label: "Sourcetree",
    class: "",
    cate: "tool",
    url: null,
  },
  {
    img: "/images/skills/filezilla.svg",
    name: "filezilla",
    label: "FileZilla",
    class: "",
    cate: "tool",
    url: null,
  },
  {
    img: "/images/skills/vscode.svg",
    name: "vscode",
    label: "VS Code",
    class: "",
    cate: "tool",
    url: null,
  },
  {
    img: "/images/skills/figma.svg",
    name: "figma",
    label: "Figma",
    class: "",
    cate: "tool",
    url: null,
  },
  {
    img: "/images/skills/fibery.png",
    name: "fibery",
    label: "Fibery",
    class: "",
    cate: "tool",
    url: null,
  },
  {
    img: "/images/skills/jira.svg",
    name: "jira",
    label: "Jira",
    class: "",
    cate: "tool",
    url: null,
  },
  {
    img: "/images/skills/sketch.svg",
    name: "sketch",
    label: "Sketch",
    class: "",
    cate: "tool",
    url: null,
  },
];

import project0 from "@/public/images/projects/project0.jpg";
import project1 from "@/public/images/projects/project1.png";
import project2 from "@/public/images/projects/project2.png";
import project3 from "@/public/images/projects/project3.png";
import project4 from "@/public/images/projects/project4.png";
import project6 from "@/public/images/projects/project6.png";
import project7 from "@/public/images/projects/project7.png";
import project8 from "@/public/images/projects/project8.png";
import project9 from "@/public/images/projects/project9.png";
import project10 from "@/public/images/projects/project10.png";
import project11 from "@/public/images/projects/project11.png";
import project from "@/public/images/projects/project.png";

export const experiences = {
  en: [
    {
      img: project11,
      name: "ThaiMassage",
      type: "Booking Website",
      url: "https://datainfo.mnrh.go.th/ruenthai/ThaiMassage/Index.php",
      desc: [
        "Booking Website",
        "UX/UI Design",
        "Responsive Design",
        "Transitions & Animations",
        "Websit performance",
        "Website security",
        "SEO",
        "Database Design",
        "REST (API)",
      ],
      owner: "Maharat Nakhon Ratchasima Hospital",
      year: "2022",
      positions: ["full stack developer"],
      responsibility: ["full responsibility"],
      tools: [
        "html",
        "css",
        "bootstrap",
        "js",
        "jquery",
        "php",
        "mysql",
      ],
    },
    {
      img: project1,
      name: "CMG - Central Marketing Group",
      type: "Business Website",
      url: "https://www.cmg.co.th/en/home",
      desc: [
        "Responsive Design",
        "Transitions & Animations",
        "Websit performance",
        "Website security",
        "SEO",
      ],
      owner: "orisma technology company limited",
      year: "2022",
      positions: ["frontend developer"],
      responsibility: ["co-develop"],
      tools: [
        "html",
        "less",
        "js",
        "jquery",
        "php",
        "sourcetree",
        "sketch",
        "fibery",
      ],
    },
    {
      img: project2,
      name: "SHERA",
      type: "e-commerce website",
      url: "https://www.shera.com/",
      desc: [
        "Responsive Design",
        "Transitions & Animations",
      ],
      owner: "orisma technology company limited",
      year: "2022",
      positions: ["frontend developer"],
      responsibility: ["co-develop"],
      tools: [
        "html",
        "less",
        "js",
        "jquery",
        "php",
        "sourcetree",
        "sketch",
        "fibery",
      ],
    },
    {
      img: project3,
      name: "Magic Love House",
      type: "e-commerce website",
      url: "https://www.magiclovehouse.com/",
      desc: [
        "Booking System",
        "Responsive Design",
        "Transitions & Animations",
        "Websit performance",
        "Website security",
        "SEO",
      ],
      owner: "orisma technology company limited",
      year: "2022",
      positions: ["frontend developer"],
      responsibility: ["main responsibility"],
      tools: [
        "html",
        "less",
        "js",
        "jquery",
        "php",
        "sourcetree",
        "figma",
        "fibery",
      ],
    },
    {
      img: project4,
      name: "Ananda",
      type: "e-commerce website",
      url: "https://www.ananda.co.th/th/home",
      desc: [
        "Responsive Design",
        "Transitions & Animations",
        "Websit performance",
        "Website security",
        "SEO",
      ],
      owner: "orisma technology company limited",
      year: "2022",
      positions: ["frontend developer"],
      responsibility: ["co-develop"],
      tools: [
        "html",
        "less",
        "js",
        "jquery",
        "php",
        "sourcetree",
        "figma",
        "fibery",
      ],
    },
    {
      img: project0,
      name: "CMS (Content Management System)",
      type: "CMS (Content Management System)",
      url: "",
      desc: [
        "Responsive Design",
        "Websit performance",
        "Website security",
      ],
      owner: "orisma technology company limited",
      year: "2023",
      positions: ["frontend developer"],
      responsibility: ["co-develop"],
      tools: [
        "html",
        "less",
        "js",
        "jquery",
        "sourcetree",
        "figma",
        "fibery",
      ],
    },
    {
      img: project6,
      name: "punthaicoffee",
      type: "e-commerce website",
      url: "https://www.punthaicoffee.com/home",
      desc: [
        "Responsive Design",
        "Transitions & Animations",
        "Websit performance",
        "Website security",
        "SEO",
      ],
      owner: "orisma technology company limited",
      year: "2023",
      positions: ["frontend developer"],
      responsibility: ["main responsibility"],
      tools: [
        "html",
        "less",
        "js",
        "jquery",
        "php",
        "sourcetree",
        "figma",
        "fibery",
      ],
    },
    {
      img: project7,
      name: "sacit",
      type: "Business Website",
      url: "https://www.sacit.or.th/th/home",
      desc: [
        "Responsive Design",
        "Transitions & Animations",
      ],
      owner: "orisma technology company limited",
      year: "2023",
      positions: ["frontend developer"],
      responsibility: ["co-develop"],
      tools: [
        "html",
        "less",
        "js",
        "jquery",
        "php",
        "sourcetree",
        "figma",
        "fibery",
      ],
    },
    {
      img: project8,
      name: "Domino's",
      type: "e-commerce website",
      url: "https://www.dominospizza.co.th/home",
      desc: [
        "Shopping Cart System",
        "Payment System",
        "Responsive Design",
        "Transitions & Animations",
        "Websit performance",
        "Website security",
        "SEO",
      ],
      owner: "orisma technology company limited",
      year: "2024",
      positions: ["frontend developer"],
      responsibility: ["co-develop"],
      tools: ["html", "less", "js", "reactjs", "sourcetree", "figma", "fibery"],
    },
    {
      img: project9,
      name: "thailandprivilege",
      type: "e-commerce website",
      url: "https://www.thailandprivilege.co.th/home",
      desc: [
        "Responsive Design",
        "Transitions & Animations",
        "Websit performance",
        "Website security",
        "SEO",
      ],
      owner: "orisma technology company limited",
      year: "2024",
      positions: ["frontend developer"],
      responsibility: ["co-develop"],
      tools: ["html", "less", "js", "nextjs", "sourcetree", "figma", "fibery"],
    },
    {
      img: project10,
      name: "unique",
      type: "Business Website",
      url: "https://www.unique.co.th/home",
      desc: [
        "Responsive Design",
        "Transitions & Animations",
        "Websit performance",
        "Website security",
        "SEO",
      ],
      owner: "orisma technology company limited",
      year: "2024",
      positions: ["frontend developer"],
      responsibility: ["co-develop"],
      tools: ["html", "less", "js", "nextjs", "sourcetree", "figma", "fibery"],
    },
    {
      img: project,
      name: "Kasidit Katcharoen Portfolio",
      type: "Kasidit Katcharoen Portfolio",
      url: "#",
      desc: [
        "UX/UI Design",
        "Responsive Design",
        "Transitions & Animations",
        "Websit performance",
        "Website security",
        "SEO",
        "Database Design",
        "REST (API)",
        "CD/CI"
      ],
      owner: "kasidit katcharoen",
      year: "2025",
      positions: ["full stack developer"],
      responsibility: ["full responsibility"],
      tools: [
        "html",
        "scss",
        "tailwind",
        "js",
        "nextjs",
        "mongodb",
        "sourcetree",
      ],
    },
  ],
  th: [
    {
      img: project11,
      name: "ThaiMassage",
      type: "Booking Website",
      url: "https://datainfo.mnrh.go.th/ruenthai/ThaiMassage/Index.php",
      desc: [
        "Booking Website",
        "UX/UI Design",
        "Responsive Design",
        "Transitions & Animations",
        "Websit performance",
        "Website security",
        "SEO",
        "Database Design",
        "REST (API)",
      ],
      owner: "Maharat Nakhon Ratchasima Hospital",
      year: "2022",
      positions: ["full stack developer"],
      responsibility: ["full responsibility"],
      tools: [
        "html",
        "css",
        "bootstrap",
        "js",
        "jquery",
        "php",
        "mysql",
      ],
    },
    {
      img: project1,
      name: "CMG - Central Marketing Group",
      type: "Business Website",
      url: "https://www.cmg.co.th/en/home",
      desc: [
        "Responsive Design",
        "Transitions & Animations",
        "Websit performance",
        "Website security",
        "SEO",
      ],
      owner: "orisma technology company limited",
      year: "2022",
      positions: ["frontend developer"],
      responsibility: ["co-develop"],
      tools: [
        "html",
        "less",
        "js",
        "jquery",
        "php",
        "sourcetree",
        "sketch",
        "fibery",
      ],
    },
    {
      img: project2,
      name: "SHERA",
      type: "e-commerce website",
      url: "https://www.shera.com/",
      desc: [
        "Responsive Design",
        "Transitions & Animations",
      ],
      owner: "orisma technology company limited",
      year: "2022",
      positions: ["frontend developer"],
      responsibility: ["co-develop"],
      tools: [
        "html",
        "less",
        "js",
        "jquery",
        "php",
        "sourcetree",
        "sketch",
        "fibery",
      ],
    },
    {
      img: project3,
      name: "Magic Love House",
      type: "e-commerce website",
      url: "https://www.magiclovehouse.com/",
      desc: [
        "Booking System",
        "Responsive Design",
        "Transitions & Animations",
        "Websit performance",
        "Website security",
        "SEO",
      ],
      owner: "orisma technology company limited",
      year: "2022",
      positions: ["frontend developer"],
      responsibility: ["main responsibility"],
      tools: [
        "html",
        "less",
        "js",
        "jquery",
        "php",
        "sourcetree",
        "figma",
        "fibery",
      ],
    },
    {
      img: project4,
      name: "Ananda",
      type: "e-commerce website",
      url: "https://www.ananda.co.th/th/home",
      desc: [
        "Responsive Design",
        "Transitions & Animations",
        "Websit performance",
        "Website security",
        "SEO",
      ],
      owner: "orisma technology company limited",
      year: "2022",
      positions: ["frontend developer"],
      responsibility: ["co-develop"],
      tools: [
        "html",
        "less",
        "js",
        "jquery",
        "php",
        "sourcetree",
        "figma",
        "fibery",
      ],
    },
    {
      img: project0,
      name: "CMS (Content Management System)",
      type: "CMS (Content Management System)",
      url: "",
      desc: [
        "Responsive Design",
        "Websit performance",
        "Website security",
      ],
      owner: "orisma technology company limited",
      year: "2023",
      positions: ["frontend developer"],
      responsibility: ["co-develop"],
      tools: [
        "html",
        "less",
        "js",
        "jquery",
        "sourcetree",
        "figma",
        "fibery",
      ],
    },
    {
      img: project6,
      name: "punthaicoffee",
      type: "e-commerce website",
      url: "https://www.punthaicoffee.com/home",
      desc: [
        "Responsive Design",
        "Transitions & Animations",
        "Websit performance",
        "Website security",
        "SEO",
      ],
      owner: "orisma technology company limited",
      year: "2023",
      positions: ["frontend developer"],
      responsibility: ["main responsibility"],
      tools: [
        "html",
        "less",
        "js",
        "jquery",
        "php",
        "sourcetree",
        "figma",
        "fibery",
      ],
    },
    {
      img: project7,
      name: "sacit",
      type: "Business Website",
      url: "https://www.sacit.or.th/th/home",
      desc: [
        "Responsive Design",
        "Transitions & Animations",
      ],
      owner: "orisma technology company limited",
      year: "2023",
      positions: ["frontend developer"],
      responsibility: ["co-develop"],
      tools: [
        "html",
        "less",
        "js",
        "jquery",
        "php",
        "sourcetree",
        "figma",
        "fibery",
      ],
    },
    {
      img: project8,
      name: "Domino's",
      type: "e-commerce website",
      url: "https://www.dominospizza.co.th/home",
      desc: [
        "Shopping Cart System",
        "Payment System",
        "Responsive Design",
        "Transitions & Animations",
        "Websit performance",
        "Website security",
        "SEO",
      ],
      owner: "orisma technology company limited",
      year: "2024",
      positions: ["frontend developer"],
      responsibility: ["co-develop"],
      tools: ["html", "less", "js", "reactjs", "sourcetree", "figma", "fibery"],
    },
    {
      img: project9,
      name: "thailandprivilege",
      type: "e-commerce website",
      url: "https://www.thailandprivilege.co.th/home",
      desc: [
        "Responsive Design",
        "Transitions & Animations",
        "Websit performance",
        "Website security",
        "SEO",
      ],
      owner: "orisma technology company limited",
      year: "2024",
      positions: ["frontend developer"],
      responsibility: ["co-develop"],
      tools: ["html", "less", "js", "nextjs", "sourcetree", "figma", "fibery"],
    },
    {
      img: project10,
      name: "unique",
      type: "Business Website",
      url: "https://www.unique.co.th/home",
      desc: [
        "Responsive Design",
        "Transitions & Animations",
        "Websit performance",
        "Website security",
        "SEO",
      ],
      owner: "orisma technology company limited",
      year: "2024",
      positions: ["frontend developer"],
      responsibility: ["co-develop"],
      tools: ["html", "less", "js", "nextjs", "sourcetree", "figma", "fibery"],
    },
    {
      img: project,
      name: "Kasidit Katcharoen Portfolio",
      type: "Kasidit Katcharoen Portfolio",
      url: "#",
      desc: [
        "UX/UI Design",
        "Responsive Design",
        "Transitions & Animations",
        "Websit performance",
        "Website security",
        "SEO",
        "Database Design",
        "REST (API)",
        "CD/CI"
      ],
      owner: "kasidit katcharoen",
      year: "2025",
      positions: ["full stack developer"],
      responsibility: ["full responsibility"],
      tools: [
        "html",
        "scss",
        "tailwind",
        "js",
        "nextjs",
        "mongodb",
        "sourcetree",
      ],
    },
  ],
};
