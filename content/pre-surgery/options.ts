import { preSurgeryRoutes } from "./flow";

export const optionsContent = {
  step: 5,
  title: "5. Options",
  lead: "Your options moving forward.",
  options: [
    {
      title: "Surgery: Operate now",
      paragraphs: [
        "The gallbladder is surgically removed. This has the highest chance of permanently improving symptoms after recovery, but improvement is not guaranteed.",
        "No heavy lifting for 2 to 4 weeks.",
        "You will receive a personalized recovery plan from your doctor.",
      ],
    },
    {
      title: "Wait and decide later",
      paragraphs: [
        "Observe your symptoms further and decide about an operation later.",
        "Your condition could worsen. A later operation may be more difficult and risky.",
        "You’ll need regular check-ups every 3 months or more frequently.",
      ],
    },
    {
      title: "No surgery: managing symptoms",
      paragraphs: [
        "No operation. Your doctor treats your symptoms going forward.",
        "The cause of your symptoms is not removed. Relief may be temporary and your condition could worsen, making symptom treatment more difficult and risky over time.",
      ],
    },
  ],
  recommendation: {
    title: "Your doctor’s recommendation",
    body: "Your attending doctor recommends surgery. Your records note repeated inflammation. This poses a greater chance of an emergency with waiting.",
    action: "Write a question for your doctor",
  },
  back: preSurgeryRoutes.risks,
  next: preSurgeryRoutes.questions,
};
