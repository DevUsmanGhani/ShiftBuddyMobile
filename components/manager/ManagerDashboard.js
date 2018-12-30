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
  Card,
  CardItem
} from "native-base";
import { connect } from "react-redux";
import BackButton from "../common/BackButton";
import axios from "axios";
import { FontAwesome } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import Home from "./Home";
import Shifts from './Shifts';
import Employees from './Employees';
import Settings from './Settings';

export class ManagerDashboard extends Component {
  state = {
    currentPage: "Home"
  };

  currentPage() {
    switch (this.state.currentPage) {
      case "Home": {
        return <Home />;
      }
      case "Shifts": {
        return <Shifts />;
      }
      case "Employees": {
        return <Employees />;
      }
      case "Settings": {
        return <Settings />;
      }
    }
  }

  render() {
    return (
      <Container>
        <Header>
          <BackButton />
          <Body>
            <Title>Dashboard</Title>
          </Body>
          <Right>
              <FontAwesome onPress={() => this.setState({currentPage: 'Settings'})} style={{marginRight: 25}} name="cog" size={25} color="orange" />
          </Right>
        </Header>
        <Content style={{ backgroundColor: "seashell" }}>
          <View
            style={{
              flex: 1,
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "red",
                backgroundColor: "white",
                marginTop: 10,
                shadowOpacity: 0.75,
                marginLeft: 5,
                marginRight: 5,
                shadowRadius: 5,
                shadowColor: "grey",
                shadowOffset: { height: 0, width: 0 },
                borderColor: "#ddd",
                borderRadius: 2,
                borderWidth: 2
              }}
            >
              {this.currentPage()}
            </View>
            <View style={{flex: 1, flexDirection: "row"}}>
              <Button onPress={() => this.setState({currentPage: 'Home'})} style={style.button}>
                <FontAwesome name="home" size={50} color="orange" />
                <Text style={{ color: "charcoal" }}>Home</Text>
              </Button>

              <Button onPress={() => this.setState({currentPage: 'Shifts'})} style={style.button}>
                <FontAwesome name="file" size={50} color="orange" />
                <Text style={{ color: "charcoal" }}>Shifts</Text>
              </Button>

              <Button onPress={() => this.setState({currentPage: 'Employees'})} style={style.button}>
                <FontAwesome name="user" size={50} color="orange" />
                <Text style={{ color: "charcoal" }}>Employees</Text>
              </Button>
            </View>

          </View>
        </Content>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  button: {
    width: 120,
    height: 100,
    backgroundColor: "seashell"
  }
});

const mapStateToProps = state => ({
  manager: state.manager
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ManagerDashboard);
