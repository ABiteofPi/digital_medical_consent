/**
 * Mocked backend calls. Each function simulates network latency and resolves
 * successfully. Swap the bodies for real `fetch` calls when a backend exists.
 */

const LATENCY_MS = 700;

function delay(ms = LATENCY_MS) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export type MockResponse = { ok: true; receivedAt: string };

async function mockRequest(endpoint: string, payload: unknown): Promise<MockResponse> {
  await delay();
  console.info(`[mock-api] POST ${endpoint}`, payload);
  return { ok: true, receivedAt: new Date().toISOString() };
}

export function submitQuestions(payload: { concerns: string[]; questions: string[] }) {
  return mockRequest("/pre-surgery/questions", payload);
}

export function reportIncorrectInfo(payload: { message: string; page: string }) {
  return mockRequest("/report-incorrect-info", payload);
}

export function requestAssistance(payload: { page: string }) {
  return mockRequest("/consent/assistance", payload);
}

export function submitConsent(payload: {
  confirmations: Record<string, boolean>;
  signature: string;
  signedAt: string;
  location: string;
}) {
  return mockRequest("/consent/submit", payload);
}
