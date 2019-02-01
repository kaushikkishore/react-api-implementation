import React, { Component } from "react";

class Header extends Component {
  state = {
    details: {
      Name: "Software Tools"
    }
  };
  /*
   * To do inline style => style={{ backgroundColor: "#e3f2fd" }}
   */
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="javascript:void(0)">
          {this.state.details.Name}
        </a>
      </nav>
    );
  }
}

export default Header;
