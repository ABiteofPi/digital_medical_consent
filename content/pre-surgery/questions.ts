import { preSurgeryRoutes } from "./flow";

export const questionsContent = {
  step: 6,
  title: "6. Your questions",
  lead: "Your questions and concerns are sent directly to your doctor. Your doctor will work through all of them with you before you’re asked for consent.",
  priorities: {
    title: "What matters most to you?",
    options: ["Being pain-free soon", "Short time off work", "Avoiding an operation"],
    ownLabel: "Add your own priority",
    ownPlaceholder: "Tell your doctor what’s important to you...",
    add: "Add priority",
  },
  frequentQuestions: {
    title: "Questions other patients frequently ask",
    options: [
      "Who will operate on me?",
      "When will I be able to go back to work?",
      "Will I have to change my diet?",
      "How long will the scar hurt?",
    ],
  },
  ownQuestion: {
    title: "Write your own questions",
    placeholder: "Type your question here...",
    add: "Add question",
  },
  drafts: {
    title: "My drafts",
    concernsHeading: "My concerns",
    questionsHeading: "My questions",
    emptyConcerns: "No concerns selected yet.",
    emptyQuestions: "No questions added yet.",
    remove: "Remove",
  },
  submit: "Submit",
  back: preSurgeryRoutes.options,
  next: preSurgeryRoutes.done,
};
