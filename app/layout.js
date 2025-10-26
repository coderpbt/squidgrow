import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Squid Grow",
  description: "Squid Grow Landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-atyp-text">
         <Header />
         <main>
             {children}
         </main>
        <Footer />
      </body>
    </html>
  );
}
