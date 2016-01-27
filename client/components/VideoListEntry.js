class VideoListEntry extends React.Component { //video Object
  
  constructor(props) {
    super(props);
  }

  render() {
    return (<div className="video-list-entry">
        <div className="media-left media-middle">
          <img className="media-object" src="//i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg" alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title">{props.snippet.title}</div>
          <div className="video-list-entry-detail">{props.snippet.description}</div>
        </div>
      </div>);
  };

window.VideoListEntry = VideoListEntry;
