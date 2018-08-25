import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

export default class EmployeeLogin extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress() {
    this.props.navigation.navigate("EmployeeDashboard")
  }
  render() {
    return (
      <View>
        <Text> Employee Login </Text>
        <Button
          title="Login"
          onPress={() => this.handlePress()}
        />
      </View>
    )
  }
}
