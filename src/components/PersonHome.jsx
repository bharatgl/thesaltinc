import React from "react";
import { Link } from "react-router-dom";

const PersonHome = () => {


  
  return (
    <div>
      <h1>Welcome to Person Management app</h1>
      <Link to="/person-list">
        <button>Redirect to Person List</button>
      </Link>
    </div>
  );
};

export default PersonHome;
