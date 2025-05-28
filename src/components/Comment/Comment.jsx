import React, {useEffect} from "react"
import {AiFillStar} from "react-icons/ai"
import "./Comment.css"

export default function Comments({ url }) {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    } else {
      (function (d, s, id) {
        let js;
        const fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v17.0";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    }
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div
        className="fb-comments"
        data-href={url}
        data-width="100%"
        data-numposts="5"
        data-order-by="reverse_time"
      ></div>
    </>
  );
}