class VideoList extends React.Component {
  
    constructor(props) {
        super(props);
    }

//
    render() {
        return (
            <div className="video-list media">
            {this.props.videoList.map( video => <VideoListEntry video={video} itemClick={this.props.listClick} />)}
            </div>
        )
    }
}

window.VideoList = VideoList;
