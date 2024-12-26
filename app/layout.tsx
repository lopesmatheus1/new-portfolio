import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={` ${poppins.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
