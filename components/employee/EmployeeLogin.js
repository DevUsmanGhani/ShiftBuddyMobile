import React, { Component } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Input } from 'native-base';
import BackButton from '../common/BackButton';
import { Actions } from 'react-native-router-flux';

export default class EmployeeLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.handlePress = this.handlePress.bind(this);
  }
  handlePress() {
    Actions.employeeDashboard();
  }
  render() {
    return (
      <Container>
        <Content  contentContainerStyle={{ flex: 1, backgroundColor: '#F0EBD8' }}>
        <Form style={{backgroundColor: 'white'}}>
            <Item>
              <Input 
                autofocus 
                placeholder='Enter Email' 
                onChangeText={(email) => this.setState({email})} 
                value={this.state.email} 
              />
            </Item>
            <Item>
              <Input 
                placeholder='Enter Password'
                secureTextEntry
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
              />
            </Item>
            <Button full large warning onPress={() => this.handlePress()}>
              <Text>
                Log in
              </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}
