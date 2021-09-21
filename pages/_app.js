import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import '../styles/general.css'

import "/public/css/base.css"
import "/public/css/fonts.css"
import "/public/css/main.css"

import "/public/css/micons/micons.css"



function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1200,
      easing: 'ease-in-sine',
      delay: 300,
      once: true,
      disable: 'mobile'
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;