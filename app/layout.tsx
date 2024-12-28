import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import { ThemeProvider } from "./_components/theme-provider";
import Footer from "./_components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "400", "300", "600", "700", "900", "800", "500"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="transition-all">
      <body className={` ${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
