class Header extends React.Component {
  render(){
    return(
      <div className ="p-4 container-fluid bg-danger">
        <h2 className="display-3 text-center">Netflix Original Reviews</h2>
      </div>
    )
  }
}

class NavBar extends React.Component {
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link text-light" href="index.html">Home</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link text-light" href="aboutme.html">About Me</a>
          </li>
        </ul>
      </nav>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container-fluid bg-dark">
          <NavBar/>
          <div className="mb-100"></div>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));