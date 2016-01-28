class Search extends React.Component {

  constructor(props) {
    super(props);
    // this.videoSearch = _.debounce(this.videoSearch,1000);
  }

  componentDidMount() {
    ///make debounces video search feed it searchbar val
    //call it
  }

  render() {
    var videoSearch = function(e) {
      var query = e.target.value; /// grab text from input
      var queryObj = {q: query};
      this.props.navType(queryObj); //invoke and debounce
    }


    return (
      <div className="search-bar form-inline">
      <input className="form-control" type="text" onKeyUp={videoSearch.bind(this)}/>
      <button className="btn hidden-sm-down">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </div>
    ); 
  }
};

window.Search = Search;
