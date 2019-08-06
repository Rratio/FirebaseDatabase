import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardItem, Button } from "./common";
import EmployeeForm from "./EmployeeForm";

class EmployeeEdit extends Component {
  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardItem>
          <Button> Save Changes</Button>
        </CardItem>
      </Card>
    );
  }
}

export default connect()(EmployeeEdit);
