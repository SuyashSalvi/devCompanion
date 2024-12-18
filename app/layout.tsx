import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300"
        suppressHydrationWarning
        data-be-installed="true"
        
      >
        <div suppressHydrationWarning data-be-installed="true">
          <CustomCursor />
          {/* Navbar and Footer */}
          <Navbar />
          <main suppressHydrationWarning className="p-8">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}


