class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {videoResults: exampleVideoData};
  }




  render() {
    return (<div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer nowPlaying={this.state.videoResults[0]}/>
    </div>
    <div className="col-md-5">
      <VideoList videoList={this.state.videoResults}/>
    </div>
  </div>);
  }

}


ReactDOM.render(<App />, document.getElementById('app'));