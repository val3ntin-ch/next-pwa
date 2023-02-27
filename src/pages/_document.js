import { Html, Head, Main, NextScript } from "next/document";

const Document = () => (
  <Html lang="en">
    <Head>
      <link rel="manifest" href="/manifest.webmanifest" />
      <link rel="apple-touch-icon" href="/icons/ios/icon.png" />
      -- meta for change theme color
      <meta
        name="theme-color"
        content="#ffffff"
        media="(prefers-color-scheme: dark)"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
