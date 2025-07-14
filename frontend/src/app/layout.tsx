import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./modern.css";
import Header from "@/component/header";
import Footer from "@/component/footer";
import { GraphQLProvider } from "@/providers/graphql-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Static meta tags can go here */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GraphQLProvider>
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </GraphQLProvider>
      </body>
    </html>
  );
}
