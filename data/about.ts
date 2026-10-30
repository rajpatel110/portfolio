export const about = {
  paragraphs: [
    "I’m Raj, a B.Tech Computer Science and Cyber Security student at Pranveer Singh Institute of Technology, graduating in 2027.",
    "I enjoy building web applications and exploring what happens behind the interface: APIs, data, and the connections between them. I’m also interested in real-time experiences and DSA problem-solving.",
    "I’m looking for a full-stack developer internship or an entry-level full-time role where I can contribute, learn from a team, and keep building.",
  ],
  interests: ["Web applications", "Backend & APIs", "Real-time experiences", "DSA problem-solving"],
} as const;

export type Skill = { name: string; note?: string };
export type SkillGroup = { title: string; context: string; items: readonly Skill[] };

// Roles and provider status are documented in docs/PROJECT_SOURCES.md.
export const skillGroups: readonly SkillGroup[] = [
  { title: "Frontend", context: "Interfaces in PrepPilot & DevLink", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Vite"].map(name => ({ name })) },
  { title: "Backend & data", context: "APIs, persistence & authentication", items: ["Node.js", "Express", "MongoDB", "MongoDB Atlas", "Mongoose", "Better Auth", "JWT", "Zod"].map(name => ({ name })) },
  { title: "Deployment & services", context: "Hosting and transactional email", items: [{ name: "Vercel" }, { name: "Brevo" }, { name: "Resend" }] },
  { title: "Tools & fundamentals", context: "Development, testing & ongoing practice", items: ["Git & GitHub", "GitHub Actions CI", "npm", "Node.js test runner", "ESLint", "Prettier", "REST APIs", "DSA problem-solving"].map(name => ({ name })) },
];
