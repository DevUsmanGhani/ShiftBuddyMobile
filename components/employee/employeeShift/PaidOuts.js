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
import PaidOutsNew from "./PaidOutsNew";

export class PaidOuts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "view" //'new' or 'all'
    };
  }
  render() {
    return (
      <Body style={styles.container}>
        <Text style={styles.header}>Paid outs</Text>
        <View style={styles.buttonContainer}>
          <Button light style={styles.button}>
            <Text>All</Text>
          </Button>
          <Button style={styles.button}>
            <Text>New</Text>
          </Button>
        </View>
        <PaidOutsNew />
      </Body>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginRight: 10
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10
  },
  button: {
    flex: 2,
    justifyContent: "center"
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaidOuts);
