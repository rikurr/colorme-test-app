import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <title>タイトルが入る</title>
        <meta name="description" content="説明文が入る" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <header>
          <h1>アプリ名が入ります</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
