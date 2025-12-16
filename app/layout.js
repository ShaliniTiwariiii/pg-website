import './globals.css';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export const metadata = {
    title: 'PG Website',
    description: 'Find your perfect PG accommodation',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <div className="container">
                    <Navbar />
                </div>
                <main>
                    <div className="container">{children}</div>
                </main>
                <div className="container">
                    <Footer />
                </div>
            </body>
        </html>
    );
}
