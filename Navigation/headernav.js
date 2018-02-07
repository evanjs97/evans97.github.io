class Header extends React.Component {
  render(){
    return(
        <h2 className="text-dark text-center title">Netflix Original Reviews</h2>
    )
  }
}

class NavBar extends React.Component {
  render(){
    return(
      <nav className="navbar navbar-expand fixed-top bar">
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav mr-auto">
            <li className="nav-item active title">
              <a className="nav-link" href="../Home">Netflix Original Reviews</a>
            </li>
            <li className="nav-item nav_item">
              <a className="nav-link" href="../Home">Home</a>
            </li>
            <li className="nav-item nav_item">
              <a className="nav-link" href="../About">About Me</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

class App extends React.Component {
  render() {
    return (
          <NavBar/>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("header"));