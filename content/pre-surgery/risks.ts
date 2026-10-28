import { preSurgeryRoutes } from "./flow";

export type SeverityLevel = "minor" | "moderate" | "significant" | "serious" | "critical";

export const risksContent = {
  step: 4,
  title: "4. Risks",
  lead: "Every operation carries risk. Here you learn about the risks associated with your upcoming operation. The risks listed are sorted based on commonality.",
  severity: {
    label: "Severity:",
    /** Ordered from least to most severe; drives the five-segment meter. */
    levels: [
      { id: "minor", label: "Minor", color: "#8df55b", muted: "#d9f7c8" },
      { id: "moderate", label: "Moderate", color: "#f4dc3a", muted: "#f6efc4" },
      { id: "significant", label: "Significant", color: "#f3c98f", muted: "#f3e2cc" },
      { id: "serious", label: "Serious", color: "#f08f8f", muted: "#f5cfcf" },
      { id: "critical", label: "Critical", color: "#b07c7c", muted: "#d9c3c3" },
    ] satisfies { id: SeverityLevel; label: string; color: string; muted: string }[],
    infoTitle: "About the severity scale",
    infoBody:
      "Severity describes how much a complication would affect you, from minor (short-lived, easily treated) to critical (life-threatening). Your doctor can explain what each level means for you.",
  },
  risks: [
    {
      title: "Your symptoms staying",
      frequency: "Very common",
      rate: "100 in 1,000 people (10%)",
      paragraphs: [
        "Pain in the upper belly or trouble with digestion does not go away after the operation.",
      ],
      severity: "minor",
    },
    {
      title: "Blocked camera view",
      frequency: "Common",
      rate: "50 in 1,000 people (5%)",
      paragraphs: [
        "Sometimes the camera does not give a clear enough view.",
        "The team then opens the belly with a larger cut and carries on that way.",
      ],
      severity: "moderate",
    },
    {
      title: "The wound gets infected",
      frequency: "Common",
      rate: "30 in 1,000 people (3%)",
      paragraphs: [
        "The area turns red, warm and sore. Medicine against the infection usually clears it.",
      ],
      severity: "moderate",
    },
  ] satisfies {
    title: string;
    frequency: string;
    rate: string;
    paragraphs: string[];
    severity: SeverityLevel;
  }[],
  individualRisks: {
    title: "Your individual risks may be different",
    body: "Discuss your individual risk, other relevant risks, and any concerns with your doctor before deciding.",
    action: "Write a question for your doctor",
  },
  back: preSurgeryRoutes.operationTimeline,
  next: preSurgeryRoutes.options,
};
