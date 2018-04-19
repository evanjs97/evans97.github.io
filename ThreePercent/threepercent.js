class ThreePercent1 extends React.Component {
  render() {
    return(
      <div>
        <h2 className="section_title pb-0">A Remarkably Fresh Outlook</h2>
        <h2 className="section_title">on a Similar Concept</h2>
        <h5 className="section_title">A Review of 3% Season 1</h5>
        <div className="row text-left">
          <div className="col-xs-0 col-sm-1 col-md-2 col-lg-3"></div>
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
            <p>Although Netflix’s 3% came out a year and a half ago, I will review it now, both because I only just
              recently saw and also because season 2 comes out next week. 3% has been sitting in my Netflix queue for
              some time now, and it wasn’t until I saw that the second season would be releasing soon that I
              decided to take the plunge.</p>
            <img src="../Images/3%25.jpg" alt="" className="img-fluid text-center"></img>
            <p></p>
            <p>The basic idea of 3% is quite similar to that of the Hunger games and all the other stories that spawned
              from it. 3% is a Brazilian TV-series that takes place in a dystopian world where 3 percent of the
              population is allowed to leave the impoverished world each year and join the “better society” which is
              located on what they call the “Offshore”.</p>
            <p>I must say I was pleasantly surprised by what 3% offered. While on the outside it may look like another
              hunger games copycat, it has a lot more to offer. Yes the basic premise is similar to that of the Hunger
              Games, but the 3% is still able to maintain its uniqueness.</p>
            <p>Season one is almost entirely focused on the process. This is the method in which 3 percent of the
              population are chosen for the offshore. The process involves many different tasks and challenges, but is
              not quite the kill or be killed situation that is found in the Hunger Games. That tasks exist solely for
              choosing the candidates who portray the “most merit”, although it could be argued, and is argued by some
              characters in the show, that the tasks don’t always accomplish this. Candidates enter the process around
              age 20 and have varying motivations for doing so. Some are hard set on the holiness of the process, others
              could care less about the process, others still, are set on taking down the process entirely,
              believing it to be unfair.</p>
            <p>The season centers around two primary and compelling characters. Ezequiel (João Miguel), is the process
              leader, the overarching figure that makes the final decisions on everything related to the process.
              Michele (Bianca Comparato) is a process candidate, intent on reaching the end of the process and reaching
              the offshore. Other candidates have compelling stories to tell along the way such as Fernando, Joana and
              Rafael among others. While all these characters are essential in the story the audience is kept in the
              dark regarding their true motivations and life story for much of the show.</p>
            <p>This element of secrecy is a central theme in the first season of 3%. The majority of the season is
              buildup for the final few episodes. In fact the entire season is probably build-up for what the creators
              hope to accomplish in season 2. Information provided to the audience is kept at a minimum. This is at
              times frustrating, but it still succeeded in holding my attention. Admittedly, the show required my
              attention to read the subtitles, since I don’t speak Portuguese.</p>
            <p>The secrecy and simplicity of 3% could also be due to its low budget. The show clearly does not have the
              huge budget that is often present in these types of stories. While a bigger could certainly help build a
              more complex and real world, the show does well without it. 3% makes up for its lower budget
              impressively with its storytelling.</p>
            <p>Overall 3% is a surprisingly captivating show that I should have seen much earlier. If you can deal
              with subtitles (I would not suggest the English dubbing), 3% is a show is definitely worth a try. However
              I will warn you again that you may have to watch a few episodes before you are able to truly dive
              into the story and its characters.</p>
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
        <ThreePercent1/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("three_percent"));