import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});


export const metadata: Metadata = {
  title: "QuoteFlow",
  description: "Manage your quotation flow intelligently",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <main>
            {children}
          </main>
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
