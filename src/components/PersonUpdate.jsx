import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../Redux/features/UserReducer";

const PersonUpdate = () => {
  const { id } = useParams();
  const { userList } = useSelector((state) => state.users);
  const existingUser = userList.filter((f) => f.id == id);

  const { name, email } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispath(
      updateUser({
        id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/person_list");
  };

  return (
    <div className="form__background">
      <form onSubmit={handleUpdate}>
        <h3>Update User</h3>
        <div className="">
          <label htmlFor="name" className="username">
            Name{" "}
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Update Your Name"
            defaultValue={uname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Update Your Email"
            defaultValue={uemail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* <button className="submit__button"> Update</button> */}
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
              <div className="create__link">Update</div>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonUpdate;
