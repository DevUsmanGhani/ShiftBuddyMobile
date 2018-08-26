import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import { loginManager } from '../../modules/manager';


export class ManagerLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'taimur018@gmail.com',
      password: 'admin2'
    }
    this.handlePress = this.handlePress.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.managerAuth.isAuthenticated) {
      this.props.navigation.navigate('ManagerDashboard');
    }
  }
  

  handlePress() {
    this.props.loginManager(this.state, () => this.props.navigation.navigate('ManagerDashboard'));
  }

  render() {
    return (
      <View>
        <Text> Manager Login  </Text>
        <TextInput
          placeholder={'Enter Email'}
          autoFocus
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
        />
        <TextInput
          placeholder={'Enter Password'}
          secureTextEntry
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        />
        <Button 
          onPress={() => this.handlePress()}
          title="Log in"
        />
      </View>
    )
  }
}

const mapDispatchToProps = {
  loginManager
}

export default connect(null, mapDispatchToProps)(ManagerLogin)
