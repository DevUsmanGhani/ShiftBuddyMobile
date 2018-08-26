import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Shift Buddy Pro</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
          <Button full large bordered warning onPress={() => this.props.navigation.navigate("ManagerLogin")}>
            <Text>
              Manager Login
            </Text>
          </Button>
          <Button full large warning onPress={() => this.props.navigation.navigate("EmployeeLogin")}>
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
