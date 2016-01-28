class VideoList extends React.Component {
  
    constructor(props) {
        super(props);
    }

//
    render() {
        return (
            <div className="video-list media">
            {this.props.videoList ?
             this.props.videoList.map( video => 
                <VideoListEntry video={video} itemClick={this.props.listClick} key = {video.etag} />) :
             "Please enter query in search bar"}
            </div>
        )
    }
}

window.VideoList = VideoList;
