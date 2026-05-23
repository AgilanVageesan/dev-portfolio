import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agilan Vageesan | Senior Software Engineer",
  description:
    "Senior Software Engineer helping teams build AI assistants and agents, prompt engineering workflows, RAG systems, CI/CD pipelines, AWS infrastructure-as-code, observability, and market-ready products.",
  keywords: [
    "Senior Software Engineer",
    "AI assistants",
    "AI agents",
    "Prompt Engineering",
    "RAG",
    "CI/CD",
    "DevSecOps",
    "AWS infrastructure as code",
    "Observability",
    "SLO",
    "SLI",
    "Security Champion",
    "Public Speaker",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
