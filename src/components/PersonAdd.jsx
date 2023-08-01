import React from "react";
import { addUser } from "../Redux/features/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid"
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
    <div className="form-container">
      <div className="form-inner-container">
        <h3>Add New Person</h3>
        <form onSubmit={handleSubmit}>
          <div className="">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PersonAdd;
