class Unfortunate extends React.Component {
  render() {
    return(
      <div>
        <h2 className="section_title pb-0">A Repetitive, </h2>
        <h2 className="section_title">but Enjoyable Continuation</h2>
        <h5 className="section_title">A Review of A Series of Unfortunate Events Season 2</h5>
        <div className="row text-left">
          <div className="col-xs-0 col-sm-1 col-md-2 col-lg-3"></div>
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-6">
            <p><a href="https://www.netflix.com/title/80050008" target="_blank">A series of unfortunate events season 2</a>, picks up where its predecessor left off, continuing
              on its dark and inventive path.</p>
            <img src="../Images/a_series_of_unfortunate_events_2.jpeg" alt="" className="movie_image pb-3"></img>
            <p>Season 2 may even be darker than season 1 and we must deal with the death of two major characters.
              It builds on all the success of season 1 in tremendous style. Once again the season presents
              a hopeless view of the world, depicting many events that often can be seen as a reflection upon
              the United States and the current political climate, much more so than season 1. This is not at all
              unlikely given that season 1 was created in the year preceding the election, while season 2 was created
              following it. Either way a series of unfortunate events asks many questions and presents many ideas that
              society ought to consider.</p>
            <p>The theme of each episode continues the same repetitive style of season 1. The children meet their new
              guardian and the guardian assures them that Count Olaf will “never” find them there. Of course Count
              Olaf always finds them and the guardians are unable to recognize him in his new ‘disguise’. At this
              point Count Olaf hatches a plan to get the children back, he is discovered and the children move
              on to a new guardian. </p>
            <p>This plot arc more or less describes every pair of episodes in seasons 1 and 2 and while it is no
              doubt purposeful, it does become tiresome. While this repetitiveness is central to the book and may be
              enjoyable to some subset of people, it is the primary reason for why many people may tire of the show.
              Obviously the show is quite predictable in this way and although the series takes advantage of this fact,
              I did find myself feeling less and less engaged in the series throughout the season. So much so that I
              was hardly paying attention at all by the final set of episodes in season 2. It is quite unfortunate
              that this series, which is inventive in many other areas seems to fall prey to this repetitiveness.</p>
            <p>Many fans of the show defend its repetitiveness, arguing that it adds to the message the show is able
              to share with the audience. While true, I think that repetition should not have been the answer for
              the series. Sometimes it is ok to stray away from source material to attract a wider audience by
              telling a more entertaining story. This does not mean to strip away everything from the books, but
              rather to build on its ideas as is done in much of the show.</p>
            <p>Overall season 2 of a series of unfortunate events is just as impressive as the first season,
              especially if you are the kind of viewer who likes to look for significance and substance,
              behind what is shown outright to the audience. If you were a fan of the first season, you
              will surely be a fan of this one. Similarly if you didn’t enjoy the first season, either for its
              darkness or it repetition, you will find not enjoy season 2 as it uses those same strategies. It’s
              definitely a show to give a try, if you haven’t yet, but we warned, it’s not for everyone. </p>
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
ReactDOM.render(<App />, document.getElementById("Unfortunate2"));