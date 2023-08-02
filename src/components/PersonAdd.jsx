import React from "react";
import { addUser } from "../Redux/features/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
const PersonAdd = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { userList } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ name, email, id: uuid() }));
    navigate("/person-list");
  };

  return (
    <div className="form__background">
      <form onSubmit={handleSubmit}>
        <h3>Add New Person</h3>
        <div>
          <label htmlFor="name" className="username">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Enter Your Name"
            onChange={(e) => setName(e.target.value)}
            id="username"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            className="form-control"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* <button className="submit__button">Submit</button> */}

        <div className="form__buttons">
          <button className="outer button">
            <div className="create__button">
              <Link to="/" className="create__link">
                Home
              </Link>
            </div>
          </button>
          <button className="outer button">
            <div className="create__button">
              <div className="create__link">Submit</div>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonAdd;
