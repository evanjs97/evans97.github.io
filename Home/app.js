class EOTFW extends React.Component {
  render() {
    return (
      <a href="../EndOfTheFuckingWorld">
        <div className="row link_style">
          <div className="col post">
            <img src="../Images/the_end_of_the_fucking_world.jpg" alt="" className="movie_image"></img>
            <div className="title_overlay">The End of the F***ing World</div>
          </div>
          <div className="col content">
            <h3 className="post_head">A Dark and Engaging Journey of Two Outsiders</h3>
            <p className="post_content">Charlie Covell’s the end of the fucking world, adapted from Charles S. Forman’s comic book of the same name, tells a dark and compelling story packed in the form of a coming of age, romantic comedy, crime thriller...</p>
          </div>
        </div>
      </a>
    )
  }
}

class Post2 extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-0 col-sm-1 col-md-1 col-lg-1.5">
        </div>
        <div className="col-xs-12 col-sm-10 col-md-10 col-lg-9 link_style">
          <a href="">
            <div className="jumbotron-fluid">
              <div className="row row-eq-height">
                <div className="col post_altered_carbon">
                  <h3 className="movie_title">The End of the F***ing World (2017)</h3>
                </div>
                <div className="col post">
                  <h2 className="post_head">A Dark and Engaging Journey of Two Outsiders</h2>
                  <p className="post_content">Charlie Covell’s the end of the fucking world, adapted from Charles S. Forman’s comic book of the same name, tells a dark and compelling story packed in the form of a coming of age, romantic comedy, crime thriller...</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-xs-0 col-sm-1 col-md-1 col-lg-1.5">
        </div>
      </div>
    )
  }
}

class Post3 extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-0 col-sm-1 col-lg-2">
        </div>
        <div className="col-xs-12 col-sm-10 col-lg-8 link_style">
          <a href="">
            <div className="jumbotron-fluid">
              <div className="row">
                <div className="col post_the_end_of_the">
                  <h3 className="movie_title">The End of the F***ing World (2017)</h3>
                </div>
                <div className="col post">
                  <h2 className="post_head">A Dark and Engaging Journey of Two Outsiders</h2>
                  <p className="post_content">Charlie Covell’s the end of the fucking world, adapted from Charles S. Forman’s comic book of the same name, tells a dark and compelling story packed in the form of a coming of age, romantic comedy, crime thriller...</p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="col-xs-0 col-sm-1 col-lg-2">
        </div>
      </div>
    )
  }
}


class HeaderIMG extends React.Component {
  render() {
    return (
      <div className="">
        <img className="header_image" src="../Images/Header.png" alt="HeaderImage"></img>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderIMG/>
        <div className="container-fluid main_body">
          <EOTFW/>
          {/*<Post2/>*/}
          {/*<Post3/>*/}
          {/*<PostTest/>*/}
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("front_page"));