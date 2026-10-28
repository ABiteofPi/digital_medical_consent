# Digital consent journey (prototype)

A suggested solution for a digital pre-surgery information and consent journey, built with Next.js for an iPad Pro 11″ in portrait (834 CSS px wide).

```bash
npm install
npm run dev   # http://localhost:3000
```

## Structure

| Path | What lives there |
| --- | --- |
| `app/page.tsx` | Landing page linking to both flows |
| `app/pre-surgery/*` | Pre-surgery flow: welcome, 6 sections, done (designs `design/pre-surgery/0–7`) |
| `app/consent/*` | Consent flow: welcome, 3 sections, done (designs `design/consent/8–12`) |
| `content/` | **All page text.** One file per page, plus `shared.ts` for hospital, patient, operation and common labels |
| `components/common/` | Building blocks reused across pages (header, toolbar, progress, panels, buttons, dialogs) |
| `components/pre-surgery/<page>/`, `components/consent/<page>/` | Components belonging to a single page |
| `lib/app-state.tsx` | Client-side state (text size, questions, confirmations, signature), saved in localStorage |
| `lib/mock-api.ts` | Mocked submit/report/assistance calls; replace with real requests when a backend exists |

## Editing content

Change the text of a page in its own file under `content/` (e.g. `content/pre-surgery/risks.ts`). Patient and operation details shared by both flows are in `content/shared.ts`. In legal text, `**bold**` renders in bold.
