import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.css';
import Headerbar from "@/containers/public/Headerbar";
import Footerbar from "@/containers/public/Footerbar";
import { Toaster } from 'sonner';
import initializeApp from "@/lib/init";
import StoreProvider from '@/app/StoreProvider';

const inter = Inter({ subsets: ['latin'] });

initializeApp();

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
      <StoreProvider>{children}</StoreProvider>
        <div className='flex-grow'></div>
        <Toaster richColors expand={true} position="bottom-right" />
        <Footerbar></Footerbar>
        </div>
      </body>
    </html>
  );
}
