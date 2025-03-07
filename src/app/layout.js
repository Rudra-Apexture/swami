// src/app/(public)/layout.js
import './globals.css'; // KEEP THIS!
import Header from './(public)/components/Header/Header';
import Footer from './(public)/components/Footer/Footer';

export const metadata = {
    title: 'swaminarayanYoga',
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