/** Routes and progress steps of the pre-surgery flow. */

export const preSurgeryRoutes = {
  welcome: "/pre-surgery",
  informationReview: "/pre-surgery/information-review",
  diagnosisProcedure: "/pre-surgery/diagnosis-procedure",
  operationTimeline: "/pre-surgery/operation-timeline",
  risks: "/pre-surgery/risks",
  options: "/pre-surgery/options",
  questions: "/pre-surgery/questions",
  done: "/pre-surgery/done",
} as const;

export const preSurgerySteps = [
  { label: "Information review", href: preSurgeryRoutes.informationReview },
  { label: "Diagnosis & procedure", href: preSurgeryRoutes.diagnosisProcedure },
  { label: "Operation timeline", href: preSurgeryRoutes.operationTimeline },
  { label: "Risks", href: preSurgeryRoutes.risks },
  { label: "Options", href: preSurgeryRoutes.options },
  { label: "Questions", href: preSurgeryRoutes.questions },
];

export const reviewReturnBanner = {
  text: "You are reviewing information from your pre-surgery form.",
  action: "Return to consent",
};
