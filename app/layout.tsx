export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
          <title>wasm works</title>
      </head>
      <body>
      <header>
      </header>
      {children}
      <footer>© 2025 WASM Works Inc. | Rust · WASM · WASI</footer>
      </body>
    </html>
  );
}
