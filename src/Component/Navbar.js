import React from 'react'
import { Outlet } from 'react-router-dom'

const Navbar = () => {
    return (<>
        <div className='navbar'>
            <h4>Thali building app</h4>
        </div>
        <Outlet />
    </>
    )
}

export default Navbar