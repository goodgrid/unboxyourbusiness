import '../styles/base.css'
import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "/public/css/base.css"
import "/public/css/fonts.css"
import "/public/css/main.css"
import "/public/css/vendor.css"
import "/public/css/micons/micons.css"

import "@fortawesome/fontawesome-free/css/all.css"

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