"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
  type ReactNode,
} from "react";

/**
 * Client-side state for the prototype. Everything is kept in localStorage so
 * progress survives a reload ("Your progress through each section is saved").
 * Replace this store with real API calls once a backend exists.
 */

const STORAGE_KEY = "digital-consent-state-v1";

export const TEXT_SCALES = [0.875, 1, 1.125, 1.25, 1.375];

export type PersistedState = {
  textScaleIndex: number;
  language: string;
  concerns: string[];
  questions: string[];
  questionsSubmittedAt: string | null;
  consentChecks: Record<string, boolean>;
  signature: string | null;
  consentSubmittedAt: string | null;
  /** Set when the consent flow sends the patient back to review a pre-surgery page. */
  reviewReturnPath: string | null;
};

const DEFAULT_STATE: PersistedState = {
  textScaleIndex: 1,
  language: "English",
  concerns: [],
  questions: [],
  questionsSubmittedAt: null,
  consentChecks: {},
  signature: null,
  consentSubmittedAt: null,
  reviewReturnPath: null,
};

type Patch =
  | Partial<PersistedState>
  | ((state: PersistedState) => Partial<PersistedState>);

// --- External store -------------------------------------------------------

let currentState = DEFAULT_STATE;
let loaded = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) currentState = { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch {
    // Storage can be unavailable (private mode); fall back to defaults.
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  load();
  return currentState;
}

function getServerSnapshot() {
  return DEFAULT_STATE;
}

function setState(patch: Patch) {
  load();
  const next = typeof patch === "function" ? patch(currentState) : patch;
  currentState = { ...currentState, ...next };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
  } catch {
    // Ignore write failures; state still lives in memory.
  }
  listeners.forEach((listener) => listener());
}

// --- Context --------------------------------------------------------------

type AppStateContextValue = {
  state: PersistedState;
  update: (patch: Patch) => void;
  reset: () => void;
  notify: (message: string) => void;
};

const AppStateContext = createContext<AppStateContextValue | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const state = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.documentElement.style.fontSize = `${TEXT_SCALES[state.textScaleIndex] * 100}%`;
  }, [state.textScaleIndex]);

  const notify = useCallback((message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast(message);
    toastTimer.current = setTimeout(() => setToast(null), 3500);
  }, []);

  const reset = useCallback(
    () => setState({ ...DEFAULT_STATE, textScaleIndex: currentState.textScaleIndex }),
    [],
  );

  const value = useMemo(
    () => ({ state, update: setState, reset, notify }),
    [state, reset, notify],
  );

  return (
    <AppStateContext.Provider value={value}>
      {children}
      <div
        role="status"
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-8 z-50 flex justify-center px-6"
      >
        {toast && (
          <p className="pointer-events-auto max-w-[600px] rounded-lg bg-ink px-5 py-3 text-base text-white shadow-lg">
            {toast}
          </p>
        )}
      </div>
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) throw new Error("useAppState must be used inside <AppStateProvider>");
  return context;
}

// --- Helpers --------------------------------------------------------------

export function toggleItem(list: string[], item: string) {
  return list.includes(item) ? list.filter((entry) => entry !== item) : [...list, item];
}

export function addItem(list: string[], item: string) {
  const trimmed = item.trim();
  return trimmed && !list.includes(trimmed) ? [...list, trimmed] : list;
}

export function removeItem(list: string[], item: string) {
  return list.filter((entry) => entry !== item);
}
