import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { ClerkProvider } from "@clerk/nextjs";

// const inter = Plus_Jakarta_Sans({ subsets: ["latin"] });

const fontSans = Plus_Jakarta_Sans({ subsets: ["latin"],
  weight:['300','400','500','600','700'],
  variable: '--font-sans'
 });

export const metadata = {
  title: "Form Plus",
  description: "Ai Form Builder Application",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en" data-theme="light">
      <body className={fontSans.className}>
      <Header/>
      {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
