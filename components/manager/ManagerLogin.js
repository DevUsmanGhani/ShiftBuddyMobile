import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginManager } from '../../modules/manager';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Form, Item, Input } from 'native-base';



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
      <Container>
        <Header>
          <Body>
            <Title>
             Manager Login
          </Title>
          </Body>
        </Header>
        <Content>
          <Form>
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

const mapDispatchToProps = {
  loginManager
}

export default connect(null, mapDispatchToProps)(ManagerLogin)
