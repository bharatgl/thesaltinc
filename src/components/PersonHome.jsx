import React from "react";
import { Link } from "react-router-dom";

const PersonHome = () => {
  return (
    <>
      <form>
        <h1>Welcome to Person Management App</h1>

        <div className="home__button">
          <button className="outer button">
            <div className="create__button">
              <Link to="/person-list" className="create__link">
                PersonList
              </Link>
            </div>
          </button>
        </div>
      </form>
    </>
  );
};

export default PersonHome;
