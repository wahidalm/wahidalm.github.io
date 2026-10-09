import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: "MUI Calculator",
    desc: "A sleek calculator app built with React and Material-UI, featuring theme toggling and responsive design.",
    img: "/images/muicalc.png",
    alt: "Screenshot of MUI Calculator app showing a modern calculator interface with Material-UI design",
    tech: ["Material-UI", "JavaScript", "React"],
    live: "https://wahidalm.github.io/muicalc/",
    code: "https://github.com/wahidalm/muicalc",
  },
  {
    title: "Tic-Tac-Toe",
    desc: "A classic Tic-Tac-Toe game built with vanilla JavaScript and CSS. Play against a friend.",
    img: "/images/tictactoe.png",
    alt: "Screenshot of Tic-Tac-Toe game showing a 3x3 grid with X and O markers",
    tech: ["JavaScript", "CSS", "HTML"],
    live: "https://wahidalm.github.io/tic-tac-toe/",
    code: "https://github.com/wahidalm/tic-tac-toe",
  },
  {
    title: "Resumer",
    desc: "A mobile-first resume builder built with Flutter and Django. Create, preview, and download professional resumes.",
    img: "/images/resumer.png",
    alt: "Resumer - Mobile resume builder application with Flutter and Django",
    tech: ["Flutter", "Django", "Dart", "Python"],
    code: "https://github.com/wahidalm/resumer",
  },
];
