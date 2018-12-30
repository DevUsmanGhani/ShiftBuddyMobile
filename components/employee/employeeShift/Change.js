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
  View,
  Form,
  Item,
  Input
} from "native-base";
import { StyleSheet, TextInput } from "react-native";
import { connect } from "react-redux";
import BackButton from "../../common/BackButton";
import axios from "axios";
import { setChangeFields } from "../../../modules/employeeShift";

export class Change extends Component {
  changeTypeInput(changeType) {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginBottom: 20
        }}
      >
        <Button rounded warning style={{ flexBasis: 50 }}>
          <Text style={{ marginLeft: "auto", marginRight: "auto" }}>
            {this.props.employeeShift.changeFields.startPennies}
          </Text>
        </Button>
        <Text style={{ flexBasis: 100, textAlign: "center" }}>
          {changeType}
        </Text>
        <Button rounded style={{ flexBasis: 50 }}>
          <Text style={{ marginLeft: "auto", marginRight: "auto" }}>
            {this.props.employeeShift.changeFields.startPennies}
          </Text>
        </Button>
      </View>
    );
  }

  render() {
    console.log(this.state);
    const changeTypes = [
      "Pennies",
      "Nickels",
      "Dimes",
      "Quarters",
      "Ones",
      "Fives",
      "Tens",
      "Twenties"
    ];

    return (
      <Container>
        <Header>
          <Left style={{ flex: 1 }} />
          <Body style={{ flex: 1 }}>
            <Title>Change</Title>
          </Body>
          <Right style={{ flex: 1 }} />
        </Header>
        <Content style={{ marginTop: 25 }}>
          <View
            style={{
              flex: "1",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginBottom: 25
            }}
          >
            <Text style={{ fontWeight: "bold" }}>Start</Text>
            <Text style={{ fontWeight: "bold" }}>Change Type</Text>
            <Text style={{ fontWeight: "bold" }}>End</Text>
          </View>
          {changeTypes.map(changeType => this.changeTypeInput(changeType))}
          <Button
            onPress={() => this.props.navigation.navigate("EmployeeShift")}
            style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 20}}
          >
            <Text>Save</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  employeeShift: state.employeeShift
});

const mapDispatchToProps = {
  setChangeFields
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Change);
