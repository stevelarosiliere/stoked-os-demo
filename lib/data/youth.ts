export type ExtendedTimelineType =
  | "enrollment"
  | "survey"
  | "session"
  | "milestone"
  | "program-change"
  | "certification"
  | "opportunity"
  | "cross-org"
  | "career"
  | "education"
  | "board"
  | "recognition";

export type OutcomesOverTime = {
  year: string;
  belonging: number;
  confidence: number;
  connection: number;
  tryNewThings: number;
  leadership: number;
  resilience: number;
};

export type DigitalResumeItem = {
  id: string;
  category: "skill" | "certification" | "achievement" | "experience" | "education";
  title: string;
  issuer: string;
  orgBadge: string;
  date: string;
  description: string;
  verified: boolean;
};

export type ExtendedTimelineEvent = {
  id: string;
  type: ExtendedTimelineType;
  title: string;
  description: string;
  date: string;
  year: number;
  organization: string;
};

export type ProgramStage = {
  name: string;
  sport: string;
  year: string;
  status: "completed" | "active";
};

export type ExtendedYouthProfile = {
  id: string;
  firstName: string;
  lastName: string;
  headline: string;
  currentRole: string;
  education: string;
  age: number;
  grade: number;
  school: string;
  avatar: string;
  status: "active" | "graduated" | "inactive" | "alumni";
  yearsWithStoked: number;
  programsCount: number;
  totalSessions: number;
  communityServiceHours: number;
  outcomesGrowth: number;
  mentorName: string;
  mentorSince: string;
  programProgression: ProgramStage[];
  extendedTimeline: ExtendedTimelineEvent[];
  outcomesOverTime: OutcomesOverTime[];
  digitalResume: DigitalResumeItem[];
};

export type YouthMilestone = {
  id: string;
  title: string;
  date: string;
  icon: "star" | "trophy" | "heart" | "target" | "flame";
};

export type YouthTimelineEvent = {
  id: string;
  type: "enrollment" | "survey" | "session" | "milestone" | "program-change";
  title: string;
  description: string;
  date: string;
};

export type YouthProfile = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  grade: number;
  school: string;
  partnerId: string;
  enrollmentDate: string;
  assignedCoachId: string;
  assignedCoachName: string;
  mentorName: string;
  emergencyContact: { name: string; relationship: string; phone: string };
  programs: string[];
  milestones: YouthMilestone[];
  timeline: YouthTimelineEvent[];
  outcomes: {
    belonging: { pre: number; mid: number; post: number };
    confidence: { pre: number; mid: number; post: number };
    connection: { pre: number; mid: number; post: number };
    tryNewThings: { pre: number; mid: number; post: number };
  };
  avatar: string;
  status: "active" | "graduated" | "inactive";
};

export const youthStats = {
  totalEnrolled: 283,
  enrollmentGrowth: 12,
  avgAge: 14.2,
  genderSplit: { male: 52, female: 41, nonBinary: 7 },
  gradeDistribution: { "6-8": 45, "9-10": 38, "11-12": 17 },
};

export const detailedYouth: YouthProfile[] = [
  {
    id: "youth-1",
    firstName: "Marcus",
    lastName: "Rivera",
    age: 15,
    grade: 10,
    school: "Bronx International High School",
    partnerId: "partner-1",
    enrollmentDate: "2025-09-08",
    assignedCoachId: "coach-1",
    assignedCoachName: "Marcus Johnson",
    mentorName: "Darius Thompson",
    emergencyContact: {
      name: "Carmen Rivera",
      relationship: "Mother",
      phone: "(347) 555-2001",
    },
    programs: ["program-4", "program-7"],
    milestones: [
      {
        id: "ms-1-1",
        title: "First Kickflip Landed",
        date: "2025-10-14",
        icon: "star",
      },
      {
        id: "ms-1-2",
        title: "100% Attendance Month",
        date: "2025-11-01",
        icon: "flame",
      },
      {
        id: "ms-1-3",
        title: "Led First Peer Workshop",
        date: "2025-12-09",
        icon: "trophy",
      },
      {
        id: "ms-1-4",
        title: "Mentor Corps Accepted",
        date: "2026-01-06",
        icon: "target",
      },
      {
        id: "ms-1-5",
        title: "Community Service: 20 Hours",
        date: "2026-01-20",
        icon: "heart",
      },
    ],
    timeline: [
      {
        id: "tl-1-1",
        type: "enrollment",
        title: "Enrolled in Launchpad: Skate Progression",
        description:
          "Marcus joined the Fall 2025 skate cohort at Bronx International. Quiet at first but showed up consistently.",
        date: "2025-09-08",
      },
      {
        id: "tl-1-2",
        type: "survey",
        title: "Pre-Program Survey Completed",
        description:
          "Baseline scores: Belonging 3.2, Confidence 2.9, Connection 3.0, Try New Things 3.1. Expressed interest in skateboarding but low confidence in group settings.",
        date: "2025-09-12",
      },
      {
        id: "tl-1-3",
        type: "session",
        title: "First Park Session",
        description:
          "Attended first off-site session at Mullaly Skatepark. Started connecting with peers over shared beginner struggles.",
        date: "2025-09-22",
      },
      {
        id: "tl-1-4",
        type: "milestone",
        title: "First Kickflip Landed",
        description:
          "After weeks of practice, Marcus landed his first kickflip. Coach noted a visible shift in his confidence and engagement with the group.",
        date: "2025-10-14",
      },
      {
        id: "tl-1-5",
        type: "survey",
        title: "Mid-Program Survey Completed",
        description:
          "Mid scores: Belonging 3.8, Confidence 3.4, Connection 3.5, Try New Things 3.7. Significant growth in belonging (+0.6).",
        date: "2025-11-03",
      },
      {
        id: "tl-1-6",
        type: "milestone",
        title: "Led First Peer Workshop",
        description:
          "Marcus volunteered to lead a trick-tip session for newer participants. Demonstrated emerging leadership and communication skills.",
        date: "2025-12-09",
      },
      {
        id: "tl-1-7",
        type: "survey",
        title: "Post-Program Survey Completed",
        description:
          "Post scores: Belonging 4.1, Confidence 3.7, Connection 3.9, Try New Things 4.2. Strong growth across all domains.",
        date: "2025-12-18",
      },
      {
        id: "tl-1-8",
        type: "program-change",
        title: "Accepted into Pathways: Mentor Corps",
        description:
          "Based on Fall performance, Marcus was invited to join the year-long Mentor Corps program starting January 2026.",
        date: "2026-01-06",
      },
    ],
    outcomes: {
      belonging: { pre: 3.2, mid: 3.8, post: 4.1 },
      confidence: { pre: 2.9, mid: 3.4, post: 3.7 },
      connection: { pre: 3.0, mid: 3.5, post: 3.9 },
      tryNewThings: { pre: 3.1, mid: 3.7, post: 4.2 },
    },
    avatar: "MR",
    status: "active",
  },
  {
    id: "youth-2",
    firstName: "Zara",
    lastName: "Williams",
    age: 13,
    grade: 8,
    school: "Eagle Academy for Young Men",
    partnerId: "partner-3",
    enrollmentDate: "2025-09-08",
    assignedCoachId: "coach-3",
    assignedCoachName: "Devon Clarke",
    mentorName: "Keisha Brown",
    emergencyContact: {
      name: "Denise Williams",
      relationship: "Grandmother",
      phone: "(347) 555-2002",
    },
    programs: ["program-1"],
    milestones: [
      {
        id: "ms-2-1",
        title: "First Board Drop-In",
        date: "2025-10-07",
        icon: "star",
      },
      {
        id: "ms-2-2",
        title: "Peer Buddy Award",
        date: "2025-11-18",
        icon: "heart",
      },
      {
        id: "ms-2-3",
        title: "Completed All 14 Sessions",
        date: "2025-12-19",
        icon: "trophy",
      },
    ],
    timeline: [
      {
        id: "tl-2-1",
        type: "enrollment",
        title: "Enrolled in Risers: Skate Foundations",
        description:
          "Zara enrolled with two friends. Initially nervous but enthusiastic about trying skateboarding.",
        date: "2025-09-08",
      },
      {
        id: "tl-2-2",
        type: "survey",
        title: "Pre-Program Survey Completed",
        description:
          "Baseline scores: Belonging 3.4, Confidence 2.6, Connection 3.2, Try New Things 2.8.",
        date: "2025-09-10",
      },
      {
        id: "tl-2-3",
        type: "session",
        title: "Outdoor Skate Session at Claremont Park",
        description:
          "Zara overcame her fear of the ramp and attempted her first drop-in with coach support.",
        date: "2025-10-07",
      },
      {
        id: "tl-2-4",
        type: "survey",
        title: "Mid-Program Survey Completed",
        description:
          "Mid scores: Belonging 3.9, Confidence 3.1, Connection 3.7, Try New Things 3.5. Notable growth in connection.",
        date: "2025-11-04",
      },
      {
        id: "tl-2-5",
        type: "milestone",
        title: "Peer Buddy Award",
        description:
          "Recognized by coaches for consistently helping newer participants feel welcome and supported.",
        date: "2025-11-18",
      },
      {
        id: "tl-2-6",
        type: "survey",
        title: "Post-Program Survey Completed",
        description:
          "Post scores: Belonging 4.3, Confidence 3.5, Connection 4.1, Try New Things 3.9. One of the highest growth trajectories in the cohort.",
        date: "2025-12-17",
      },
    ],
    outcomes: {
      belonging: { pre: 3.4, mid: 3.9, post: 4.3 },
      confidence: { pre: 2.6, mid: 3.1, post: 3.5 },
      connection: { pre: 3.2, mid: 3.7, post: 4.1 },
      tryNewThings: { pre: 2.8, mid: 3.5, post: 3.9 },
    },
    avatar: "ZW",
    status: "active",
  },
  {
    id: "youth-3",
    firstName: "Jaylen",
    lastName: "Carter",
    age: 16,
    grade: 11,
    school: "Bronx International High School",
    partnerId: "partner-1",
    enrollmentDate: "2024-09-09",
    assignedCoachId: "coach-1",
    assignedCoachName: "Marcus Johnson",
    mentorName: "Andre Mitchell",
    emergencyContact: {
      name: "Tanya Carter",
      relationship: "Mother",
      phone: "(347) 555-2003",
    },
    programs: ["program-7", "program-8"],
    milestones: [
      {
        id: "ms-3-1",
        title: "STOKED Ambassador Selected",
        date: "2025-09-15",
        icon: "trophy",
      },
      {
        id: "ms-3-2",
        title: "Produced First Video Feature",
        date: "2025-10-28",
        icon: "star",
      },
      {
        id: "ms-3-3",
        title: "Mentored 5 Risers Youth",
        date: "2025-11-22",
        icon: "heart",
      },
      {
        id: "ms-3-4",
        title: "College Application Workshop Complete",
        date: "2025-12-12",
        icon: "target",
      },
    ],
    timeline: [
      {
        id: "tl-3-1",
        type: "enrollment",
        title: "Year 2 with STOKED",
        description:
          "Jaylen returned for his second year, stepping into Pathways after completing Launchpad in 2024-25.",
        date: "2025-09-08",
      },
      {
        id: "tl-3-2",
        type: "survey",
        title: "Pre-Program Survey Completed",
        description:
          "Baseline scores already elevated from prior year: Belonging 3.8, Confidence 3.5, Connection 3.6, Try New Things 3.9.",
        date: "2025-09-11",
      },
      {
        id: "tl-3-3",
        type: "milestone",
        title: "Selected as STOKED Ambassador",
        description:
          "Chosen to represent STOKED at partner school assemblies and community events.",
        date: "2025-09-15",
      },
      {
        id: "tl-3-4",
        type: "session",
        title: "Video Production Workshop",
        description:
          "Led a session teaching younger participants how to film and edit skate clips using phone cameras.",
        date: "2025-10-20",
      },
      {
        id: "tl-3-5",
        type: "survey",
        title: "Mid-Program Survey Completed",
        description:
          "Mid scores: Belonging 4.2, Confidence 3.9, Connection 4.0, Try New Things 4.3.",
        date: "2025-11-05",
      },
      {
        id: "tl-3-6",
        type: "milestone",
        title: "Mentored 5 Risers Youth",
        description:
          "Completed peer mentoring for a cohort of 5 younger participants through the Risers program.",
        date: "2025-11-22",
      },
      {
        id: "tl-3-7",
        type: "survey",
        title: "Post-Program Survey (Creative Futures)",
        description:
          "Post scores: Belonging 4.5, Confidence 4.2, Connection 4.3, Try New Things 4.6. Near ceiling on multiple domains.",
        date: "2025-12-16",
      },
      {
        id: "tl-3-8",
        type: "program-change",
        title: "Continuing in Mentor Corps Spring 2026",
        description:
          "Jaylen will continue in the Mentor Corps track while beginning college application support.",
        date: "2026-01-06",
      },
    ],
    outcomes: {
      belonging: { pre: 3.8, mid: 4.2, post: 4.5 },
      confidence: { pre: 3.5, mid: 3.9, post: 4.2 },
      connection: { pre: 3.6, mid: 4.0, post: 4.3 },
      tryNewThings: { pre: 3.9, mid: 4.3, post: 4.6 },
    },
    avatar: "JC",
    status: "active",
  },
  {
    id: "youth-4",
    firstName: "Amara",
    lastName: "Diallo",
    age: 14,
    grade: 9,
    school: "Bronx Lab School",
    partnerId: "partner-2",
    enrollmentDate: "2025-09-08",
    assignedCoachId: "coach-2",
    assignedCoachName: "Aaliyah Reyes",
    mentorName: "Samira Hassan",
    emergencyContact: {
      name: "Fatou Diallo",
      relationship: "Mother",
      phone: "(347) 555-2004",
    },
    programs: ["program-5"],
    milestones: [
      {
        id: "ms-4-1",
        title: "First Chairlift Ride",
        date: "2026-01-18",
        icon: "star",
      },
      {
        id: "ms-4-2",
        title: "Goal-Setting Journal Complete",
        date: "2025-10-30",
        icon: "target",
      },
      {
        id: "ms-4-3",
        title: "Brought a Friend to STOKED",
        date: "2025-11-12",
        icon: "heart",
      },
    ],
    timeline: [
      {
        id: "tl-4-1",
        type: "enrollment",
        title: "Enrolled in Launchpad: Snow Skills",
        description:
          "Amara signed up after hearing about STOKED from a friend. First time trying any action sport.",
        date: "2025-09-08",
      },
      {
        id: "tl-4-2",
        type: "survey",
        title: "Pre-Program Survey Completed",
        description:
          "Baseline scores: Belonging 2.9, Confidence 2.5, Connection 2.7, Try New Things 2.6. Expressed anxiety about trying snowboarding.",
        date: "2025-09-13",
      },
      {
        id: "tl-4-3",
        type: "session",
        title: "In-School Prep Session",
        description:
          "Participated in goal-setting and team-building activities. Began opening up to peers.",
        date: "2025-10-02",
      },
      {
        id: "tl-4-4",
        type: "survey",
        title: "Mid-Program Survey Completed",
        description:
          "Mid scores: Belonging 3.4, Confidence 3.0, Connection 3.3, Try New Things 3.2. Steady improvement.",
        date: "2025-11-06",
      },
      {
        id: "tl-4-5",
        type: "milestone",
        title: "Brought a Friend to STOKED",
        description:
          "Recruited a classmate to join the winter cohort, demonstrating growing ownership and pride in the program.",
        date: "2025-11-12",
      },
      {
        id: "tl-4-6",
        type: "session",
        title: "First Mountain Trip",
        description:
          "Completed her first chairlift ride and linked turns on a green trail. Huge moment of personal courage.",
        date: "2026-01-18",
      },
    ],
    outcomes: {
      belonging: { pre: 2.9, mid: 3.4, post: 3.8 },
      confidence: { pre: 2.5, mid: 3.0, post: 3.4 },
      connection: { pre: 2.7, mid: 3.3, post: 3.7 },
      tryNewThings: { pre: 2.6, mid: 3.2, post: 3.8 },
    },
    avatar: "AD",
    status: "active",
  },
  {
    id: "youth-5",
    firstName: "Elijah",
    lastName: "Morales",
    age: 12,
    grade: 7,
    school: "Mott Hall Bronx High School",
    partnerId: "partner-5",
    enrollmentDate: "2026-01-12",
    assignedCoachId: "coach-3",
    assignedCoachName: "Devon Clarke",
    mentorName: "Miguel Santos",
    emergencyContact: {
      name: "Rosa Morales",
      relationship: "Mother",
      phone: "(347) 555-2005",
    },
    programs: ["program-2"],
    milestones: [
      {
        id: "ms-5-1",
        title: "Completed Orientation",
        date: "2026-01-14",
        icon: "star",
      },
      {
        id: "ms-5-2",
        title: "First Snow Day Trip",
        date: "2026-01-25",
        icon: "flame",
      },
    ],
    timeline: [
      {
        id: "tl-5-1",
        type: "enrollment",
        title: "Enrolled in Risers: Snow Discovery",
        description:
          "Elijah is part of the new Spring 2026 cohort. Never been snowboarding before. High energy and excited to start.",
        date: "2026-01-12",
      },
      {
        id: "tl-5-2",
        type: "survey",
        title: "Pre-Program Survey Completed",
        description:
          "Baseline scores: Belonging 3.0, Confidence 2.7, Connection 2.8, Try New Things 3.3. Eager but uncertain about fitting in.",
        date: "2026-01-14",
      },
      {
        id: "tl-5-3",
        type: "session",
        title: "Orientation and Team Building",
        description:
          "Participated in icebreakers and team exercises. Already forming bonds with two other participants.",
        date: "2026-01-14",
      },
      {
        id: "tl-5-4",
        type: "session",
        title: "In-School Session: Snow Safety & Gear",
        description:
          "Learned about snow safety, proper gear fitting, and what to expect on the mountain.",
        date: "2026-01-21",
      },
      {
        id: "tl-5-5",
        type: "session",
        title: "First Mountain Trip",
        description:
          "Traveled to Mountain Creek for his first snow day. Made it down the bunny slope three times. Huge smile all day.",
        date: "2026-01-25",
      },
      {
        id: "tl-5-6",
        type: "milestone",
        title: "First Snow Day Trip",
        description:
          "Successfully completed his first day on the mountain, building early confidence and excitement for the program.",
        date: "2026-01-25",
      },
    ],
    outcomes: {
      belonging: { pre: 3.0, mid: 0, post: 0 },
      confidence: { pre: 2.7, mid: 0, post: 0 },
      connection: { pre: 2.8, mid: 0, post: 0 },
      tryNewThings: { pre: 3.3, mid: 0, post: 0 },
    },
    avatar: "EM",
    status: "active",
  },
];

export const jordanProfile: ExtendedYouthProfile = {
  id: "youth-jordan",
  firstName: "Jordan",
  lastName: "Davis",
  headline:
    "Walked in quiet at 13. Four years later, he's leading sessions and mentoring the next crew.",
  currentRole: "Mentor Corps Member, STOKED NYC",
  education: "Bronx International High School, Class of 2027",
  age: 17,
  grade: 11,
  school: "Bronx International High School",
  avatar: "JD",
  status: "active",
  yearsWithStoked: 4,
  programsCount: 5,
  totalSessions: 127,
  communityServiceHours: 210,
  outcomesGrowth: 85,
  mentorName: "Darius Thompson",
  mentorSince: "Dec 2024",
  programProgression: [
    { name: "Risers", sport: "Skateboarding", year: "2022-23", status: "completed" },
    { name: "Launchpad", sport: "Skateboarding", year: "2023-24", status: "completed" },
    { name: "Launchpad", sport: "Snowboarding", year: "Winter 2024", status: "completed" },
    { name: "Pathways", sport: "Leadership", year: "2024-25", status: "completed" },
    { name: "Mentor Corps", sport: "All Sports", year: "2025-26", status: "active" },
  ],
  extendedTimeline: [
    {
      id: "jt-1",
      type: "enrollment",
      title: "First Day at STOKED",
      description:
        "Jordan showed up because his older cousin told him they had free skateboards. Barely spoke to anyone. Coach Marcus noticed him sitting on the bench and asked if he wanted to try dropping in.",
      date: "2022-09-12",
      year: 2022,
      organization: "STOKED",
    },
    {
      id: "jt-2",
      type: "survey",
      title: "Pre-Program Survey",
      description:
        "Baseline scores: Belonging 2.4, Confidence 2.1, Connection 2.3, Try New Things 2.5. Coach notes: 'Very quiet, avoids eye contact, but keeps showing up.'",
      date: "2022-09-19",
      year: 2022,
      organization: "STOKED",
    },
    {
      id: "jt-3",
      type: "milestone",
      title: "First Ollie",
      description:
        "Landed his first ollie after 4 weeks of practice. The whole group cheered. First time anyone in the room saw him smile.",
      date: "2022-10-15",
      year: 2022,
      organization: "STOKED",
    },
    {
      id: "jt-4",
      type: "session",
      title: "100% Attendance: Fall Semester",
      description:
        "Didn't miss a single session the entire fall. 14 out of 14. Rain, cold, didn't matter. He was there.",
      date: "2022-12-16",
      year: 2022,
      organization: "STOKED",
    },
    {
      id: "jt-5",
      type: "survey",
      title: "Post-Program Survey: Year 1",
      description:
        "Belonging 3.2 (+0.8), Confidence 2.8 (+0.7), Connection 3.0 (+0.7), Try New Things 3.3 (+0.8). Real growth. Starting to open up in group settings.",
      date: "2023-01-10",
      year: 2023,
      organization: "STOKED",
    },
    {
      id: "jt-6",
      type: "program-change",
      title: "Advanced to Launchpad Skateboarding",
      description:
        "Moved up from Risers based on skill progression, attendance, and coach recommendation. Started working on kickflips and board slides.",
      date: "2023-09-11",
      year: 2023,
      organization: "STOKED",
    },
    {
      id: "jt-7",
      type: "milestone",
      title: "Matched with First Mentor",
      description:
        "Paired with mentor Andre Mitchell. Connected through shared interest in skateboarding and video. Started bi-weekly 1:1 sessions.",
      date: "2023-10-02",
      year: 2023,
      organization: "STOKED",
    },
    {
      id: "jt-8",
      type: "milestone",
      title: "Produced First Skate Edit",
      description:
        "With Andre's help, Jordan filmed and edited his first skateboarding video. Posted it to STOKED's social media. 2,400 views. He couldn't believe people were watching.",
      date: "2023-11-18",
      year: 2023,
      organization: "STOKED",
    },
    {
      id: "jt-9",
      type: "survey",
      title: "Mid-Year Survey: Year 2",
      description:
        "Belonging 3.5, Confidence 3.1, Connection 3.3, Try New Things 3.5. Dipped slightly from end of Year 1 (summer gap), but rebounded quickly.",
      date: "2023-11-06",
      year: 2023,
      organization: "STOKED",
    },
    {
      id: "jt-10",
      type: "program-change",
      title: "Tried Snowboarding: Launchpad Snow",
      description:
        "First time on a mountain. Fell constantly. Got back up every time. By the third trip he was linking turns on blue runs. Coach: 'The resilience this kid has is unreal.'",
      date: "2024-01-20",
      year: 2024,
      organization: "STOKED",
    },
    {
      id: "jt-11",
      type: "recognition",
      title: "STOKED Ambassador Selected",
      description:
        "Selected as one of 5 youth ambassadors for the year. Spoke at a partner school assembly about what STOKED meant to him. 150 people in the room. Hands were shaking but he did it.",
      date: "2024-03-15",
      year: 2024,
      organization: "STOKED",
    },
    {
      id: "jt-12",
      type: "cross-org",
      title: "Community Service: Boys & Girls Club",
      description:
        "Volunteered to teach skateboarding basics at a local Boys & Girls Club through a STOKED partnership. 8 sessions, 12 kids. His first time being the teacher.",
      date: "2024-05-10",
      year: 2024,
      organization: "Boys & Girls Club",
    },
    {
      id: "jt-13",
      type: "survey",
      title: "Post-Program Survey: Year 2",
      description:
        "Belonging 3.8, Confidence 3.5, Connection 3.6, Try New Things 3.9. Biggest jump in confidence. The ambassador experience and community teaching made the difference.",
      date: "2024-06-14",
      year: 2024,
      organization: "STOKED",
    },
    {
      id: "jt-14",
      type: "program-change",
      title: "Entered Pathways Leadership",
      description:
        "Moved into the Pathways track: youth leadership council, goal-setting workshops, and career exploration. A different Jordan than the kid who walked in two years ago.",
      date: "2024-09-09",
      year: 2024,
      organization: "STOKED",
    },
    {
      id: "jt-15",
      type: "certification",
      title: "Youth Leadership Facilitator Certified",
      description:
        "Completed STOKED's youth facilitation training. Now certified to co-lead Risers sessions and peer workshops.",
      date: "2024-10-25",
      year: 2024,
      organization: "STOKED",
    },
    {
      id: "jt-16",
      type: "milestone",
      title: "Led First Community Workshop",
      description:
        "Facilitated a goal-setting workshop for 18 Risers participants. Used personal story to connect. Multiple youth stayed after to talk to him.",
      date: "2024-11-15",
      year: 2024,
      organization: "STOKED",
    },
    {
      id: "jt-17",
      type: "milestone",
      title: "New Mentor Match: Darius Thompson",
      description:
        "Matched with Darius, a former STOKED youth turned Lead Mentor. Both grew up in the same neighborhood. Darius gets it in a way no one else does.",
      date: "2024-12-01",
      year: 2024,
      organization: "STOKED",
    },
    {
      id: "jt-18",
      type: "recognition",
      title: "Spoke at STOKED Annual Fundraiser",
      description:
        "Addressed 300 donors and supporters at the annual gala. Talked about going from the kid on the bench to the kid leading sessions. Standing ovation.",
      date: "2025-02-22",
      year: 2025,
      organization: "STOKED",
    },
    {
      id: "jt-19",
      type: "milestone",
      title: "Peer Mentored 3 Risers Youth",
      description:
        "Formally mentored 3 first-year Risers participants over the spring. All three completed the program. One of them, Marcus Rivera, is now in Launchpad.",
      date: "2025-04-30",
      year: 2025,
      organization: "STOKED",
    },
    {
      id: "jt-20",
      type: "certification",
      title: "CPR & First Aid Certified",
      description:
        "Completed American Red Cross certification through STOKED's partnership. Required for Mentor Corps field trips.",
      date: "2025-05-10",
      year: 2025,
      organization: "American Red Cross",
    },
    {
      id: "jt-21",
      type: "survey",
      title: "Post-Program Survey: Year 3",
      description:
        "Belonging 4.2, Confidence 4.0, Connection 4.1, Try New Things 4.3, Leadership 4.0, Resilience 4.1. Across-the-board growth. Leadership scores emerged as a new strength.",
      date: "2025-06-13",
      year: 2025,
      organization: "STOKED",
    },
    {
      id: "jt-22",
      type: "program-change",
      title: "Entered Mentor Corps",
      description:
        "Accepted into STOKED's most advanced track. Responsible for co-leading sessions, mentoring younger participants, and representing the program externally.",
      date: "2025-09-08",
      year: 2025,
      organization: "STOKED",
    },
    {
      id: "jt-23",
      type: "career",
      title: "First Job: Homage Brooklyn Skate Shop",
      description:
        "Got his first paid job through the STOKED network. Working weekends at a local skate shop. Applying everything he learned about showing up and building relationships.",
      date: "2025-10-01",
      year: 2025,
      organization: "Homage Brooklyn",
    },
    {
      id: "jt-24",
      type: "milestone",
      title: "200+ Community Service Hours",
      description:
        "Hit 210 hours of documented community service across STOKED sessions, Boys & Girls Club, and school events. The hours are verified in the system.",
      date: "2025-12-15",
      year: 2025,
      organization: "STOKED",
    },
    {
      id: "jt-25",
      type: "session",
      title: "Co-Facilitated New Cohort Orientation",
      description:
        "Led the orientation for the Spring 2026 Risers cohort. 20 new youth. Jordan ran the icebreakers and told his story. Three kids came up to him after and asked if he'd be their mentor.",
      date: "2026-01-13",
      year: 2026,
      organization: "STOKED",
    },
    {
      id: "jt-26",
      type: "survey",
      title: "Mid-Year Survey: Year 4",
      description:
        "Belonging 4.5, Confidence 4.3, Connection 4.4, Try New Things 4.6, Leadership 4.5, Resilience 4.4. Four years of data. The trajectory is undeniable.",
      date: "2026-01-20",
      year: 2026,
      organization: "STOKED",
    },
    {
      id: "jt-27",
      type: "education",
      title: "College Applications Submitted",
      description:
        "Applied to 6 colleges. STOKED wrote a recommendation letter. Essay topic: how learning to fall on a skateboard taught him to get back up in life.",
      date: "2026-01-15",
      year: 2026,
      organization: "Bronx International HS",
    },
  ],
  outcomesOverTime: [
    { year: "Fall '22", belonging: 2.4, confidence: 2.1, connection: 2.3, tryNewThings: 2.5, leadership: 1.5, resilience: 2.0 },
    { year: "Spr '23", belonging: 3.2, confidence: 2.8, connection: 3.0, tryNewThings: 3.3, leadership: 2.2, resilience: 2.8 },
    { year: "Fall '23", belonging: 3.0, confidence: 2.7, connection: 2.9, tryNewThings: 3.1, leadership: 2.4, resilience: 2.7 },
    { year: "Spr '24", belonging: 3.8, confidence: 3.5, connection: 3.6, tryNewThings: 3.9, leadership: 3.2, resilience: 3.4 },
    { year: "Fall '24", belonging: 3.7, confidence: 3.4, connection: 3.5, tryNewThings: 3.8, leadership: 3.3, resilience: 3.3 },
    { year: "Spr '25", belonging: 4.2, confidence: 4.0, connection: 4.1, tryNewThings: 4.3, leadership: 4.0, resilience: 4.1 },
    { year: "Fall '25", belonging: 4.1, confidence: 3.9, connection: 4.0, tryNewThings: 4.2, leadership: 4.1, resilience: 4.0 },
    { year: "Jan '26", belonging: 4.5, confidence: 4.3, connection: 4.4, tryNewThings: 4.6, leadership: 4.5, resilience: 4.4 },
  ],
  digitalResume: [
    {
      id: "dr-1",
      category: "experience",
      title: "Mentor Corps Member",
      issuer: "STOKED NYC",
      orgBadge: "STOKED",
      date: "2025 - Present",
      description: "Co-leads sessions, mentors younger participants, represents STOKED at events.",
      verified: true,
    },
    {
      id: "dr-2",
      category: "experience",
      title: "Skate Shop Associate",
      issuer: "Homage Brooklyn",
      orgBadge: "Homage",
      date: "Oct 2025 - Present",
      description: "Part-time retail position. First paid job, connected through STOKED network.",
      verified: true,
    },
    {
      id: "dr-3",
      category: "experience",
      title: "Volunteer Skateboarding Instructor",
      issuer: "Boys & Girls Club of the Bronx",
      orgBadge: "B&GC",
      date: "Spring 2024",
      description: "Taught skateboarding basics to 12 youth over 8 sessions through STOKED partnership.",
      verified: true,
    },
    {
      id: "dr-4",
      category: "education",
      title: "Bronx International High School",
      issuer: "NYC DOE",
      orgBadge: "BIHS",
      date: "2023 - 2027 (Expected)",
      description: "Junior, Class of 2027. College applications submitted to 6 schools.",
      verified: true,
    },
    {
      id: "dr-5",
      category: "certification",
      title: "Youth Leadership Facilitator",
      issuer: "STOKED",
      orgBadge: "STOKED",
      date: "Oct 2024",
      description: "Certified to co-lead Risers sessions and peer workshops. Completed 20-hour training.",
      verified: true,
    },
    {
      id: "dr-6",
      category: "certification",
      title: "CPR & First Aid",
      issuer: "American Red Cross",
      orgBadge: "Red Cross",
      date: "May 2025",
      description: "Certified through STOKED's partnership. Valid through May 2027.",
      verified: true,
    },
    {
      id: "dr-7",
      category: "achievement",
      title: "STOKED Ambassador",
      issuer: "STOKED",
      orgBadge: "STOKED",
      date: "2024",
      description: "Selected as youth ambassador. Spoke at school assemblies and the annual fundraiser.",
      verified: true,
    },
    {
      id: "dr-8",
      category: "achievement",
      title: "210 Community Service Hours",
      issuer: "STOKED",
      orgBadge: "STOKED",
      date: "2022 - Present",
      description: "Documented and verified service hours across STOKED, Boys & Girls Club, and school events.",
      verified: true,
    },
    {
      id: "dr-9",
      category: "achievement",
      title: "Peer Mentored 3 Youth",
      issuer: "STOKED",
      orgBadge: "STOKED",
      date: "Spring 2025",
      description: "Formally mentored 3 first-year Risers participants. All three completed the program.",
      verified: true,
    },
    {
      id: "dr-10",
      category: "achievement",
      title: "Annual Gala Speaker",
      issuer: "STOKED",
      orgBadge: "STOKED",
      date: "Feb 2025",
      description: "Addressed 300 donors and supporters. Standing ovation.",
      verified: true,
    },
    {
      id: "dr-11",
      category: "skill",
      title: "Skateboarding (Advanced)",
      issuer: "STOKED",
      orgBadge: "STOKED",
      date: "2022 - Present",
      description: "4 years of progression. Risers through Mentor Corps. Competent instructor.",
      verified: true,
    },
    {
      id: "dr-12",
      category: "skill",
      title: "Snowboarding (Intermediate)",
      issuer: "STOKED",
      orgBadge: "STOKED",
      date: "2024",
      description: "Completed Launchpad Snow. Comfortable on blue runs. Linking turns confidently.",
      verified: true,
    },
    {
      id: "dr-13",
      category: "skill",
      title: "Public Speaking & Facilitation",
      issuer: "STOKED",
      orgBadge: "STOKED",
      date: "2024 - Present",
      description: "From barely speaking to addressing 300 people. Leads workshops and orientations.",
      verified: true,
    },
    {
      id: "dr-14",
      category: "skill",
      title: "Video Production",
      issuer: "STOKED",
      orgBadge: "STOKED",
      date: "2023 - Present",
      description: "Films and edits skate content. First edit got 2,400 views on STOKED's social media.",
      verified: true,
    },
  ],
};
