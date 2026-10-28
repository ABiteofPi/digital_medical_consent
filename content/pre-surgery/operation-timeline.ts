import { preSurgeryRoutes } from "./flow";

export const operationTimelineContent = {
  step: 3,
  title: "3. Operation timeline",
  individualPlan: {
    title: "Individualized plan",
    paragraphs: [
      "You will receive an individualized plan including specific care instructions and medication plan from the hospital separately.",
      "The following is a general timeline to give you an overview of what to expect in the time leading to and following your operation.",
    ],
  },
  timeline: [
    {
      title: "Night before",
      body: "Nothing to eat or drink after 10 pm. Take your medicines as set out in the plan you are given.",
    },
    {
      title: "Morning",
      body: "Admission to the ward. The talk about the anaesthetic is separate from this form.",
    },
    {
      title: "Operation",
      body: "You are under anaesthesia. The operation usually takes 45 to 90 minutes.",
    },
    {
      title: "Afterwards",
      body: "About 2 hours in the recovery room, then back to the ward. You get pain relief as soon as you ask for it.",
    },
    {
      title: "At home",
      body: "No heavy lifting for 2-4 weeks. You may shower from day 2.",
    },
  ],
  back: preSurgeryRoutes.diagnosisProcedure,
  next: preSurgeryRoutes.risks,
};
