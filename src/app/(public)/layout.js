// src/app/(public)/layout.js
import '../globals.css'; // KEEP THIS!
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export const metadata = {
  title: 'My Next.js App',
  description: 'Built with Next.js and Tailwind CSS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}