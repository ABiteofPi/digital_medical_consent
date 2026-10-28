import { operation, patient, ui } from "../shared";
import { preSurgeryRoutes } from "./flow";

export const informationReviewContent = {
  step: 1,
  title: "1. Information review",
  lead: "Please check your personal information to be correct.",
  patientPanel: {
    title: "Patient information",
    rows: [
      { label: "Name:", value: patient.firstName.toUpperCase() },
      { label: "Surname:", value: patient.lastName.toUpperCase() },
      { label: "Sex:", value: patient.sex.toUpperCase() },
      { label: "Date of birth:", value: patient.dateOfBirth, hint: `(${ui.dateFormatHint})` },
      { label: "Health insurance No.:", value: patient.insuranceNumber },
      { label: "Address:", value: patient.address },
    ],
  },
  operationPanel: {
    title: "Operation information",
    rows: [
      { label: "Operation:", value: operation.name },
      { label: "Medical term:", value: operation.medicalTerm },
      { label: "Attending Doctor:", value: operation.doctor.toUpperCase() },
      { label: "Date of Op.:", value: operation.date, hint: `(${ui.dateFormatHint})` },
      { label: "Time of Op.:", value: operation.time, hint: `(${operation.timeNote})` },
    ],
  },
  incorrectPanel: {
    title: "Something incorrect?",
    body: "If your identity or operation details are wrong, let us know immediately. Your correct details must be confirmed before you proceed with disputed information.",
  },
  footer: "If all details are correct, you can continue to the next section.",
  back: preSurgeryRoutes.welcome,
  next: preSurgeryRoutes.diagnosisProcedure,
};
