class Post1 extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
        </div>
        <div className="col-8 link_style">
          <a href="">
            <div className="jumbotron post">
              <h1 className="display-4">This Will Be Where the Title of the First Blog Post Goes</h1>
              <h3 className="pt-5 font-weight-light">this is where the beginning of each blog post will be visible so that the user can get a snapshot of the blog post...</h3>
            </div>
          </a>
        </div>
        <div className="col-2">
        </div>
      </div>
    )
  }
}

class Post2 extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
        </div>
        <div className="col-8 link_style">
          <a href="">
            <div className="jumbotron post">
              <h1 className="display-4">This Will Be Where the Title of the Second Blog Post Goes</h1>
              <h3 className="pt-5 font-weight-light">this is where the beginning of each blog post will be visible so that the user can get a snapshot of the blog post...</h3>
            </div>
          </a>
        </div>
        <div className="col-2">
        </div>
      </div>
    )
  }
}

class PostTesting extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
        </div>
        <div className="col-8 link_style">
          <a href="">
            <div className="jumbotron post">
              <h1 className="display-4">This Will Be Where the Title of the Third Blog Post Goes</h1>
              <h3 className="pt-5 font-weight-light">this is where the beginning of each blog post will be visible so that the user can get a snapshot of the blog post...</h3>
            </div>
          </a>
        </div>
        <div className="col-2">
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid body_style">
        <Post1/>
        <Post2/>
        <PostTesting/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("front_page"));