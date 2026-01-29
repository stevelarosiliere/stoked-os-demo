export type ActivityItem = {
  id: string;
  type: "enrollment" | "session" | "survey" | "milestone" | "program";
  title: string;
  description: string;
  timestamp: string;
  icon: "user-plus" | "calendar" | "clipboard" | "award" | "book";
};

export const recentActivity: ActivityItem[] = [
  {
    id: "activity-1",
    type: "session",
    title: "Snow Discovery: Mountain Trip Completed",
    description:
      "Risers cohort at Mott Hall completed their first mountain trip to Mountain Creek. 16 of 18 youth attended.",
    timestamp: "2026-01-25T16:30:00Z",
    icon: "calendar",
  },
  {
    id: "activity-2",
    type: "milestone",
    title: "Marcus Rivera: Community Service Milestone",
    description:
      "Marcus completed 20 hours of community service through the Mentor Corps program at Bronx International.",
    timestamp: "2026-01-20T14:00:00Z",
    icon: "award",
  },
  {
    id: "activity-3",
    type: "survey",
    title: "Mid-Program Surveys: Launchpad Snow Skills",
    description:
      "18 of 22 enrolled youth at Bronx Lab School completed their mid-program surveys. Results processing.",
    timestamp: "2026-01-19T10:15:00Z",
    icon: "clipboard",
  },
  {
    id: "activity-4",
    type: "enrollment",
    title: "3 New Youth Enrolled at Mott Hall",
    description:
      "Three new 7th graders joined the Risers: Snow Discovery program, bringing enrollment to 18.",
    timestamp: "2026-01-17T09:00:00Z",
    icon: "user-plus",
  },
  {
    id: "activity-5",
    type: "session",
    title: "Launchpad: Surf & Service Kickoff",
    description:
      "First session of the spring Surf & Service program at Fannie Lou Hamer Freedom HS. 14 of 16 youth attended.",
    timestamp: "2026-01-16T15:45:00Z",
    icon: "calendar",
  },
  {
    id: "activity-6",
    type: "program",
    title: "Pathways: Alumni Leaders Program Created",
    description:
      "New spring cohort program created for Urban Assembly Bronx Academy. 8 alumni ages 17-19 pre-registered.",
    timestamp: "2026-01-15T11:30:00Z",
    icon: "book",
  },
  {
    id: "activity-7",
    type: "enrollment",
    title: "Elijah Morales Enrolled",
    description:
      "New 7th grader enrolled in Risers: Snow Discovery at Mott Hall Bronx High School.",
    timestamp: "2026-01-12T08:45:00Z",
    icon: "user-plus",
  },
  {
    id: "activity-8",
    type: "milestone",
    title: "Jaylen Carter: Continuing in Mentor Corps",
    description:
      "Jaylen accepted into Spring 2026 Mentor Corps continuation at Bronx International. Second-year Pathways participant.",
    timestamp: "2026-01-06T10:00:00Z",
    icon: "award",
  },
  {
    id: "activity-9",
    type: "program",
    title: "Spring 2026 Programs Finalized",
    description:
      "5 spring programs confirmed across 5 partner schools. Total projected enrollment: 76 youth.",
    timestamp: "2026-01-05T14:20:00Z",
    icon: "book",
  },
  {
    id: "activity-10",
    type: "survey",
    title: "Fall 2025 Post-Program Surveys Complete",
    description:
      "Final post-program surveys collected from Skate Foundations and Skate Progression cohorts. 92% completion rate.",
    timestamp: "2026-01-03T09:30:00Z",
    icon: "clipboard",
  },
];
