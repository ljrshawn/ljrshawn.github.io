import "./globals.css";

export const metadata = {
  title: "Shawn Jingran Lyu | Software Developer",
  description: "Personal resume and portfolio website for Shawn (Jingran) Lyu.",
  keywords: ["Shawn Lyu", "Jingran Lyu", "Software Developer", "Resume"],
  authors: [{ name: "Shawn Lyu" }],
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport = {
  themeColor: "#0f766e",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
