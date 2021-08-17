import React, { Component } from "react";
import Filter from "../Filter/Filter";
import UsersList from "../UsersList/UsersList";
import UsersItem from "../UsersItem/UsersItem";
import usersData from "../../Data/usersData.json";
import "../App/app.scss";
export default class App extends Component {
  state = {
    users: [],
    filter: "",
    currentUser: {},
  };

  componentDidMount() {
    this.setState((prevState) => {
      return {
        ...prevState,
        users: usersData.users,
      };
    });   
  }

  handlerFilter = (filter) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        filter,
      };
    });
  };
  filteredUsers = () => {
    const { users, filter } = this.state;
    console.log(filter);
    return filter
      ? users.filter((user) =>
          user.username.toLowerCase().includes(filter.toLowerCase())
        )
      : users;
  };
  getUser = (id) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        currentUser: prevState.users.find((user) => user.id === id),
      };
    });
  };

  render() {
    const { filter, currentUser } = this.state;
    const { handlerFilter, filteredUsers, getUser } = this;
    return (
      <div className="main">
        <Filter value={filter} handlerFilter={handlerFilter} />
        <div className="info">
        <UsersList users={filteredUsers()} getUser={getUser} />
        <UsersItem currentUser={currentUser} />
        </div>
      </div>
    );
  }
}
