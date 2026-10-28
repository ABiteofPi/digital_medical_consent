export const landingContent = {
  eyebrow: "Concept prototype",
  title: "Digital consent journey",
  lead: "A suggested solution for guiding patients from surgery information to informed, signed consent on a tablet.",
  points: [
    "Step 1: The patient is given information to prepare before surgery.",
    "Step 2: The patient has an in-person meeting with their doctor to discuss the information and ask questions.",
    "Step 3: The patient confirms understanding, reads the consent document, and signs.",
  ],
  flows: [
    {
      href: "/pre-surgery",
      step: "Step 1",
      title: "Pre-surgery form",
      description:
        "Information review, diagnosis, timeline, risks, options and the patient's questions.",
      cta: "Open pre-surgery form",
    },
    {
      href: "/consent",
      step: "Step 3",
      title: "Consent form",
      description: "Confirm understanding, read the consent in simple and legal terms, and sign.",
      cta: "Open consent form",
    },
  ],
  footnote:
    "Prototype: all submissions are mocked and no data leaves this device. Optimised for iPad Pro 11″ in portrait (834 × 1194).",
};
