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

export class Shifts extends Component {
  state = {
    shifts: []
  };

  componentDidMount() {
    axios
      .get(
        `http://localhost:8000/api/v1/managers/${
          this.props.manager.managerData.manager_id
        }/shifts`
      )
      .then(res => {
        this.setState({ shifts: res.data.data.splice(0, 9) });
      })
      .catch(err => console.log(err));
  }

  shiftsView() {
    return this.state.shifts.map((shift, index) => {
      return (
        <Button
          transparent
          onPress={() =>
            this.props.navigate("ManagerShift", {
              shiftId: shift.id
            })
          }
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth: 1,
            borderTopWidth: index == 0 ? 1 : 0,
            borderColor: "grey"
          }}
        >
          <Text style={{ marginLeft: 10, color: "grey" }}>
            {shift.attributes.date} - {shift.attributes.employee_name}
          </Text>
          <FontAwesome
            name="chevron-right"
            style={{ marginLeft: "auto", marginRight: 12 }}
            size={20}
            color="orange"
          />
        </Button>
      );
    });
  }

  emptyView() {
    return (
      <View>
        <Text
          style={{
            fontStyle: "italic",
            fontSize: 12,
            marginLeft: "auto",
            marginRight: "auto"
          }}
        />
      </View>
    );
  }

  render() {
    return (
      <View>
        <View>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: "24",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: 35,
              marginTop: 20
            }}
          >
            Shifts
          </Text>
        </View>
        {this.state.shifts.length == 0 ? this.emptyView() : this.shiftsView()}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  manager: state.manager
});

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shifts);
