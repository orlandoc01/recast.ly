class Nav extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <nav className="navbar">
      <div className="col-md-6 col-md-offset-3">
        <Search navType={this.props.keyDown}/>
      </div>
    </nav>
    );
  }
};

window.Nav = Nav;
