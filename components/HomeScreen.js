import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ justifyContent: 'center', flex: 1, backgroundColor: '#F0EBD8' }}>
          <Button full large bordered warning style={{backgroundColor: "#FFF", height: 100}} onPress={() => Actions.managerLogin()}>
            <Text>
              Manager Login
            </Text>
          </Button>
          <Button full large warning style={{height: 100}} onPress={() => Actions.employeeLogin()}>
            <Text>
              Employee Login
            </Text>
          </Button>
        </Content>
        <Footer>
          <FooterTab>
            <Button full >
              <Text>Copyright {(new Date()).getFullYear()} &copy; ShiftBuddyPro</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
