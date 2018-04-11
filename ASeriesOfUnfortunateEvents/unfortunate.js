class Unfortunate extends React.Component {
  render() {
    return(
      <div>
        <h2 className="section_title pb-0">A Fun Filled Dark</h2>
        <h2 className="section_title">Comedy That Honors its Roots</h2>
        <h5 className="section_title">A Review of A Series of Unfortunate Events</h5>
        <div className="row text-left">
          <div className="col-xs-0 col-sm-1 col-md-2 col-lg-3"></div>
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
            <p>This week I will be breaking tradition and reviewing an older Netflix original in order to prepare for
              season 2 of A Series of Unfortunate Events which will release on March 30th!</p>
            <p>A series of unfortunate events is based off the book of the same name by Lemony Snicket
              <a href="https://en.wikipedia.org/wiki/Daniel_Handler" target="_blank">(Daniel Handler)</a>,
              and follows the lives of the Baudelaire children after the death of their parents. The series follows the
              books remarkably well and will satisfy any avid fan of the written series. Now for those who don’t
              already know the story, here it is.</p>
            <p>In this weird and dark (but not) comedy, we see the villain Count Olaf
              <a href="https://en.wikipedia.org/wiki/Neil_Patrick_Harris" target="_blank">(Neil Patrick Harris)</a>, a
              remarkably stupid individual, be outwitted by the Baudelaire children numerous times. He along with
              nearly every other adult in the series is portrayed as quite foolish and incompetent to quite comedic
              proportions. On the other hand the Baudelaire children are quite intelligent, unusual and talented.
              They are, 14-year-old Violet who is a promising inventor, 12-year-old Klaus who is an intellectual
              and bookworm, and baby Sunny, a talented chewer/biter.</p>
            <p>The Baudelaire children are orphans who stand to inherit a very large fortune, curtesy of their parents,
              the day Violet (the eldest Baudelaire) turns 18. Count Olaf sets out to stop them and take the money for
              himself and ruins every attempt the children make to prove he wants to do so.</p>
            <p>Unsurprisingly the story lives up to its title, and over 8 episodes the Baudelaire children find
              themselves the center of many unfortunate events as they attempt to escape the grasp of Count Olaf over
              and over and over again. In fact that is one of the prevailing messages in the show, even in the most
              helpless of situations the children persevere.</p>
            <p>Central to the show and the written series is Lemony Snicket, the narrator and author of the book.
              Lemony Snicket <a href="https://en.wikipedia.org/wiki/Patrick_Warburton" target="_blank">(Patrick Warburton)</a>
              interrupts the fourth wall early and often to the point that it
              doesn’t really feel like he’s interrupting it anymore. His narration provides definitions and dry
              commentary. This storytelling is essential to the development of the adventure, helping to shape it
              and bring it back to earth during some of the more fantastical occurrences.</p>
            <p>Although it may be based off the children’s story (but hey adults can read it too), A Series of
              Unfortunate Events succeeds in attracting the attention of all ages. The show is smart, funny, a
              spectacle and is well worth the watch for fans of the book and those who have never heard of it.
              It is easily one of Netflix’s most successful originals.</p>
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
        <Unfortunate/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("Unfortunate"));