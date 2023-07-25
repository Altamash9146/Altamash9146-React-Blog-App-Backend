import React, { useEffect, useState } from "react";
import "./Logo.style.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Logo = () => {
  const name = localStorage.getItem("FirstName");
  console.log(name);

  const navi = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [Username,setUserName] = useState(true)

  useEffect(() => {
    const data = localStorage.getItem("token");
    if (data) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    navi('/login');
  };

  const handleSignup = () => {
    navi('/signup');
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
    navi('/')
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
    setUserName(showPopup)
  };

  return (
    <>
      <div className="border">
        <h1 className="Heading">
          <span className="Vertical-Text">The</span>Siren
        </h1>
        <div>
          <FontAwesomeIcon icon={faUser} onClick={togglePopup}  className="Font-Awesome"/>
          
          {Username && <span className="Font-Awesome-Name">{name}</span>}

          {showPopup && (
            <div className="Popup">
              {isLoggedIn && (
                <>
                  <button className="Logo-Logout-Button" onClick={handleLogout}>
                    Logout
                  </button>
                  <h5 className="Name-Container"><span className="Name">{name}</span></h5>
                </>
              )}
            </div>
          )}
          {!isLoggedIn && (
            <>
              <button className="Logo-Login-Button" onClick={handleLogin}>
                Login
              </button>
              <button className="Logo-Signup-Button" onClick={handleSignup}>
                Signup
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Logo;
