import '../styles/globals.css';

export const metadata = {
  title: 'Home Groceries',
  description: 'Task checklist app',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-4 w-full" style={{backgroundImage: 'url(/background.png)'}}>
        {children}
      </body>
    </html>
  );
}