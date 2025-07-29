import { Inter, Tiro_Bangla } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const tiroBangla = Tiro_Bangla({
  subsets: ['bengali'],
  weight: '400',
  variable: '--font-bangla',
});

export const metadata = {
  title: 'Assam Society of Bangalore (ASOB)',
  description: 'Fostering Assamese culture, community, and social harmony in Bangalore since 1982.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${tiroBangla.variable} font-inter`}>
        {children}
      </body>
    </html>
  );
}