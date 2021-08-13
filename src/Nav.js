import React, { useEffect, useState } from 'react';
import "./Nav.css";


function Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false)
        }

    }

    useEffect(()=> {
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    },[]);
    return (
        <div className={`nav ${show && `nav__black`}`}>
            <div className="nav__contents">
               <img className="nav__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix Logo" />
               <img className="nav__avatar" src="https://i1.wp.com/matrixstore.pk/wp-content/uploads/2021/04/DmBraqkXcAA1Yco.jpg?fit=318%2C316&ssl=1" alt="Netflix Avatar" />
            </div>
            

        </div>
    )
}

export default Nav
