import React from 'react';
import { View, Text, Button } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Are you a Manager or an Employee?</Text>
        <View>
          <Button
            title="Manager Login"
            color="#841584"
            onPress={() => this.props.navigation.navigate("ManagerLogin")}
          />
          <Button
            title="Employee Login"
            color="#841584"
            onPress={() => this.props.navigation.navigate("EmployeeLogin")}
          />
          </View>
      </View>
    );
  }
}
