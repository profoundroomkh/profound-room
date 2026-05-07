import "./globals.css";

export const metadata = {
  title: "深寓 Profound Room",
  description: "高雄預約制放鬆空間｜深層舒壓・精油按摩・預約體驗",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
