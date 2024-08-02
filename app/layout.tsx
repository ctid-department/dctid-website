import type { Metadata, ResolvingMetadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarWrapper from "./components/NavbarWrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeProvider";
import { client } from "./lib/sanity";

async function getMetadata() {
  const query = `
  *[_type == 'metadata'] {
    title,
    description
  }[0]
  `;

  const data = await client.fetch(query);
  return data || null;
}

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
  const data = await getMetadata();

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      images: [
        "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCTID-logo.ff21eeda.png&w=128&q=75",
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex flex-col min-h-dvh relative overflow-x-hidden`}
      >
        <ThemeProvider attribute="class">
          <Header />
          <NavbarWrapper>
            <Navbar />
          </NavbarWrapper>
          <main className="max-w-4xl mx-auto px-4 flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
