import React, { Component } from "react";
import { connect } from "react-redux";
import { loginManager } from "../../modules/manager";
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
  Form,
  Item,
  Input,
  Spinner
} from "native-base";
import BackButton from "../common/BackButton";

export class ManagerLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "usman",
      password: "123456",
      beginLoading: false
    };
    this.handlePress = this.handlePress.bind(this);
  }

  componentWillMount() {
    this.setState({
      beginLoading: false
    });
  }

  componentWillUnmount() {
    this.setState({
      beginLoading: false
    });
  }

  handlePress() {
    this.props.loginManager(this.state, () => {
      this.props.navigation.navigate("ManagerDashboard");
    });
    this.setState({
      beginLoading: true
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <BackButton />
          <Body>
            <Title>Login</Title>
          </Body>
          <Right />>
        </Header>
        <Content
          contentContainerStyle={{ flex: 1, backgroundColor: "seashell" }}
        >
          <View style={{ marginTop: 25, marginBottom: 25 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 24,
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              Manager Login
            </Text>
          </View>
          <Form style={{ backgroundColor: "white" }}>
            <Item>
              <Input
                autofocus
                placeholder="Enter Email"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
            </Item>
            <Item>
              <Input
                placeholder="Enter Password"
                secureTextEntry
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
              />
            </Item>
            <Button full large warning onPress={() => this.handlePress()}>
              <Text>Log in</Text>
            </Button>
          </Form>
          {this.state.beginLoading ? <Spinner color="orange" /> : null}
        </Content>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  loginManager
};

export default connect(
  null,
  mapDispatchToProps
)(ManagerLogin);
