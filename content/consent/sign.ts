import { operation, patient } from "../shared";
import { consentRoutes } from "./flow";

const patientName = `${patient.firstName} ${patient.lastName}`;

export const signContent = {
  step: 3,
  title: "3. Consent",
  lead: "Please read the following paragraphs thoroughly before signing the form.",
  simpleTerms: {
    title: "In simple terms",
    note: "The following is a simplified summary version of the full consent form. Please read the summary and legally binding consent form thoroughly before signing.",
    quote:
      "“I have received written and verbal information about my diagnosis, the operation, its risks and other options. I have been informed about necessary interventions if unexpected complications arise during the operation. By signing, I consent to the operation and to those necessary interventions.”",
  },
  /** Text wrapped in **double asterisks** is rendered bold. */
  legal: {
    title: "Legal consent",
    opening: "By signing this form",
    party: {
      lines: [`**${patientName}**`, `**${patient.address}**`],
      alias: "- hereinafter referred to as “**the Patient**” -",
    },
    connector: "in regards to",
    subject: {
      lines: [
        `**${operation.name}**`,
        `${operation.date} - ${operation.time} - ${operation.hospitalName}`,
      ],
      alias: "- hereinafter referred to as “**the Operation**” -",
    },
    confirmations: [
      "**confirms** that they have received sufficient information regarding their diagnosis, the Operation, and associated risks both in writing and in conversation.",
      "**confirms** that they have been informed of the other possible options outside of the Operation.",
      "**confirms** that they have been informed of the necessary interventions in instances of unplanned complications associated with the Operation while the Operation is ongoing.",
    ],
    consents: [
      "The patient **consents** to participating in the Operation at the date, time, and location that is disclosed.",
      "The patient **consents** to the necessary interventions in instances of unplanned complications associated with the Operation while the Operation is ongoing being carried out.",
    ],
  },
  signature: {
    title: "Signature",
    placeholder: `${patientName}’s signature`,
    clear: "Clear",
    dateLocationLabel: "Date & Location (Auto filled)",
    location: operation.city,
  },
  submit: "Submit consent",
  missingSignature: "Please sign in the signature field to submit your consent.",
  back: consentRoutes.confirmation,
  next: consentRoutes.done,
};
