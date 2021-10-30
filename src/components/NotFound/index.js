import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const notFound =
  'https://res.cloudinary.com/dihboy1cn/image/upload/v1634883847/not_found.jpg'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found">
      <img src={notFound} alt="not found" />
      <h1>Page Not Found</h1>
      <p className="we-are">
        we are sorry, the page you requested could not be found
      </p>
      <Link to="/">
        <button type="button" className="button-back-home">
          Home Page
        </button>
      </Link>
    </div>
  </>
)

export default NotFound
