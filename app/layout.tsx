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
  title: "BlogSpot",
  description:
    "A blogging platform that allows users to create, share, and manage their blogs through Sanity UI.",
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
