import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import ResultIMC from './ResultIMC/index';
import styles from './style';

export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageIMC, setMessageIMC] = useState('Coloque o peso e a altura');
    const [tabelaIMC, setTabelaIMC] = useState('Sem IMC calculado');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');

    function imcTabela(imc) {
        if (imc < 18.5) return 'Abaixo de peso!';
        else if (imc >= 18.5 && imc <= 24.9) return 'Peso ideal!';
        else if (imc >= 25 && imc <= 29.9) return 'Levemente acima do peso!';
        else if (imc >= 30 && imc <= 34.9) return 'Obesidade grau I!';
        else if (imc >= 35 && imc <= 39.9) return 'Obesidade grau II!';
        else if (imc >= 40) return 'Obesidade grau III!';
        return ''; // Certifique-se de retornar algo mesmo que nenhuma condição seja atendida.
    }

    function imcCalculator() {
        return setImc((weight / (height * height * 0.0001)).toFixed(2)); // toFixed(2) = 2 casas decimais
    }

    function validationImc() {
        if (weight != null && height != null) {
            const calculatedImc = (weight / (height * height * 0.0001)).toFixed(
                2,
            );
            const tableText = imcTabela(calculatedImc);
            setImc(calculatedImc);
            setTabelaIMC(tableText);
            setMessageIMC('O seu IMC é:');
            setTextButton('Calcular novamente');
        } else {
            setImc(null);
            setTextButton('Calcular');
            setMessageIMC('Coloque o peso e a altura');
            setTabelaIMC('Sem IMC calculado');
        }
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 175cm"
                    keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 70kg"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validationImc()}
                >
                    <Text style={styles.textButtonCalculator}>
                        {textButton}
                    </Text>
                </TouchableOpacity>
            </View>
            <ResultIMC
                tabelaIMC={tabelaIMC}
                messageResultIMC={messageIMC}
                ResultIMC={imc}
            />
        </View>
    );
}
