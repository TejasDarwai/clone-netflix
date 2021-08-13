import React, {useCallback} from 'react'
import './Login.css'
import {useHistory} from 'react-router-dom';

function Login() {
    const history = useHistory();
    const handleOnClick = useCallback(() => history.push('/clone-netflix/home'), [history]);
    return (
        <div className="login__container">
            <div className="login__head">
                <img className="login__head__logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>
                <button onClick={handleOnClick} className="login__head__button">Sign In</button>
                <div className="login__gradient"></div>
                
            </div>
            <div className="login__content">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            <div className="login__input">
                 <form>
                    <input type="email"placeholder="Email Address"/>
                    <button onClick={handleOnClick} className="login__getstarted">Get Started</button>
                </form>
                          
            </div>
            </div>
            
            
            
            
        </div>
    )
}

export default Login
