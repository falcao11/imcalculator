import {
    Keyboard,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import Form from './src/components/Form/index';
import Title from './src/components/Title/index';

export default function App() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <Title />
                <Form />
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4caf50',
        paddingTop: 80,
    },
});
