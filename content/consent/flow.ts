/** Routes and progress steps of the consent flow. */

export const consentRoutes = {
  welcome: "/consent",
  informationReview: "/consent/information-review",
  confirmation: "/consent/confirmation",
  sign: "/consent/sign",
  done: "/consent/done",
} as const;

export const consentSteps = [
  { label: "Information review", href: consentRoutes.informationReview },
  { label: "Confirmation", href: consentRoutes.confirmation },
  { label: "Consent", href: consentRoutes.sign },
];
