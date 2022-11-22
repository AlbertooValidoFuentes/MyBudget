
import { StyleSheet, Text, View, Modal, TextInput, Pressable } from 'react-native';
import uuid from 'react-native-uuid';

export default function DataInputExpediture({showModal, setShowModal, setTransaction}) {

    const transaction = {
        id: uuid.v4(),
        tipo: 'Ingreso',
        cantidad: 0,
        descripcion: "",
        fecha: ""
    }

    

    const changeCuantityHandler = (value) => {
        transaction.cantidad = value
        console.log(transaction.cantidad)
    }

    const changeDescriptionHandler = (value) => {
        transaction.descripcion += value
        console.log(transaction.descripcion)
    }

    const changeDateHandler = (value) => {
        transaction.fecha = value
        console.log(transaction.fecha)
    }

    const sendData = () => {
        setTransaction(transaction)
        setShowModal(!showModal)
        console.log(transaction);
    }

    const cancel = () => {
        setShowModal(!showModal)
    }

    return (
        <Modal visible={showModal} animationType={'fade'} transparent={true}>
            <View style={styles.productInput}>
                <Text style={styles.title}>Gasto:</Text>
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Introduce la cantidad'
                    keyboardType='numeric'
                    placeholderTextColor='white'
                    onChangeText={changeCuantityHandler}
                    value={transaction.cantidad}
                    
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Introduce la Descripcion'
                    keyboardType='default'
                    placeholderTextColor='white'
                    onChangeText={changeDescriptionHandler}
                    value={transaction.descripcion}
                    defaultValue={transaction.descripcion}

                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder='Introduce la fecha'
                    placeholderTextColor='white'
                    onChangeText={changeDateHandler}
                    value={transaction.fecha}
                />
                <Pressable style={styles.buttonStyle} onPress={sendData}>
                    <Text style={styles.buttonTextStyle}>Añadir gasto</Text>
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
