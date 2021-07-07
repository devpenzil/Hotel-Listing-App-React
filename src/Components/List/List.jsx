import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {change_id} from '../../Store/Components/idSlicer'
import data from '../../JSON_ASSET/restaurants.json'
import './List.css'
function List() {
    const [restaurant, setRestaurant] = useState([])
    const history = useHistory()
    const dispatch = useDispatch()
    const clicked = (id) => {
        dispatch(change_id({
          id: id
        }))
        history.push("/details")
    }
    useEffect(() => {
        setRestaurant(data.restaurants)
        console.log(restaurant)
    }, [])
    return (
        <div className="List">
            <div className="container">
                    {restaurant.map((obj)=>{
                        return(

                            <div className="row hotel-card">
                                <div className="col-md-6 left">
                                        <img src={obj.photograph} alt="" className="img-fluid" />
                                </div>
                                <div className="col-md-6 right">
                                   
                                    <h2>{obj.name}</h2>
                                    <h5>{obj.address}</h5>
                                    <button className="view-more" onClick={()=>clicked(obj.id)}>View More</button>
                                </div>
                           </div>
                        )
                    })}
                    


                
            </div>
        </div>
    )
}

export default List
