import type { SkillCategory } from '../types';

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: "JS" },
      { name: "Python", icon: "PY" },
      { name: "Dart", icon: "DT" },
      { name: "HTML/CSS", icon: "HC" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", icon: "RE" },
      { name: "Next.js", icon: "NX" },
      { name: "Astro", icon: "AS" },
      { name: "Flutter", icon: "FL" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Django", icon: "DJ" },
      { name: "Django REST framework", icon: "DR" },
      { name: "Supabase", icon: "SB" },
      { name: "Firebase", icon: "FB" },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Docker", icon: "DO" },
      { name: "Git", icon: "GT" },
      { name: "Linux", icon: "LX" },
      { name: "REST APIs", icon: "API" },
    ],
  },
];
