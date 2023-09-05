import React, { useState } from 'react';
import {
    FlatList,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    View,
} from 'react-native';
import ResultIMC from './ResultIMC/index';
import styles from './style';

export default function Form() {
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageIMC, setMessageIMC] = useState('Coloque o peso e a altura');
    const [tabelaIMC, setTabelaIMC] = useState('Sem IMC calculado');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');
    const [errorMessage, setErrorMessage] = useState(null);
    const [imcList, setImcList] = useState([]); // [ {id: '1', imc: '20.5'}, {id: '2', imc: '30.5'} ]

    function imcTabela(imc) {
        if (imc < 18.5) return 'Abaixo de peso!';
        else if (imc >= 18.5 && imc <= 24.9) return 'Peso ideal!';
        else if (imc >= 25 && imc <= 29.9) return 'Levemente acima do peso!';
        else if (imc >= 30 && imc <= 34.9) return 'Obesidade grau I!';
        else if (imc >= 35 && imc <= 39.9) return 'Obesidade grau II!';
        else if (imc >= 40) return 'Obesidade grau III!';
        return ''; // Certifique-se de retornar algo mesmo que nenhuma condição seja atendida.
    }

    function verificationImc() {
        if (imc == null) {
            Vibration.vibrate();
            setErrorMessage('Campo obrigatório*');
        }
    }

    function validationImc() {
        console.log(imcList);
        if (weight != null && height != null) {
            let heightFormat = height.replace(',', '.');
            let weightFormat = weight.replace(',', '.');
            let calculatedImc = (
                weightFormat /
                (heightFormat * heightFormat)
            ).toFixed(2);

            setImcList((arr) => [
                ...arr,
                { id: new Date().getTime(), imc: calculatedImc },
            ]);
            const tableText = imcTabela(calculatedImc);
            setImc(calculatedImc);
            setHeight(null);
            setWeight(null);
            setTabelaIMC(tableText);
            setMessageIMC('O seu IMC é:');
            setTextButton('Calcular novamente');
            setErrorMessage(null);
        } else {
            verificationImc();
            setImc(null);
            setTextButton('Calcular');
            setMessageIMC('Coloque o peso e a altura');
            setTabelaIMC('Sem IMC calculado');
        }
    }

    return (
        <View style={styles.formContext}>
            {imc == null ? (
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        value={height}
                        placeholder="Ex. 1.75m"
                        keyboardType="numeric"
                    />
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <Text style={styles.formLabel}>Peso</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        value={weight}
                        placeholder="Ex. 70.5kg"
                        keyboardType="numeric"
                    />
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => validationImc()}
                    >
                        <Text style={styles.textButtonCalculator}>
                            {textButton}
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View style={styles.exhibitionResultImc}>
                    <ResultIMC
                        tabelaIMC={tabelaIMC}
                        messageResultIMC={messageIMC}
                        ResultIMC={imc}
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
            )}
            <FlatList
                style={styles.listImcs}
                data={[...imcList].reverse()}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.resultImcItem}>
                            Resultado IMC = {''}
                            <Text style={styles.textResultItemList}>
                                {item.imc}
                            </Text>
                        </Text>
                    );
                }}
                keyExtractor={(item) => {
                    item.id;
                }}
            />
        </View>
    );
}
