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