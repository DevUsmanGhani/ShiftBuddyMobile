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
  Form,
  Item,
  Input,
  View
} from "native-base";
import { StyleSheet, TextInput, Alert } from "react-native";
import { connect } from "react-redux";

export class PaidOutsView extends Component {

  render() {
    const { paidOuts } = this.props.employeeShift
    if(paidOuts.length == 0) {
      return(
        <View style={{ marginTop: 40 }}>
        <Body>
          <Text>
            No paid outs
          </Text>
        </Body>
      </View>
      )
    }
    else{
      return (
        <View style={{ marginTop: 40 }}>
          {paidOuts.map(paidOut => {
            return(
                <Text>
                  {paidOut.company} {paidOut.amount}
                </Text>
            )
          })}
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  label: {
    color: "grey"
  },
  submitButton: {
    alignSelf: "flex-end"
  }
});
const mapStateToProps = state => ({
  employeeShift: state.employeeShift
});

export default connect(mapStateToProps)(PaidOutsView);
