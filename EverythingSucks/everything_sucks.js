class EverythingSucks extends React.Component {
  render() {
    return(
      <div>
        <h2 className="section_title pb-0">A Struggling, but</h2>
        <h2 className="section_title">Wholesome Experience</h2>
        <h5 className="section_title">A Review of Everything Sucks</h5>
        <div className="row text-left">
          <div className="col-xs-0 col-sm-1 col-md-2 col-lg-3"></div>
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
            <p>Netflix’s latest original is a clear attempt to replicate the success of <i>Stranger Things</i> touching on a
              similar nostalgia from the past. The main characters are quite alike those present in stranger things, a
              part of the nerdy crowd, spending much of their time in AV club. Despite the characters and settings
              similarities to <i>Stranger Things</i>, <i>Everything Sucks</i> is a very different show that is certainly not as
              successful as its inspiration.</p>
            <p><a href="https:www.netflix.com/title/80117551" target="_blank">Everything Sucks</a> takes place in the 90s in Boring, Oregon following 3 “nerdy boys”, 1 “nerdy”
              girl and a couple “cool” drama kids. The show tries to attract an audience both from people who grew
              up in the 90’s as well as those who grew up 10-15 years later. They are successful in this goal
              occasionally but often fall short.</p>
            <p>The plot revolves around Luke’s love for the principal’s daughter Kate, whom the audience sees is
              clearly gay, while the principal chases after Luke’s mother, finally seeing a path to happiness 10
              years after his wife’s death. We are taken on a journey where two warring sides come together to
              collaborate as a man finds love and new experiences. However, the most compelling and well written
              storyline of the show, is Kate’s discovery of her true self in a time where other sexualities are often ridiculed.</p>
            <p><i>Everything Sucks</i> has its issues. The dialogue between the teenagers is at best mediocre shining at times
              but usually leaving much to be desired. The narrative excels at points but fizzles at others. Even so
              <i> Everything Sucks</i> shines in its own right, albeit through a mixed set of episodes many of which are not
              the best the show has to offer. </p>
            <p>Overall <i>Everything Sucks</i> is a wholesome experience that grows into its own in time for the season
              finale, a bittersweet ending in which some characters come out ahead while others stumble behind not
              achieving what they wanted. This successful finale makes the show as a whole, much more relatable and
              real in our world where endings often lack any bitterness at all. <i>Everything Sucks</i> is a solid watch,
              but not something you should put near the top of your list.</p>
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
        <EverythingSucks/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("EverythingSucks"));