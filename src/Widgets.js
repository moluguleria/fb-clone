import React from 'react';
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      {/* Facebook Page Plugin for Facebook App */}
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FFacebookApp&tabs=timeline%2Cevents%2Cmessages&width=340&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="100%"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}

export default Widgets;
