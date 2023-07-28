import "./globals.scss";
import NavBar from "@/components/navbar/NavBar";

export const metadata = {
  title: "Noluvuyo Manxeba - Portfolio",
  description: "Noluvuyo Manxeba's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
