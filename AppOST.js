
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import ToggleSwitch from "toggle-switch-react-native";

import {
  StyleSheet, Switch, FlatList, Image,
  View,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
    )
  }
}
class ProfileScreen extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      switchValue: true,
      isOnDefaultToggleSwitch: true,
    };
  }
  onToggle(isOn) {
    console.log("Changed to " + isOn);
  }
  render() {
    return (
      <View >
        <View style={{ backgroundColor: '#0096E2', height: 80 }}>
          <View style={{ backgroundColor: '#0096E2', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#fff', fontSize: 20, fontWeight: "bold", marginTop: 8 }} >{'orangeskills technology'}</Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#fff', marginTop: -30, marginLeft: 20, marginRight: 20, borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.9, shadowRadius: 2, elevation: 7 }}>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10, marginLeft: 10, marginRight: 10, marginBottom: 5 }}>
            <View style={{ margin: 5, backgroundColor: '#0096E2', height: 40, width: 40, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }} >
              <Image source={require('./assets/open-lock.png')} style={{ height: 25, width: 25 }} />
            </View>
            <View style={{ marginLeft: 5, borderRadius: 10, flexDirection: "column" }}>
              <Text style={{ color: '#000000', fontSize: 12, fontWeight: 'bold' }}>{'ORANGE SKILLDS'}</Text>
              <Text style={{ color: '#d3d3d3', fontSize: 10 }}>{'ORANGE SKILLDS'}</Text>
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}>
            <View style={{ marginLeft: 10, borderRadius: 10, flexDirection: "column" }}>
              <Text style={{ color: '#000000', fontSize: 12, fontWeight: 'bold' }}>{'ORANGE SKILLDS'}</Text>
              <Text style={{ color: '#d3d3d3', fontSize: 10 }}>{'ORANGE SKILLDS'}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row-reverse" }}>
              <Switch
                value={this.state.switchValue}
                onColor='#0096E2'
                onValueChange={(switchValue) => this.setState({ switchValue })} />
            </View>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5, marginBottom: 10, marginRight: 10 }}>
            <View style={{ marginLeft: 10, borderRadius: 10, flexDirection: "column" }}>
              <Text style={{ color: '#000000', fontSize: 12, fontWeight: 'bold' }}>{'Face ID'}</Text>
              <Text style={{ color: '#d3d3d3', fontSize: 10 }}>{'She recoganisa Face'}</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row-reverse" }}>
              <ToggleSwitch style={{ shadowColor: "#0096E2" }}
                onColor="#0096E2"
                offColor="#d3d3d3"
                isOn={this.state.isOnDefaultToggleSwitch}
                onToggle={isOnDefaultToggleSwitch => {
                  this.setState({ isOnDefaultToggleSwitch });
                  this.onToggle(isOnDefaultToggleSwitch);
                }} />
            </View>
          </View>
        </View>
        <FlatList style={{ marginTop: 10, flexGrow: 0 }}
          data={[{ key: 'Android', image: require('./assets/night.png') }, { key: 'iOS', image: require('./assets/bell.png') }, { key: 'Java', image: require('./assets/settings.png') }]}
          renderItem={({ item }) =>
            <View style={{ backgroundColor: '#fff', marginLeft: 20, marginRight: 20, borderRadius: 10, shadowColor: '#000', shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.9, shadowRadius: 2, elevation: 5, flexDirection: "row", alignItems: "center", marginTop: 5, marginBottom: 5 }}>
              <View style={{ margin: 8, backgroundColor: '#0096E2', height: 30, width: 30, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }} >
                <Image source={item.image} style={{ height: 20, width: 20 }} />
              </View>
              <View>
                <Text style={{ color: '#000000', fontSize: 12, fontWeight: 'bold' }}>{'ORANGE SKILLDS'}</Text>
                <Text style={{ color: '#d3d3d3', fontSize: 10 }}>{item.key}</Text>
              </View>
            </View>
          } />
        <View style={{ backgroundColor: '#FFB705', marginTop: 10, marginBottom: 5, marginLeft: 20, marginRight: 20, borderRadius: 8, flexDirection: "column", padding: 8, alignItems: "center", shadowColor: '#000', shadowOffset: { width: 5, height: 5 }, shadowOpacity: 0.9, shadowRadius: 2, elevation: 5 }}>
          <Text style={{ color: '#fff', fontSize: 15, fontWeight: 'bold' }}>{'Face ID'}</Text>
          <Text style={{ color: '#fff', fontSize: 10 }}>{'She recoganisa Face'}</Text>
        </View>
      </View>
    )
  }
}

class HistoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HistoryScreen</Text>
      </View>
    )
  }
}

class CartScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>CartScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-home'} />
          </View>
        ),
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-person'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#a3c2fa',
        barStyle: { backgroundColor: '#2163f6' },
      }
    },
    History: {
      screen: HistoryScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-images'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#92c5c2',
        barStyle: { backgroundColor: '#2c6d6a' },
      }
    },
    Cart: {
      screen: CartScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'ios-cart'} />
          </View>
        ),
        activeColor: '#ffffff',
        inactiveColor: '#ebaabd',
        barStyle: { backgroundColor: '#d13560' },
      }
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#ffffff',
    inactiveColor: '#bda1f7',
    barStyle: { backgroundColor: '#6948f4' },
  }
);

export default createAppContainer(TabNavigator);