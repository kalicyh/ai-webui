import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Headerbar from "@/app/components/layout/Headerbar";
import Footerbar from "@/app/components/layout/Footerbar";
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AI webui',
  description: 'Next.js + FastAPI + DaisyUI Starter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" data-theme="light">
      <body className={inter.className}>
      <div className={`flex flex-col min-h-screen`}>
      <Headerbar></Headerbar>
        <main className=''>
          {children}
        </main>
        <div className='flex-grow'></div>
        <Toaster richColors expand={true} position="bottom-right" />
        <Footerbar></Footerbar>
        </div>
      </body>
    </html>
  );
}
