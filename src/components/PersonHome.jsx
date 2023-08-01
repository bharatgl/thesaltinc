import React from "react";
import { Link } from "react-router-dom";

const PersonHome = () => {
  return (
    <div>
      <h1>Welcome to Person Management app</h1>

      <button className="outer button">
        <div className="create__button">
          <Link to="/person-list" className="create__link">
            Redirect to Person List
          </Link>
        </div>
      </button>
      {/* <Link to="/person-list">
        <button>Redirect to Person List</button>
      </Link> */}
    </div>
  );
};

export default PersonHome;
