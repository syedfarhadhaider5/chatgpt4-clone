import { SessionProvider } from './components/SessionProvider';
import Sidebar from './components/Sidebar';
import { authOptions } from '../app/api/auth/[...nextauth]/route';
import './globals.css';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';
import Login from './components/Login';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chat gpt4',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <>
              <div>
                <div className='flex'>
                  <div className='bg-[#202123] h-screen overflow-y-auto'>
                    <Sidebar />
                  </div>
                  {/* loading notification */}
                  <div className='bg-[#343541] flex-1'>
                    {children}
                  </div>
                </div>
              </div>
            </>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
