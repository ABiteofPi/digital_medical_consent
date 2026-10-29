/**
 * Data shared by both flows: the hospital, the patient's case and common UI
 * labels. Page-specific text lives in the per-page files next to this one.
 */

export const hospital = {
  name: "Munich ABC Hospital",
  department: "Department of General and Visceral Surgery",
  caseNumberLabel: "Case No.",
  caseNumber: "A123456789",
  logoSrc: "/images/hospital-logo.png",
  logoAlt: "Hospital logo",
};

export const patient = {
  firstName: "Max",
  lastName: "Mustermann",
  sex: "Male",
  dateOfBirth: "01.01.1990",
  insuranceNumber: "A0123456789",
  address: "Namestr. 123, 11111 Munich, Germany",
};

export const operation = {
  name: "Removing the Gallbladder",
  medicalTerm: "Laparoscopic cholecystectomy",
  doctor: "Dr. MD. Jane Doe",
  date: "01.10.2023",
  time: "10:30 CET",
  timeNote: "Local Munich time",
  hospitalName: "Hospital name",
  /** Used to auto-fill the signature location. */
  city: "München",
};

export const ui = {
  back: "Back",
  next: "Next",
  dateFormatHint: "DD.MM.YYYY",
  toolbar: {
    decreaseText: "Decrease text",
    enlargeText: "Enlarge text",
    readAloud: "Read aloud",
    stopReading: "Stop reading",
    readAloudUnsupported: "Read aloud is not supported on this device.",
    languages: ["English", "Deutsch", "Türkçe", "العربية"],
    languageMocked: "Translations are not available in this prototype yet.",
  },
  myQuestions: {
    buttonLabel: "My Questions ({count})",
    dialogTitle: "My questions",
    dialogIntro:
      "Write down anything you would like to ask your doctor. Everything you collect is sent to your doctor at the end of this form.",
    concernsHeading: "My concerns",
    questionsHeading: "My questions",
    empty: "You have not added any questions yet.",
    placeholder: "Type your question here...",
    add: "Add question",
    close: "Close",
    added: "Your question was added.",
    remove: "Remove",
  },
  reportIncorrectInfo: {
    buttonLabel: "Report incorrect info",
    dialogTitle: "Report incorrect information",
    dialogIntro: "Tell us which details are wrong. A member of staff will correct them with you.",
    placeholder: "e.g. My date of birth is wrong...",
    submit: "Send report",
    submitting: "Sending...",
    cancel: "Cancel",
    success: "Thank you. Your report was sent to the hospital staff.",
  },
  submitting: "Submitting...",
};
