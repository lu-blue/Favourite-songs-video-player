import YouTube from "react-youtube";
import { useState } from "react";

import "./css/App.css";
import "./css/index.css";

export default function App() {
  const [videoId, setVideoId] = useState("DNobqcfLb2Y");

  const options = {
    height: "390",
    width: "640",
    playerVars: { autoplay: 1 },
  };

  return (
    <div className="App">
      <h1>My Favourite Songs</h1>
      <YouTube opts={options} videoId={videoId} />

      <button className="button" onClick={() => setVideoId("EfKl4FCCPYU")}>
        <p>Tuck&Patti - Time After Time</p>
      </button>

      <button className="button" onClick={() => setVideoId("DNobqcfLb2Y")}>
        <p>Sting&Shaggy - Just One Lifetime</p>
      </button>

      <button className="button" onClick={() => setVideoId("L5jI9I03q8E")}>
        <p>Nina Simone - Ain't Got No, I Got Life</p>
      </button>
    </div>
  );
}
