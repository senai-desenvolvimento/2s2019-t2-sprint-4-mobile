import React, { Component } from 'react'

import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    AsyncStorage
} from "react-native";

class SignIn extends Component {
    // configurações da página
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = { email: '', senha: '' }
    }

    _realizarLogin = async () => {
        // console.warn(this.state.email + this.state.senha)
        fetch('http://192.168.7.85:5000/api/login', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ email: this.state.email, senha: this.state.senha })
        })
            .then(resposta => resposta.json())
            // .then(data => console.warn(data))
            // .then(data => console.warn(data.token))
            .then(data => this._irParaHome(data.token))
            .catch(erro => console.warn(erro))
    }

    _irParaHome = async (token) => {
        if (token != null) {
            try {
                await AsyncStorage.setItem('@Gufos:token', token);
                this.props.navigation.navigate('MainNavigator');
            } catch (error) {
                // Error saving data
            }
        }
    }

    render() {
        return (
            <ImageBackground
                source={require("../assets/img/login.png")}
                style={StyleSheet.absoluteFillObject}
            >
                <View style={styles.overlay} />
                <View style={styles.main}>
                    <Image
                        source={require("../assets/img/loginIcon2x.png")}
                        style={styles.mainImgLogin}
                    />
                    <TextInput
                        style={styles.inputLogin}
                        placeholder="email"
                        onChangeText={email => this.setState({ email })}
                        placeholderTextColor="#FFFFFF"
                        underlineColorAndroid="#FFFFFF"
                    />

                    <TextInput
                        style={styles.inputLogin}
                        placeholder="senha"
                        placeholderTextColor="#FFFFFF"
                        onChangeText={senha => this.setState({ senha })}
                        password="true"
                        underlineColorAndroid="#FFFFFF"
                    />
                    <TouchableOpacity
                        style={styles.btnLogin}
                        onPress={this._realizarLogin}
                    >
                        <Text style={styles.btnLoginText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(153, 0, 230, 0.90)"
    },
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    mainImgLogin: {
        tintColor: "#FFFFFF",
        height: 100,
        width: 90,
        margin: 10
    },
    btnLogin: {
        height: 38,
        shadowColor: "rgba(0,0,0, 0.4)", // IOS
        shadowOffset: { height: 1, width: 1 }, // IOS
        shadowOpacity: 1, // IOS
        shadowRadius: 1, //IOS
        elevation: 3, // Android
        width: 240,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    btnLoginText: {
        fontSize: 10,
        fontFamily: "OpenSans-Light",
        color: "#B727FF",
        letterSpacing: 4
    },
    inputLogin: {
        width: 240,
        marginBottom: 10,
        fontSize: 16
    }
});

export default SignIn