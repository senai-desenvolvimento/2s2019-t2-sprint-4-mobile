import React, { Component } from 'react';
import {
    Image,
    TextInput,
    StyleSheet,
    View,
    ScrollView,
    Text,
    TouchableOpacity
} from 'react-native'

import { FlatList } from 'react-native-gesture-handler'


// Components
import Title from "../components/title"

const url = 'http://192.168.7.85';
class Especialidades extends Component {

    constructor(props) {
        super(props);
        this.state = {
            especialidades: [],
            nome: null,
        }
    }

    componentDidMount() {
        this.carregarLista();
    }

    carregarLista = async () => {
        console.log('oi')
        await fetch((url+':5000/api/especialidades'))
            .then(response => response.json())
            .then(data => this.setState({ especialidades: data }))
            .catch(error => console.log(error))
    }

    _cadastrar = async () => {
        this.setState({btnState:true})
        await fetch((url+':5000/api/especialidades'), {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome: this.state.nome
            })
        })
        .then(this.setState({nome:''}))
                .then(this.carregarLista())
    }

    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require('../assets/baseline_list_black_24dp.png')}
                style={styles.tabBarIcon}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Title />
                <View style={styles.cadastroView}>
                    <Text style={styles.cadastroViewText}>Adicionar Especialidade</Text>
                    <View style={styles.cadastroViewField}>
                        <Text
                            style={styles.cadastroViewTextInputLabel}>
                            Nome:
                        </Text>
                        <TextInput
                            style={styles.cadastroViewTextInput}
                            onChangeText={nome => this.setState({ nome })}
                            value={this.state.nome}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={this._cadastrar}
                        style={styles.btnCadastrar}
                    >
                        <Text>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollView}>
                    <View>
                        <FlatList
                            data={this.state.especialidades}
                            keyExtractor={item => item.especialidadeId}
                            renderItem={({ item }) => (
                                <View style={styles.dataView}>
                                    <Text
                                        style={styles.dataViewText}>
                                        {item.especialidadeId} - {item.nome}
                                    </Text>
                                </View>
                            )}
                        />
                    </View>
                </ScrollView>
                <View></View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        height:'100%'
    },
    tabBarIcon: {
        width: 24,
        height: 24,
        tintColor: '#ff5555',
    },
    dataView: {
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        margin: 10,
        paddingBottom: 2,
    },
    dataViewText: {
        textAlign: 'center',
    },
    cadastroView: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 4,
        margin: 10,
        padding: 10,
    },
    cadastroViewText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'red',
    },


    cadastroViewField: {
        flexDirection: "row",
        marginBottom: 10,
    },
    cadastroViewTextInput: {
        marginRight: 0,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        flex: 7,
        textAlignVertical: "center",
    },
    cadastroViewTextInputLabel: {
        textAlignVertical: "center",
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        flex: 1,
    },
    scrollView: {
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 4,
        margin: 10,
    },
    btnCadastrar:{
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 4,
        alignItems: 'center',
    }

})
export default Especialidades;