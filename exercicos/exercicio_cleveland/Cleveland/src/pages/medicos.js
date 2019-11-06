import React, { Component } from 'react';
import {
    Image,
    Text,
    ScrollView,
    StyleSheet,
    StatusBar,
    View,
} from 'react-native'

import { FlatList } from 'react-native-gesture-handler'

// Components
import Title from "../components/title"

const url = 'http://192.168.7.85';
class Medicos extends Component {

    constructor(props) {
        super(props);
        this.state = {
            medicos: []
        }
    }
    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require('../assets/baseline_people_black_24dp.png')}
                style={styles.tabBarIcon}
            />
        )
    }

    componentDidMount() {
        this.carregarLista();
    }

    carregarLista = async () => {
        await fetch((url+':5000/api/medicos'))
            .then(response => response.json())
            .then(data => this.setState({ medicos: data }))
            .catch(error => console.warn(error))
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#ff5555" barStyle="light-content" />
                <Title />
                <ScrollView style={styles.scrollView}>
                    <View>
                        <FlatList
                            data={this.state.medicos}
                            keyExtractor={item => item.medicosId}
                            renderItem={({ item }) => (
                                <View style={styles.dataView}>
                                    <Text style={styles.dataViewName}>{item.nome}</Text>
                                    <Text>CRM - {item.crm}</Text>
                                    <Text>Especialidade - {item.especialidade.nome}</Text>
                                    <Text>Data de nascimento - {item.dataNascimento}</Text>
                                </View>
                            )}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        width: '100%',
        height: '100%'
    },
    dataView: {
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        margin: 10,
        paddingBottom: 2,
    },
    dataViewName: {
        fontWeight: 'bold',
    },
    tabBarIcon: {
        width: 24,
        height: 24,
        tintColor: '#ff5555'
    },
    scrollView: {
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 4,
        margin: 10,
    }
})
export default Medicos;