import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Willo - цифровые решения для роста бизнеса",
  description:
    "Проектирование UI/UX, коммерческий моушн и серверные решения в премиальном dark neon стиле.",
  openGraph: {
    title: "Willo",
    description: "Цифровые решения для роста бизнеса",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
