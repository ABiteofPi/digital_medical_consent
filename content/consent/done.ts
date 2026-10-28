import { operation, patient, ui } from "../shared";

export const consentDoneContent = {
  title: "Done!",
  /** `{date}` is replaced with the submission date. */
  subtitle: "Your consent was submitted on {date}",
  notSubmitted: "Your consent has not been submitted yet.",
  record: {
    title: "Submission record",
    rows: [
      { label: "Patient:", value: `${patient.firstName} ${patient.lastName}`.toUpperCase() },
      { label: "Operation:", value: operation.name },
      { label: "Date of Op.:", value: operation.date, hint: `(${ui.dateFormatHint})` },
      { label: "Time of Op.:", value: operation.time, hint: `(${operation.timeNote})` },
    ],
    submittedLabel: "Consent submitted on:",
    /** `{date}` and `{time}` are replaced with the submission timestamp. */
    submittedValue: "{date} - {time} CET",
    submittedHint: `(${operation.timeNote})`,
  },
  paragraphs: [
    "You will receive a printed copy of the signed form for your records from the hospital.",
    "Your doctor and medical care team will be in close contact with you in the days leading to your operation for preparation and support.",
    "You can withdraw your consent at any time before the operation.",
    "Feel free to get in touch with your care team if you have any further questions or concerns.",
  ],
  finish: { label: "Finish", href: "/" },
};
