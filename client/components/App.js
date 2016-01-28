class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      videoList: exampleVideoData,
      nowPlaying: null
    };
  }

  selectVideoPlaying(videoObj) {
    this.setState({
      nowPlaying: videoObj
    });
  }

  grabVideos(options) {
    var {q: queryText} = options;
    if(queryText !== "") { 
      window.searchYouTube(options, (queryResponse) => {
        this.setState({
          videoList: queryResponse.items,
          nowPlaying: queryResponse.items[0]
        });
      });
    }
    else {
      this.setState({
        nowPlaying: null
      });

    }
  };


  render() {

    return (<div>
    <Nav keyDown={this.grabVideos.bind(this)} />
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