import { NavBar } from "@/components/ui/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { VotingProvider } from "@/reducer/votingReducer";
import { headers } from 'next/headers'
import { config } from '@/appkit/config'
import AppKitProvider from '@/appkit/context'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OptiVote",
  description: "Retro Funding 5 voting for general developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppKitProvider>
          <VotingProvider>
            <NavBar />
            {children}
          </VotingProvider>
        </AppKitProvider>
      </body>
    </html>
  );
}
