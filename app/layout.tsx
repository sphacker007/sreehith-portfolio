import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sreehith Yachamaneni — Data Scientist",
  description: "Data Scientist specializing in machine learning, predictive analytics, forecasting, and applied AI.",
  metadataBase: new URL("https://sreehith-portfolio.vercel.app"),
  openGraph: {
    title: "Sreehith Yachamaneni — Data Scientist",
    description: "Building intelligent solutions from complex data.",
    type: "website",
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}

