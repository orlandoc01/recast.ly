class Search extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var videoSearch = function() {
      console.log("videoSearch has been called");
      var query = "game of thrones"; /// grab text from input
      var queryObj = {q: query};
      this.props.navType(queryObj);
    }


    return (
      <div className="search-bar form-inline">
      <input className="form-control" type="text" onKeyDown={videoSearch.bind(this)}/>
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
    ); 
  }
};

window.Search = Search;
