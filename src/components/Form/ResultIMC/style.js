import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    result: {
        flex: 1,
        marginTop: 15,
        borderRadius: 50,
        alignItems: 'center',
        width: '100%',
    },
    numberInc: {
        fontSize: 48,
        color: '#4caf50',
        fontWeight: 'bold',
    },

    information: {
        fontSize: 18,
        color: '#4caf50',
        fontWeight: 'bold',
    },
    tableImc: {
        fontSize: 18,
        color: '#000000',
        fontWeight: 'bold',
    },
    boxShare: {
        width: '100%',
        alignItems: 'center',
        marginTop: 10,
    },
    share: {
        backgroundColor: '#3d8b40',
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 10,
    },
    textShare: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default styles;
