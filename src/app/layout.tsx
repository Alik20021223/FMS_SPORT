import "./globals.css";
import StoreProvider from "../redux/StoreProvider";
import NextTopLoader from 'nextjs-toploader';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        
        <StoreProvider>
          <NextTopLoader />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
