import "./globals.css";

export const metadata = {
  title: "Profound Room",
  description: "title: "深寓 Profound Room｜高雄預約制男仕放鬆空間",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
