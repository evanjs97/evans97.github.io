class Header extends React.Component {
  render(){
    return(
        <h2 className="font-weight-light text-dark text-center">Netflix Original Reviews</h2>
    )
  }
}

class NavBar extends React.Component {
  render(){
    return(
      <nav className="navbar navbar-expand navbar-light fixed-top p-2 bar">
        <div className="navbar-collapse collapse">
          <ul className="nav navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link title" href="index.html">Netflix Original Reviews</a>
            </li>
            <li className="nav-item active pl-5 pt-2">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item active pl-5 pt-2">
              <a className="nav-link" href="aboutme.html">About Me</a>
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
ReactDOM.render(<App />, document.getElementById("root"));