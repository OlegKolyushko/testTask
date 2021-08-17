import React from "react";
import PropTypes from "prop-types";
import img from "../../image/image.svg";
import "../UsersItem/usersItem.scss";

export default function UsersItem({ currentUser }) {
  return Object.keys(currentUser).length ? (
    <div className="info-item">
      <div className="info-item-desc">
        <h2 className="info-item-title">{currentUser.title}</h2>
        <p className="info-item-text">{currentUser.body}</p>
      </div>
      <div className="info-item-coverNumber">
        <p className="info-item-number">{currentUser.id}</p>
      </div>
    </div>
  ) : (
    <div className="info-defaultContainer">
      <div className="info-default">
      <h1 className="info-default-title">Welcome to task</h1>
      <img className="info-default-img" src={img} alt="img"/>
      </div>
    </div>
  );
}
UsersItem.propTypes = {
  currentUser: PropTypes.shape({
    username: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
  })
}
