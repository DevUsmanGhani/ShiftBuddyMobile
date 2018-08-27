import React, { Component } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import BackButton from '../common/BackButton';

export default class EmployeeDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <BackButton />
          <Body>
            <Title>
              Dashboard
            </Title>
          </Body>
          <Right /> 
        </Header>
        <Content contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: '#F0EBD8' }}>
          <Button danger full large style={{height: 300}} onPress={() => this.props.navigation.navigate("EmployeeShift")}>
            <Text>
              Start Shift
            </Text>
          </Button>
          <Button primary full disabled large>
            <Text>
              {this.state.date.toLocaleString()}
            </Text>
          </Button>
        </Content>  
      </Container>
    )
  }
}
