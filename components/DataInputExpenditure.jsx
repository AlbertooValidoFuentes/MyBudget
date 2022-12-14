
import { StyleSheet, Text, View, Modal, TextInput, Pressable } from 'react-native';
import uuid from 'react-native-uuid';
import {colors} from '../themes/colors.js'

export default function DataInputExpediture({ showModal, setShowModal, setTransaction, setBalance, balance, transaction }) {

    const transactionUser = {
        id: uuid.v4(),
        tipo: 'Gasto',
        cantidad: 0,
        descripcion: "",
        fecha: new Date(Date.now()).toLocaleString()
    }

    const changeCuantityHandler = (value) => {
        transactionUser.cantidad = value
    }

    const changeDescriptionHandler = (value) => {
        transactionUser.descripcion = value
    }

    const changeDateHandler = (value) => {
        transactionUser.fecha = value
    }

    const sendData = () => {
        if (transactionUser.cantidad == 0 || transactionUser.descripcion == '') {
            alert('Debes rellenar todos los campos antes de enviar.')

        }
        else {
            setTransaction(() => [...transaction, transactionUser])
            setShowModal(!showModal)

            setBalance(balance - parseInt(transactionUser.cantidad))
        }
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
                <Pressable style={styles.buttonStyle} onPress={sendData}>
                    <Text style={styles.buttonTextStyle}>A??adir ingreso</Text>
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
        backgroundColor: colors.backgoundColor,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        width: '100%',
        height: '100%'
    },
    inputStyle: {
        borderWidth: 3,
        borderColor: colors.black,
        borderRadius: 20,
        color: colors.white,
        padding: 10,
        width: '90%',
        marginTop: 10,
        fontWeight: 'bold',
    },
    buttonStyle: {
        backgroundColor: colors.blue,
        padding: 15,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20
    },
    title: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    }
});
