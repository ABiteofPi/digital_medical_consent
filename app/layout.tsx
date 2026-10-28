import type { Metadata, Viewport } from "next";
import { Noto_Sans } from "next/font/google";
import { AppStateProvider } from "@/lib/app-state";
import "./globals.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Consent Journey",
  description: "Suggested solution for a digital pre-surgery information and consent journey.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${notoSans.variable} antialiased`}>
      <body className="min-h-screen font-sans">
        <AppStateProvider>{children}</AppStateProvider>
      </body>
    </html>
  );
}
