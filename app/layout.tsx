import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "紬 tsumugi | 心をほどく、電話占い",
  description: "あなたの想いに寄り添う占い師と、ここで。ブラウザでつながる電話占いサービス。",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
