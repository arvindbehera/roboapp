import React, { Component } from "react";
import CardList from "./CardList";
// import { robots } from "./robots";
import Searchbox from "./Searchbox";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ robots: users });
      });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filterredRobots = this.state.robots.filter(robots => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    
    return (
      <div className="tc">
        <h1> ROBO APP</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <CardList robots={filterredRobots} />
      </div>
    );
  }
}

export default App;
