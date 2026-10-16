import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
const Nafis = localFont({
  src: [
    {
      path: "../public/fonts/IRAN Kharazmi.ttf",
      weight: "700",
      style: "normal",
    }
  ],
  variable: "--font-Nafis",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cyrus The Great",
  description: "کورش بزرگ ، شاهنشاه ایران زمین",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${Nafis.className} ${Nafis.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
