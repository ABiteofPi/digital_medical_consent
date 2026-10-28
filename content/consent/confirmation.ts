import { preSurgeryRoutes } from "../pre-surgery/flow";
import { consentRoutes } from "./flow";

export const confirmationContent = {
  step: 2,
  title: "2. Confirmation",
  paragraphs: [
    "Take a moment to gather your thoughts.",
    "You are asked to confirm what you have learned about your procedure before continuing to sign.",
    "This is not a test or a forced agreement, you can review information from the pre-surgery form or ask for assistance.",
  ],
  /** `id` is the key stored with the patient's confirmations. */
  items: [
    {
      id: "diagnosis-procedure",
      title: "Diagnosis & procedure",
      statement:
        "I understand why the operation is proposed, what removing the gallbladder involves, and the affected body parts.",
      review: { label: "Review diagnosis & procedure", href: preSurgeryRoutes.diagnosisProcedure },
    },
    {
      id: "risks",
      title: "Risks",
      statement:
        "I understand the general risks associated with this procedure, and the individual risks discussed with my doctor.",
      review: { label: "Review risks", href: preSurgeryRoutes.risks },
    },
    {
      id: "unexpected-complications",
      title: "Unexpected complications",
      statement: "I understand what necessary interventions may be authorized during the operation.",
      review: { label: "Review risks", href: preSurgeryRoutes.risks },
    },
    {
      id: "options",
      title: "Options",
      statement: "I understand the alternative medical approaches to address my condition and symptoms.",
      review: { label: "Review options", href: preSurgeryRoutes.options },
    },
  ],
  assistance: {
    title: "Still have questions?",
    body: "If you still have questions or require assistance with any of the information related to your procedure, you can ask for support from your doctor or medical staff.",
    action: "Ask for assistance",
    sending: "Sending...",
    success: "A member of the medical staff has been notified and will be with you shortly.",
  },
  incompleteHint: "Please confirm all statements above to continue.",
  back: consentRoutes.informationReview,
  next: consentRoutes.sign,
};
