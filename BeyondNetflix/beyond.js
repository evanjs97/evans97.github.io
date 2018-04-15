class ActionCol extends React.Component {
  render() {
    return (
      <div className="col-md-12 col-lg-4">
          <h2 className="post_head">Top 5 Action and Adventure</h2><br/>
          <h2 className="post_content">Logan</h2>
          <img src="../Images/top5_list/logan.jpg" alt="" className="movie_image"></img><br/><br/>
          <h2 className="post_content">The Dark Knight</h2>
          <img src="../Images/top5_list/the_dark_knight.jpg" alt="" className="movie_image"></img><br/><br/>
          <h2 className="post_content">Mad Max: Fury Road</h2><br/>
          <img src="../Images/top5_list/mad_max_fury_road.jpg" alt="" className="movie_image"></img><br/><br/>
          <h2 className="post_content">Guardians of the Galaxy</h2><br/>
          <img src="../Images/top5_list/guardians_of_the_galaxy.jpg" alt="" className="movie_image"></img><br/><br/>
          <h2 className="post_content">Deadpool</h2><br/>
          <img src="../Images/top5_list/deadpool.jpg" alt="" className="movie_image"></img><br/><br/>
      </div>
    )
  }
}

class ComedyCol extends React.Component {
  render() {
    return (
      <div className=" col-md-12 col-lg-4">
        <h2 className="post_head">Top 5 Action and Adventure</h2><br/>
        <h2 className="post_content">Logan</h2><br/>
        <h2 className="post_content">The Dark Knight</h2><br/>
        <h2 className="post_content">Mad Max: Fury Road</h2><br/>
        <h2 className="post_content">Guardians of the Galaxy</h2><br/>
        <h2 className="post_content">Deadpool</h2><br/>
      </div>
    )
  }
}


class DramaCol extends React.Component {
  render() {
    return (
      <div className=" col-md-12 col-lg-4">
          <h2 className="post_head">Top 5 Action and Adventure</h2><br/>
          <h2 className="post_content">Logan</h2><br/>
          <h2 className="post_content">The Dark Knight</h2><br/>
          <h2 className="post_content">Mad Max: Fury Road</h2><br/>
          <h2 className="post_content">Guardians of the Galaxy</h2><br/>
          <h2 className="post_content">Deadpool</h2><br/>
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    return (
      <div className="post_page">
        <h1>Beyond Netflix</h1>
        <div className="row fav_list">
            <ActionCol/>
            <ComedyCol/>
            <DramaCol/>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("beyond"));