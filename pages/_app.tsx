import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../components/util/Loader/loader";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Loader>
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon.png" />

        {/* seo tag  */}
        {/* <!-- Primary Meta Tags --> */}
        <title>Sun Holidays Ltd.</title>
        <meta name="title" content="Sun Holidays Ltd." />
        <meta
          name="description"
          content="Sun Holidays Ltd. started when a group of friends decided to make something out of their common passion for travel. Armed with a wide array of experience brought by their many travels within Bangladesh and the abroad, these friends bonded together to form Sun Holidays Ltd. in 08 November 2021."
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sunholidaysltd.com/" />
        <meta property="og:title" content="Sun Holidays Ltd." />
        <meta
          property="og:description"
          content="Sun Holidays Ltd. started when a group of friends decided to make something out of their common passion for travel. Armed with a wide array of experience brought by their many travels within Bangladesh and the abroad, these friends bonded together to form Sun Holidays Ltd. in 08 November 2021."
        />
        <meta
          property="og:image"
          content="/og.jpg"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sunholidaysltd.com/" />
        <meta property="twitter:title" content="Sun Holidays Ltd." />
        <meta
          property="twitter:description"
          content="Sun Holidays Ltd. started when a group of friends decided to make something out of their common passion for travel. Armed with a wide array of experience brought by their many travels within Bangladesh and the abroad, these friends bonded together to form Sun Holidays Ltd. in 08 November 2021."
        />
        <meta
          property="twitter:image"
          content="/og.jpg"
        ></meta>

  
      </Head>
      {/* massanger fb chat bot  */}
      <div id="fb-root"></div>

      <div id="fb-customer-chat" class="fb-customerchat"></div>

      <Script
        id="messenger-tag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `var chatbox = document.getElementById('fb-customer-chat');
              chatbox.setAttribute("page_id", "253039715165971");
              chatbox.setAttribute("attribution", "biz_inbox");`,
        }}
      ></Script>
      <Script
        id="messenger-sdk"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: ` window.fbAsyncInit = function() {
              FB.init({
                xfbml            : true,
                version          : 'v16.0'
              });
            };
      
            (function(d, s, id) {
              var js, fjs = d.getElementsByTagName(s)[0];
              if (d.getElementById(id)) return;
              js = d.createElement(s); js.id = id;
              js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
              fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));`,
        }}
      ></Script>

      <ToastContainer />
      <Component {...pageProps} />
    </Loader>
  );
}
