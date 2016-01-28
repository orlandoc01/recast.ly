class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      videoList: exampleVideoData,
      nowPlaying: exampleVideoData[0]
    };
  }

  selectVideoPlaying(videoObj) {
    this.setState({
      nowPlaying: videoObj
    });
  }

  grabVideos(options) {
    window.searchYouTube(options, (queryResponse) => {
      console.log(queryResponse);
      this.setState({
        videoList: queryResponse.items,
        nowPlaying: queryResponse.items[0]
      });
    });
  };


  render() {

    return (<div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer nowPlaying={this.state.nowPlaying} />
    </div>
    <div className="col-md-5">
      <VideoList videoList={this.state.videoList} listClick={this.selectVideoPlaying.bind(this)} />
    </div>
  </div>);
  }

}

window.App = App
ReactDOM.render(<App />, document.getElementById('app'));