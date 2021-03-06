import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap" rel="stylesheet" />
                    <link rel='icon' href='/assets/favicon.png' type='image/x-icon'/ >
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
