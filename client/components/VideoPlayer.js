class VideoPlayer extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={this.props.nowPlaying ? "https://www.youtube.com/embed/" + this.props.nowPlaying.id.videoId : ""} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{this.props.nowPlaying ? this.props.nowPlaying.snippet.title : "No Video Loaded"}</h3>
          <div>{this.props.nowPlaying ? this.props.nowPlaying.snippet.description : "Please select video to load in search bar"}</div>
        </div>
      </div>
    )
  }
};

window.VideoPlayer = VideoPlayer;
