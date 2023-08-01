import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../Redux/features/UserReducer";

const PersonUpdate = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);

  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispath(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/person-list");
  };

  return (
    <div className="form-container">
      <div className="form-inner-container">
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          <div className="">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="enter name"
              defaultValue={uname}
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
              defaultValue={uemail}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default PersonUpdate;
