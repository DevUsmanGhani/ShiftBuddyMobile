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
import { getInventoryItems } from "../../../modules/employeeShift";

export class Inventory extends Component {
  state = {
    inventoryItems: [
      {
        name: "Vivazen",
        start_amount: 0,
        end_amount: null,
        id: 4
      },
      {
        name: "Bali",
        start_amount: 0,
        end_amount: null,
        id: 5
      }
    ]
  };

  ddsfcomponentDidMount() {
    axios
      .get(
        `http://localhost:8000/api/v1/managers/${
          this.props.employee.employee.attributes.manager_id
        }/employees/${this.props.employee.employee.id}/shifts/${
          this.props.employeeShift.id
        }/inventory_items`
      )
      .then(response => {
        this.setState({ inventoryItems: response.data });
      })
      .catch(err => console.log(err));
  }

  emptyInventoryView() {
    return <Text>No Inventory Items</Text>;
  }

  inventoryView(inventoryItems) {
    return (
      <View>
        {inventoryItems.map(inventoryItem => {
          console.log(inventoryItem.start_amount);
          return (
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "flex-center",
                alignItems: "center",
                marginLeft: 100,
                marginRight: 100,
                marginBottom: 20
              }}
            >
              <Text style={{flex: 2}}>{inventoryItem.name}</Text>
              <Item style={{flex: 4}} regular>
                <TextInput
                  value={inventoryItem.start_amount}
                  style={{
                    height: 40,
                    width: 40,
                  }}
                />
              </Item>
            </View>
          );
        })}
      </View>
    );
  }

  render() {
    const inventoryItems = this.state.inventoryItems;
    return (
      <Container>
        <Header>
          <BackButton />
          <Body>
            <Title>Inventory</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-evenly",
              backgroundColor: "red"
            }}
          >
            <View>
              <Text>Item Name</Text>
            </View>
            <View>
              <Text>Starting Amount</Text>
            </View>
          </View>
          {inventoryItems.length == 0
            ? this.emptyInventoryView()
            : this.inventoryView(inventoryItems)}
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  employee: state.employee,
  employeeShift: state.employeeShift
});

const mapDispatchToProps = {
  getInventoryItems
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory);
