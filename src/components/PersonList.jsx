import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "../Redux/features/UserReducer";
import "/src/index.css";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
const PersonList = () => {
  const { userList } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <main className="table">
      <h2 className="table__header">Person List</h2>
      <button className="outer button">
        <div className="create__button">
          <Link to="/" className="create__link">
            Home
          </Link>
        </div>
      </button>
      <button className="outer button">
        <div className="create__button">
          <Link to="/person_add" className="create__link">
            Create +
          </Link>
        </div>
      </button>
      <section className="table__body">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Update</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link to={`/edit/${user.id}`} className="edit">
                    Edit
                  </Link>
                </td>
                <td>
                  <Link
                    onClick={() => handleDelete(user.id)}
                    className="delete"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default PersonList;
