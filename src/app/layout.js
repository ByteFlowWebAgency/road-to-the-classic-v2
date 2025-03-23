import './globals.css';

export const metadata = {
  title: 'Road To The Classic',
  description: 'A platform for classic car enthusiasts',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
