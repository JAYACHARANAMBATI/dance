import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dancer Studio - Where Rhythm Meets Imagination",
  description: "Professional dance studio offering ballet, hip-hop, contemporary, and more. Join our community of passionate dancers and expert instructors.",
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23000"/><text x="50" y="75" font-size="80" font-weight="bold" text-anchor="middle" fill="%238B5CF6">D</text></svg>',
        type: 'image/svg+xml',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@100;200;300;400;500;600;700;800;900&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" />
        <style>{`
        :root {
          --font-inter: 'Inter', sans-serif;
          --font-oswald: 'Oswald', sans-serif;
        }
      `}</style>
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}