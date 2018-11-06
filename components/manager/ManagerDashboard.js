import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem} from 'native-base';
import { connect } from 'react-redux';
import BackButton from '../common/BackButton'
import axios from 'axios'
import { FontAwesome } from '@expo/vector-icons';

export class ManagerDashboard extends Component {
  state = {
    employees: [],
    manager: {},
    shifts: []
  }

  componentWillMount() {
    axios.get(`http://localhost:8000/api/v1/managers/${this.props.manager.managerData.manager_id}/employees`).
    then(res => {
      this.setState({
        employees: res.data,
      })
    }).catch(err => console.log(err));
    axios.get(`http://localhost:8000/api/v1/managers/${this.props.manager.managerData.manager_id}`)
    .then(res => {
      this.setState({
        manager: res.data,
      })
    }).catch(err => console.log(err));

  }

  render() {
    const { manager, employees } = this.state;
    return (
      <Container>
        <Header>
          <BackButton />
          <Body>
            <Title>Dashboard</Title>
          </Body>
          <Right/>>
        </Header>
        <Content style={{backgroundColor: 'seashell'}}>
          <Card>
            <CardItem >
              <Body style={{alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold', marginBottom: 10}}>
                   Welcome {manager.name}
                </Text>
                <FontAwesome name="user-circle" size={128} color="orange"/>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem style={{fontWeight: 'bold', borderBottomColor: 'black', borderBottomWidth: 1}}>
              <Text>Employees</Text>
            </CardItem>
                  {employees.slice(0, 5).map(employee => {
                    name = employee.name
                    return (
                      <CardItem style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: .3,

                      }}>
                             <FontAwesome name="user-circle-o" size={32} color="orange" />
                             <Text style={{marginLeft: 5, color: 'grey'}}>{name}</Text>
                             <Right style={{position: 'absolute', right: 15}}>
                               <Icon  name="arrow-forward"/>
                             </Right>

                            </CardItem>
                    )
                  })}
          <CardItem>
            <Text style={{color: 'orange'}}>
              View All
            </Text>
            <Right style={{position: 'absolute', right: 15}}>
              <Icon  name="arrow-forward" />
            </Right>
          </CardItem>
         </Card>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  manager: state.manager
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerDashboard)
