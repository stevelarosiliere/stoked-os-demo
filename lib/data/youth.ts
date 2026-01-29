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

export type ExtendedYouthProfile = {
  id: string;
  firstName: string;
  lastName: string;
  headline: string;
  currentRole: string;
  education: string;
  avatar: string;
  status: "active" | "graduated" | "inactive" | "alumni";
  yearsWithStoked: number;
  programsCount: number;
  organizationsCount: number;
  outcomesGrowth: number;
  organizations: string[];
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

export const carlosProfile: ExtendedYouthProfile = {
  id: "youth-carlos",
  firstName: "Carlos",
  lastName: "Mendez",
  headline:
    "Met STOKED at 15. Engineer at J&J. Patent holder. Now on the board.",
  currentRole: "Mechanical Engineer, Johnson & Johnson",
  education: "BS Mechanical Engineering, UC San Diego (UC Berkeley transfer)",
  avatar: "CM",
  status: "alumni",
  yearsWithStoked: 15,
  programsCount: 3,
  organizationsCount: 4,
  outcomesGrowth: 92,
  organizations: ["STOKED", "UC Berkeley", "UC San Diego", "Johnson & Johnson"],
  extendedTimeline: [
    {
      id: "ct-1",
      type: "enrollment",
      title: "First STOKED Session",
      description:
        "Carlos walked into his first skateboarding session at age 15. Shy, skeptical, but curious. A coach noticed him watching from the edge and handed him a board.",
      date: "2011-09-15",
      year: 2011,
      organization: "STOKED",
    },
    {
      id: "ct-2",
      type: "milestone",
      title: "Landed First Kickflip",
      description:
        "After weeks of falling, Carlos landed his first kickflip. The crew erupted. That moment changed everything about how he saw himself.",
      date: "2011-11-20",
      year: 2011,
      organization: "STOKED",
    },
    {
      id: "ct-3",
      type: "survey",
      title: "First Year Outcomes Recorded",
      description:
        "Belonging: 3.2, Confidence: 2.8. Low starting point, but engagement was consistent. Coaches noted growing leadership instincts.",
      date: "2012-06-01",
      year: 2012,
      organization: "STOKED",
    },
    {
      id: "ct-4",
      type: "program-change",
      title: "Advanced to Launchpad",
      description:
        "Moved from Risers to Launchpad skateboarding. Started mentoring younger participants on weekends.",
      date: "2012-09-10",
      year: 2012,
      organization: "STOKED",
    },
    {
      id: "ct-5",
      type: "recognition",
      title: "STOKED Ambassador Selected",
      description:
        "Selected as one of 5 youth ambassadors. Spoke at a fundraiser in front of 200 people. First time he'd ever spoken publicly.",
      date: "2013-04-20",
      year: 2013,
      organization: "STOKED",
    },
    {
      id: "ct-6",
      type: "certification",
      title: "Youth Leadership Certification",
      description:
        "Completed STOKED's first youth leadership facilitation program. Now qualified to co-lead sessions.",
      date: "2014-01-15",
      year: 2014,
      organization: "STOKED",
    },
    {
      id: "ct-7",
      type: "opportunity",
      title: "Summer STEM Internship",
      description:
        "STOKED connected Carlos to a summer engineering internship through a corporate partner. First exposure to professional engineering.",
      date: "2014-06-15",
      year: 2014,
      organization: "STOKED",
    },
    {
      id: "ct-8",
      type: "education",
      title: "Accepted to UC Berkeley",
      description:
        "Carlos was accepted to UC Berkeley's College of Engineering. STOKED recommendation letter cited his leadership trajectory and growth.",
      date: "2015-03-28",
      year: 2015,
      organization: "UC Berkeley",
    },
    {
      id: "ct-9",
      type: "cross-org",
      title: "STOKED Alumni Network Launch",
      description:
        "Carlos was one of the founding members of STOKED's alumni network, staying connected while in college.",
      date: "2015-09-01",
      year: 2015,
      organization: "STOKED",
    },
    {
      id: "ct-10",
      type: "education",
      title: "Transferred to UC San Diego",
      description:
        "Transferred to UCSD for their stronger mechanical engineering program. Maintained alumni involvement remotely.",
      date: "2017-09-01",
      year: 2017,
      organization: "UC San Diego",
    },
    {
      id: "ct-11",
      type: "milestone",
      title: "First Engineering Publication",
      description:
        "Co-authored a paper on sustainable materials in the UCSD engineering journal. Applied lessons from STOKED's environmental stewardship program.",
      date: "2018-05-15",
      year: 2018,
      organization: "UC San Diego",
    },
    {
      id: "ct-12",
      type: "education",
      title: "BS Mechanical Engineering",
      description:
        "Graduated from UC San Diego with honors. First in his family to earn a college degree.",
      date: "2019-06-14",
      year: 2019,
      organization: "UC San Diego",
    },
    {
      id: "ct-13",
      type: "career",
      title: "Joined Johnson & Johnson",
      description:
        "Hired as a mechanical engineer at Johnson & Johnson's medical devices division. The STEM internship from 2014 was the connection.",
      date: "2019-08-01",
      year: 2019,
      organization: "Johnson & Johnson",
    },
    {
      id: "ct-14",
      type: "recognition",
      title: "STOKED 10-Year Impact Story",
      description:
        "Featured in STOKED's annual report as a 10-year success story. Spoke at the gala about the power of mentorship.",
      date: "2021-11-15",
      year: 2021,
      organization: "STOKED",
    },
    {
      id: "ct-15",
      type: "career",
      title: "First Patent Filed",
      description:
        "Co-inventor on a patent for a novel surgical instrument mechanism. Engineering meets impact.",
      date: "2022-03-10",
      year: 2022,
      organization: "Johnson & Johnson",
    },
    {
      id: "ct-16",
      type: "career",
      title: "Patent Granted",
      description:
        "US Patent #11,234,567 granted. A minimally invasive surgical tool that reduces recovery time by 30%.",
      date: "2023-01-20",
      year: 2023,
      organization: "Johnson & Johnson",
    },
    {
      id: "ct-17",
      type: "cross-org",
      title: "Started Mentoring STOKED Youth Remotely",
      description:
        "Began virtual mentoring sessions with current STOKED participants. Sharing his engineering journey.",
      date: "2023-06-01",
      year: 2023,
      organization: "STOKED",
    },
    {
      id: "ct-18",
      type: "recognition",
      title: "J&J Innovation Award",
      description:
        "Received Johnson & Johnson's internal innovation award for contributions to surgical device development.",
      date: "2024-09-15",
      year: 2024,
      organization: "Johnson & Johnson",
    },
    {
      id: "ct-19",
      type: "board",
      title: "Joined STOKED Board of Directors",
      description:
        "Invited to join the STOKED board. Full circle: from youth participant to board member, shaping the organization's future.",
      date: "2025-01-15",
      year: 2025,
      organization: "STOKED",
    },
    {
      id: "ct-20",
      type: "milestone",
      title: "15-Year STOKED Anniversary",
      description:
        "Fifteen years since Carlos first picked up a skateboard at STOKED. Engineer, patent holder, board member. The pipeline is real.",
      date: "2026-01-15",
      year: 2026,
      organization: "STOKED",
    },
  ],
  outcomesOverTime: [
    { year: "2011", belonging: 2.5, confidence: 2.3, connection: 2.4, tryNewThings: 2.6, leadership: 1.8, resilience: 2.2 },
    { year: "2012", belonging: 3.2, confidence: 2.8, connection: 3.0, tryNewThings: 3.3, leadership: 2.4, resilience: 2.8 },
    { year: "2013", belonging: 3.8, confidence: 3.4, connection: 3.5, tryNewThings: 3.8, leadership: 3.2, resilience: 3.4 },
    { year: "2014", belonging: 4.0, confidence: 3.8, connection: 3.9, tryNewThings: 4.1, leadership: 3.8, resilience: 3.7 },
    { year: "2015", belonging: 4.2, confidence: 4.0, connection: 4.1, tryNewThings: 4.3, leadership: 4.0, resilience: 4.0 },
    { year: "2019", belonging: 4.5, confidence: 4.4, connection: 4.3, tryNewThings: 4.5, leadership: 4.4, resilience: 4.5 },
    { year: "2023", belonging: 4.7, confidence: 4.6, connection: 4.5, tryNewThings: 4.7, leadership: 4.7, resilience: 4.7 },
    { year: "2026", belonging: 4.8, confidence: 4.8, connection: 4.7, tryNewThings: 4.8, leadership: 4.9, resilience: 4.8 },
  ],
  digitalResume: [
    {
      id: "dr-1",
      category: "certification",
      title: "Youth Leadership Facilitator",
      issuer: "STOKED",
      orgBadge: "STOKED",
      date: "2014",
      description: "Certified to co-lead youth sessions and workshops.",
      verified: true,
    },
    {
      id: "dr-2",
      category: "achievement",
      title: "STOKED Ambassador",
      issuer: "STOKED",
      orgBadge: "STOKED",
      date: "2013",
      description: "Selected as youth ambassador representing STOKED at public events.",
      verified: true,
    },
    {
      id: "dr-3",
      category: "education",
      title: "BS Mechanical Engineering (Honors)",
      issuer: "UC San Diego",
      orgBadge: "UCSD",
      date: "2019",
      description: "First-generation college graduate. Transferred from UC Berkeley.",
      verified: true,
    },
    {
      id: "dr-4",
      category: "experience",
      title: "Mechanical Engineer",
      issuer: "Johnson & Johnson",
      orgBadge: "J&J",
      date: "2019 - Present",
      description: "Medical devices division. Focus on minimally invasive surgical tools.",
      verified: true,
    },
    {
      id: "dr-5",
      category: "achievement",
      title: "US Patent #11,234,567",
      issuer: "United States Patent Office",
      orgBadge: "USPTO",
      date: "2023",
      description: "Co-inventor of a surgical instrument reducing recovery time by 30%.",
      verified: true,
    },
    {
      id: "dr-6",
      category: "achievement",
      title: "J&J Innovation Award",
      issuer: "Johnson & Johnson",
      orgBadge: "J&J",
      date: "2024",
      description: "Internal recognition for contributions to surgical device development.",
      verified: true,
    },
    {
      id: "dr-7",
      category: "skill",
      title: "Skateboarding & Action Sports",
      issuer: "STOKED",
      orgBadge: "STOKED",
      date: "2011",
      description: "Advanced skateboarding. Completed Risers, Launchpad, and Pathways programs.",
      verified: true,
    },
    {
      id: "dr-8",
      category: "experience",
      title: "Board Member",
      issuer: "STOKED",
      orgBadge: "STOKED",
      date: "2025 - Present",
      description: "Serving on the board of directors, shaping organizational strategy.",
      verified: true,
    },
    {
      id: "dr-9",
      category: "certification",
      title: "STOKED Mentor Certified",
      issuer: "STOKED",
      orgBadge: "STOKED",
      date: "2023",
      description: "Completed Mentor 101 to virtually mentor current participants.",
      verified: true,
    },
    {
      id: "dr-10",
      category: "education",
      title: "Engineering (Transfer)",
      issuer: "UC Berkeley",
      orgBadge: "UCB",
      date: "2015 - 2017",
      description: "Began engineering studies at UC Berkeley before transferring to UCSD.",
      verified: true,
    },
  ],
};
