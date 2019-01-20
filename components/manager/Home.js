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
import { ScrollView } from "react-native";
import { connect } from "react-redux";
import axios from "axios";

export class Home extends Component {
  state = {
    activities: []
  };

  componentWillMount() {
    axios
      .get(
        `http://localhost:8000/api/v1/managers/${
          this.props.manager.managerData.manager_id
        }/activity_logs`
      )
      .then(res => {
        this.setState({ activities: res.data });
      })
      .catch(err => console.log(err));
  }

  activitiesView() {
    return this.state.activities.map(activity => {
      return (
        <View
          style={{
            backgroundColor: "orange",
            borderRadius: 10,
            width: "75%",
            marginBottom: 10,
            marginLeft: "auto",
            marginRight: "auto",
            padding: 10
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>{activity}</Text>
        </View>
      );
    });
  }

  emptyView() {
    return (
      <View>
        <Text>No activities</Text>
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
              marginBottom: 25,
              marginTop: 15
            }}
          >
            Activity Log
          </Text>
        </View>

        <ScrollView>
          <View>
            {this.state.activities.length == 0
              ? this.emptyView()
              : this.activitiesView()}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  manager: state.manager
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
