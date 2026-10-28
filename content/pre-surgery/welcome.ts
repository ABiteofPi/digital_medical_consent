import { patient } from "../shared";
import { preSurgeryRoutes, preSurgerySteps } from "./flow";

export const welcomeContent = {
  greeting: `Hello ${patient.firstName}!`,
  subtitle: "This is your digital pre-surgery form.",
  intro: [
    "This form is created to help you make an informed decision regarding your procedure.",
    "You will be guided through multiple sections, each providing you with important information about your upcoming operation.",
  ],
  overview: {
    title: "Overview",
    items: preSurgerySteps.map((step) => step.label),
  },
  middle: [
    "Your progress through each section is saved, so feel free to pause and continue at your own pace.",
    "Collect your questions as you progress through the form. You can navigate back and forth between sections to review information.",
  ],
  collectQuestions: {
    title: "Collect questions as you read",
    paragraphs: [
      "Use “My questions” on the top right corner on every information screen to make note of any questions or concerns.",
      "You can review all your questions before submitting at the end of this form. Everything you submit will be sent to your doctor.",
    ],
  },
  outro: [
    "There will be a break and a session with your doctor to answer any questions before asking for your consent.",
    "By the end of this form you will have learned about all your options and the associated risk with each. The operation can only be carried out with your consent and it is your choice how to proceed.",
  ],
  start: { label: "Start Information review", href: preSurgeryRoutes.informationReview },
};
