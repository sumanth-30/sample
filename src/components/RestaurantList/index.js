import {Link} from 'react-router-dom'
import {AiFillStar} from 'react-icons/all'

const RestaurantList = props => {
  const {each} = props
  return (
    <Link to={`/restaurant/${each.id}`} className="link" key={each.id}>
      <div className="restaurant-container">
        <div>
          <img
            src={each.imageUrl}
            alt="restaurant"
            className="restaurant-image"
          />
        </div>
        <div className="details">
          <div>
            <div className="res-name-container">
              <h1 className="name-res">{each.name}</h1>
            </div>
            <p className="type">{each.type}</p>
            <div className="align-rating">
              <p className="rating">
                <span style={{color: `#${each.color}`}}>
                  <AiFillStar className="star" />
                </span>
                {each.rating}{' '}
                <span className="rate">({each.totalReviews} rating)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default RestaurantList
