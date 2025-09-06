import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Raleway, Roboto } from "next/font/google";
//import { Navbar } from "./components/Navbar/Navbar";
//import Footer from "./components/footer/Footer";
import QueryProvider from "./providers/QueryClient";
import { FooterProvider } from "./context/FooterProvider";
import { ThemeProvider } from "./context/ThemeToggle";
//import SearchPage from "./components/search/SearchModal";
import "./globals.css";
import LayoutContent from "./LayoutContent";
import BackToTopButton from "./components/BackToTopBtn";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const raleway = Raleway({ variable: "--font-raleway", subsets: ["latin"] });
const roboto = Roboto({ variable: "--font-roboto", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlogSpot | Share Your Voice with the World",
  description:
    "BlogSpot is a modern blogging platform that allows users to create, share, and manage their blogs effortlessly using Sanity UI and Next.js.",
  metadataBase: new URL("https://blogged-48qg.vercel.app"), // no trailing slash
  openGraph: {
    title: "BlogSpot | Share Your Voice with the World",
    description:
      "BlogSpot is a modern blogging platform that allows users to create, share, and manage their blogs effortlessly using Sanity UI and Next.js.",
    url: "https://blogged-48qg.vercel.app",
    siteName: "BlogSpot",
    type: "website",
    images: [
      {
        url: "https://blogged-48qg.vercel.app/assets/svg/mainLogo.svg", // ✅ absolute path to your preview image
        width: 1200,
        height: 630,
        alt: "BlogSpot - Create and Share Your Blogs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BlogSpot | Share Your Voice with the World",
    description:
      "BlogSpot is a modern blogging platform that allows users to create, share, and manage their blogs effortlessly using Sanity UI and Next.js.",
    images: [
      "https://blogged-48qg.vercel.app/assets/svg/mainLogo.svg", //  absolute path
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Layout Component with Conditional Rendering
/* const LayoutContent = ({ children }: { children: React.ReactNode }) => {
  const { isSearchOpen } = useFooterContext(); // Get search state

  if (isSearchOpen) {
    return <SearchPage />; // Show only SearchPage when searching
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}; */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${raleway.variable} antialiased`}
      >
        <ThemeProvider>
          <QueryProvider>
            <FooterProvider>
              <BackToTopButton />
              <LayoutContent>{children}</LayoutContent>
            </FooterProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
