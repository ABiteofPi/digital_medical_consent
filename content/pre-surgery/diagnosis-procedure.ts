import { preSurgeryRoutes } from "./flow";

export const diagnosisProcedureContent = {
  step: 2,
  title: "2. Diagnosis & procedure",
  medicalTermLabel: "Medical term:",
  diagnosis: {
    title: "Diagnosis",
    body: "Stones have formed in your gallbladder. They cause the pain in the upper right side of your belly. Because of them, your gallbladder has become inflamed several times.",
    medicalTerm: "Cholecystolithiasis",
  },
  procedure: {
    title: "Procedure",
    body: "We take the gallbladder out. The team works through four small cuts, using a camera. Your belly stays closed.",
    medicalTerm: "Laparoscopic cholecystectomy",
    media: {
      /** Set `src` to an image in /public (e.g. "/illustrations/gallbladder.png") to replace the placeholder. */
      src: null as string | null,
      alt: "Illustration of the gallbladder location in the body and where the cuts will be made",
      placeholder: [
        "Image / Illustration of gallbladder location in body & where the cuts will be made",
        "(Or video if available)",
      ],
    },
  },
  whyNow: {
    title: "Why now?",
    body: "The inflammation has come back [three] times. The longer you wait, the more likely an emergency becomes. An emergency operation carries more risk than a planned one.",
  },
  back: preSurgeryRoutes.informationReview,
  next: preSurgeryRoutes.operationTimeline,
};
