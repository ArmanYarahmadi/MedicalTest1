import React from "react";
import "./styles.css";

const ResponsivePlayer = (props) => {
  return (
    <div className="h_iframe-aparat_embed_frame">
      <span className="span-player"></span>
      <iframe
        title="iframe"
        src="https://www.aparat.com/video/video/embed/videohash/M3fo4/vt/frame"
        allowFullScreen="true"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
      ></iframe>
    </div>
  );
};

export default ResponsivePlayer;
