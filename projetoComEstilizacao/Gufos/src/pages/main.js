import React, { Component } from 'react';
import { Text, Image, StyleSheet, View, FlatList } from "react-native";

class Main extends Component {

    static navigationOptions = {
        tabBarIcon: () => (
            <Image
                source={require("../assets/img/calendar.png")}
                // style={{ width: 25, height: 25, tintColor: 'purple' }}
                style={styles.tabNavigatorIconHome}
            />
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            eventos: [
                //     { idEvento: 1, titulo: 'Evento A', dataEvento: '2019-06-17T14:26:46.513' },
                //     { idEvento: 2, titulo: 'Evento B', dataEvento: '2019-06-17T14:26:46.513' },
                //     { idEvento: 3, titulo: 'Evento C', dataEvento: '2019-06-17T14:26:46.513' },
            ]
        }
    }

    componentDidMount() {
        this.carregarEventos();
    }

    carregarEventos = async () => {
        await fetch('http://192.168.7.85:5000/api/eventos')
            .then(resposta => resposta.json())
            .then(data => this.setState({ eventos: data }))
            .catch(erro => console.warn(erro))
    }

    render() {
        return (
            <View style={styles.main}>
                <View style={styles.mainHeader}>
                    <View style={styles.mainHeaderRow}>
                        <Image
                            source={require("../assets/img/calendar.png")}
                            style={styles.mainHeaderImg}
                        />
                        <Text style={styles.mainHeaderText}>{"Eventos".toUpperCase()}</Text>
                    </View>
                    <View style={styles.mainHeaderLine} />
                </View>
                <View style={styles.mainBody}>
                    <FlatList
                        data={this.state.eventos}
                        keyExtractor={item => item.idEvento}
                        // renderItem={({ item }) => (
                        //     <Text>{item.titulo}</Text>
                        // )}
                        contentContainerStyle={styles.mainBodyConteudo}
                        renderItem={this.renderizaItem}
                    />
                </View>
            </View>
        )
    }

    renderizaItem = ({ item }) => (
        <View style={styles.flatItemLinha}>
            <View style={styles.flatItemContainer}>
                <Text style={styles.flatItemTitulo}>{item.titulo}</Text>
                <Text style={styles.flatItemData}>{item.dataEvento}</Text>
            </View>
            <View style={styles.flatItemImg}>
                <Image
                    source={require("../assets/img/view.png")}
                    style={styles.flatItemImgIcon}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    tabNavigatorIconHome: {
        width: 25,
        height: 25,
        // tintColor: 'purple'
        tintColor: '#FFFFFF'
    },
    // conteúdo da main
    main: {
        flex: 1,
        backgroundColor: "#F1F1F1"
    },
    // cabecalho
    mainHeaderRow: {
        flexDirection: "row"
    },
    mainHeader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    // imagem do cabeçalho
    mainHeaderImg: {
        width: 22,
        height: 22,
        tintColor: "#cccccc",
        marginRight: -9,
        marginTop: -9
    },
    // texto do cabecalho
    mainHeaderText: {
        fontSize: 16,
        letterSpacing: 5,
        color: "#999999",
        fontFamily: "OpenSans-Regular"
    },
    // linha de separacao do cabecalho
    mainHeaderLine: {
        width: 170,
        paddingTop: 10,
        borderBottomColor: "#999999",
        borderBottomWidth: 0.9
    },
    // corpo do texto
    mainBody: {
        // backgroundColor: "blue",
        flex: 4
    },
    // conteúdo da lista
    mainBodyConteudo: {
        paddingTop: 30,
        paddingRight: 50,
        paddingLeft: 50
    },
    // dados do evento de cada item da linha
    flatItemLinha: {
        flexDirection: "row",
        borderBottomWidth: 0.9,
        borderBottomColor: "gray"
    },
    flatItemContainer: {
        flex: 7,
        marginTop: 5
    },
    flatItemTitulo: {
        fontSize: 14,
        color: "#333",
        fontFamily: "OpenSans-Light"
    },
    flatItemData: {
        fontSize: 10,
        color: "#999",
        lineHeight: 24
    },
    flatItemImg: {
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    },
    flatItemImgIcon: {
        width: 22,
        height: 22,
        tintColor: "#B727FF"
    }
})

export default Main