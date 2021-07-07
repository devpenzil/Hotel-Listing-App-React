import React from 'react'
import {useHistory} from 'react-router-dom'
import './NavBar.css'
function NavBar() {
    const history = useHistory()
    const clicked = () => {
        history.push('/')
    }

    return (
        <div className="NavBar" >
            <span onClick={clicked}>Hotel List</span>
        </div>
    )
}

export default NavBar
