class AlteredCarbon extends React.Component {
  render() {
    return(
      <div>
        <h2 className="section_title pb-0">A Flawed, but Enjoyable</h2>
        <h2 className="section_title">Sci-Fi Thriller</h2>
        <div className="row text-left">
          <div className="col-xs-0 col-sm-1 col-md-2 col-lg-3"></div>
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
            <p>Laeta Kalogridis’ altered carbon, based off Richard Morgan’s 2002 novel, takes us on an enthralling journey,
              set more than 300 years in the future in the Bay Area, California. Full warning, the plot is extremely thick and convoluted.</p>
            <p>The setting is a world in which technology has all but erased true death. Each person’s consciousness is downloaded
              to a stack which is inserted between their head and neck allowing anyone to be reskinned (put into a new body)
              upon death or whenever they so choose. That is, assuming they can afford it.</p>
            <p>As death becomes a memory in the distant past violence has reacted by becoming even more violent. Brothels
              allow patrons to brutalize prostitutes, under the ruse that they can get new skins which does and doesn’t happen.
              Fight clubs host fights to the sleeve death as a major form of entertainment. </p>
            <p>This is where it becomes immediately clear that this society is not an everlasting paradise. The disparity between
              the richest 1% and everyone else is far vaster than anywhere on earth today resulting in a society in which the rich rule,
              brutally over the poor. The rich, nicknamed Meths after Methuselah from the bible, keep backups of their consciousness
              and full clones of their skins allowing them to be re-sleeved should any harm come to their stack. On the other hand the
              poorest people are lucky to even get a new skin if their old one is impaired, and will certainly die if their stack is defaced.</p>
            <p className="intextlink">The show follows the character of Takeshi Kovac, a Japanese man, who has been given a new skin after 250 years on ice
              (without a skin/body) for his crimes. He has been brought back to the real world in a white man’s body played by
              <a href="https://en.wikipedia.org/wiki/Joel_Kinnaman" target="_blank"> Joel Kinnaman</a>, by Lauren’s Bancroft,
              one of the most powerful men in the world, who has hired Kovac to solve his murder. Bancroft has of course been re-sleeved,
              but is curious of who would try to kill him. By curious, I mean that he intends to rain down the fury of a god on whomever
              made the attempt. In return for solving Bancroft’s murder, Bancroft has promised Kovac, that he will be pardoned of his crimes.</p>
            <p>Throughout the rest of the series, Kovac and his crew attempt to solve the mystery as they stumble through all the worst places
              and people the bay area has to offer. His ragtag team made up of Kristin Ortega, a cop whom Kovac has a love hate relationship
              with and former soldier Vernon Elliot, whom Kovac adds to his crew after interrogating him. He also receives the help of an AI
              that resembles Edgar Allen Poe who eagerly follows Kovac’s every move, probably because he has nothing else to do. Apparently
              Kovac is the first person to stay at his hotel in 47 years.</p>
            <p>The characters follow the trail of Bancroft’s murder which quickly unravels into a far more complex problem then it should have
              been as it turns from a murder investigation into a conspiracy regarding Kovac’s past life, before finally reaching a final that
              is far less surprising and intriguing than it could have been.</p>
            <p>Although altered carbon does feature an extremely convoluted and complex plot that often comes up short it still an
              enjoyable watch especially for action fans like me. The show is nonstop action with very little time in between.
              Altered Carbon is not a show with deep and powerful dialogue in between each action/sex sequence. Instead it lines them
              up one after another having characters explain themselves when necessary through dialogue and in the case of Kovac, flashbacks.</p>
            <p>Despite these short-comings altered carbon is definitely worth the watch. Enjoy the show for what it is and don’t try and
              think of it as some critical masterpiece. It’s a show with a fascinating concept and lots of plot intricacies that you
              won’t catch the first time around.</p>
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
        <AlteredCarbon/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("AlteredCarbon"));