class EndoftheWorld extends React.Component {
  render() {
    return(
      <div>
        <h2 className="section_title pb-0">Future Technology Remains Dark,</h2>
        <h2 className="section_title">but There is Hope</h2>
        <h5 className="section_title">A Review of Black Mirror Season 4</h5>
        <div className="row text-left">
          <div className="col-xs-0 col-sm-1 col-md-2 col-lg-3"></div>
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
            <p>Black mirror season 4 continues its predecessors diverse take on future technology with a mostly dark
              undertone, in 6 new episodes ranging from 41-76 minutes. The episodes are once again a mix of great and
              mediocre some standing out as black mirror’s best. Of course this is often a matter of opinion since it
              seems no one can consistently agree on the best episodes.</p>
            <p>The season takes us through the full range of emotions which of course are primarily dark ones in full
              black mirror style. The darkest point occurs in “Crocodile”, an episode filled with deceit, desperation
              and cruelt. “Metalhead”, “Arkangel”, and “Black Museum” stand out as the other darkest episodes while
              “USS Callister” and “Hang the DJ” are the lightest material of the bunch. Without further ado here’s
              how the episodes rank against one another.</p>
            <h5>6) Metalhead</h5>
            <p>Shot in black and white, Metalhead is the worst and shortest of this season’s crop. In short, this
              episode is a nearly 40 minute chase scene. The episode follows a woman as she escapes machine in an
              interesting turn for black mirror, which generally focuses on human cruelty. The episode is tense and
              dark but falls up short on the entertainment factor and is easily the dullest episode this season. </p>
            <h5>5) Crocodile</h5>
            <p>While significantly more enjoyable than “Metalhead”, “Crocodile” will go down as one of this season’s
              weaker episodes. Crococodile centers around a successful business woman with a dark past that is catching
              up to her. As always there is a futuristic technology, this time a device that is able to record and view
              the memories of anyone, primarily witnesses to crime. As soon as the technology is introduced it is very
              easy to see where the episode is headed as the episode turns into an unbelievably reckless journey.</p>
            <h5>4) Arkangel</h5>
            <p>Arkangel falls near the middle of the pack primarily because of how extremely obvious its implications
              are. The episode follows a technology that enables helicopter parenting to the extreme and how this effects
              a mother daughter relationship. Spoiler, but not really, it completely destroys it as the mother continues
              to monitor and censor her daughter’s life throughout her teenage years.</p>
            <h5>3) Black Museum</h5>
            <p>Possibly one of the more controversial episodes in terms of ranking, “Black Museum” ranks at or near the
              top of many lists while at the bottom of others. This episode takes place in its entirety inside a museum
              as a young black woman listens to a retired experimental scientist tell stories of his past inventions
              and the consequences of those inventions. Unsurprisingly the technologies create some serious issues. If
              you watch carefully you will also notice that the museum is an homage to black mirror in its entirety,
              containing many artifacts from previous episodes.</p>
            <h5>2) USS Callister</h5>
            <p>The season 4 opener pays its respects to star trek in the opening scene and takes on a. However after
              leaving the opening simulation we see that in fact the star trek homage is a terrible prison created in
              the twisted mind of Robert Daley (<a href="https://en.wikipedia.org/wiki/Jesse_Plemons" target="_blank">Jesse Plemons</a>).
              Robert Daley is an undervalued mastermind, who created an impressively massive virtual reality world for
              his company. USS Callister is a strong start to the season in which people fight back and persevere
              when an overreaching technology harms their livelihood.</p>
            <h5>1) Hang the DJ</h5>
            <p>Hang the DJ is arguably this season’s most enjoyable episode and examines how technology can supplement
              our dating lives. The technology in question is a dating app that tells you exactly who to date and for
              how long supposedly leading to the perfect match in the end. Unlike many black mirror episodes the app
              is not necessarily one that has gone too far, although that is pretty opinion based, and the episode
              ends on a surprisingly positive note.</p>
            <p>Overall black mirror season 4 is a great watch. While not every episode is perfection there are certainly
              gems to be found as is usually the case in black mirror seasons. We see stories of technology gone
              horribly wrong but also see a lighter take on the future. Technology ruins the lives of some, but helps
              those of others. While technology does create some dark times we also see it help humanity triumph. Each
              episode takes us through the ups and downs of what technology can accomplish but the season as a whole
              can be seen as remarkably positive showing us how technology can re-shape our lives.</p>
            <p></p>
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
ReactDOM.render(<App />, document.getElementById("Black_Mirror_4"));