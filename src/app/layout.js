import "./globals.css";

export const metadata = {
  title: "Task Manager",
  description: "Test technique Next.js Task Manager",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
