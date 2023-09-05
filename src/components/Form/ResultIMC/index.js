import React from 'react';
import { Share, Text, TouchableOpacity, View } from 'react-native';
import styles from './style';

export default function ResultIMC(props) {
    const onShare = async () => {
        const result = await Share.share({
            message: 'O meu IMC é: ' + props.ResultIMC,
        });
    };

    return (
        <View style={styles.result}>
            <Text style={styles.information}>{props.messageResultIMC}</Text>
            <Text style={styles.numberInc}>{props.ResultIMC}</Text>
            <Text style={styles.tableImc}>{props.tabelaIMC}</Text>
            <View style={styles.boxShare}>
                {props.ResultIMC != null ? (
                    <TouchableOpacity onPress={onShare} style={styles.share}>
                        <Text style={styles.textShare}>Partilhar</Text>
                    </TouchableOpacity>
                ) : (
                    <View />
                )}
            </View>
        </View>
    );
}
