
import { StyleSheet, Text, View, Modal, TextInput, Pressable } from 'react-native';
import uuid from 'react-native-uuid';

export default function DataInputIncome({ showModal, setShowModal, setTransaction, setBalance, balance, transaction }) {

    const transactionUser = {
        id: uuid.v4(),
        tipo: 'Ingreso',
        cantidad: 0,
        descripcion: "",
        fecha: ""
    }

    const changeCuantityHandler = (value) => {
        transactionUser.cantidad = value
    }

    const changeDescriptionHandler = (value) => {
        transactionUser.descripcion += value
    }

    const changeDateHandler = (value) => {
        transactionUser.fecha = value
    }

    const sendData = () => {
        console.log(transactionUser)
        setTransaction(() => [...transaction, transactionUser])
        setShowModal(!showModal)

        setBalance(balance + parseInt(transactionUser.cantidad))
        console.log(transactionUser);
    }

    const cancel = () => {
        setShowModal(!showModal)
    }

    return (
        <Modal visible={showModal} animationType={'fade'} transparent={true}>
            <View style={styles.productInput}>
                <Text style={styles.title}>Ingreso:</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Introduce la cantidad'
                    keyboardType='numeric'
                    placeholderTextColor='white'
                    onChangeText={changeCuantityHandler}
                    value={transactionUser.cantidad}

                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Introduce la Descripcion'
                    keyboardType='default'
                    placeholderTextColor='white'
                    onChangeText={changeDescriptionHandler}

                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Introduce la fecha'
                    placeholderTextColor='white'
                    onChangeText={changeDateHandler}
                    
                />
                <Pressable style={styles.buttonStyle} onPress={sendData}>
                    <Text style={styles.buttonTextStyle}>Añadir ingreso</Text>
                </Pressable>
                <Pressable style={styles.buttonStyle} onPress={cancel}>
                    <Text style={styles.buttonTextStyle}>Cancelar</Text>
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
