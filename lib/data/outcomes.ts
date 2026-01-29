export type OutcomeCategory = "belonging" | "confidence" | "connection" | "tryNewThings";

export type OutcomeTimeSeries = {
  window: "Pre" | "Mid" | "Post";
  belonging: number;
  confidence: number;
  connection: number;
  tryNewThings: number;
};

export const outcomesOverTime: OutcomeTimeSeries[] = [
  { window: "Pre", belonging: 3.1, confidence: 2.8, connection: 2.9, tryNewThings: 3.0 },
  { window: "Mid", belonging: 3.6, confidence: 3.3, connection: 3.4, tryNewThings: 3.7 },
  { window: "Post", belonging: 4.1, confidence: 3.7, connection: 3.9, tryNewThings: 4.3 },
];

export type PartnerOutcome = {
  partnerName: string;
  partnerId: string;
  belonging: number;
  confidence: number;
  connection: number;
  tryNewThings: number;
};

export const partnerOutcomes: PartnerOutcome[] = [
  {
    partnerName: "Eagle Academy for Young Men",
    partnerId: "partner-3",
    belonging: 4.3,
    confidence: 3.9,
    connection: 4.1,
    tryNewThings: 4.4,
  },
  {
    partnerName: "Bronx International High School",
    partnerId: "partner-1",
    belonging: 4.1,
    confidence: 3.7,
    connection: 3.9,
    tryNewThings: 4.2,
  },
  {
    partnerName: "Bronx Lab School",
    partnerId: "partner-2",
    belonging: 3.8,
    confidence: 3.5,
    connection: 3.6,
    tryNewThings: 4.0,
  },
  {
    partnerName: "Fannie Lou Hamer Freedom HS",
    partnerId: "partner-4",
    belonging: 3.9,
    confidence: 3.4,
    connection: 3.7,
    tryNewThings: 3.8,
  },
  {
    partnerName: "Mott Hall Bronx High School",
    partnerId: "partner-5",
    belonging: 3.7,
    confidence: 3.3,
    connection: 3.5,
    tryNewThings: 3.9,
  },
];

export const outcomeTargets = {
  belonging: { target: 80, current: 82, label: "Belonging" },
  confidence: { target: 75, current: 74, label: "Confidence" },
  connection: { target: 75, current: 78, label: "Connection" },
  tryNewThings: { target: 80, current: 85, label: "Try New Things" },
};

export type SurveyCompletion = {
  window: string;
  completed: number;
  total: number;
};

export const surveyCompletions: SurveyCompletion[] = [
  { window: "Pre", completed: 260, total: 283 },
  { window: "Mid", completed: 220, total: 283 },
  { window: "Post", completed: 195, total: 283 },
];
