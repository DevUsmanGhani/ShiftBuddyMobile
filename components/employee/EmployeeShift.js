import React, {
  Component
} from "react";
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
  CardItem
} from "native-base";
import BackButton from "../common/BackButton";
import { StyleSheet } from "react-native";
import { connect } from "react-redux";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

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
          <View style={{ flex: 4 }} />
          <View
            style={{
              marginTop: 50,
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
  }
});

const mapStateToProps = state => ({
  employee: state.employee
});

const mapDispatchToProps = {};

export default EmployeeShift;
