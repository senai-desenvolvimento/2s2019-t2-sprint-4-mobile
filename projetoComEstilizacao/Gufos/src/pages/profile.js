import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, AsyncStorage } from 'react-native';

import jwt_decode from 'jwt-decode'

class Profile extends Component {

  static navigationOptions = {
    tabBarIcon: () => (
      <Image
        source={require("../assets/img/profile.png")}
        // style={{ width: 25, height: 25, tintColor: 'purple' }}
        style={styles.tabNavigatorIconHome}
      />
    )
  }

  constructor(props) {
    super(props);
    this.state = { token: '', email: '' }
  }

  _buscarDadosDoStorage = async () => {
    try {
      const tokenDoStorage = await AsyncStorage.getItem('@Gufos:token');
      if (tokenDoStorage != null) {
        try {
          this.setState({ email: jwt_decode(token) });
        }
        catch (error) {
          console.warn(error);
        }
        this.setState({ token: tokenDoStorage });
      }
    }
    catch (error) { }
  }

  componentDidMount() {
    this._buscarDadosDoStorage();
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.mainHeader}>
          <View style={styles.mainHeaderRow}>
            <Image
              source={require("../assets/img/profile.png")}
              style={styles.mainHeaderImg}
            />
            <Text style={styles.mainHeaderText}>{"Perfil".toUpperCase()}</Text>
          </View>
          <View style={styles.mainHeaderLine} />
        </View>
        <View style={styles.mainBody}>
          <View style={styles.mainBodyProfile}>
            <Text>{this.state.token}</Text>
            <Text>{this.state.email}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabNavigatorIconHome: {
    width: 25,
    height: 25,
    tintColor: '#FFFFFF'
  },
  main: {
    flex: 1,
    backgroundColor: "#F1F1F1"
  },
  mainHeader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  mainHeaderRow: {
    flexDirection: "row"
  },
  mainHeaderImg: {
    width: 22,
    height: 22,
    tintColor: "#cccccc",
    marginRight: -9,
    marginTop: -9
  },
  mainHeaderText: {
    fontSize: 16,
    letterSpacing: 5,
    color: "#999999",
    fontFamily: "OpenSans-Regular"
  },
  mainHeaderLine: {
    width: 170,
    paddingTop: 10,
    borderBottomColor: "gray",
    borderBottomWidth: 0.9
  },
  mainBody: {
    flex: 4
  },
  mainBodyProfile: {
    paddingTop: 30,
    paddingRight: 50,
    paddingLeft: 50,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Profile