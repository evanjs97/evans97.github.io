class Post1 extends React.Component {
  render() {
    return (
      <div className="row post">
        <div className="col-2">
        </div>
        <div className="col-8">
          <div className="jumbotron m-5 p-5 bg-light text-dark">
            <h1 className="display-4 font-italic">This will be where the title of the first blog post goes</h1>
            <h3 className="pt-5 font-weight-light">this is where the beginning of each blog post will be visible so that the user can get a snapshot of the blog post</h3>
          </div>
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
        <div className="col-8">
          <div className="jumbotron m-5 bg-light text-dark">
            <h1 className="display-4 font-italic">This will be where the title of the second blog post goes</h1>
            <h3 className="pt-5 font-weight-light">this is where the beginning of each blog post will be visible so that the user can get a snapshot of the blog post</h3>
          </div>
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
      <div className="container-fluid bg-dark">
        <Post1/>
        <Post2/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("page"));