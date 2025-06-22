import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
const ovo = Ovo({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio-Prateek Jain",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${outfit?.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-dark-theme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
