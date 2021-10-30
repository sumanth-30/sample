import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineRightSquare, AiOutlineLeftSquare} from 'react-icons/all'
import Restaurant from '../Restaurant'
import RestaurantList from '../RestaurantList'

import './index.css'

const sortByOption = [
  {
    text: 'Highest',
    textId: 'HIGHEST',
  },
  {
    text: 'Lowest',
    textId: 'LOWEST',
  },
]

class PopularRestaurants extends Component {
  state = {
    restaurantList: [],
    isLoading: false,
    activePage: 1,
    pagination: 0,
    limit: 9,
    offset: 0,
    activeSort: sortByOption[0].text,
  }

  componentDidMount() {
    this.getRestaurant()
  }

  updateActiveOption = activeSort => {
    this.setState({activeSort}, this.getRestaurant)
  }

  getRestaurant = async () => {
    this.setState({isLoading: true})
    const jwtToken = Cookies.get('jwt_token')
    const {activeSort, limit, offset} = this.state

    const apiUrl = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}&sort_by_rating=${activeSort}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.restaurants.map(each => ({
        name: each.name,
        imageUrl: each.image_url,
        type: each.menu_type,
        rating: each.user_rating.rating,
        totalReviews: each.user_rating.total_reviews,
        color: each.user_rating.rating_color,
        id: each.id,
      }))

      this.setState({
        restaurantList: updatedData,
        isLoading: false,
        pagination: Math.ceil(data.total / 9),
      })
    }
  }

  onClickRightPage = () => {
    const {activePage, limit} = this.state

    if (activePage !== 4) {
      this.setState(
        prev => ({
          offset: (prev.activePage + 1 - 1) * limit,
          activePage: prev.activePage + 1,
        }),
        this.getRestaurant,
      )
    } else {
      this.setState({
        activePage: 4,
        offset: 21,
      })
    }
  }

  onClickLeftPage = () => {
    const {activePage, limit} = this.state
    if (activePage !== 1) {
      this.setState(
        prev => ({
          offset: (prev.activePage - 2) * limit,
          activePage: prev.activePage - 1,
        }),
        this.getRestaurant,
      )
    } else {
      this.setState({
        activePage: 1,
        offset: 0,
      })
    }
  }

  renderProductsList = () => {
    const {restaurantList, activePage, activeSort, pagination} = this.state
    return (
      <>
        <Restaurant
          sortByOption={sortByOption}
          updateActiveOption={this.updateActiveOption}
          activeSort={activeSort}
        />

        <div className="container-one ">
          {restaurantList.map(each => (
            <RestaurantList testid="restaurant-item" each={each} />
          ))}
        </div>
        <div className="pagination">
          <AiOutlineLeftSquare
            testid="pagination-left-button"
            className="common"
            onClick={this.onClickLeftPage}
          />
          <p>
            <span testid="active-page-number">{activePage}</span> of{' '}
            {pagination}
          </p>
          <AiOutlineRightSquare
            testid="pagination-right-button"
            className="common"
            onClick={this.onClickRightPage}
          />
        </div>
      </>
    )
  }

  renderLoader = () => (
    <div className="loader">
      <Loader
        testid="restaurants-list-loader"
        type="Circles"
        color="#F7931E"
        height="50"
        width="50"
      />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return <>{isLoading ? this.renderLoader() : this.renderProductsList()}</>
  }
}

export default PopularRestaurants
