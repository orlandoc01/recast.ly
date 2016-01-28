class VideoListEntry extends React.Component { //video Object
  
  constructor(props) {
    super(props);
  }

  render() {
    var entryClicked = function(videoObject) {
      this.props.itemClick(videoObject);
    };
    return (<div className="video-list-entry" onClick={entryClicked.bind(this,this.props.video)}>
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.video.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title">{this.props.video.snippet.title}</div>
          <div className="video-list-entry-detail">{this.props.video.snippet.description}</div>
        </div>
      </div>);
  }
}

window.VideoListEntry = VideoListEntry;
