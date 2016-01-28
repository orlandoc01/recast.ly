var searchYouTube = (options, callback) => {

  // TODO
  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search",
    cache: false,
    type: 'GET',
    data: {
      part: 'snippet',
      key: window.YOUTUBE_API_KEY,
      type: "video",
      max: 5,
      query: "game of thrones"
    },
    dataType: 'json',
    success: function(data) {
      callback(data);
      console.log(data);
    },
    error: function(data) {
      console.log(data);
    }
  });
};

window.searchYouTube = searchYouTube;



// var options = {
//   key: 'AIzaSyDvEaPTlv9zYqaGE9u-Tw5dq_YyDRKG3Uw',
//   max: 5,
//   query: 'game of thrones theme'
// };
// $(document).ready(function(){searchYouTube(options, log);});