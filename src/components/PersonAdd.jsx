import React from "react";

const PersonAdd = () => {
  return (
    <div className="form-container">
      <div className="form-inner-container">
        <h3>Add New Person</h3>
        <form>
          <div className="">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" className="form-control" />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" className="form-control" />
          </div>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PersonAdd;
