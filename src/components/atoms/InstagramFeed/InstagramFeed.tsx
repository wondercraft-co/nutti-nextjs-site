"use client";
import { useEffect } from "react";

interface IInstagramFeedProps {}

const InstagramFeed = ({}: IInstagramFeedProps) => {
  useEffect(() => {
    (function (d, s, id) {
      var js;
      if (d.getElementById(id)) {
        // return;
        d.getElementById(id)?.remove();
      }
      js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = "https://embedsocial.com/cdn/ht.js";
      d.getElementsByTagName("head")[0].appendChild(js);
    })(document, "script", "EmbedSocialHashtagScript");
  }, []);
  
  return (
    <div className="container max-w-6xl mt-20">
      <div
        className="embedsocial-hashtag"
        data-ref="82f940e9f84711b74aa9f86163b0d74bfb3535c8"
      >
        <a
          className="feed-powered-by-es"
          href="https://embedsocial.com/social-media-aggregator/"
          target="_blank"
          title="Widget by EmbedSocial"
        >
          Widget by EmbedSocial <span>→</span>
        </a>
      </div>
    </div>
  );
};
export default InstagramFeed;
