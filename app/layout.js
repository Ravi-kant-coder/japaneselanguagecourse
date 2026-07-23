import { Source_Sans_3, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source",
});

const notoJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jp",
});

export const metadata = {
  title: "Learn Japanese for JLPT",
  description:
    "We provide highly effective Japanese language (JLPT) and culture training.",
  icons: {
    icon: "/sakura.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${notoJP.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Header />

        <main className="flex-1 pt-25">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
