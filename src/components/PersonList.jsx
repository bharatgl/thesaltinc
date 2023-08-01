import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PersonList = () => {
  const users = useSelector((state) => state.users);
  console.log(users);

  return (
    <div className="container">
      <h2>Person List</h2>
      <Link to="/person-add" className="button">
        Create +
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Link to={`/edit/${user.id}`}>edit</Link>
              </td>
              <td>
                <Link>Delete</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PersonList;
