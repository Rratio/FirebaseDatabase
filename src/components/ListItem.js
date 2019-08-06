import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { CardItem } from "./common";
import { Actions } from "react-native-router-flux";

class ListItem extends Component {
  onRowPress() {
    Actions.employeeCreate({ employee: this.props.data });
    console.log(this.props.data);
  }
  render() {
    const { name } = this.props.data;

    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardItem>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardItem>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    padding: 15
  }
};

export default ListItem;
