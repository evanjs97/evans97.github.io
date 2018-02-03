class Post1 extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-0 col-sm-2">
        </div>
        <div className="col-xs-12 col-sm-8 link_style">
          <a href="">
            <div className="jumbotron post">
              <h1 className="post_head">This Will Be Where the Title of the First Blog Post Goes</h1>
              <h3 className="post_content">this is where the beginning of each blog post will be visible so that the user can get a snapshot of the blog post...</h3>
            </div>
          </a>
        </div>
        <div className="col-xs-0 col-sm-2">
        </div>
      </div>
    )
  }
}

class Post2 extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-0 col-sm-2">
        </div>
        <div className="col-xs-12 col-sm-8 link_style">
          <a href="">
            <div className="jumbotron post">
              <h1 className="post_head">This Will Be Where the Title of the Second Blog Post Goes</h1>
              <h3 className="post_content">this is where the beginning of each blog post will be visible so that the user can get a snapshot of the blog post...</h3>
            </div>
          </a>
        </div>
        <div className="col-xs-0 col-sm-2">
        </div>
      </div>
    )
  }
}

class Post3 extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-0 col-sm-2">
        </div>
        <div className="col-xs-12 col-sm-8 link_style">
          <a href="">
            <div className="jumbotron post">
              <h1 className="post_head">This Will Be Where the Title of the Third Blog Post Goes</h1>
              <h3 className="post_content">this is where the beginning of each blog post will be visible so that the user can get a snapshot of the blog post...</h3>
            </div>
          </a>
        </div>
        <div className="col-xs-0 col-sm-2">
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid body_style blog_height">
        <Post1/>
        <Post2/>
        <Post3/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("front_page"));