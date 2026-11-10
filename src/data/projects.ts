import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: "MUI Calculator",
    desc: "A sleek, responsive calculator web application built with React and Material-UI, featuring dynamic theme toggling and accessible keyboard controls.",
    img: "/images/muicalc.png",
    alt: "MUI Calculator web application screenshot demonstrating React and Material-UI design",
    tech: ["React", "Material-UI", "JavaScript"],
    live: "https://wahidalm.github.io/muicalc/",
    code: "https://github.com/wahidalm/muicalc",
  },
  {
    title: "Tic-Tac-Toe",
    desc: "A classic, clean Tic-Tac-Toe game crafted with vanilla JavaScript, modern CSS Grid, and semantic HTML for zero-dependency performance.",
    img: "/images/tictactoe.png",
    alt: "Tic-Tac-Toe interactive game interface with 3x3 grid",
    tech: ["JavaScript", "CSS", "HTML"],
    live: "https://wahidalm.github.io/tic-tac-toe/",
    code: "https://github.com/wahidalm/tic-tac-toe",
  },
  {
    title: "Resumer",
    desc: "A mobile-first professional resume builder crafted with Flutter and Django backend APIs, featuring live layout preview and PDF export.",
    img: "/images/resumer.png",
    alt: "Resumer mobile resume builder application built with Flutter and Django",
    tech: ["Flutter", "Django", "Dart", "Python"],
    code: "https://github.com/wahidalm/resumer",
  },
];
