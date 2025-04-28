import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import MyNavbar from "../components/myNavbar";

const space = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal"],
});

export const metadata = {
  title: "Virtual Office SmartOffice",
  description:
    "Sewa Virtual Office per tahun mulai dari 1jt/th atau spaceworking mulai dari 55rb/jam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <MyNavbar /> */}
      <body className={space.className}>{children}</body>
    </html>
  );
}
