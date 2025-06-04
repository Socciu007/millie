import './style.scss'
import { useNavigate } from 'react-router-dom'

const HeaderComponent = () => {
  const navigate = useNavigate()
  return (
    <div className="header-component">
      <div className="container">
        <div className="container-logo" onClick={() => navigate('/')}>
          <h2>Millie.doublenguyeen</h2>
        </div>
        <div className="container-nav">
          <div className="container-nav-item">
            <a href="#">Home</a>
          </div>
          <div className="container-nav-item">
            <a href="#projects">Projects</a>
          </div>
          <div className="container-nav-item">
            <a href="#works">Works</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderComponent