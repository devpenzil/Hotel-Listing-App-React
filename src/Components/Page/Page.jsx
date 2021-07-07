import React, { useEffect, useState } from 'react'
import data from '../../JSON_ASSET/restaurants.json'
import {useSelector} from 'react-redux'
import './Page.css'
function Page() {
    const id = useSelector(state => state.id.value)
        const [restaurant, setRestaurant] = useState(0)
        const [review, setReview] = useState([0])
        const goToTop = () => window.scrollTo(0,0)
        useEffect(() => {
            goToTop()
            setRestaurant(data.restaurants[id])
          //  console.log(restaurant)
            setReview(data.restaurants[id].reviews)
          //  console.log(review)
        }, [])
    return (
        <div className="Page">
            <div className="banner"  style={{backgroundImage: `url( ${restaurant ? restaurant.photograph : ""} )`}}>
               
            </div>
            <div className="container">
          <div className="row">
              <div className="col-md-6">
              <h1 className="display-1">{restaurant ? restaurant.name : ""}</h1>
              <h3>{restaurant ? restaurant.neighborhood : ""}</h3>
                        <h4>{restaurant ? restaurant.address : ""}</h4> - <h2>{restaurant ? restaurant.cuisine_type : ""}</h2>
                    <br />
              </div>
              <div className="col-md-6">
               <div className="buttons">
               <button>Make an enquiry</button>
                  <button>Book now</button>
               </div>
              </div>
          </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        
                        <h2>Reviews</h2>
                        {review.map((obj)=>{
                            return(
                                <div className="review">
                                    <p>{obj.comments}</p>
                                    <h6>written by  {obj.name} on {obj.date}</h6>
                                </div>
                            )
                        })}
                    </div>
                    <div className="col-md-4">
                        <h4>Operating Hours</h4> <br />

                        <h6>Monday </h6>
                        { restaurant ? restaurant.operating_hours.Monday : ""}  

                        <h6>Tuesday</h6>
                        { restaurant ? restaurant.operating_hours.Tuesday : ""}

                        <h6>Wednesday</h6>
                        { restaurant ? restaurant.operating_hours.Wednesday : ""}

                        <h6>Thursday</h6>
                        { restaurant ? restaurant.operating_hours.Thursday : ""}

                        <h6>Friday</h6>
                        { restaurant ? restaurant.operating_hours.Friday : ""}

                        <h6>Saturday</h6>
                        { restaurant ? restaurant.operating_hours.Saturday : ""}

                        <h6>Sunday</h6>
                        { restaurant ? restaurant.operating_hours.Sunday : ""}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Page
