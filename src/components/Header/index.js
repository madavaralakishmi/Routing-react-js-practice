import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="Arrange">
    <div className="wave-arrange">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
        alt="wave"
      />
      <p className="p">Wave</p>
    </div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </div>
)

export default Header
