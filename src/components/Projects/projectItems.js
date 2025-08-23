// Projects/projectItems.js
import { Music, Clipboard } from "lucide-astro";

const projectItems = [
  {
    icon: Music,
    iconColor: "text-blue-600",
    gradientFrom: "from-blue-100",
    gradientTo: "to-purple-100",
    titleKey: "projects.music.title",
    descriptionKey: "projects.music.description",
    techStack: ["React", "Node.js", "Firebase"],
    liveDemoUrl: "https://youtu.be/axTLGOGyHqE",
    githubUrl: "https://github.com/kopo-k/Hackathon",
  },
  {
    icon: Clipboard,
    iconColor: "text-purple-600",
    gradientFrom: "from-purple-100",
    gradientTo: "to-pink-100",
    titleKey: "projects.multiclip.title",
    descriptionKey: "projects.multiclip.description",
    techStack: ["Electron", "TypeScript", "SQLite", "React"],
    liveDemoUrl: "https://youtu.be/Y_FGdNWNgvk",
    githubUrl: "https://github.com/kopo-k/MultiClip",
  },
];

export default projectItems;
