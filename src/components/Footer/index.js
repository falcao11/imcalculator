import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}> Feito por Gonçalo Fonseca</Text>
        </View>
    );
}
