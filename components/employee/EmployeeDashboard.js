import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class EmployeeDashboard extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress(){
    this.props.navigation.navigate("EmployeeShift");
  }

  render() {
    return (
      <View>
        <Text> EmployeeDashboard </Text>
        <Button
          title="Start Shift"
          onPress={() => this.handlePress()}
        />
      </View>
    )
  }
}
