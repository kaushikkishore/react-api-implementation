import React, { Component } from "react";
class BoldSpan extends Component {
  render() {
    const text = this.props.text;
    return <span className="font-weight-bold">{text}</span>;
  }
}

export default BoldSpan;
