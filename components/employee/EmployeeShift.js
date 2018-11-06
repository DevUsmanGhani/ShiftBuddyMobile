import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Card,
  CardItem
} from "native-base";
import BackButton from "../common/BackButton";
import { connect } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";

class EmployeeShift extends Component {


  render() {
    return (
      <Container>
        <Header>
          <BackButton />
          <Body>
            <Title>Employee Shift</Title>
          </Body>
          <Right />
        </Header>
        <Content contentContainerStyle={{ flex: 1, backgroundColor: "seashell" }}>


        </Content>
        <Footer>
          <FooterTab>
            <Body>
              <Text>
              </Text>
            </Body>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  employee: state.employee
});

const mapDispatchToProps = {};

export default EmployeeShift
