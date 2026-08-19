export interface UserProfile {
  id: string;
  name: string;
  email: string;
  targetRole: string;
  careerScore: number;
  streakCount: number;
  subscriptionTier: 'FREE' | 'PREMIUM';
  avatarUrl: string;
}

export interface DailyMission {
  id: string;
  title: string;
  description: string;
  category: 'APPLY' | 'ATS' | 'INTERVIEW' | 'LINKEDIN';
  points: number;
  isCompleted: boolean;
}

export interface ATSScanResult {
  atsScore: number;
  targetRole: string;
  matchingKeywords: string[];
  missingKeywords: string[];
  formattingScore: number;
  suggestions: string[];
  heatmap: { keyword: string; countInResume: number; expectedCount: number }[];
}

export interface JobApplication {
  id: string;
  companyName: string;
  jobTitle: string;
  location: string;
  country: string;
  salary: string;
  stage: 'SAVED' | 'APPLIED' | 'INTERVIEW' | 'OFFER' | 'REJECTED';
  appliedDate: string;
  rejectionReason?: string;
  jobUrl?: string;
}

export interface OneClickPack {
  id: string;
  jobUrl: string;
  companyName: string;
  jobTitle: string;
  tailoredResume: string;
  europassCV: string;
  coverLetter: string;
  hrEmailDraft: string;
  predictedQuestions: { question: string; category: string; tip: string }[];
  skillGapReport: { currentMatch: number; missingSkills: string[] };
}

export interface CountryMigrationInfo {
  country: string;
  flag: string;
  eligibilityScore: number;
  visaPathway: string;
  avgSalaryEUR: string;
  costOfLivingIndex: number;
  processingTimeMonths: number;
  sponsorshipProbability: 'High' | 'Medium' | 'Low';
  topDemandRoles: string[];
}
