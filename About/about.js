class AboutMe extends React.Component {
  render() {
    return(
      <div>
        <h2 className="section_title">About Me</h2>
        <div className="row text-left">
          <div className="col-xs-0 col-sm-1 col-md-2 col-lg-3"></div>
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
            <p>Launching in 2018 as a site for critiquing and sharing ideas and opinions about netflix original movies and tv shows. An open space where all views on film can be spread freely.
            If you love watching and discussing netflix film (the good and the bad), you'll feel right at home here.</p>
            <p>On this blog I will review, rate and discuss netflix originals. The popular and the unknown, the best and the worst, the lighthearted and the dreary. These days netflix has a
              seemingly endless supply of originals churning out meaning there will always be more to see and share.</p>
            <p>I am a college student who loves movies tv shows, and the outdoors. I watch tv shows solely online so netflix is one of my primary viewing platforms. Some of my favorite movies
              and tv shows are <i>The Departed</i>, <i>Kingsman</i>, <i>Game of Thrones</i>, <i>Stranger Things</i> and <i>Silicon Valley</i>.</p>
            <p>Be sure to follow this blog to hear more. New reviews will be posted at least once a week.</p>
            <p className="pt-5">Contact Info: <b>netflixoriginalreviews@gmail.com</b></p>
          </div>
          <div className="col-xs-0 col-sm-1 col-md-2 col-lg-3"></div>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid body_style about_style">
        <AboutMe/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("about_page"));