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
            <p className="post_content">...the end of the fucking world, adapted from Charles S. Forman’s comic book of the same name, tells a dark and compelling story packed in the form of a coming of age, romantic comedy, crime thriller...</p>
          </div>
        </div>
      </a>
    )
  }
}

class AlteredCarbon extends React.Component {
  render() {
    return (
      <a href="../AlteredCarbon">
        <div className="row link_style">
          <div className="col post">
            <img src="../Images/altered_carbon.jpg" alt="" className="movie_image"></img>
            <div className="title_overlay">Altered Carbon</div>
          </div>
          <div className="col content">
            <h3 className="post_head">A Flawed, but Enjoyable Sci-Fi Thriller</h3>
            <p className="post_content">...altered carbon, based off Richard Morgan’s 2002 novel, takes us on an enthralling journey, set more than 300 years in the future in the Bay Area, California. Full warning, the plot is extremely thick and convoluted...</p>
          </div>
        </div>
      </a>
    )
  }
}

class BlackMirror4 extends React.Component {
  render() {
    return (
      <a href="../BlackMirrorSeason4">
        <div className="row link_style">
          <div className="col post">
            <img src="../Images/black_mirror_4.jpg" alt="" className="movie_image"></img>
            <div className="title_overlay">Black Mirror Season 4</div>
          </div>
          <div className="col content">
            <h3 className="post_head">Future Technology Remains Dark, but There is Hope</h3>
            <p className="post_content">Black mirror season 4 continues its predecessors diverse take on future technology with a mostly dark undertone, in 6 new episodes ranging from 41-76 minutes. The episodes are once again a mix of great and mediocre...</p>
          </div>
        </div>
      </a>
    )
  }
}

class EverythingSucks extends React.Component {
  render() {
    return (
      <a href="../EverythingSucks">
        <div className="row link_style">
          <div className="col post">
            <img src="../Images/everything_sucks.jpg" alt="" className="movie_image"></img>
            <div className="title_overlay">Everything Sucks</div>
          </div>
          <div className="col content">
            <h3 className="post_head">A Struggling, but Wholesome Experience</h3>
            <p className="post_content">...a clear attempt to replicate the success of Stranger Things touching on a similar nostalgia from the past. The main characters are quite alike those present in stranger things, a part of the nerdy crowd...</p>
          </div>
        </div>
      </a>
    )
  }
}

class Unfortunate extends React.Component {
  render() {
    return (
      <a href="../ASeriesOfUnfortunateEvents">
        <div className="row link_style">
          <div className="col post">
            <img src="../Images/a_series_of_unfortunate_events.jpg" alt="" className="movie_image"></img>
            <div className="title_overlay">A Series of Unfortunate Events</div>
          </div>
          <div className="col content">
            <h3 className="post_head">A Fun Filled Dark Comedy That Honors its Roots</h3>
            <p className="post_content">In this weird and dark (but not) comedy, we see the villain Count Olaf (Neil Patrick Harris), a remarkably stupid individual, be outwitted by the Baudelaire children numerous times</p>
          </div>
        </div>
      </a>
    )
  }
}

class GameOverMan extends React.Component {
  render() {
    return (
      <a href="../GameOverMan">
        <div className="row link_style">
          <div className="col post">
            <img src="../Images/game_over_man.jpg" alt="" className="movie_image"></img>
            <div className="title_overlay">Game Over, Man!</div>
          </div>
          <div className="col content">
            <h3 className="post_head">An Unfortunate Tribute to it's Inspiration</h3>
            <p className="post_content">...three bottom of the barrel housekeepers who spend much of their time discussing extremely idiotic ideas for businesses...That is until the hotel they are working at becomes the target of a massive takeover...</p>
          </div>
        </div>
      </a>
    )
  }
}

class UpcomingOriginals extends React.Component {
  render() {
    return (
      <a href="../UpcomingNetflixOriginals">
        <div className="row link_style">
          <div className="col post">
            <img src="../Images/lost_in_space.jpg" alt="" className="movie_image"></img>
            <div className="title_overlay">Upcoming Originals</div>
          </div>
          <div className="col content">
            <h3 className="post_head">Upcoming, 2018 Netflix Originals</h3>
            <p className="post_content">As always Netflix has an ever growing list of content in production so without further ado, here’s what you can look forward to in 2018.</p>
          </div>
        </div>
      </a>
    )
  }
}

class Unfortunate2 extends React.Component {
  render() {
    return (
      <a href="../ASeriesOfUnfortunateEvents2">
        <div className="row link_style">
          <div className="col post">
            <img src="../Images/a_series_of_unfortunate_events_2.jpeg" alt="" className="movie_image"></img>
            <div className="title_overlay">A Series of Unfortunate Events</div>
          </div>
          <div className="col content">
            <h3 className="post_head">A Repetitive, but Enjoyable Continuation</h3>
            <p className="post_content">A series of unfortunate events season 2, picks up where its predecessor left off, continuing on its dark and inventive path.</p>
          </div>
        </div>
      </a>
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

class Footer extends React.Component {
  render() {
    return(
      <div className="footer"></div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <HeaderIMG/>
        <div className="container-fluid main_body">
          <Unfortunate2/>
          <UpcomingOriginals/>
          <GameOverMan/>
          <Unfortunate/>
          <EverythingSucks/>
          <BlackMirror4/>
          <AlteredCarbon/>
          <EOTFW/>
        </div>
        <Footer/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("front_page"));