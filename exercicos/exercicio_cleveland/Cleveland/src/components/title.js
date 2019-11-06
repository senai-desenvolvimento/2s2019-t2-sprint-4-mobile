import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
} from 'react-native'

class Title extends Component {
    render() {
        return (
            <Text style={styles.titleText}>
                Clínica Cleveland
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    titleText:{
        textAlign: 'center',
        fontSize: 32,
        marginBottom: 10,
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        borderRadius: 8,
    },
})

export default Title;