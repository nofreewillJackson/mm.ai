import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Surviving the hellscape of postmodernism",
  description: "Jackson & Friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Surviving the hellscape of late-stage capitalism</title>
        <meta name="description" content="Jackson & Friends" />

        {/* Favicon for most browsers */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../workspaces/malleablemind.ai/app/favicon-32x32.png"
        />

        {/* Favicon for Apple devices */}
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="../workspaces/malleablemind.ai/app/apple-touch-icon-152x152.png"
        />
      </Head>
      <body className={`${inter.className} bg-gray-800 text-blue-400 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
