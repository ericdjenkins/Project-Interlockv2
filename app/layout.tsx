import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Interlock | Greater Boston 2027 Pilot",
  description:
    "Project Interlock is designing a 2027 Greater Boston pilot connecting Black and Latino students with engineering education, AI learning, mentors, paid experience, and career pathways.",
  metadataBase: new URL("https://project-interlock.ericdjenkins.chatgpt.site"),
  openGraph: {
    title: "Project Interlock | Greater Boston 2027 Pilot",
    description: "Learn, Support, Mentor, Experience, Launch: a connected engineering and AI pathway for Black and Latino students.",
    url: "https://project-interlock.ericdjenkins.chatgpt.site",
    siteName: "Project Interlock",
    type: "website",
  },
  icons: {
    icon: "/assets/project-interlock-mark.png",
    shortcut: "/assets/project-interlock-mark.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
