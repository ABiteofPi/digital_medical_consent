import { preSurgeryRoutes } from "./flow";

export const preSurgeryDoneContent = {
  title: "All done for now!",
  subtitle: "You have reached the end of the preparation form.",
  /** `{questions}` and `{concerns}` are replaced with the submitted counts. */
  sentSummary: "Your questions ({questions}) and concerns ({concerns}) have been sent to your doctor.",
  paragraphs: [
    "Your doctor will speak with you and go through all questions and concerns before you’re asked for consent.",
    "You will receive a printed copy of this digital form for your review from the hospital.",
  ],
  finish: { label: "Finish", href: "/" },
  back: preSurgeryRoutes.questions,
};
