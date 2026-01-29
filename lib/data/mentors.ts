export type MentorJourneyStage = "New" | "Active" | "Lead" | "Coach" | "Alumni";

export type MentorStatus = "active" | "inactive" | "onboarding";

export type MenteeMatch = {
  youthId: string;
  youthName: string;
  matchQuality: "Excellent" | "Good" | "Fair";
  sessions: number;
  outcomesImprovement: number;
  status: "active" | "completed";
};

export type MentorTimelineEvent = {
  id: string;
  date: string;
  title: string;
  description: string;
  type: "onboarding" | "certification" | "match" | "milestone" | "recognition";
};

export type Mentor = {
  id: string;
  firstName: string;
  lastName: string;
  avatar: string;
  email: string;
  stage: MentorJourneyStage;
  status: MentorStatus;
  bio: string;
  skills: string[];
  interests: string[];
  availability: string;
  hoursLogged: number;
  currentMentees: number;
  impactScore: number;
  retentionRisk: "low" | "medium" | "high";
  certifications: string[];
  trainingProgress: { moduleId: string; moduleName: string; progress: number }[];
  mentees: MenteeMatch[];
  timeline: MentorTimelineEvent[];
  hoursOverTime: { month: string; hours: number }[];
  menteeOutcomes: { metric: string; before: number; after: number }[];
};

export type PotentialMatch = {
  id: string;
  mentorId: string;
  mentorName: string;
  mentorAvatar: string;
  youthId: string;
  youthName: string;
  youthAvatar: string;
  compatibilityScore: number;
  sharedInterests: string[];
  reason: string;
};

export const mentorStats = {
  totalMentors: 10,
  activeMentors: 6,
  avgHours: 142,
  retentionRate: 85,
};

export const mentors: Mentor[] = [
  {
    id: "mentor-1",
    firstName: "Darius",
    lastName: "Thompson",
    avatar: "DT",
    email: "darius.t@stoked.org",
    stage: "Lead",
    status: "active",
    bio: "Former STOKED youth who came through the Risers program at age 14. Now a Lead Mentor with 245 hours logged. Living proof of the pipeline.",
    skills: ["Skateboarding", "Leadership", "Youth Development"],
    interests: ["Skate culture", "Community organizing", "Music production"],
    availability: "Weekdays after 4pm, Saturdays",
    hoursLogged: 245,
    currentMentees: 2,
    impactScore: 92,
    retentionRisk: "low",
    certifications: ["Mentor 101 Certified", "Mental Health First Aid Certified", "Skate Coach Certified"],
    trainingProgress: [
      { moduleId: "training-1", moduleName: "Mentor 101 Foundations", progress: 100 },
      { moduleId: "training-2", moduleName: "Mental Health First Aid", progress: 100 },
      { moduleId: "training-3", moduleName: "Skate Coaching", progress: 100 },
      { moduleId: "training-6", moduleName: "1:1 Mentoring Protocol", progress: 85 },
    ],
    mentees: [
      { youthId: "youth-1", youthName: "Marcus Rivera", matchQuality: "Excellent", sessions: 14, outcomesImprovement: 28, status: "active" },
      { youthId: "youth-3", youthName: "Jaylen Carter", matchQuality: "Good", sessions: 22, outcomesImprovement: 18, status: "active" },
    ],
    timeline: [
      { id: "mt-1-1", date: "2019-09-08", title: "Joined STOKED as Youth", description: "Enrolled in Risers skateboarding at age 14.", type: "onboarding" },
      { id: "mt-1-2", date: "2021-06-15", title: "Graduated to Pathways", description: "Completed Launchpad and entered Pathways leadership track.", type: "milestone" },
      { id: "mt-1-3", date: "2022-01-10", title: "Became Volunteer Mentor", description: "Started mentoring younger STOKED participants.", type: "onboarding" },
      { id: "mt-1-4", date: "2022-06-01", title: "Mentor 101 Certified", description: "Completed all foundation training requirements.", type: "certification" },
      { id: "mt-1-5", date: "2023-03-15", title: "Promoted to Lead Mentor", description: "Recognized for exceptional commitment and impact.", type: "recognition" },
      { id: "mt-1-6", date: "2024-09-01", title: "Matched with Marcus Rivera", description: "Paired with new Launchpad participant.", type: "match" },
      { id: "mt-1-7", date: "2025-09-08", title: "Skate Coach Certified", description: "Completed advanced skate coaching training.", type: "certification" },
    ],
    hoursOverTime: [
      { month: "Mar 25", hours: 18 },
      { month: "Apr 25", hours: 22 },
      { month: "May 25", hours: 15 },
      { month: "Jun 25", hours: 20 },
      { month: "Jul 25", hours: 12 },
      { month: "Aug 25", hours: 8 },
      { month: "Sep 25", hours: 24 },
      { month: "Oct 25", hours: 26 },
      { month: "Nov 25", hours: 22 },
      { month: "Dec 25", hours: 18 },
      { month: "Jan 26", hours: 20 },
    ],
    menteeOutcomes: [
      { metric: "Belonging", before: 3.2, after: 4.1 },
      { metric: "Confidence", before: 2.9, after: 3.7 },
      { metric: "Connection", before: 3.0, after: 3.9 },
      { metric: "Try New Things", before: 3.1, after: 4.2 },
    ],
  },
  {
    id: "mentor-2",
    firstName: "Keisha",
    lastName: "Brown",
    avatar: "KB",
    email: "keisha.b@stoked.org",
    stage: "Active",
    status: "active",
    bio: "Passionate about snow sports and surf culture. Joined STOKED as a volunteer and stayed for the mission. Two years in and deeply committed.",
    skills: ["Snowboarding", "Surfing", "Conflict Resolution"],
    interests: ["Snow sports", "Surf culture", "Environmental advocacy"],
    availability: "Weekends, some evenings",
    hoursLogged: 156,
    currentMentees: 1,
    impactScore: 78,
    retentionRisk: "low",
    certifications: ["Mentor 101 Certified", "Mental Health First Aid Certified"],
    trainingProgress: [
      { moduleId: "training-1", moduleName: "Mentor 101 Foundations", progress: 100 },
      { moduleId: "training-2", moduleName: "Mental Health First Aid", progress: 100 },
      { moduleId: "training-4", moduleName: "Snow Coaching", progress: 40 },
      { moduleId: "training-5", moduleName: "Surf Coaching", progress: 30 },
    ],
    mentees: [
      { youthId: "youth-2", youthName: "Zara Williams", matchQuality: "Good", sessions: 10, outcomesImprovement: 22, status: "active" },
    ],
    timeline: [
      { id: "mt-2-1", date: "2024-01-15", title: "Joined as Volunteer", description: "Started volunteering with STOKED NYC winter programs.", type: "onboarding" },
      { id: "mt-2-2", date: "2024-03-20", title: "Mentor 101 Certified", description: "Completed foundation training.", type: "certification" },
      { id: "mt-2-3", date: "2024-09-01", title: "Matched with Zara Williams", description: "First mentee assignment.", type: "match" },
      { id: "mt-2-4", date: "2025-01-10", title: "Mental Health First Aid Certified", description: "Completed MHFA training.", type: "certification" },
    ],
    hoursOverTime: [
      { month: "Mar 25", hours: 14 },
      { month: "Apr 25", hours: 16 },
      { month: "May 25", hours: 12 },
      { month: "Jun 25", hours: 18 },
      { month: "Jul 25", hours: 10 },
      { month: "Aug 25", hours: 8 },
      { month: "Sep 25", hours: 16 },
      { month: "Oct 25", hours: 18 },
      { month: "Nov 25", hours: 14 },
      { month: "Dec 25", hours: 12 },
      { month: "Jan 26", hours: 14 },
    ],
    menteeOutcomes: [
      { metric: "Belonging", before: 3.4, after: 4.3 },
      { metric: "Confidence", before: 2.6, after: 3.5 },
      { metric: "Connection", before: 3.2, after: 4.1 },
      { metric: "Try New Things", before: 2.8, after: 3.9 },
    ],
  },
  {
    id: "mentor-3",
    firstName: "Miguel",
    lastName: "Santos",
    avatar: "MS",
    email: "miguel.s@stoked.org",
    stage: "New",
    status: "onboarding",
    bio: "Just completed Mentor 101 and eager to start. Background in education and youth work. Fluent in Spanish and English.",
    skills: ["Bilingual", "Education", "Youth Work"],
    interests: ["Skateboarding", "Community gardens", "Teaching"],
    availability: "Weekdays after 3pm, weekends",
    hoursLogged: 12,
    currentMentees: 1,
    impactScore: 0,
    retentionRisk: "low",
    certifications: ["Mentor 101 Certified"],
    trainingProgress: [
      { moduleId: "training-1", moduleName: "Mentor 101 Foundations", progress: 100 },
      { moduleId: "training-2", moduleName: "Mental Health First Aid", progress: 75 },
    ],
    mentees: [
      { youthId: "youth-5", youthName: "Elijah Morales", matchQuality: "Good", sessions: 3, outcomesImprovement: 0, status: "active" },
    ],
    timeline: [
      { id: "mt-3-1", date: "2025-11-01", title: "Application Submitted", description: "Applied to become a STOKED mentor.", type: "onboarding" },
      { id: "mt-3-2", date: "2025-11-15", title: "Background Check Cleared", description: "Passed all screening requirements.", type: "onboarding" },
      { id: "mt-3-3", date: "2025-12-20", title: "Mentor 101 Certified", description: "Completed foundation training.", type: "certification" },
      { id: "mt-3-4", date: "2026-01-12", title: "Matched with Elijah Morales", description: "First mentee assignment.", type: "match" },
    ],
    hoursOverTime: [
      { month: "Nov 25", hours: 4 },
      { month: "Dec 25", hours: 4 },
      { month: "Jan 26", hours: 4 },
    ],
    menteeOutcomes: [],
  },
  {
    id: "mentor-4",
    firstName: "Lisa",
    lastName: "Park",
    avatar: "LP",
    email: "lisa.p@stoked.org",
    stage: "Active",
    status: "inactive",
    bio: "Experienced mentor who has been less active recently. Strong track record but hasn't logged hours in 60 days.",
    skills: ["Snowboarding", "Goal Setting", "Career Planning"],
    interests: ["Snow sports", "Career coaching", "Photography"],
    availability: "Limited",
    hoursLogged: 89,
    currentMentees: 0,
    impactScore: 65,
    retentionRisk: "high",
    certifications: ["Mentor 101 Certified"],
    trainingProgress: [
      { moduleId: "training-1", moduleName: "Mentor 101 Foundations", progress: 100 },
      { moduleId: "training-2", moduleName: "Mental Health First Aid", progress: 50 },
    ],
    mentees: [
      { youthId: "youth-prev-1", youthName: "Jordan Blake", matchQuality: "Fair", sessions: 8, outcomesImprovement: 12, status: "completed" },
    ],
    timeline: [
      { id: "mt-4-1", date: "2023-09-01", title: "Joined as Volunteer", description: "Started mentoring with winter programs.", type: "onboarding" },
      { id: "mt-4-2", date: "2023-11-15", title: "Mentor 101 Certified", description: "Completed foundation training.", type: "certification" },
      { id: "mt-4-3", date: "2024-01-10", title: "Matched with Jordan Blake", description: "First mentee pairing.", type: "match" },
      { id: "mt-4-4", date: "2025-11-01", title: "60-Day Inactivity Flag", description: "No hours logged in 60 days. System flagged for follow-up.", type: "milestone" },
    ],
    hoursOverTime: [
      { month: "Mar 25", hours: 10 },
      { month: "Apr 25", hours: 12 },
      { month: "May 25", hours: 8 },
      { month: "Jun 25", hours: 6 },
      { month: "Jul 25", hours: 4 },
      { month: "Aug 25", hours: 2 },
      { month: "Sep 25", hours: 0 },
      { month: "Oct 25", hours: 0 },
      { month: "Nov 25", hours: 0 },
      { month: "Dec 25", hours: 0 },
      { month: "Jan 26", hours: 0 },
    ],
    menteeOutcomes: [
      { metric: "Belonging", before: 3.0, after: 3.4 },
      { metric: "Confidence", before: 2.8, after: 3.1 },
      { metric: "Connection", before: 2.9, after: 3.3 },
      { metric: "Try New Things", before: 3.0, after: 3.3 },
    ],
  },
  {
    id: "mentor-5",
    firstName: "Carmen",
    lastName: "Reyes",
    avatar: "CR",
    email: "carmen.r@stoked.org",
    stage: "Coach",
    status: "active",
    bio: "Longest-tenured mentor in the network. Now trains other mentors and manages mentor cohorts. The backbone of the STOKED mentoring system.",
    skills: ["Mentor Training", "Program Design", "Community Building"],
    interests: ["Skateboarding", "Youth advocacy", "Nonprofit leadership"],
    availability: "Full time",
    hoursLogged: 520,
    currentMentees: 1,
    impactScore: 98,
    retentionRisk: "low",
    certifications: ["Mentor 101 Certified", "Mental Health First Aid Certified", "1:1 Protocol Certified", "Youth Facilitator Certified"],
    trainingProgress: [
      { moduleId: "training-1", moduleName: "Mentor 101 Foundations", progress: 100 },
      { moduleId: "training-2", moduleName: "Mental Health First Aid", progress: 100 },
      { moduleId: "training-6", moduleName: "1:1 Mentoring Protocol", progress: 100 },
      { moduleId: "training-7", moduleName: "Youth Leadership Facilitation", progress: 100 },
    ],
    mentees: [
      { youthId: "youth-4", youthName: "Amara Diallo", matchQuality: "Excellent", sessions: 18, outcomesImprovement: 32, status: "active" },
    ],
    timeline: [
      { id: "mt-5-1", date: "2018-09-01", title: "Joined as Volunteer", description: "One of the first volunteer mentors in the NYC chapter.", type: "onboarding" },
      { id: "mt-5-2", date: "2018-12-15", title: "Mentor 101 Certified", description: "Completed foundation training.", type: "certification" },
      { id: "mt-5-3", date: "2019-06-01", title: "Promoted to Lead Mentor", description: "Took on leadership of mentor cohort.", type: "recognition" },
      { id: "mt-5-4", date: "2020-09-01", title: "Became Mentor Coach", description: "Now trains and supports other mentors.", type: "milestone" },
      { id: "mt-5-5", date: "2025-09-01", title: "7th Year Anniversary", description: "Celebrated 7 years with STOKED.", type: "recognition" },
    ],
    hoursOverTime: [
      { month: "Mar 25", hours: 32 },
      { month: "Apr 25", hours: 28 },
      { month: "May 25", hours: 30 },
      { month: "Jun 25", hours: 26 },
      { month: "Jul 25", hours: 22 },
      { month: "Aug 25", hours: 18 },
      { month: "Sep 25", hours: 34 },
      { month: "Oct 25", hours: 30 },
      { month: "Nov 25", hours: 28 },
      { month: "Dec 25", hours: 24 },
      { month: "Jan 26", hours: 26 },
    ],
    menteeOutcomes: [
      { metric: "Belonging", before: 2.9, after: 3.8 },
      { metric: "Confidence", before: 2.5, after: 3.4 },
      { metric: "Connection", before: 2.7, after: 3.7 },
      { metric: "Try New Things", before: 2.6, after: 3.8 },
    ],
  },
  {
    id: "mentor-6",
    firstName: "Andre",
    lastName: "Mitchell",
    avatar: "AM",
    email: "andre.m@stoked.org",
    stage: "Active",
    status: "active",
    bio: "Professional videographer who volunteers as a mentor. Uses media and storytelling to connect with youth.",
    skills: ["Video Production", "Storytelling", "Social Media"],
    interests: ["Skateboarding", "Film making", "Street art"],
    availability: "Evenings and weekends",
    hoursLogged: 134,
    currentMentees: 1,
    impactScore: 74,
    retentionRisk: "low",
    certifications: ["Mentor 101 Certified", "Mental Health First Aid Certified"],
    trainingProgress: [
      { moduleId: "training-1", moduleName: "Mentor 101 Foundations", progress: 100 },
      { moduleId: "training-2", moduleName: "Mental Health First Aid", progress: 100 },
      { moduleId: "training-3", moduleName: "Skate Coaching", progress: 60 },
    ],
    mentees: [
      { youthId: "youth-3", youthName: "Jaylen Carter", matchQuality: "Good", sessions: 16, outcomesImprovement: 15, status: "active" },
    ],
    timeline: [
      { id: "mt-6-1", date: "2023-03-01", title: "Joined as Volunteer", description: "Applied after filming a STOKED event.", type: "onboarding" },
      { id: "mt-6-2", date: "2023-05-15", title: "Mentor 101 Certified", description: "Completed foundation training.", type: "certification" },
      { id: "mt-6-3", date: "2024-09-01", title: "Matched with Jaylen Carter", description: "Connected through shared interest in video.", type: "match" },
    ],
    hoursOverTime: [
      { month: "Mar 25", hours: 12 },
      { month: "Apr 25", hours: 14 },
      { month: "May 25", hours: 10 },
      { month: "Jun 25", hours: 12 },
      { month: "Jul 25", hours: 8 },
      { month: "Aug 25", hours: 6 },
      { month: "Sep 25", hours: 14 },
      { month: "Oct 25", hours: 16 },
      { month: "Nov 25", hours: 12 },
      { month: "Dec 25", hours: 10 },
      { month: "Jan 26", hours: 14 },
    ],
    menteeOutcomes: [
      { metric: "Belonging", before: 3.8, after: 4.5 },
      { metric: "Confidence", before: 3.5, after: 4.2 },
      { metric: "Connection", before: 3.6, after: 4.3 },
      { metric: "Try New Things", before: 3.9, after: 4.6 },
    ],
  },
  {
    id: "mentor-7",
    firstName: "Samira",
    lastName: "Hassan",
    avatar: "SH",
    email: "samira.h@stoked.org",
    stage: "Active",
    status: "active",
    bio: "School social worker who brings professional youth development expertise to her mentoring practice.",
    skills: ["Social Work", "Counseling", "Cultural Competency"],
    interests: ["Snowboarding", "Wellness", "Poetry"],
    availability: "Saturdays, some weekday evenings",
    hoursLogged: 98,
    currentMentees: 1,
    impactScore: 81,
    retentionRisk: "low",
    certifications: ["Mentor 101 Certified", "Mental Health First Aid Certified", "1:1 Protocol Certified"],
    trainingProgress: [
      { moduleId: "training-1", moduleName: "Mentor 101 Foundations", progress: 100 },
      { moduleId: "training-2", moduleName: "Mental Health First Aid", progress: 100 },
      { moduleId: "training-6", moduleName: "1:1 Mentoring Protocol", progress: 100 },
    ],
    mentees: [
      { youthId: "youth-4", youthName: "Amara Diallo", matchQuality: "Excellent", sessions: 12, outcomesImprovement: 24, status: "active" },
    ],
    timeline: [
      { id: "mt-7-1", date: "2024-03-01", title: "Joined as Volunteer", description: "Referred by a partner school social worker.", type: "onboarding" },
      { id: "mt-7-2", date: "2024-05-10", title: "Mentor 101 Certified", description: "Completed foundation training.", type: "certification" },
      { id: "mt-7-3", date: "2024-09-01", title: "Matched with Amara Diallo", description: "Cultural and interest-based match.", type: "match" },
    ],
    hoursOverTime: [
      { month: "Mar 25", hours: 8 },
      { month: "Apr 25", hours: 10 },
      { month: "May 25", hours: 8 },
      { month: "Jun 25", hours: 10 },
      { month: "Jul 25", hours: 6 },
      { month: "Aug 25", hours: 4 },
      { month: "Sep 25", hours: 10 },
      { month: "Oct 25", hours: 12 },
      { month: "Nov 25", hours: 10 },
      { month: "Dec 25", hours: 8 },
      { month: "Jan 26", hours: 10 },
    ],
    menteeOutcomes: [
      { metric: "Belonging", before: 2.9, after: 3.8 },
      { metric: "Confidence", before: 2.5, after: 3.4 },
      { metric: "Connection", before: 2.7, after: 3.7 },
      { metric: "Try New Things", before: 2.6, after: 3.8 },
    ],
  },
  {
    id: "mentor-8",
    firstName: "Travis",
    lastName: "Lee",
    avatar: "TL",
    email: "travis.l@stoked.org",
    stage: "Lead",
    status: "active",
    bio: "Former college athlete turned youth advocate. Leads the surf mentoring cohort and helps coordinate beach days.",
    skills: ["Surfing", "Athletics", "Event Planning"],
    interests: ["Surf culture", "Fitness", "Ocean conservation"],
    availability: "Flexible schedule",
    hoursLogged: 198,
    currentMentees: 2,
    impactScore: 86,
    retentionRisk: "low",
    certifications: ["Mentor 101 Certified", "Surf Coach Certified", "Mental Health First Aid Certified"],
    trainingProgress: [
      { moduleId: "training-1", moduleName: "Mentor 101 Foundations", progress: 100 },
      { moduleId: "training-2", moduleName: "Mental Health First Aid", progress: 100 },
      { moduleId: "training-5", moduleName: "Surf Coaching", progress: 100 },
    ],
    mentees: [
      { youthId: "youth-prev-2", youthName: "Kai Johnson", matchQuality: "Excellent", sessions: 20, outcomesImprovement: 26, status: "active" },
      { youthId: "youth-prev-3", youthName: "Maya Chen", matchQuality: "Good", sessions: 14, outcomesImprovement: 19, status: "active" },
    ],
    timeline: [
      { id: "mt-8-1", date: "2022-06-01", title: "Joined as Volunteer", description: "Signed up after attending a STOKED surf day.", type: "onboarding" },
      { id: "mt-8-2", date: "2022-08-15", title: "Mentor 101 Certified", description: "Completed foundation training.", type: "certification" },
      { id: "mt-8-3", date: "2023-06-01", title: "Surf Coach Certified", description: "Completed surf-specific training.", type: "certification" },
      { id: "mt-8-4", date: "2024-03-01", title: "Promoted to Lead Mentor", description: "Now leads the surf mentoring cohort.", type: "recognition" },
    ],
    hoursOverTime: [
      { month: "Mar 25", hours: 16 },
      { month: "Apr 25", hours: 20 },
      { month: "May 25", hours: 18 },
      { month: "Jun 25", hours: 22 },
      { month: "Jul 25", hours: 14 },
      { month: "Aug 25", hours: 10 },
      { month: "Sep 25", hours: 18 },
      { month: "Oct 25", hours: 20 },
      { month: "Nov 25", hours: 16 },
      { month: "Dec 25", hours: 14 },
      { month: "Jan 26", hours: 16 },
    ],
    menteeOutcomes: [
      { metric: "Belonging", before: 3.1, after: 4.2 },
      { metric: "Confidence", before: 2.8, after: 3.8 },
      { metric: "Connection", before: 3.0, after: 4.0 },
      { metric: "Try New Things", before: 3.2, after: 4.3 },
    ],
  },
  {
    id: "mentor-9",
    firstName: "Jasmine",
    lastName: "Wright",
    avatar: "JW",
    email: "jasmine.w@stoked.org",
    stage: "New",
    status: "onboarding",
    bio: "Recent college grad passionate about mentoring. Currently completing training requirements.",
    skills: ["Communication", "Empathy", "Skateboarding"],
    interests: ["Skateboarding", "Graphic design", "Youth empowerment"],
    availability: "Weekdays, flexible",
    hoursLogged: 8,
    currentMentees: 0,
    impactScore: 0,
    retentionRisk: "medium",
    certifications: [],
    trainingProgress: [
      { moduleId: "training-1", moduleName: "Mentor 101 Foundations", progress: 60 },
    ],
    mentees: [],
    timeline: [
      { id: "mt-9-1", date: "2026-01-05", title: "Application Submitted", description: "Applied to mentor through a friend's referral.", type: "onboarding" },
      { id: "mt-9-2", date: "2026-01-12", title: "Background Check Cleared", description: "Passed all screening.", type: "onboarding" },
      { id: "mt-9-3", date: "2026-01-15", title: "Started Mentor 101", description: "Began foundation training.", type: "certification" },
    ],
    hoursOverTime: [
      { month: "Jan 26", hours: 8 },
    ],
    menteeOutcomes: [],
  },
  {
    id: "mentor-10",
    firstName: "Robert",
    lastName: "Kim",
    avatar: "RK",
    email: "robert.k@stoked.org",
    stage: "Alumni",
    status: "inactive",
    bio: "Former active mentor who transitioned to advisory role. Still supports the network through quarterly events.",
    skills: ["Snowboarding", "Business Development", "Networking"],
    interests: ["Snow sports", "Entrepreneurship", "Mentoring"],
    availability: "Quarterly events only",
    hoursLogged: 180,
    currentMentees: 0,
    impactScore: 72,
    retentionRisk: "low",
    certifications: ["Mentor 101 Certified", "Snow Coach Certified"],
    trainingProgress: [
      { moduleId: "training-1", moduleName: "Mentor 101 Foundations", progress: 100 },
      { moduleId: "training-4", moduleName: "Snow Coaching", progress: 100 },
    ],
    mentees: [
      { youthId: "youth-prev-4", youthName: "Daniel Ruiz", matchQuality: "Good", sessions: 24, outcomesImprovement: 20, status: "completed" },
      { youthId: "youth-prev-5", youthName: "Alicia Foster", matchQuality: "Excellent", sessions: 30, outcomesImprovement: 28, status: "completed" },
    ],
    timeline: [
      { id: "mt-10-1", date: "2020-01-15", title: "Joined as Volunteer", description: "Started with the winter programs.", type: "onboarding" },
      { id: "mt-10-2", date: "2020-04-01", title: "Mentor 101 Certified", description: "Completed foundation training.", type: "certification" },
      { id: "mt-10-3", date: "2021-01-10", title: "Snow Coach Certified", description: "Advanced snow coaching completed.", type: "certification" },
      { id: "mt-10-4", date: "2024-06-01", title: "Transitioned to Alumni", description: "Moved to advisory role due to career change.", type: "milestone" },
    ],
    hoursOverTime: [
      { month: "Mar 25", hours: 0 },
      { month: "Apr 25", hours: 0 },
      { month: "May 25", hours: 4 },
      { month: "Jun 25", hours: 0 },
      { month: "Jul 25", hours: 0 },
      { month: "Aug 25", hours: 0 },
      { month: "Sep 25", hours: 4 },
      { month: "Oct 25", hours: 0 },
      { month: "Nov 25", hours: 0 },
      { month: "Dec 25", hours: 4 },
      { month: "Jan 26", hours: 0 },
    ],
    menteeOutcomes: [
      { metric: "Belonging", before: 3.0, after: 4.0 },
      { metric: "Confidence", before: 2.6, after: 3.5 },
      { metric: "Connection", before: 2.8, after: 3.8 },
      { metric: "Try New Things", before: 2.9, after: 3.7 },
    ],
  },
];

export const potentialMatches: PotentialMatch[] = [
  {
    id: "pm-1",
    mentorId: "mentor-3",
    mentorName: "Miguel Santos",
    mentorAvatar: "MS",
    youthId: "youth-5",
    youthName: "Elijah Morales",
    youthAvatar: "EM",
    compatibilityScore: 94,
    sharedInterests: ["Skateboarding", "Bilingual", "Community"],
    reason: "Language match, shared skate interest, similar neighborhood background",
  },
  {
    id: "pm-2",
    mentorId: "mentor-9",
    mentorName: "Jasmine Wright",
    mentorAvatar: "JW",
    youthId: "youth-2",
    youthName: "Zara Williams",
    youthAvatar: "ZW",
    compatibilityScore: 87,
    sharedInterests: ["Skateboarding", "Creative arts"],
    reason: "Age-appropriate female mentor, shared creative interests",
  },
  {
    id: "pm-3",
    mentorId: "mentor-6",
    mentorName: "Andre Mitchell",
    mentorAvatar: "AM",
    youthId: "youth-3",
    youthName: "Jaylen Carter",
    youthAvatar: "JC",
    compatibilityScore: 91,
    sharedInterests: ["Video production", "Skateboarding", "Storytelling"],
    reason: "Strong media and creative alignment, existing relationship",
  },
  {
    id: "pm-4",
    mentorId: "mentor-7",
    mentorName: "Samira Hassan",
    mentorAvatar: "SH",
    youthId: "youth-4",
    youthName: "Amara Diallo",
    youthAvatar: "AD",
    compatibilityScore: 88,
    sharedInterests: ["Wellness", "Cultural connection"],
    reason: "Cultural background match, strong empathy skills, wellness focus",
  },
  {
    id: "pm-5",
    mentorId: "mentor-8",
    mentorName: "Travis Lee",
    mentorAvatar: "TL",
    youthId: "youth-2",
    youthName: "Zara Williams",
    youthAvatar: "ZW",
    compatibilityScore: 72,
    sharedInterests: ["Action sports"],
    reason: "Sport-specific match for surf programming",
  },
  {
    id: "pm-6",
    mentorId: "mentor-1",
    mentorName: "Darius Thompson",
    mentorAvatar: "DT",
    youthId: "youth-1",
    youthName: "Marcus Rivera",
    youthAvatar: "MR",
    compatibilityScore: 60,
    sharedInterests: ["Skateboarding"],
    reason: "Already matched, shown here for reference",
  },
];
