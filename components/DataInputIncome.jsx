
import { StyleSheet, Text, View, Modal, TextInput, Pressable } from 'react-native';

export default function DataInputIncome({showModal}) {
    return (
        <Modal visible={showModal} animationType={'fade'} transparent={true}>
            <View style={styles.productInput}>
                <Text style={styles.title}>Ingreso:</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Introduce la cantidad'
                    keyboardType='numeric'
                    placeholderTextColor='white'
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Introduce la Descripcion'
                    placeholderTextColor='white'
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Introduce la fecha'
                    keyboardType='numeric'
                    placeholderTextColor='white'
                />
                <Pressable style={styles.buttonStyle}>
                    <Text style={styles.buttonTextStyle}>Añadir ingreso</Text>
                </Pressable>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    productInput: {
        backgroundColor: '#2C3E50',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        width: '100%',
        height: '100%'
    },
    inputStyle: {
        borderWidth: 3,
        borderColor: 'black',
        borderRadius: 20,
        color: 'white',
        padding: 10,
        width: '90%',
        marginTop: 10,
        fontWeight: 'bold',
    },
    buttonStyle: {
        backgroundColor: '#3498DB',
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    }
});
