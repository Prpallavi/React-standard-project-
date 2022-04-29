import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProfiles,editProfile } from "../../../../redux/users/action";
import { Grid } from "../../../common";
import header from "./columndata.json";


class Profileview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  UNSAFE_componentWillMount() {
    this.props.viewUser();
  }

  handleOnchange(e){
    console.log(e.data)
   this.props.editing(e.data._id,e.data)
  }

  render() {
    console.log(this.props.user);
   
    return (
      <div>
        <Grid data={this.props.user.users} header={header.header} onCellValueChanged={(e)=>this.handleOnchange(e)} />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.app,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    viewUser: () => dispatch(fetchProfiles()),
    editing:(id,data) => dispatch(editProfile(id,data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profileview);
