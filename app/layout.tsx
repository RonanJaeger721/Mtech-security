import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MTECH Security | CCTV, Electric Fencing & Security Solutions Zimbabwe",
  description: "MTECH Security provides CCTV surveillance, electric fencing, access control, gate automation, clear-view fencing and street lighting solutions.",
  keywords: ["MTECH Security", "CCTV Zimbabwe", "electric fencing", "access control", "gate automation", "security systems Zimbabwe"],
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
