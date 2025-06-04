import './style.scss'
import avatar from '/assets/images/mellie.jpg'
import fbIcon from '/assets/icons/icon-fb.svg'
import linkedinIcon from '/assets/icons/icon-linkedin.svg'
import githubIcon from '/assets/icons/icon-github.svg'
import instagramIcon from '/assets/icons/icon-insta.svg'
import homeIcon from '/assets/icons/icon-home.svg'

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        <div className="container-row">
          <div className="container-row-left">
            <img src={avatar} alt="Millie Ta" />
          </div>
          <div className="container-row-right">
            <div className="container-row-right-title">
              <h1>Millie Ta</h1>
              <p>Data Analyst</p>
            </div>
            <div className="container-row-right-content">
              <p>Analytical and detail-focused Data Analyst with nearly 2 years of experience using SQL, Python/R, and Power BI to transform data into actionable insights. Proficient in managing large datasets, building interactive dashboards, and applying statistical and predictive modelling techniques to support informed decision-making. Experienced across multiple industries, from FMCG to tech, in monitoring performance, identifying trends, and streamlining reporting processes. Driven by a passion for turning complex data into meaningful outcomes that enhance business performance.</p>
            </div>
            <div className="container-row-right-button">
              <a href='/'><img src={homeIcon} alt="Home" /></a>
              <a href='/'><img src={githubIcon} alt="Github" /></a>
              <a href='/'><img src={instagramIcon} alt="Instagram" /></a>
              <a href='/'><img src={fbIcon} alt="Facebook" /></a>
              <a href='/'><img src={linkedinIcon} alt="LinkedIn" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home