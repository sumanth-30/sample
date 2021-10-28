import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Header from '../Header'
import Offers from '../Offers'
import PopularRestaurants from '../PopularRestaurants'
import Footer from '../Footer'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <Offers />
      <div className="main">
        <PopularRestaurants />
      </div>
      <Footer />
    </>
  )
}
export default Home
