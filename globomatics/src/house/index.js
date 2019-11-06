import React, { Component } from "react"; ////imrc
import "./house.css";
import Inquiry from "./inquiry";
import emailLogo from "./Email.png";
import PropTypes from "prop-types";

////cc
class House extends Component {
  state = { inquiryShow: false };

  inquiryToggle = () => {
    this.setState({ inquiryShow: !this.state.inquiryShow });
  };

  render() {
    const house = this.props.house;
    const inquiry = this.state.inquiryShow ? <Inquiry house={house} /> : null;

    return (
      <div>
        <div className="row mt-2">
          <h5 className="col-md-12">{house.country}</h5>
        </div>

        <div className="row">
          <h3 className="col-md-12">{house.address}</h3>
        </div>

        <div className="row">
          <div className="col-md-7">
            <img
              src={
                "https://images.pexels.com/photos/${house.photo}/pexels-photo-${house.photo}.jpeg?w=600&h=400&auto=compress&cstinysrgb"
              }
              alt="House"
            ></img>
          </div>
          <div className="col-md-5">
            <p className="price">${house.price}</p>
            <p>{house.description}</p>
            <img
              src={emailLogo}
              onClick={this.inquiryToggle}
              height="50"
              alt="inquiry"
            />
            {inquiry}
          </div>
        </div>
      </div>
    );
  }
}

House.propTypes = {house: PropTypes.object.isRequired}
export default House;
