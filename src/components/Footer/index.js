import {FaInstagram} from 'react-icons/fa'
import './index.css'

const whiteLogo =
  'https://res.cloudinary.com/dihboy1cn/image/upload/v1633691816/white-logo_ophouf.svg'
const pinLogo =
  'https://res.cloudinary.com/dihboy1cn/image/upload/v1633687779/pinterest_logo.jpg'
const twitterLogo =
  'https://res.cloudinary.com/dihboy1cn/image/upload/v1633687319/twitter_logo.png'
const facebookLogo =
  'https://res.cloudinary.com/dihboy1cn/image/upload/v1633687494/facebook_logo.jpg'

const Footer = () => (
  <>
    <div className="footer">
      <div className="tasty">
        <img src={whiteLogo} alt="home" className="logo" />
        <h1 className="heads">Tasty Kitchens</h1>
      </div>
      <p className="paragraph">The only thing we are serious about is food.</p>
      <div className="tasty">
        <a href="https://in.pinterest.com/" className="space">
          <img src={pinLogo} alt="imh" className="social-media" />
        </a>
        <a href="https://www.instagram.com/" className="space">
          <FaInstagram className="social-icon" />
        </a>
        <a href="https://twitter.com/?lang=en" className="space">
          <img src={twitterLogo} alt="imh" className="social-media" />
        </a>
        <a href="https://www.facebook.com/" className="space">
          <img src={facebookLogo} alt="imh" className="social-media" />
        </a>
      </div>
    </div>
  </>
)

export default Footer
