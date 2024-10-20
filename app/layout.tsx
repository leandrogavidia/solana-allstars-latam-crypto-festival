import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { SignUpModal } from "./components/sign-up-modal";
import { ModalProvider } from "./modal-context";
import Providers from "./components/providers"

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "LATAM Crypto Festival - Solana Allstars LATAM",
  description: "LATAM Crypto Festival - Solana Allstars LATAM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <ModalProvider>
        <body className={montserrat.className}>
          <Providers>
            <Header />
            <main className="max-w-[1920px] mx-auto">
              <SignUpModal />
              {children}
            </main>
            <Footer />
          </Providers>
        </body>
      </ModalProvider>
    </html>
  );
}
