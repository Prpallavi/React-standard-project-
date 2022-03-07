import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProfiles } from "../../../../redux/users/action";
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

  render() {
    console.log(this.props.user);
    console.log(this.state.user);
    return (
      <div>
        <Grid data={this.props.user.users} header={header.header} sorting />
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profileview);
