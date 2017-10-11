/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ListView,
  Switch
} from 'react-native';

class example extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      greeting: undefined,
      isRobotGood: true,
      robotNamesDS: ds.cloneWithRows([
        'Liubot',
        'Stage Mom 7.0',
        'Vending Machine',
        'Oily',
        'Coolometer',
        'Andrew',
        'Monique',
        'Executive Gamma',
        'Greeting Card',
        'Sinclair',
        'Eurotrash',
        'Hookerbot',
        'Bender']),
    };
  }


  render() {
    if (this.state.greeting === 'Robot Selector') return this.renderRobotSelector();
    if (this.state.greeting === 'Card') return this.renderCard();
    return (
      <View testID='welcome' style={{flex: 1, paddingTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25, marginBottom: 30}}>
          Welcome
        </Text>
        <TouchableOpacity testID='hello_button' onPress={this.onButtonPress.bind(this, 'Robot Selector')}>
          <Text style={{color: 'blue', marginBottom: 20}}>Robot Selector</Text>
        </TouchableOpacity>
        <TouchableOpacity testID='card_button' onPress={this.onButtonPress.bind(this, 'Card')}>
          <Text style={{color: 'blue', marginBottom: 20}}>User Card</Text>
        </TouchableOpacity>
      </View>
    );
  }
  renderRobotSelector() {

    const showGoodRobot = () => (
      <Text testID='robot_selector_good_indicator' style={{ fontSize:40, marginTop: 40, height:60, textAlign: 'center', color: 'green'}}>{this.state.robot}</Text>
    )

    const showBadRobot = () => (
      <Text testID='robot_selector_bad_indicator' style={{ fontSize:40, marginTop: 40, height:60, textAlign: 'center', color: 'red'}}>{this.state.robot}</Text>
    )

    return (
      <View style={{ flex: 1, marginTop: 20}}>

        <Text testID='robot_selector_label' style={{ fontSize:20, marginTop: 40, textAlign: 'center'}}>Choose the robot</Text>

        <View style={{ height:100, marginTop: 20, borderWidth:1, borderColor: 'gray'}}>
          <ListView
            testID='robot_selector_picker'
            dataSource={this.state.robotNamesDS}
            renderRow={this.renderRow.bind(this)}
          />
        </View>

        { this.state.isRobotGood ? showGoodRobot() : showBadRobot() }

        <Text>Is robot the good one?</Text>
        <Switch onValueChange={()=>{ this.setState({isRobotGood: !this.state.isRobotGood}) }} value={this.state.isRobotGood} testID='robot_selector_is_good_toggle' />

      </View>
    );
  }
  
  renderCard(){
      
      const userCard = {
          "id": 5,
          "name": "Chelsey Dietrich",
          "username": "Kamren",
          "email": "Lucio_Hettinger@annie.ca",
          "address": {
              "street": "Skiles Walks",
              "suite": "Suite 351",
              "city": "Roscoeview",
              "zipcode": "33263",
              "geo": {
                  "lat": "-31.8129",
                  "lng": "62.5342"
              }
          },
          "phone": "(254)954-1289",
          "website": "demarco.info",
          "company": {
              "name": "Keebler LLC",
              "catchPhrase": "User-centric fault-tolerant solution",
              "bs": "revolutionize end-to-end systems"
          }
      }
      
      return (
        <View style={{ flex: 1, marginTop: 70, paddingLeft:10, paddingRight:10}}>
            <Text testID='user_name' style={{ fontSize:24 }}>{userCard.name}</Text>
            <Text testID='user_email' style={{ fontSize:12, paddingTop:10 }}>{userCard.email}</Text>
            <Text testID='user_phone' style={{ fontSize:12,  paddingTop:10 }}>{userCard.phone}</Text>
            <Text testID='user_website' style={{ fontSize:12,  paddingTop:10 }}>{userCard.website}</Text>
        </View>
      )
  }

  renderRow(rowData, that){

    return (
        <TouchableOpacity onPress={() => {
          this.setState({
            robot: rowData
          });
        }} style={{ padding:10, borderBottomWidth:1, borderColor:'gray' }}>
          <Text>{rowData}</Text>
        </TouchableOpacity>
    );
  }

  onButtonPress(greeting) {
    this.setState({
      greeting: greeting
    });
  }
}

AppRegistry.registerComponent('example', () => example);
