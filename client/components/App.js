var App = () => (
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer nowPlaying={window.exampleVideoData[0]}/>
    </div>
    <div className="col-md-5">
      <VideoList videoList={window.exampleVideoData}/>
    </div>
  </div>
);


ReactDOM.render(<App />, document.getElementById('app'));