import React, { Component } from "react";
import { TextInput, Picker, View, Text } from "react-native";
import { connect } from "react-redux";
import { employeeUpdate } from "../actions";
import { CardItem } from "./common";

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardItem>
          <TextInput
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "name", value })
            }
          />
        </CardItem>

        <CardItem>
          <TextInput
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value =>
              this.props.employeeUpdate({ prop: "phone", value })
            }
          />
        </CardItem>

        <CardItem style={{ flexDirection: "column" }}>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value =>
              this.props.employeeUpdate({ prop: "shift", value })
            }
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardItem>
      </View>
    );
  }
}

// const styles = {
//   pickerTextStyle: {
//     fontSize: 18,
//     marginTop: 20
//   }
// };

const mapStateToProp = state => {
  const { name, phone, shift } = state.employee;
  return { name, phone, shift };
};

export default connect(
  mapStateToProp,
  { employeeUpdate }
)(EmployeeForm);
