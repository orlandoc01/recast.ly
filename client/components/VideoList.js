var VideoList = (exampleVideoData) => (
  <div className="video-list media">
    {exampleVideoData.map( video => 
        <VideoListEntry />)}
  </div>
);

window.VideoList = VideoList;
