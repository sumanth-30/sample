import {AiFillStar, BiRupee} from 'react-icons/all'
import AddButton from '../AddButton'

import './index.css'

const EachFoodItem = props => {
  const {foodItems} = props

  return (
    <div className="box-items">
      {foodItems.map(each => (
        <div key={each.id} style={{listStyle: 'none'}} className="list-view">
          <div className="view-list-container">
            <div>
              <img src={each.image_url} alt="home" className="small-image" />
            </div>
            <div className="view-container">
              <div>
                <div className="item-names">
                  <h1 className="i-name">{each.name}</h1>
                </div>
                <div className="rupees">
                  <BiRupee />
                  <p className="item-costs">{each.cost}.00</p>
                </div>
                <div className="rating-star">
                  <AiFillStar />
                  <p className="items-ratings">{each.rating}</p>
                </div>
                <div>
                  <AddButton
                    testid="active-count"
                    foodItems={{
                      name: each.name,
                      cost: each.cost,
                      url: each.image_url,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EachFoodItem
