import { Inter } from 'next/font/google';
import './globals.css';
import { ReduxProvider } from '@/lib/redux/provider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'SaaS Platform',
  description: 'A modern SaaS platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white`} cz-shortcut-listen="true">
        <ReduxProvider>
          {children}
          <ToastContainer
            position="bottom-right"
            toastClassName="!bg-gray-800 !text-white"
            progressClassName="!bg-blue-500"
          />
        </ReduxProvider>
      </body>
    </html>
  );
}
