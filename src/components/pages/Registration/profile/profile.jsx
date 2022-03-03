import React from "react";
import { connect } from 'react-redux';
import { BootstrapButton, RadioButton, Textbox } from "../../../common";
import {Link} from 'react-router-dom'
import { profileUser} from '../../../../redux/users/action'

const mapStateToProps=(state)=>{
  return{
    profileData:state.profileData
  }
}
const mapDispatchToProps=()=>{
  return{
      profileUser
  }
}
 class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      mobile: "",
      city: "",
      gender: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /* componentDidMount() {
    this.props.fetchUser();
  } */
  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    this.props.profileUser(this.state)
    event.preventDefault();
    console.log(this.state);
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
          Email:
          <Textbox
            id="email"
            name="email"
            value={this.state.email}
            type="text"
            onChange={(e) => this.handleInput(e)}
          />
         
          Mobile:
          <Textbox
            id="mobile"
            name="mobile"
            value={this.state.mobile}
            type="text"
            onChange={(e) => this.handleInput(e)}
          />
          City:
          <Textbox
            id="city"
            name="city"
            value={this.state.city}
            type="text"
            onChange={(e) => this.handleInput(e)}
          />
         
          Gender:
          <RadioButton
            label="male"
            id="male"
            name="gender"
            value="male"
            type="radio"
            onChange={(e) => this.handleInput(e)}
          />
          <RadioButton
            label="female"
            id="female"
            name="gender"
            value="female"
            type="radio"
            onChange={(e) => this.handleInput(e)}
          />
          
          <BootstrapButton
            variant="primary"
            message="Save Profile"
            onClick={this.handleSubmit}
          />{' '}
          <BootstrapButton
           variant="primary"
           message={<Link to="/view" style={{textDecoration:"none",color:"white"}} >View</Link>}
          
         />{' '}
           <BootstrapButton
            variant="primary"
            message={<Link to="/login" style={{textDecoration:"none",color:"white"}} >Back</Link>}
           
          />
        
          <br />
        </div>
      </div>
    );
  }
 
}


export default connect(mapStateToProps,mapDispatchToProps())(Profile);

