import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginManager } from '../../modules/manager';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Input, Spinner } from 'native-base';
import BackButton from '../common/BackButton';
import { Actions } from 'react-native-router-flux';

export class ManagerLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'taimur018@gmail.com',
      password: 'admin2',
      beginLoading: false,
    }
    this.handlePress = this.handlePress.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.managerAuth.isAuthenticated) {
      Actions.managerDashboard();
    }
  }

  componentWillMount() {
    this.setState({
      beginLoading: false
    })
  }

  componentWillUnmount() {
    this.setState({
      beginLoading: false
    })
  }


  handlePress() {
    this.props.loginManager(this.state, () => Actions.managerDashboard());
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, backgroundColor: '#F0EBD8' }}>
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
          {this.state.beginLoading ? <Spinner color="orange" /> : null}
        </Content>
      </Container>
    )
  }
}

const mapDispatchToProps = {
  loginManager
}

export default connect(null, mapDispatchToProps)(ManagerLogin)
