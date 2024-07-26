import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { cn } from '@/lib/utils'

const roboto = Roboto({ 
  subsets: ["latin"], 
  weight: ['300', '400', '500', '700', '900'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen bg-sky-950 font-sans antialiased', roboto.variable)}>
        {children}
      </body>
    </html>
  );
}
