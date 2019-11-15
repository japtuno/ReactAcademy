import React, { Component } from "react";

class MyTimer extends Component {
  constructor(props) {
    super(props);
    this.state = { timing: new Date() };
  }

  ////Life cycle
  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentDidUnmount() {
    clearInterval(this.timerId);
  }
  ////end

  tick() {
    this.setState({ timing: new Date() });
  }

  render() {
    return (
      <div className="ticker">
        Hour: {this.state.timing.toLocaleTimeString()}
      </div>
    );
  }
}

export default MyTimer;
