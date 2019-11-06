import React, { Component } from "react";

class Detail extends Component {
  state = { showDetail: false };

  onClick = () => {
    this.setState({ showDetail: !this.state.showDetail });
  };

  render() {
    const detail = !this.state.showDetail ? null : (
      <div className="mt-2 col-md-12">Apply for a job.</div>
    );

    return (
      <div className="container">
        <div className="mt-4 col-md-12">
          <p>ITSector is hiring.</p>
          <div className="mt-2">
            <button
              id="showDetail"
              className="btn btn-primary"
              onClick={this.onClick}>
              Show more
            </button>
          </div>
        </div>

        {detail}
      </div>
    );
  }
}

export default Detail;
