import React from "react";
import { Link } from "react-router-dom";

const PersonHome = () => {
  return (
    <>
      <form>
        <h1>Welcome to Person Management App</h1>

        <div className="typing-wrapper">
          <div className="typing-demo">
            Hi! I am Bharat, I have developed this using React, Threejs, React
            fibre, Redux to test this app click on the button 👇🏻
          </div>
        </div>

        <div className="home__button">
          <button className="outer button">
            <div className="create__button">
              <Link to="/person-list" className="create__link">
                Person List
              </Link>
            </div>
          </button>
        </div>
      </form>
    </>
  );
};

export default PersonHome;
