import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div>
            <div className="line"></div>
            <div className="footer__container">
                <div className="footer__content">
                    <div className ="content__one">
                        <span>FAQ</span>
                        <span>Investor Relations</span>
                        <span>Privacy</span>
                        <span>Speed Test</span>
                    </div>
                    <div className ="content__one">
                        <span>Help Centre</span>
                        <span>Jobs</span>
                        <span>Cookie Preferences</span>
                        <span>Legal Notices</span>
                    </div>
                    <div className ="content__one">
                        <span>Account</span>
                        <span>Ways to Watch</span>
                        <span>Corporate Information</span>
                        <span>Only on Netflix</span>
                    </div>
                    <div className ="content__one">
                        <span>Media Centre</span>
                        <span>Terms of Use</span>
                        <span>Contact Us</span>
                        
                    </div>


                </div>
                <img className="footer__img" src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"/>
                <span className="name__span">NETFLIX CLONE - TEJAS</span>

            </div>
        </div>

    )
}

export default Footer
