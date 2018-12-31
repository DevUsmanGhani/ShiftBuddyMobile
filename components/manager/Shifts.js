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

export default class Shifts extends Component {
  render() {
    return (
      <View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: "24",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          Shifts
        </Text>
      </View>
    );
  }
}
