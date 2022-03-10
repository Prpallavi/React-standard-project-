import React from "react";
import { connect } from "react-redux";
import { BootstrapButton, Label, RadioButton, Textbox } from "../../../common";
import { Link } from "react-router-dom";
import { profileUser, } from "../../../../redux/users/action";
import {
  isValidMobile,
  isValidEmailAddress,
} from "../../../../Utils/common/validation";

const mapStateToProps = (state) => {
  return {
    profileData: state.profileData,
   
   
  };
};

const mapDispatchToProps = () => {
  return {
    profileUser,
  
  };
};
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      city: "",
      gender: "",
      errorbal: "",
      
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /* componentDidMount() {
    this.props.fetchUser();
  } */

  validatefield = () => {
    if (!this.state.name) {
      this.setState({
        errorbal: "Name is required",
      });
      return false;
    } else if (!this.state.email) {
      this.setState({
        errorbal: "Email is required",
      });
      return false;
    } else if (!this.state.mobile) {
      this.setState({
        errorbal: "Phone No is required",
      });
      return false;
    } else if (!this.state.gender) {
      this.setState({
        errorbal: "Gender is required",
      });
      return false;
    } else if (!this.state.city) {
      this.setState({
        errorbal: "City is required",
      });
      return false;
    } else {
      this.setState({
        errorbal: "",
      });
      return true;
    }
  };

  handleInput = (event) => {
    if (event.target.name === "email") {
      event.target.value
        ? this.validateEmail(event.target.value)
        : this.setState({ validateEmail: "" });
    }
    if (event.target.name === "mobile") {
      event.target.value
        ? this.validateMobile(event.target.value)
        : this.setState({ validateMobile: "" });
    }
    this.setState({
      [event.target.name]: event.target.value,
    });
  };




  handleSubmit = (event) => {
    if (!this.validatefield()) {
      return;
    }
    const data = {
      name: this.state.name,
      email: this.state.email,
      mobile: this.state.mobile,
      gender: this.state.gender,
      city: this.state.city,
    };
    this.props.profileUser(this.state);
    event.preventDefault();
    console.log(this.state);
  };

  validateEmail = (email) => {
    let emailValid = true;
    if (!isValidEmailAddress(email)) {
      this.setState({
        emailValid: "Please Enter the valid Email Address",
      });
      emailValid = false;
    } else {
      this.setState({
        emailValid: "",
      });
      emailValid = true;
    }
    return emailValid;
  };

  validateMobile = (mobile) => {
    let mobileValid = true;
    if (!isValidMobile(mobile)) {
      this.setState({
        mobileValid: "Please Enter the valid Phone Number",
      });
      mobileValid = false;
    } else {
      this.setState({
        mobileValid: "",
      });
      mobileValid = true;
    }
    return mobileValid;
  };

  render() {
    return (
      <div>
        <div className="budgetwrapper">
          <h3>PROFILE</h3>
          Username:
          <Textbox
            id="name"
            name="name"
            value={this.state.name}
            type="text"
            onChange={(e) => this.handleInput(e)}
          />
          <br />
          Email:
          <Textbox
            id="email"
            name="email"
            value={this.state.email}
            type="text"
            onChange={(e) => this.handleInput(e)}
          />
          {this.state.emailValid && (
            <span className="error">{this.state.emailValid}</span>
          )}
          <br />
          Mobile:
          <Textbox
            id="mobile"
            name="mobile"
            value={this.state.mobile}
            type="text"
            onChange={(e) => this.handleInput(e)}
          />
          {this.state.mobileValid && (
            <span className="error">{this.state.mobileValid}</span>
          )}
          <br />
         {/*  <select  >
                <option value="" selected>Select Country</option>
                {}
               </select>
          <br /> */}
          City:
          <Textbox
            id="city"
            name="city"
            value={this.state.city}
            type="text"
            onChange={(e) => this.handleInput(e)}
          />
          <br />
          Gender:
          <RadioButton
            label="female"
            id="female"
            name="gender"
            value="female"
            type="radio"
            onChange={(e) => this.handleInput(e)}
          />
          <RadioButton
            label="male"
            id="male"
            name="gender"
            value="male"
            type="radio"
            onChange={(e) => this.handleInput(e)}
          />
          <br />
          <div className="error">{this.state.errorbal}</div> <br />
          <BootstrapButton
            variant="primary"
            message="Save Profile"
            onClick={this.handleSubmit}
          />{" "}
          <BootstrapButton
            variant="primary"
            message={
              <Link
                to="/view"
                style={{ textDecoration: "none", color: "white" }}
              >
                View
              </Link>
            }
          />{" "}
          <BootstrapButton
            variant="primary"
            message={
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Back
              </Link>
            }
          />
          <br />
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(Profile);
