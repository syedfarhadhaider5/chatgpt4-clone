import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chat gpt4',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>
            <div className='flex'>
              {/* sidebar */}
              {/* loading notification */}
              <div className='bg-[#343541] flex-1'>
                  {children}
              </div>
            </div>
        </div>
      </body>
    </html>
  )
}
