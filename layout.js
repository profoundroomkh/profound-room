import "./globals.css";

export const metadata = {
  title: "Profound Room",
  description: "Private Relaxation for Men",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
