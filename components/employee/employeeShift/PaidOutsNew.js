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
import axios from 'axios';
import { StyleSheet, TextInput } from "react-native";

export class PaidOutsNew extends Component {
  state = {
    company: "",
    amount: "",
    shift_id: this.props.shift_id
  };

  onSubmit() {
    axios.post(`http://localhost:8000/api/v1/managers/${this.props.manager_id}/employees/${this.props.employee_id}/shifts/${this.props.shift_id}/paid_outs`, this.state)
  }
  render() {
    return (
      <View style={{ marginTop: 40 }}>
        <TextInput
          style={{
            height: 40,
            width: 300,
            borderBottomColor: "gray",
            borderBottomWidth: 1
          }}
          onChangeText={company => this.setState({ company })}
          value={this.state.company}
        />
        <Text style={styles.label}>Company</Text>

        <TextInput
          style={{
            height: 40,
            width: 300,
            borderBottmColor: "gray",
            borderBottomWidth: 1
          }}
          keyboardType='decimal-pad'
          onChangeText={amount => this.setState({ amount })}
          value={this.state.amount}
        />
        <Text style={styles.label}>Amount</Text>
        <Button  onPress={() => this.onSubmit()} style={styles.submitButton}>
          <Text>Submit</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    color: "grey"
  },
  submitButton: {
    alignSelf: 'flex-end'
  }
});

export default PaidOutsNew;
