"use client";
import { useEffect } from "react";

interface IInstagramFeedProps {}

const InstagramFeed = ({}: IInstagramFeedProps) => {
  useEffect(() => {
    (function (d, s, id) {
      var js;
      console.log("gogogo")
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
        data-ref="b984f101a8679b85d11b94a37c89426b8aaa147b"
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
