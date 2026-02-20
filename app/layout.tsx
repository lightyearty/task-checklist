import '../styles/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-4" style={{backgroundImage: 'url(/background.png)'}}>
        {children}
      </body>
    </html>
  );
}