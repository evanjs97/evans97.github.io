class GameOverMan extends React.Component {
  render() {
    return(
      <div>
        <h2 className="section_title pb-0">An Unfortunate Tribute</h2>
        <h2 className="section_title">to it's Inspiration</h2>
        <h5 className="section_title">A Review of Game Over, Man!</h5>
        <div className="row text-left">
          <div className="col-xs-0 col-sm-1 col-md-2 col-lg-3"></div>
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
            <p>Game Over, Man! is Netflix’s newest original movie and like many other Netflix originals it’s a wonder
              they decided to finance it in the first place. In one sentence Game Over, Man! is a comedic tribute to
              Die Hard that goes a little too far.</p>
            <p>From the creative minds behind Workaholics comes a movie that while similar in style to the show, does
              not live up to it. That said fans of Workaholics will not want to miss this movie that brings back the
              characters and shamelessness you love so much.</p>
            <p>Game Over, Man centers around three bottom of the barrel housekeepers who spend much of their time
              discussing extremely idiotic ideas for businesses that would clearly never work. That is until the hotel
              they are working at becomes the target of a massive takeover in order to hack the bank account of a tech
              billionaire. When the rest of the hotel is taken hostage these three housekeepers must fight back and
              save the day die hard style.</p>
            <p>For the rest of the movie we watch as the housekeepers manage to outwit the villains again and again on
              a journey ridden with drugs and nudity purely to add to the outrageousness of the movie. While there are
              laughs along the way, many of them are a little over the top, and while the plot should undoubtedly be an
              action comedy it falls a little too short on the comedic end.</p>
            <p>While Game Over, Man is not what it could have been, it will satisfy most fans of Workaholics. That
              being said it is not worth the watch for nearly anyone else, unless you need a movie to put in the
              background in which case this movie could easily fit the bill.</p>
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
      <div className="container-fluid post_page">
        <GameOverMan/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("GameOverMan"));