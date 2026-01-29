export type WeeklyAttendance = {
  week: string;
  attendance: number;
  enrolled: number;
  attended: number;
};

export const weeklyAttendance: WeeklyAttendance[] = [
  { week: "Week 1", attendance: 72, enrolled: 248, attended: 179 },
  { week: "Week 2", attendance: 74, enrolled: 252, attended: 186 },
  { week: "Week 3", attendance: 73, enrolled: 255, attended: 186 },
  { week: "Week 4", attendance: 75, enrolled: 258, attended: 194 },
  { week: "Week 5", attendance: 76, enrolled: 260, attended: 198 },
  { week: "Week 6", attendance: 74, enrolled: 262, attended: 194 },
  { week: "Week 7", attendance: 77, enrolled: 264, attended: 203 },
  { week: "Week 8", attendance: 78, enrolled: 266, attended: 207 },
  { week: "Week 9", attendance: 76, enrolled: 268, attended: 204 },
  { week: "Week 10", attendance: 79, enrolled: 270, attended: 213 },
  { week: "Week 11", attendance: 80, enrolled: 272, attended: 218 },
  { week: "Week 12", attendance: 78, enrolled: 273, attended: 213 },
  { week: "Week 13", attendance: 71, enrolled: 274, attended: 195 }, // Thanksgiving week dip
  { week: "Week 14", attendance: 75, enrolled: 275, attended: 206 },
  { week: "Week 15", attendance: 79, enrolled: 276, attended: 218 },
  { week: "Week 16", attendance: 80, enrolled: 277, attended: 222 },
  { week: "Week 17", attendance: 68, enrolled: 278, attended: 189 }, // Holiday break dip
  { week: "Week 18", attendance: 70, enrolled: 278, attended: 195 }, // New Year week
  { week: "Week 19", attendance: 78, enrolled: 280, attended: 218 },
  { week: "Week 20", attendance: 81, enrolled: 281, attended: 228 },
  { week: "Week 21", attendance: 82, enrolled: 282, attended: 231 },
  { week: "Week 22", attendance: 80, enrolled: 283, attended: 226 },
  { week: "Week 23", attendance: 83, enrolled: 283, attended: 235 },
  { week: "Week 24", attendance: 83, enrolled: 283, attended: 235 },
];

export type PartnerAttendance = {
  partnerId: string;
  partnerName: string;
  weeks: { week: number; attendance: number }[];
};

export const partnerAttendance: PartnerAttendance[] = [
  {
    partnerId: "partner-1",
    partnerName: "Bronx International High School",
    weeks: [
      { week: 1, attendance: 76 },
      { week: 2, attendance: 78 },
      { week: 3, attendance: 80 },
      { week: 4, attendance: 79 },
      { week: 5, attendance: 82 },
      { week: 6, attendance: 80 },
      { week: 7, attendance: 83 },
      { week: 8, attendance: 85 },
      { week: 9, attendance: 82 },
      { week: 10, attendance: 84 },
      { week: 11, attendance: 86 },
      { week: 12, attendance: 84 },
    ],
  },
  {
    partnerId: "partner-2",
    partnerName: "Bronx Lab School",
    weeks: [
      { week: 1, attendance: 70 },
      { week: 2, attendance: 72 },
      { week: 3, attendance: 71 },
      { week: 4, attendance: 74 },
      { week: 5, attendance: 75 },
      { week: 6, attendance: 73 },
      { week: 7, attendance: 76 },
      { week: 8, attendance: 78 },
      { week: 9, attendance: 76 },
      { week: 10, attendance: 79 },
      { week: 11, attendance: 80 },
      { week: 12, attendance: 81 },
    ],
  },
  {
    partnerId: "partner-3",
    partnerName: "Eagle Academy for Young Men",
    weeks: [
      { week: 1, attendance: 80 },
      { week: 2, attendance: 82 },
      { week: 3, attendance: 84 },
      { week: 4, attendance: 83 },
      { week: 5, attendance: 85 },
      { week: 6, attendance: 84 },
      { week: 7, attendance: 87 },
      { week: 8, attendance: 88 },
      { week: 9, attendance: 86 },
      { week: 10, attendance: 88 },
      { week: 11, attendance: 89 },
      { week: 12, attendance: 87 },
    ],
  },
  {
    partnerId: "partner-4",
    partnerName: "Fannie Lou Hamer Freedom HS",
    weeks: [
      { week: 1, attendance: 68 },
      { week: 2, attendance: 70 },
      { week: 3, attendance: 69 },
      { week: 4, attendance: 72 },
      { week: 5, attendance: 74 },
      { week: 6, attendance: 71 },
      { week: 7, attendance: 75 },
      { week: 8, attendance: 76 },
      { week: 9, attendance: 74 },
      { week: 10, attendance: 77 },
      { week: 11, attendance: 79 },
      { week: 12, attendance: 79 },
    ],
  },
  {
    partnerId: "partner-5",
    partnerName: "Mott Hall Bronx High School",
    weeks: [
      { week: 1, attendance: 74 },
      { week: 2, attendance: 76 },
      { week: 3, attendance: 75 },
      { week: 4, attendance: 78 },
      { week: 5, attendance: 79 },
      { week: 6, attendance: 77 },
      { week: 7, attendance: 80 },
      { week: 8, attendance: 82 },
      { week: 9, attendance: 80 },
      { week: 10, attendance: 82 },
      { week: 11, attendance: 83 },
      { week: 12, attendance: 82 },
    ],
  },
];
