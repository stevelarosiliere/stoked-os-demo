export type TrainingLevel = "Foundation" | "Advanced" | "Specialty";

export type TrainingLesson = {
  id: string;
  title: string;
  type: "video" | "reading" | "quiz" | "scenario" | "assessment";
  duration: string;
  status: "completed" | "in-progress" | "locked";
  order: number;
};

export type TrainingModule = {
  id: string;
  title: string;
  description: string;
  level: TrainingLevel;
  status: "published" | "draft";
  certificationName: string;
  estimatedHours: number;
  progress: number;
  lessonsCompleted: number;
  totalLessons: number;
  lessons: TrainingLesson[];
  prerequisites: string[];
};

export type ProtocolOptionType = "positive" | "neutral" | "escalate";

export type ProtocolOption = {
  label: string;
  nextStepId: string;
  type: ProtocolOptionType;
};

export type ProtocolStep = {
  id: string;
  title: string;
  description: string;
  options: ProtocolOption[];
};

export type ProtocolTree = {
  id: string;
  name: string;
  description: string;
  startStepId: string;
  steps: ProtocolStep[];
};

export const trainingStats = {
  totalModules: 8,
  publishedModules: 7,
  avgCompletionRate: 72,
  mentorsCertified: 34,
};

export const trainingModules: TrainingModule[] = [
  {
    id: "training-1",
    title: "Mentor 101 Foundations",
    description:
      "Background checks, boundaries, mandatory reporting, and communication basics. Required for all mentors before any youth interaction.",
    level: "Foundation",
    status: "published",
    certificationName: "Mentor 101 Certified",
    estimatedHours: 6,
    progress: 100,
    lessonsCompleted: 8,
    totalLessons: 8,
    prerequisites: [],
    lessons: [
      { id: "l-1-1", title: "Welcome & Program Overview", type: "video", duration: "15 min", status: "completed", order: 1 },
      { id: "l-1-2", title: "Background Check Process", type: "reading", duration: "20 min", status: "completed", order: 2 },
      { id: "l-1-3", title: "Boundaries & Ethical Guidelines", type: "video", duration: "30 min", status: "completed", order: 3 },
      { id: "l-1-4", title: "Mandatory Reporting Requirements", type: "reading", duration: "25 min", status: "completed", order: 4 },
      { id: "l-1-5", title: "Communication Best Practices", type: "video", duration: "20 min", status: "completed", order: 5 },
      { id: "l-1-6", title: "Scenario: Boundary Situations", type: "scenario", duration: "30 min", status: "completed", order: 6 },
      { id: "l-1-7", title: "Quiz: Foundations Knowledge", type: "quiz", duration: "15 min", status: "completed", order: 7 },
      { id: "l-1-8", title: "Final Assessment", type: "assessment", duration: "45 min", status: "completed", order: 8 },
    ],
  },
  {
    id: "training-2",
    title: "Mental Health First Aid",
    description:
      "Recognizing signs of distress, trauma-informed approaches, and de-escalation techniques. Required for all mentors.",
    level: "Foundation",
    status: "published",
    certificationName: "Mental Health First Aid Certified",
    estimatedHours: 8,
    progress: 75,
    lessonsCompleted: 6,
    totalLessons: 8,
    prerequisites: ["training-1"],
    lessons: [
      { id: "l-2-1", title: "Understanding Youth Mental Health", type: "video", duration: "25 min", status: "completed", order: 1 },
      { id: "l-2-2", title: "Recognizing Signs of Distress", type: "reading", duration: "20 min", status: "completed", order: 2 },
      { id: "l-2-3", title: "Trauma-Informed Mentoring", type: "video", duration: "35 min", status: "completed", order: 3 },
      { id: "l-2-4", title: "Active Listening Techniques", type: "video", duration: "20 min", status: "completed", order: 4 },
      { id: "l-2-5", title: "De-escalation Strategies", type: "scenario", duration: "30 min", status: "completed", order: 5 },
      { id: "l-2-6", title: "When to Escalate: Decision Framework", type: "reading", duration: "25 min", status: "completed", order: 6 },
      { id: "l-2-7", title: "Scenario: Crisis Response", type: "scenario", duration: "30 min", status: "in-progress", order: 7 },
      { id: "l-2-8", title: "Final Assessment", type: "assessment", duration: "45 min", status: "locked", order: 8 },
    ],
  },
  {
    id: "training-3",
    title: "Skate Coaching",
    description:
      "Sport-specific safety, progression frameworks, and park etiquette. For mentors supporting skateboarding programs.",
    level: "Advanced",
    status: "published",
    certificationName: "Skate Coach Certified",
    estimatedHours: 10,
    progress: 60,
    lessonsCompleted: 6,
    totalLessons: 10,
    prerequisites: ["training-1", "training-2"],
    lessons: [
      { id: "l-3-1", title: "Skateboarding Safety Fundamentals", type: "video", duration: "20 min", status: "completed", order: 1 },
      { id: "l-3-2", title: "Equipment & Protective Gear", type: "reading", duration: "15 min", status: "completed", order: 2 },
      { id: "l-3-3", title: "Skill Progression Framework", type: "video", duration: "30 min", status: "completed", order: 3 },
      { id: "l-3-4", title: "Park Etiquette & Culture", type: "reading", duration: "20 min", status: "completed", order: 4 },
      { id: "l-3-5", title: "Teaching Basic Tricks", type: "video", duration: "35 min", status: "completed", order: 5 },
      { id: "l-3-6", title: "Managing Fear & Risk", type: "scenario", duration: "25 min", status: "completed", order: 6 },
      { id: "l-3-7", title: "Injury Prevention & Response", type: "reading", duration: "20 min", status: "in-progress", order: 7 },
      { id: "l-3-8", title: "Session Planning Workshop", type: "scenario", duration: "30 min", status: "locked", order: 8 },
      { id: "l-3-9", title: "Quiz: Skate Knowledge", type: "quiz", duration: "15 min", status: "locked", order: 9 },
      { id: "l-3-10", title: "Final Assessment: Practical Eval", type: "assessment", duration: "60 min", status: "locked", order: 10 },
    ],
  },
  {
    id: "training-4",
    title: "Snow Coaching",
    description:
      "Mountain safety, weather awareness, lift protocols, and snowboarding instruction techniques.",
    level: "Advanced",
    status: "published",
    certificationName: "Snow Coach Certified",
    estimatedHours: 12,
    progress: 40,
    lessonsCompleted: 4,
    totalLessons: 10,
    prerequisites: ["training-1", "training-2"],
    lessons: [
      { id: "l-4-1", title: "Mountain Safety Overview", type: "video", duration: "25 min", status: "completed", order: 1 },
      { id: "l-4-2", title: "Weather & Avalanche Awareness", type: "reading", duration: "30 min", status: "completed", order: 2 },
      { id: "l-4-3", title: "Lift Protocols & Chair Safety", type: "video", duration: "20 min", status: "completed", order: 3 },
      { id: "l-4-4", title: "Snowboarding Instruction Basics", type: "video", duration: "35 min", status: "completed", order: 4 },
      { id: "l-4-5", title: "Teaching Turn Progression", type: "video", duration: "30 min", status: "in-progress", order: 5 },
      { id: "l-4-6", title: "Cold Weather First Aid", type: "reading", duration: "25 min", status: "locked", order: 6 },
      { id: "l-4-7", title: "Group Management on Mountain", type: "scenario", duration: "30 min", status: "locked", order: 7 },
      { id: "l-4-8", title: "Equipment Fitting & Care", type: "reading", duration: "20 min", status: "locked", order: 8 },
      { id: "l-4-9", title: "Quiz: Snow Knowledge", type: "quiz", duration: "15 min", status: "locked", order: 9 },
      { id: "l-4-10", title: "Final Assessment: Mountain Eval", type: "assessment", duration: "90 min", status: "locked", order: 10 },
    ],
  },
  {
    id: "training-5",
    title: "Surf Coaching",
    description:
      "Ocean safety, rip current awareness, surf instruction, and environmental stewardship.",
    level: "Advanced",
    status: "published",
    certificationName: "Surf Coach Certified",
    estimatedHours: 10,
    progress: 30,
    lessonsCompleted: 3,
    totalLessons: 10,
    prerequisites: ["training-1", "training-2"],
    lessons: [
      { id: "l-5-1", title: "Ocean Safety Fundamentals", type: "video", duration: "25 min", status: "completed", order: 1 },
      { id: "l-5-2", title: "Rip Currents & Water Hazards", type: "reading", duration: "20 min", status: "completed", order: 2 },
      { id: "l-5-3", title: "Surf Instruction Basics", type: "video", duration: "30 min", status: "completed", order: 3 },
      { id: "l-5-4", title: "Board Types & Selection", type: "reading", duration: "15 min", status: "in-progress", order: 4 },
      { id: "l-5-5", title: "Teaching Pop-Up & Paddling", type: "video", duration: "30 min", status: "locked", order: 5 },
      { id: "l-5-6", title: "Environmental Stewardship", type: "reading", duration: "20 min", status: "locked", order: 6 },
      { id: "l-5-7", title: "Beach Management & Logistics", type: "scenario", duration: "25 min", status: "locked", order: 7 },
      { id: "l-5-8", title: "Water Rescue Basics", type: "video", duration: "30 min", status: "locked", order: 8 },
      { id: "l-5-9", title: "Quiz: Surf Knowledge", type: "quiz", duration: "15 min", status: "locked", order: 9 },
      { id: "l-5-10", title: "Final Assessment: Beach Eval", type: "assessment", duration: "60 min", status: "locked", order: 10 },
    ],
  },
  {
    id: "training-6",
    title: "1:1 Mentoring Protocol",
    description:
      "Structured decision trees for common mentoring scenarios, session planning, and progress documentation.",
    level: "Specialty",
    status: "published",
    certificationName: "1:1 Protocol Certified",
    estimatedHours: 5,
    progress: 85,
    lessonsCompleted: 6,
    totalLessons: 7,
    prerequisites: ["training-1"],
    lessons: [
      { id: "l-6-1", title: "1:1 Session Structure", type: "video", duration: "20 min", status: "completed", order: 1 },
      { id: "l-6-2", title: "Building Rapport with Mentees", type: "reading", duration: "15 min", status: "completed", order: 2 },
      { id: "l-6-3", title: "Goal Setting with Youth", type: "video", duration: "25 min", status: "completed", order: 3 },
      { id: "l-6-4", title: "Progress Documentation", type: "reading", duration: "20 min", status: "completed", order: 4 },
      { id: "l-6-5", title: "Common Scenarios & Decision Trees", type: "scenario", duration: "30 min", status: "completed", order: 5 },
      { id: "l-6-6", title: "Protocol Practice: Live Simulation", type: "scenario", duration: "45 min", status: "completed", order: 6 },
      { id: "l-6-7", title: "Final Assessment", type: "assessment", duration: "30 min", status: "in-progress", order: 7 },
    ],
  },
  {
    id: "training-7",
    title: "Youth Leadership Facilitation",
    description:
      "Facilitation skills for running youth council meetings, workshops, and community events.",
    level: "Specialty",
    status: "published",
    certificationName: "Youth Facilitator Certified",
    estimatedHours: 6,
    progress: 50,
    lessonsCompleted: 3,
    totalLessons: 6,
    prerequisites: ["training-1", "training-2"],
    lessons: [
      { id: "l-7-1", title: "Facilitation Fundamentals", type: "video", duration: "25 min", status: "completed", order: 1 },
      { id: "l-7-2", title: "Youth Voice & Agency", type: "reading", duration: "20 min", status: "completed", order: 2 },
      { id: "l-7-3", title: "Running Council Meetings", type: "video", duration: "30 min", status: "completed", order: 3 },
      { id: "l-7-4", title: "Workshop Design", type: "scenario", duration: "35 min", status: "in-progress", order: 4 },
      { id: "l-7-5", title: "Community Event Planning", type: "reading", duration: "25 min", status: "locked", order: 5 },
      { id: "l-7-6", title: "Final Assessment", type: "assessment", duration: "45 min", status: "locked", order: 6 },
    ],
  },
  {
    id: "training-8",
    title: "Partner Org Onboarding",
    description:
      "Protocols for onboarding mentors from partner organizations. Data sharing, co-mentoring models, and cross-org coordination.",
    level: "Specialty",
    status: "draft",
    certificationName: "Partner Onboarding Certified",
    estimatedHours: 4,
    progress: 0,
    lessonsCompleted: 0,
    totalLessons: 5,
    prerequisites: ["training-1"],
    lessons: [
      { id: "l-8-1", title: "Partner Organization Overview", type: "video", duration: "20 min", status: "locked", order: 1 },
      { id: "l-8-2", title: "Data Sharing Agreements", type: "reading", duration: "25 min", status: "locked", order: 2 },
      { id: "l-8-3", title: "Co-Mentoring Models", type: "video", duration: "30 min", status: "locked", order: 3 },
      { id: "l-8-4", title: "Cross-Org Coordination", type: "scenario", duration: "25 min", status: "locked", order: 4 },
      { id: "l-8-5", title: "Final Assessment", type: "assessment", duration: "30 min", status: "locked", order: 5 },
    ],
  },
];

export const disengagedMenteeProtocol: ProtocolTree = {
  id: "protocol-1",
  name: "Disengaged Mentee Protocol",
  description:
    "Step-by-step decision tree for when a mentee stops showing up or becomes disengaged. Every path leads to the right outcome.",
  startStepId: "step-1",
  steps: [
    {
      id: "step-1",
      title: "Mentee Missed 2+ Sessions",
      description:
        "Your mentee has missed two or more consecutive sessions without explanation. This is a critical engagement signal. Choose your first response.",
      options: [
        { label: "Send a check-in text/message", nextStepId: "step-2", type: "positive" },
        { label: "Contact program coordinator", nextStepId: "step-3", type: "neutral" },
        { label: "Reach out to emergency contact", nextStepId: "step-4", type: "escalate" },
      ],
    },
    {
      id: "step-2",
      title: "Check-in Message Sent",
      description:
        "You sent a warm, non-judgmental message. 'Hey, missed you at the last couple sessions. Everything good?' Wait 48 hours for a response.",
      options: [
        { label: "Mentee responds positively", nextStepId: "step-5", type: "positive" },
        { label: "Mentee responds but seems off", nextStepId: "step-6", type: "neutral" },
        { label: "No response after 48 hours", nextStepId: "step-3", type: "escalate" },
      ],
    },
    {
      id: "step-3",
      title: "Coordinator Notified",
      description:
        "You've looped in the program coordinator. They'll check the system for any notes from school staff, coaches, or other mentors about the youth's status.",
      options: [
        { label: "Coordinator has context, youth is okay", nextStepId: "step-5", type: "positive" },
        { label: "Coordinator flags potential concern", nextStepId: "step-6", type: "neutral" },
        { label: "No information available", nextStepId: "step-4", type: "escalate" },
      ],
    },
    {
      id: "step-4",
      title: "Emergency Contact / School Outreach",
      description:
        "The coordinator reaches out to the emergency contact or school liaison to check on the youth's wellbeing. This is a safety check, not punitive.",
      options: [
        { label: "Youth is safe, personal/family issue", nextStepId: "step-7", type: "positive" },
        { label: "Youth is struggling, needs support", nextStepId: "step-6", type: "neutral" },
        { label: "Serious concern identified", nextStepId: "step-end-escalate", type: "escalate" },
      ],
    },
    {
      id: "step-5",
      title: "Re-engagement Plan",
      description:
        "Great news. The mentee is okay and wants to come back. Create a low-pressure re-entry plan. Maybe a 1:1 before the next group session.",
      options: [
        { label: "Schedule a casual 1:1 meetup", nextStepId: "step-end-positive", type: "positive" },
        { label: "Invite to next group session directly", nextStepId: "step-end-positive", type: "neutral" },
      ],
    },
    {
      id: "step-6",
      title: "Deeper Conversation Needed",
      description:
        "Something's going on. Schedule a private conversation in a comfortable setting. Listen first. Don't problem-solve immediately. Focus on understanding.",
      options: [
        { label: "Youth opens up, create support plan", nextStepId: "step-end-positive", type: "positive" },
        { label: "Youth needs professional support", nextStepId: "step-end-escalate", type: "escalate" },
        { label: "Youth wants to pause mentoring", nextStepId: "step-end-pause", type: "neutral" },
      ],
    },
    {
      id: "step-7",
      title: "Support Through Absence",
      description:
        "The youth is dealing with something at home. Stay connected without pressure. Send occasional supportive messages. Keep the door open.",
      options: [
        { label: "Youth returns when ready", nextStepId: "step-end-positive", type: "positive" },
        { label: "Transition to lighter engagement", nextStepId: "step-end-pause", type: "neutral" },
      ],
    },
    {
      id: "step-end-positive",
      title: "Successful Re-engagement",
      description:
        "The mentee is back on track. Document what happened and what worked in the system. This information helps the whole network learn and improve. Strong work.",
      options: [],
    },
    {
      id: "step-end-escalate",
      title: "Professional Referral Made",
      description:
        "You've done the right thing by escalating. The coordinator will connect the youth with professional support services. Your role now is to stay present and available when the youth is ready. Document everything in the system.",
      options: [],
    },
    {
      id: "step-end-pause",
      title: "Mentoring Paused (Door Open)",
      description:
        "The mentoring relationship is paused, not ended. The youth knows they can come back anytime. Set a 30-day check-in reminder. Update their status in the system. Sometimes stepping back is the right move.",
      options: [],
    },
  ],
};
