export type Program = {
  id: string;
  name: string;
  type: "Risers" | "Launchpad" | "Pathways";
  partnerId: string;
  partnerName: string;
  coachId: string;
  coachName: string;
  startDate: string;
  endDate: string;
  enrolledYouth: number;
  avgAttendance: number;
  sessionsCompleted: number;
  totalSessions: number;
  status: "active" | "completed" | "upcoming";
  description: string;
};

export const programs: Program[] = [
  // --- Risers (ages 10-13, intro/engagement) ---
  {
    id: "program-1",
    name: "Risers: Skate Foundations",
    type: "Risers",
    partnerId: "partner-3",
    partnerName: "Eagle Academy for Young Men",
    coachId: "coach-3",
    coachName: "Devon Clarke",
    startDate: "2025-09-08",
    endDate: "2025-12-19",
    enrolledYouth: 24,
    avgAttendance: 86,
    sessionsCompleted: 14,
    totalSessions: 14,
    status: "completed",
    description:
      "Introductory skateboarding program building coordination, courage, and community for 6th-8th graders. Youth learn basic skills while developing resilience through progressive challenges.",
  },
  {
    id: "program-2",
    name: "Risers: Snow Discovery",
    type: "Risers",
    partnerId: "partner-5",
    partnerName: "Mott Hall Bronx High School",
    coachId: "coach-3",
    coachName: "Devon Clarke",
    startDate: "2026-01-12",
    endDate: "2026-03-20",
    enrolledYouth: 18,
    avgAttendance: 80,
    sessionsCompleted: 3,
    totalSessions: 10,
    status: "active",
    description:
      "Introduction to snowboarding for middle schoolers. Combines mountain trips with in-school sessions on goal-setting, teamwork, and trying new things.",
  },
  {
    id: "program-3",
    name: "Risers: Surf Intro",
    type: "Risers",
    partnerId: "partner-8",
    partnerName: "Validus Preparatory Academy",
    coachId: "coach-6",
    coachName: "Brianna Washington",
    startDate: "2026-04-06",
    endDate: "2026-06-12",
    enrolledYouth: 14,
    avgAttendance: 0,
    sessionsCompleted: 0,
    totalSessions: 10,
    status: "upcoming",
    description:
      "Spring surfing program at Rockaway Beach for 6th-8th graders. Builds water confidence, environmental awareness, and peer connection through ocean-based activities.",
  },
  // --- Launchpad (ages 13-16, skill-building) ---
  {
    id: "program-4",
    name: "Launchpad: Skate Progression",
    type: "Launchpad",
    partnerId: "partner-1",
    partnerName: "Bronx International High School",
    coachId: "coach-1",
    coachName: "Marcus Johnson",
    startDate: "2025-09-08",
    endDate: "2025-12-19",
    enrolledYouth: 20,
    avgAttendance: 83,
    sessionsCompleted: 14,
    totalSessions: 14,
    status: "completed",
    description:
      "Intermediate skateboarding for 9th-10th graders focused on skill progression, peer coaching, and self-assessment. Youth set personal goals and track growth over the semester.",
  },
  {
    id: "program-5",
    name: "Launchpad: Snow Skills",
    type: "Launchpad",
    partnerId: "partner-2",
    partnerName: "Bronx Lab School",
    coachId: "coach-2",
    coachName: "Aaliyah Reyes",
    startDate: "2026-01-12",
    endDate: "2026-03-20",
    enrolledYouth: 22,
    avgAttendance: 78,
    sessionsCompleted: 3,
    totalSessions: 10,
    status: "active",
    description:
      "Intermediate snowboarding for high schoolers. Combines mountain sessions with leadership workshops, journal reflections, and mentoring younger riders.",
  },
  {
    id: "program-6",
    name: "Launchpad: Surf & Service",
    type: "Launchpad",
    partnerId: "partner-4",
    partnerName: "Fannie Lou Hamer Freedom HS",
    coachId: "coach-4",
    coachName: "Jasmine Okafor",
    startDate: "2026-01-12",
    endDate: "2026-05-15",
    enrolledYouth: 16,
    avgAttendance: 76,
    sessionsCompleted: 2,
    totalSessions: 16,
    status: "active",
    description:
      "Blended surf and community service program. Youth build surf skills while participating in beach cleanups, environmental advocacy, and peer-led workshops.",
  },
  // --- Pathways (ages 16-19, leadership/mentoring) ---
  {
    id: "program-7",
    name: "Pathways: Mentor Corps",
    type: "Pathways",
    partnerId: "partner-1",
    partnerName: "Bronx International High School",
    coachId: "coach-1",
    coachName: "Marcus Johnson",
    startDate: "2025-09-08",
    endDate: "2026-06-20",
    enrolledYouth: 12,
    avgAttendance: 88,
    sessionsCompleted: 16,
    totalSessions: 36,
    status: "active",
    description:
      "Year-long leadership track where 11th-12th graders serve as peer mentors for Risers and Launchpad participants. Includes career exploration, public speaking, and portfolio development.",
  },
  {
    id: "program-8",
    name: "Pathways: Creative Futures",
    type: "Pathways",
    partnerId: "partner-3",
    partnerName: "Eagle Academy for Young Men",
    coachId: "coach-1",
    coachName: "Marcus Johnson",
    startDate: "2025-09-08",
    endDate: "2025-12-19",
    enrolledYouth: 10,
    avgAttendance: 90,
    sessionsCompleted: 14,
    totalSessions: 14,
    status: "completed",
    description:
      "Fall intensive blending action sports media (photography, video) with career readiness. Youth produce content documenting STOKED programs and explore creative industry pathways.",
  },
  {
    id: "program-9",
    name: "Pathways: Alumni Leaders",
    type: "Pathways",
    partnerId: "partner-6",
    partnerName: "Urban Assembly Bronx Academy",
    coachId: "coach-4",
    coachName: "Jasmine Okafor",
    startDate: "2026-02-03",
    endDate: "2026-06-06",
    enrolledYouth: 8,
    avgAttendance: 0,
    sessionsCompleted: 0,
    totalSessions: 16,
    status: "upcoming",
    description:
      "Spring cohort for STOKED alumni ages 17-19. Focuses on college readiness, financial literacy, and giving back through community-led action sports events.",
  },
];
