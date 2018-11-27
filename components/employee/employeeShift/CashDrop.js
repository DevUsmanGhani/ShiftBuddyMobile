import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  Form,
  Item,
  Input,
  View
} from "native-base";
import { StyleSheet, TextInput } from "react-native";
import CashDropsNew from "./CashDropsNew";
import CashDropsView from './CashDropsView'

export class CashDrop extends Component {
  render() {
    return (
        <Body>
          <Text>
            Cash Drop goes here
          </Text>
        </Body>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(CashDrop)
