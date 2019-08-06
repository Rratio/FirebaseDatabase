import _ from "lodash";
import React, { Component } from "react";
import { FlatList } from "react-native";
import { connect } from "react-redux";
import firebase from "react-native-firebase";
import { employeesFetch } from "../actions/EmployeeActions";
import ListItem from "./ListItem";
class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }
  componentDidMount = () => {
    const { currentUser } = firebase.auth();

    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .once("value", snapshot => {
        const employees = _.map(snapshot.val(), (val, uid) => {
          return { ...val, uid };
        });
        this.setState({ employees, loading: false });
        console.log(this.state.employees);
      });
  };

  renderItem({ item }) {
    return <ListItem data={item} />;
  }

  render() {
    return (
      <FlatList
        data={this.state.employees}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => item.id}
      />
    );
  }
}

const mapStateToProps = state => {
  return { employees: state.employees };
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);
