class EndoftheWorld extends React.Component {
  render() {
    return(
      <div>
        <h2 className="section_title pb-0">A Dark and Engaging</h2>
        <h2 className="section_title">Journey of Two Outsiders</h2>
        <div className="row text-left">
          <div className="col-xs-0 col-sm-1 col-md-2 col-lg-3"></div>
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
            <p>Charlie Covell’s the end of the fucking world, adapted from Charles S. Forman’s comic book of the same name,
              tells a dark and compelling story packed in the form of a coming of age, romantic comedy, crime thriller, tragedy. </p>
            <p>The show follows the life James and Alyssa, both aged 17, as they embark on a journey to find Alyssa’s father.
              The twist? James plans to kill Alyssa, while Alyssa who is unaware of James’ psychopathic nature sets out to make James
              her boyfriend. As the show takes off it is readily apparent that James and Alyssa are very different. James is a quiet,
              self-described psychopath who has ample difficulty feeling any emotion whatsoever. Alyssa is dry, blunt and overflowing
              with confidence and cares about absolutely nothing, save for attracting James’s attention.</p>
            <p>From the start, Alyssa takes the driving seat in their journey, while James follows along with almost blind obedience,
              unsure what else to do. Their adventure quickly unravels into a panic filled, confused journey with so little planning
              it’s hard to believe they are still intact by the end of it. It’s a journey that catches every ounce of our attention
              through the humorous, the despairing and the exhilarating moments. But most of all it’s a heart-felt pilgrimage that
              captures a very difficult time in both character’s lives.</p>
            <p>While both Alyssa and James put up a front to the outside world, albeit very different ones, it becomes increasingly
              clear that they have been affected deeply by parent related traumas at home. James suffered the loss of his mother whom
              he watched commit suicide at a very early age and has been suppressing his feelings ever since, leading to his psychopathic
              thoughts. Alyssa has had to deal with her mother building a new family with her boyfriend whom shares mutual hatred with
              her making Alyssa an outsider in her own family. Alyssa hopes to solve all her troubles by seeking out her father, whom
              she has not seen for nearly 10 years.</p>
            <p>Intertwining inner monologues from James and Alyssa, help reveal the differences between their inner thoughts and how
              they portray themselves to those around them as well as providing much needed comedic moments. The disparity between
              their narration and their outward self is at first quite vast. By the end of the season, this disparity is all but gone.
              They steadily reveal their true self to one another and with it the outside world.</p>
            <p>In this way the connection between James and Alyssa grows stronger, both learning and maturing as they approach adulthood
              through dramatic circumstances that crop up as their trek through rural England progresses. The realization that he might
              not be a psychopath after all gradually dawns on James leading to his realization that he does not have the stomach to
              kill Alyssa. Slowly James reciprocates the care that Alyssa shows for him, before finally allowing their
              inauthentic romance to become a real one.</p>
            <p>Whether or not The End of the F***ing World gets a second season it is well worth the watch. It brings to life an incredible
              love story that we didn’t think would ever happen. It has us cheering for Alyssa and James all the way, during their morally
              questionable incidents, and foolish choices. We are left wishing for a second season even as the show reaches a definitive ending.</p>
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
        <EndoftheWorld/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("EOTFW"));