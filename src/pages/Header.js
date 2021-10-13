import React from 'react'
import Typed from "react-typed"
export const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='main-wrapper'>
                <h1>you are welcome to our world</h1>
                <Typed
                    className="typed-text"
                    strings={["Welcome to our store", "Buy at an afrdable price", "Promotion on the way"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>
        </div>
    )
}

export default Header
