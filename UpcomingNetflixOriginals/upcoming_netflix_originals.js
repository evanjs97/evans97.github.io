class UpcomingOriginals extends React.Component {
  render() {
    return(
      <div>
        <h2 className="section_title pb-0">Upcoming, 2018</h2>
        <h2 className="section_title">Netflix Originals</h2>
        <div className="row text-left">
          <div className="col-xs-0 col-sm-1 col-md-2 col-lg-3"></div>
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
            <p>I didn’t have time to watch any new Netflix movies or shows in the past week so today I will instead
              list new Netflix originals to be excited about for the coming year. As always Netflix has an ever growing
              list of content in production so without further ado, here’s what you can look forward to in 2018. </p>
            <img src="../Images/disenchantment.jpg" className="img-fluid text-center"></img>
            <p></p>
            <h5>Disenchantment</h5>
            <p>Disenchantment is an animated adult sit-com from
              <a href="https://en.wikipedia.org/wiki/Matt_Groening" target="_blank"> Matt Groening</a>,
              and has two 10 episode seasons in the
              works the first of which is scheduled to come out this year. This is one of the most exciting shows
              coming to Netflix this year as Matt Groening has a lot of success building animated comedies
              (<a href="https://en.wikipedia.org/wiki/The_Simpsons" target="_blank">The Simpsons</a>,
              <a href="https://en.wikipedia.org/wiki/Futurama" target="_blank"> Futurama</a>).
              The series will follow a princess, her demon and her elf companion.</p>
            <img src="../Images/green_eggs_and_ham.jpg" className="img-fluid text-center"></img>
            <p></p>
            <h5>Green Eggs and Ham</h5>
            <p>Based off the famous book by
              <a href="https://en.wikipedia.org/wiki/Dr._Seuss" target="_blank"> Dr. Seuss</a>,
              Green Eggs and Ham from executive producer
              <a href="https://en.wikipedia.org/wiki/Ellen_DeGeneres" target="_blank"> Ellen DeGeneres</a> will
              premiere later this year. The season is touted to have one of the largest budgets of any animated
              television series so it will no doubt be an impressive piece of work. We can only hope it’s as
              successful as Dr. Seuss’ other movie adaptations. The season will be 13 half-hour episodes in length.</p>
            <img src="../Images/kiss_me_first.jpg" className="img-fluid text-center"></img>
            <p></p>
            <h5>Kiss Me First</h5>
            <p>Kiss me first is a collaboration between Netflix and British channel 4, on which it has already begun
              airing. The series follows two girls, Leila and Tess, who meet playing an online game, and soon become
              friends in the real world. However, after Tess disappears, Leila gets sucked into the mystery behind her
              disappearance. The series will likely release on Netflix following its conclusion on channel 4.</p>
            <img src="../Images/lost_in_space.jpg" className="img-fluid text-center"></img>
            <p></p>
            <h5>Lost in Space</h5>
            <p>Based on the 60s sci-fi show of the same name Lost in Space follows the Robinson family who are bound
              for a paradise planet. Climate change and war has left earth in chaos and many are bound for Alpha
              Centauri where humanity will continue. However when the Robinson’s ship is sucked into a wormhole and
              they crash land on another planet, they must survive on their own in a place that is not the paradise
              they had hoped for. Lost in space will feature 10 hour length episodes and will arrive sometime in May.</p>
            <img src="../Images/green_eggs_and_ham.jpg" className="img-fluid text-center"></img>
            <p></p>
            <h5>Maniac</h5>
            <p>Maniac is the story of a man who lives a wild fantasy in his dreams, escaping his reality where he is
              locked up in an institution. Starring Emma Stone and Jonah Hill, Maniac is based off the successful
              Norwegian series of the same name. This dark comedy should arrive on Netflix later this year
              in a ten episode series.</p>
            <img src="../Images/watership_down.jpg" className="img-fluid text-center"></img>
            <p></p>
            <h5>Watership Down</h5>
            <p>Based off the well-known 1972 <a href="https://en.wikipedia.org/wiki/Watership_Down" target="_blank">novel </a>
              of the same name by Richard Adams, Watership Down will be the 3rd
              adaptation of the novel, seeking to terrify another generation. The story follows a band of rabbits who
              seek a new home escaping the destruction of their old one. Watership Down will be another Netflix, BBC
              collaboration and will consist of 4 hour long episodes.</p>
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
        <UpcomingOriginals/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("UpcomingNetflixOriginals"));