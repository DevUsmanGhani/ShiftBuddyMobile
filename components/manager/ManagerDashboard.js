import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import { connect } from 'react-redux';
import BackButton from '../common/BackButton'

export class ManagerDashboard extends Component {

  render() {
    const { managerData } = this.props.manager;
    return (
      <Container>
        <Header>
          <BackButton />
          <Body>
            <Title>Dashboard</Title>
          </Body>
          <Right/>>
        </Header>
        <Content contentContainerStyle={{ flex: 1, backgroundColor: '#F0EBD8' }}>
          <Text>
            Hello {managerData.name}
          </Text>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  manager: state.manager
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerDashboard)
