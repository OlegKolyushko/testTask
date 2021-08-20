import React, { Component } from "react";
import Filter from "../Filter/Filter";
import UsersList from "../UsersList/UsersList";
import UsersItem from "../UsersItem/UsersItem";
// import usersData from "../../Data/usersData.json";
import "../App/app.scss";
import axios from "axios";


export default class App extends Component {
  state = {
    users: [],
    filter: "",
    currentUser: {},
    isLoading: true,
    error: null,
  };

  componentDidMount() {
    axios
    .get("https://6115304aaec65d0017e9dd40.mockapi.io/api/posts")
    .then((response) =>
      this.setState((prevState) => {
        return {
          ...prevState,
          users: response.data,
        };
      })
    )
    .catch((error) => this.setState({ error }))
    .finally(() => this.setState({ isLoading: false }));
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
    const { filter, currentUser, error, isLoading } = this.state;
    const { handlerFilter, filteredUsers, getUser } = this;
    return (
      <>
        {isLoading && <h1 className="loadingTitle">Loading...</h1>}
        {error ? (
          <h1 className="errorTitle">
            Sorry, we have a problem: {error.message}
          </h1>
        ) : (
          <div className="main">
            <Filter value={filter} handlerFilter={handlerFilter} />
            <div className="info">
              <UsersList users={filteredUsers()} getUser={getUser} />
              <UsersItem currentUser={currentUser} />
            </div>
          </div>
        )}
      </>
    );
  }
}
