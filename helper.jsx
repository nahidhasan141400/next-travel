import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import VideoPlayer from "react-background-video-player";
import "./styles.css";

class Video extends React.Component {
  render() {
    return (
      <div style={{ width: 660, height: 660 }}>
        <VideoPlayer
          className="video"
          src={
            "https://static.videezy.com/system/resources/previews/000/020/853/original/clip9_1.mp4"
          }
          autoPlay={true}
          muted={true}
        />
      </div>
    );
  }
}

export default Video;