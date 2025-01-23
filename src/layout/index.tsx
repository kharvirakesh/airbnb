import { Navbar } from "@/components/common/navbar/Navbar";
import Providers from "@/providers/providers";
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <div className={inter.className}>
        <main className="container py-10">
          <Providers>
            <Navbar />
            {children}
          </Providers>
        </main>
      </div>
    </ClerkProvider>
  );
}
