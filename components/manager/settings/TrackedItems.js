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
  CardItem,
  Form,
  Item,
  Label,
  Input
} from "native-base";
import { TextInput } from "react-native";
import BackButton from "../../common/BackButton";
import { FontAwesome } from "@expo/vector-icons";
import axios from "axios";
import { connect } from "react-redux";

export class TrackedItems extends Component {
  state = {
    itemInputOn: false,
    itemName: "",
    trackedItems: []
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:8000/api/v1/managers/${
          this.props.manager.managerData.manager_id
        }/tracked_items`
      )
      .then(res => {
        this.setState({ trackedItems: res.data });
      })
      .catch(err => console.log(err));
  }

  showInput() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 15,
          marginLeft: 10,
          marginRight: 10
        }}
      >
        <TextInput
          style={{ flex: 7, marginRight: 5, borderRadius: 999, paddingLeft: 10, borderColor: 'grey', borderWidth: 1 }}
          onChangeText={itemName => this.setState({ itemName })}
          value={this.state.itemName}
          placeholder="Item Name"
        />
        <Button
          onPress={() => this.addItem(this.state.itemName)}
          rounded
          style={{ flex: 2, alignSelf: "flex-end" }}
        >
          <Text style={{ marginLeft: "auto", marginRight: "auto" }}>Add</Text>
        </Button>
      </View>
    );
  }

  addItem(itemName) {
    axios
      .post(
        `http://localhost:8000/api/v1/managers/${
          this.props.manager.managerData.manager_id
        }/tracked_items`,
        {
          tracked_item: {
            name: itemName
          }
        }
      )
      .then(res => {
        this.setState({
          trackedItems: [...this.state.trackedItems, res.data]
        });
      })
      .catch(err => console.log(err));
  }

  deleteItem(id, index) {
    const newArray = [...this.state.trackedItems];
    newArray.splice(index, 1);
    axios
      .delete(
        `http://localhost:8000/api/v1/managers/${
          this.props.manager.managerData.manager_id
        }/tracked_items/${id}`
      )
      .then(_ =>
        this.setState({
          trackedItems: newArray
        })
      )
      .catch(err => console.log(err));
  }

  emptyView() {
    return (
      <Text
        style={{
          fontSize: "12",
          fontStyle: "italic",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        You currently do not have any tracked inventory items set.
      </Text>
    );
  }

  trackedItemsView() {
    return this.state.trackedItems.map((item, index) => {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 1,
            paddingTop: 15,
            paddingBottom: 15,
            borderTopWidth: index == 0 ? 1 : 0,
            borderColor: "grey"
          }}
        >
          <Text style={{ marginLeft: 10 }}>{item.name}</Text>
          <Button
            danger
            small
            style={{ marginLeft: "auto", marginRight: 10 }}
            onPress={() => this.deleteItem(item.id, index)}
          >
            <Text>Remove</Text>
          </Button>
        </View>
      );
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <BackButton />
          <Body>
            <Title>Items</Title>
          </Body>
          <Right>
            <FontAwesome
              onPress={() =>
                this.setState({ itemInputOn: !this.state.itemInputOn })
              }
              style={{ marginRight: 20 }}
              name="plus-circle"
              size={25}
              color="orange"
            />
          </Right>
        </Header>
        <Content>
          {this.state.itemInputOn ? this.showInput() : ""}
          <View style={{ marginTop: 30 }}>
            {this.state.trackedItems.length == 0
              ? this.emptyView()
              : this.trackedItemsView()}
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  manager: state.manager
});

export default connect(mapStateToProps)(TrackedItems);
