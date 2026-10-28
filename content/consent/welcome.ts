import { patient } from "../shared";
import { consentRoutes } from "./flow";

export const consentWelcomeContent = {
  greeting: `Hello again ${patient.firstName}!`,
  subtitle: "This is your digital surgery consent form.",
  paragraphs: [
    "You have already gone through the pre-surgery form and have received a printed copy of the information.",
    "You have had the follow-up session with your doctor to address your questions and concerns.",
  ],
  callout: "When you’re ready press “Start now” to begin the consent process.",
  start: { label: "Start now", href: consentRoutes.informationReview },
};
