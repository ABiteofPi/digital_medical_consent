"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { ui } from "@/content/shared";
import { TEXT_SCALES, useAppState } from "@/lib/app-state";
import { GlobeIcon, SpeakerIcon, StopIcon } from "./icons";

const t = ui.toolbar;

function ToolbarButton({
  icon,
  label,
  onClick,
  disabled,
  pressed,
  expanded,
}: {
  icon: ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
  pressed?: boolean;
  expanded?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={pressed}
      aria-expanded={expanded}
      className="flex min-w-[64px] flex-col items-center gap-1 rounded-lg bg-sand px-2.5 pt-2 pb-2 text-ink transition-colors hover:bg-sand-strong disabled:opacity-40 aria-pressed:bg-sand-strong"
    >
      <span className="flex h-8 items-center text-[24px] leading-none font-semibold">{icon}</span>
      <span className="text-[13px] leading-tight">{label}</span>
    </button>
  );
}

export function AccessibilityToolbar() {
  const { state, update, notify } = useAppState();
  const pathname = usePathname();
  const [speaking, setSpeaking] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  // Stop reading when the patient navigates to another page.
  useEffect(() => () => window.speechSynthesis?.cancel(), [pathname]);

  const scaleIndex = state.textScaleIndex;

  function toggleReadAloud() {
    if (!("speechSynthesis" in window)) {
      notify(t.readAloudUnsupported);
      return;
    }
    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const text = document.getElementById("content")?.innerText ?? "";
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-GB";
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  }

  function chooseLanguage(language: string) {
    setLanguageOpen(false);
    update({ language });
    if (language !== t.languages[0]) notify(t.languageMocked);
  }

  return (
    <div className="flex items-center justify-between border-b border-line px-7.5 py-5">
      <div className="flex gap-2">
        <ToolbarButton
          icon="A−"
          label={t.decreaseText}
          disabled={scaleIndex <= 0}
          onClick={() => update({ textScaleIndex: Math.max(0, scaleIndex - 1) })}
        />
        <ToolbarButton
          icon="A+"
          label={t.enlargeText}
          disabled={scaleIndex >= TEXT_SCALES.length - 1}
          onClick={() =>
            update({ textScaleIndex: Math.min(TEXT_SCALES.length - 1, scaleIndex + 1) })
          }
        />
      </div>
      <div className="flex gap-2">
        <ToolbarButton
          icon={speaking ? <StopIcon className="size-7" /> : <SpeakerIcon className="size-7" />}
          label={speaking ? t.stopReading : t.readAloud}
          pressed={speaking}
          onClick={toggleReadAloud}
        />
        <div className="relative">
          <ToolbarButton
            icon={<GlobeIcon className="size-7" />}
            label={state.language}
            expanded={languageOpen}
            onClick={() => setLanguageOpen((open) => !open)}
          />
          {languageOpen && (
            <ul className="absolute right-0 z-20 mt-2 w-44 overflow-hidden rounded-lg border border-line bg-white shadow-lg">
              {t.languages.map((language) => (
                <li key={language}>
                  <button
                    type="button"
                    onClick={() => chooseLanguage(language)}
                    aria-current={language === state.language}
                    className="w-full px-4 py-3 text-left text-[16px] hover:bg-panel aria-[current=true]:font-semibold"
                  >
                    {language}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
