import Document, { Html, Head, Main, NextScript } from 'next/document'
import i18nextConfig from '../next-i18next.config'

class MyDocument extends Document {
    render() {
        const currentLocale = this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale
        return (
        <Html lang={currentLocale}>
            <Head>
                <link href='https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css' rel='stylesheet' />

                <link href='https://cdnjs.cloudflare.com/ajax/libs/typicons/2.0.9/typicons.min.css' rel='stylesheet' />
                <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400|Oswald:600' rel='stylesheet' />
                <link data-react-helmet='true' rel='icon' href='https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&amp;alt=media' />
            
                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
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