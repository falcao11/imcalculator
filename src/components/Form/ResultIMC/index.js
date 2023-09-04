import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

export default function ResultIMC(props) {
    return (
        <View style={styles.result}>
            <Text style={styles.information}>{props.messageResultIMC}</Text>
            <Text style={styles.numberInc}>{props.ResultIMC}</Text>
            <Text style={styles.tableImc}>{props.tabelaIMC}</Text>
        </View>
    );
}
