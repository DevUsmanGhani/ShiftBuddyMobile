import React, { Component } from "react";
import {
  View,
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
  CardItem,
} from "native-base";
import BackButton from "../common/BackButton";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import PaidOut from "./employeeShift/PaidOuts";

class EmployeeShift extends Component {
  render() {
    return (
      <Container>
        <Header>
          <BackButton />
          <Body>
            <Title>Shift Report</Title>
          </Body>
          <Right />
        </Header>
        <Content
          contentContainerStyle={{
            flex: 1,
            backgroundColor: "seashell"
          }}
        >
          <View style={style.view}>
              <PaidOut />
          </View>
          <View
            style={{
              marginTop: 20,
              flex: 2,
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <Button style={style.button}>
              <FontAwesome name="envelope" size={50} color="orange" />
              <Text style={style.buttonText}>Cash Drops</Text>
            </Button>
            <Button style={style.button}>
              <FontAwesome name="book" size={50} color="orange" />
              <Text style={style.buttonText}>Checks</Text>
            </Button>
            <Button style={style.button}>
              <FontAwesome name="money" size={50} color="orange" />
              <Text style={style.buttonText}>Paid Outs</Text>
            </Button>
          </View>
          <View
            style={{
              flex: 2,
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <Button style={style.button}>
              <MaterialCommunityIcons
                name="clipboard-flow"
                size={50}
                color="orange"
              />
              <Text style={style.buttonText}>Inventory</Text>
            </Button>
            <Button style={style.button}>
              <MaterialCommunityIcons name="coin" size={50} color="orange" />
              <Text style={style.buttonText}>Change</Text>
            </Button>
            <Button style={style.button}>
              <FontAwesome name="pencil-square-o" size={50} color="orange" />
              <Text style={style.buttonText}>Notes</Text>
            </Button>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Body>
              <Text />
            </Body>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  button: {
    flexDirection: "column",
    width: 120,
    height: 100,
    justifyContent: "center",
    backgroundColor: "seashell"
  },
  buttonText: {
    color: "charcoal"
  },
  view: {
    flex: 8,
    backgroundColor: 'white',
    marginTop: 10,
    shadowOpacity: 0.75,
    marginLeft: 5,
    marginRight: 5,
    shadowRadius: 5,
    shadowColor: 'grey',
    shadowOffset: { height: 0, width: 0 },
    borderColor: '#ddd',
    borderRadius: 2,
    borderWidth: 2,
  }
});

const mapStateToProps = state => ({
  employee: state.employee
});

const mapDispatchToProps = {};

export default EmployeeShift;
// border-width: 1;
//   border-radius: 2;
//   border-color: #ddd;
