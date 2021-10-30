import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

const whiteLogo =
  'https://res.cloudinary.com/dihboy1cn/image/upload/v1633691816/white-logo_ophouf.svg'

const Footer = () => (
  <>
    <div className="footer">
      <div className="tasty">
        <img src={whiteLogo} alt="website-footer-logo" className="logo" />
        <h1 className="heads">Tasty Kitchens</h1>
      </div>
      <p className="paragraph">
        The only thing we are serious about is food. Contact us on
      </p>
      <div className="tasty">
        <a href="https://in.pinterest.com/" className="space">
          <FaPinterestSquare
            className="social-icon"
            testid="pintrest-social-icon"
          />
        </a>
        <a href="https://www.instagram.com/" className="space">
          <FaInstagram className="social-icon" testid="instagram-social-icon" />
        </a>
        <a href="https://twitter.com/?lang=en" className="space">
          <FaTwitter className="social-icon" testid="twitter-social-icon" />
        </a>
        <a href="https://www.facebook.com/" className="space">
          <FaFacebookSquare
            className="social-icon"
            testid="facebook-social-icon"
          />
        </a>
      </div>
    </div>
  </>
)

export default Footer
