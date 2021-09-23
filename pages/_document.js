import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Config } from "../components/config.js";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
            <script async src={Config.matomoHost + "matomo.js"} />
            <script dangerouslySetInnerHTML={{
              __html: `
              var _paq = window._paq = window._paq || [];
            
              _paq.push(['trackPageView']);
              _paq.push(['enableLinkTracking']);
              (function() {
                  var u="${Config.matomoHost}";
                  _paq.push(['setTrackerUrl', u+'matomo.php']);
                  _paq.push(['setSiteId', '${Config.matomoSiteId}']);
                  var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
                  g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
              })();     
            
              `}}>
            </script>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}