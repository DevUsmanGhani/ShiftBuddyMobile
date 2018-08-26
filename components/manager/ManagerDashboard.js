import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

export class ManagerLogin extends Component {


  render() {
    const { managerData } = this.props.manager;
    return (
      <View>
        <Text> Hello {managerData.name} </Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  manager: state.manager
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerLogin)
