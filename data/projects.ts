export type Project = {
  name: string;
  category: string;
  description: string;
  technologies: readonly string[];
  highlights: readonly string[];
  previousTechnologies?: readonly string[];
  workflow?: readonly string[];
  repository?: string;
  live?: string;
  image?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  enlargeImage?: boolean;
  liveRequirement?: string;
  imageCaption?: string;
  liveNote?: string;
  note?: string;
  baseline?: { label: string; results: string; limitations: string };
  details?: { label: string; paragraphs: readonly string[] };
};

export const projects: readonly Project[] = [
  {
    name: "PrepPilot",
    category: "INTERVIEW PREPARATION",
    description: "A focused workspace that turns interview-preparation goals and available study time into a plan you can review, accept, and follow.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB Atlas", "Mongoose", "Better Auth", "Zod", "Vercel", "Brevo"],
    previousTechnologies: ["Resend"],
    workflow: ["Node.js tests", "GitHub Actions CI"],
    highlights: ["Preview and explicitly accept a study schedule", "Search and filter published questions and resources", "Track planned task completion separately from practice outcomes"],
    repository: "https://github.com/rajpatel110/prep-pilot",
    live: "https://prep-pilot-theta-tan.vercel.app/",
    liveNote: "Study features require an account.",
    image: "/images/projects/preppilot.webp",
    imageAlt: "PrepPilot homepage with its illustrative sample study plan",
    imageCaption: "LIVE HOMEPAGE · ILLUSTRATIVE SAMPLE PLAN",
  },
  {
    name: "DevLink",
    category: "DEVELOPER NETWORKING",
    description: "A full-stack networking application for discovering developers, building connections, and continuing conversations in one place.",
    technologies: ["React", "Vite", "Redux Toolkit", "Express", "MongoDB", "JWT"],
    highlights: ["Browse developers and manage connection requests", "Accept or reject incoming requests", "Exchange saved messages with accepted connections"],
    repository: "https://github.com/rajpatel110/DevLink",
    live: "https://dev-link-five-tau.vercel.app/",
    liveRequirement: "Sign-in required",
    image: "/images/projects/devlink-login.webp",
    imageWidth: 1910,
    imageHeight: 933,
    imageAlt: "DevLink login interface with email and password fields.",
    imageCaption: "LOGIN INTERFACE",
    enlargeImage: true,
  },
];




// Owner-supplied implementation/research details; no independent repository audit.
export const moreProjects: readonly Project[] = [
  {
    name: "Vidloom",
    category: "REAL-TIME VIDEO & DATA",
    description: "Browser-based video and data communication with WebRTC, aiming to reduce application-server media bandwidth through peer-to-peer connections where possible.",
    technologies: ["React", "TypeScript", "Node.js", "WebRTC", "WebSocket", "STUN"],
    highlights: [
      "React/TypeScript frontend and Node.js WebSocket signaling server",
      "SDP offers, answers, and ICE candidates establish subsequent WebRTC media/data connections",
      "STUN assists connectivity and NAT traversal",
    ],
  },
  {
    name: "EEG Seizure Prediction",
    category: "ACADEMIC RESEARCH · OFFLINE BASELINE",
    description: "An academic seizure-prediction study using the CHB-MIT Scalp EEG Database, starting with CHB01 recordings and an offline Logistic Regression baseline.",
    technologies: ["CHB-MIT / CHB01", "MNE", "StandardScaler", "Logistic Regression"],
    highlights: [
      "Loaded EDF with MNE; preprocessed into 10-second windows with 5-second overlap",
      "Generated pre-ictal/inter-ictal labels and extracted statistical and frequency-domain features",
      "Trained with StandardScaler and balanced class weights",
    ],
    baseline: {
      label: "Preliminary CHB01 baseline · owner-reported",
      results: "≈92% accuracy · ≈92% pre-ictal recall · ≈52% precision",
      limitations: "False positives remain a major limitation. The exact pre-ictal definition and train/test split methodology have not been supplied.",
    },
    details: {
      label: "Evaluation & next steps",
      paragraphs: [
        "Evaluation used accuracy, precision, recall, a confusion matrix, a precision-recall curve, and PR-AUC. No PR-AUC value is reported here.",
        "Future work: dataset expansion, stronger validation, model experimentation, prediction-horizon analysis, and real-time processing.",
      ],
    },
  },
];
