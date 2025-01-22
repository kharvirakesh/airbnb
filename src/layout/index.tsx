import { Navbar } from "@/components/common/navbar/Navbar";
import Providers from "@/providers/providers";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={inter.className}>
    <main className="container py-10">
    <Providers>
      <Navbar />
      {children}
      </Providers>
    </main>
    </div>
  );
}
