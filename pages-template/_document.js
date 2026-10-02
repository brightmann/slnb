import Document, {
  Html, Head, Main, NextScript,
} from 'next/document'

// GitHub Pages serves under /slnb; prefix static asset paths accordingly.
const basePath = process.env.GHPAGES === '1' ? '/slnb' : ''

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="referrer" content="no-referrer" />
          <link rel="stylesheet" href={`${basePath}/index.css`} type="text/css" />
          <link rel="stylesheet" href={`${basePath}/hljs.css`} type="text/css" />
          <link rel="stylesheet" href={`${basePath}/reset.css`} type="text/css" />
          <link rel="stylesheet" href={`${basePath}/markdown.css`} type="text/css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
