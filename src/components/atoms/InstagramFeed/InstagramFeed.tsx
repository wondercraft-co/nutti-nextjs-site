import Script from "next/script";

interface IInstagramFeedProps {}

const InstagramFeed = ({}: IInstagramFeedProps) => {
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
      <Script
        id="social-embed"
        dangerouslySetInnerHTML={{
          __html: ` 
          (function (d, s, id) {
            var js;
            if (d.getElementById(id)) {
              return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://embedsocial.com/cdn/ht.js";
            d.getElementsByTagName("head")[0].appendChild(js);
          })(document, "script", "EmbedSocialHashtagScript");
          `,
        }}
      ></Script>
    </div>
  );
};
export default InstagramFeed;
