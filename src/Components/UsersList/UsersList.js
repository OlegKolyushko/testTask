import React from "react";
import PropTypes from "prop-types";
import "../UsersList/usersList.scss";

export default function UserList({ users, getUser }) {
  return (
    <div className="info-listContainer">
      <ul className="info-list">
        {users.map((user) => (
          <li className="info-listItem" key={user.id} onClick={() => getUser(user.id)}>
            {user.id}. {user.username}: {user.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string,
    })
  ),
};