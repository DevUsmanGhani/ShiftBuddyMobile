import React, { Component } from "react";
import {
  Container,
  View,
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
import axios from "axios";
import { connect } from "react-redux";
import { FontAwesome } from "@expo/vector-icons";
import BackButton from "../common/BackButton";

export class ManagerShift extends Component {
  state = {
    changeSheet: "",
    inventoryItems: [],
    paidOuts: [],
    cashDrops: [],
    notes: [],
    checks: []
  };

  updateTheState() {
    let includes = this.props.managerShift.currentShift;
    includes.map(include => {
      include.map(item => {
        switch (item.type) {
          case "change_sheet": {
            this.setState({ changeSheet: item });
            break;
          }
          case "inventory_item": {
            this.setState({
              inventoryItems: [...this.state.inventoryItems, item]
            });
            break;
          }
          case "paid_out": {
            this.setState({ paidOuts: [...this.state.paidOuts, item] });
            break;
          }
          case "cash_drop": {
            this.setState({ cashDrops: [...this.state.cashDrops, item] });
            break;
          }
          case "check": {
            this.setState({ checks: [...this.state.checks, item] });
            break;
          }
          case "note": {
            this.setState({ notes: [...this.state.notes, item] });
            break;
          }
        }
      });
    });
  }
  render() {
    if (this.props.managerShift.currentShift[0]) {
      this.updateTheState();
    }
    console.log(this.state)
    return (
      <Container>
        <Header>
          <BackButton />
          <Body>
            <Title>Dashboard</Title>
          </Body>
          <Right />
        </Header>
        <Content
          contentContainerStyle={{ backgroundColor: "seashell", flex: 1 }}
        >
          {this.state.inventoryItems.map(item => {
            return (
              <View>
                <Text>{item.attributes.name}</Text>
              </View>
            );
          })}
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  manager: state.manager,
  managerShift: state.managerShift
});

export default connect(mapStateToProps)(ManagerShift);
