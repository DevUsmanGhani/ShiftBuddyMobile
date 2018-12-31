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
import { TextInput } from "react-native";

export class Employees extends Component {
  state = {
    employees: [],
    name: "",
    username: "",
    password: "",
    passwordConfirmation: "",
    shouldShowInput: false
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:8000/api/v1/managers/${
          this.props.manager.managerData.manager_id
        }/employees`
      )
      .then(res => {
        this.setState({ employees: res.data.splice(0, 9) });
      })
      .catch(err => {
        console.log(err);
      });
  }

  addEmployee() {
    axios
      .post(
        `http://localhost:8000/api/v1/managers/${
          this.props.manager.managerData.manager_id
        }/employees`,
        {
          employee: {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            password_confirmation: this.state.passwordConfirmation,
            manager_id: this.props.manager.managerData.manager_id
          }
        }
      )
      .then(res => {
        this.setState({
          employees: [...this.state.employees, res.data],
          name: "",
          username: "",
          password: "",
          passwordConfirmation: "",
          shouldShowInput: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteEmployee(id, index) {
    axios
      .delete(`http://localhost:8000/api/v1/employees/${id}`)
      .then(_ => {
        const newArray = [...this.state.employees];
        newArray.splice(index, 1);
        this.setState({ employees: newArray });
      })
      .catch(err => console.log(err));
  }

  emptyView() {
    return (
      <Text
        style={{
          fontSize: 12,
          fontStyle: "italic",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        There are no Employees in the system.
      </Text>
    );
  }

  employeesView() {
    return this.state.employees.map((employee, index) => {
      return (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 1,
            borderTopWidth: index == 0 ? 1 : 0,
            borderColor: "grey",
            paddingTop: 10,
            paddingBottom: 10
          }}
        >
          <Text style={{ marginLeft: 10 }}>{employee.name} <Text style={{fontSize: 12, fontStyle: 'italic'}}>({employee.username})</Text></Text>
          <Button
            danger
            small
            style={{ marginLeft: "auto", marginRight: 10 }}
            onPress={() => this.deleteEmployee(employee.id, index)}
          >
            <Text>Remove</Text>
          </Button>
        </View>
      );
    });
  }

  addEmployeeView() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <TextInput
          style={{
            height: 45,
            width: 300,
            borderRadius: 999,
            paddingLeft: 10,
            borderColor: "grey",
            borderWidth: 1,
            marginBottom: 15
          }}
          onChangeText={name => this.setState({ name })}
          value={this.state.name}
          placeholder="Name"
        />
        <TextInput
          style={{
            height: 45,
            width: 300,
            borderRadius: 999,
            paddingLeft: 10,
            borderColor: "grey",
            borderWidth: 1,
            marginBottom: 15
          }}
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
          placeholder="Username"
        />
        <TextInput
          style={{
            height: 45,
            width: 300,
            borderRadius: 999,
            paddingLeft: 10,
            borderColor: "grey",
            borderWidth: 1,
            marginBottom: 15
          }}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          placeholder="Password"
        />
        <TextInput
          style={{
            borderRadius: 999,
            paddingLeft: 10,
            borderColor: "grey",
            height: 45,
            width: 300,
            borderWidth: 1,
            marginBottom: 25
          }}
          onChangeText={passwordConfirmation =>
            this.setState({ passwordConfirmation })
          }
          value={this.state.passwordConfirmation}
          placeholder="Password Confirmation"
        />
        <Button
          style={{ marginLeft: "auto", marginRight: "auto" }}
          onPress={() => this.addEmployee()}
        >
          <Text>Add</Text>
        </Button>
      </View>
    );
  }

  render() {
    if (!this.state.shouldShowInput) {
      return (
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 15
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: "24",
                marginRight: 10
              }}
            >
              Employees
            </Text>
            <FontAwesome
              onPress={() =>
                this.setState({
                  shouldShowInput: !this.state.shouldShowInput
                })
              }
              name="user-plus"
              color="orange"
              size={25}
            />
          </View>
          <View style={{ marginTop: 25 }}>
            {this.state.employees.length == 0
              ? this.emptyView()
              : this.employeesView()}
          </View>
        </View>
      );
    } else {
      return (
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 15,
              marginBottom: 20
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: "24",
                marginRight: 10
              }}
            >
              Employees
            </Text>
            <FontAwesome
              onPress={() =>
                this.setState({
                  shouldShowInput: !this.state.shouldShowInput
                })
              }
              name="users"
              color="orange"
              size={25}
            />
          </View>
          {this.addEmployeeView()}
        </View>
      );
    }
  }
}

const mapStateToProps = state => ({
  manager: state.manager
});

export default connect(mapStateToProps)(Employees);
