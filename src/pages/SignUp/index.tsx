import React from 'react';
import { Text, View, StyleSheet, Image, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

import Logo from '../../assets/logo/logo.png';


const UselessTextInput = () => {
    const [value, onChangeText] = React.useState('Useless Placeholder');

}
const SignIn: React.FC = () => {
    return (
        <>
            <View style={styles.view}>
                <Image style={{ maxWidth: 220, maxHeight: 280 }} source={Logo} />
                <TextInput
                    style={styles.input}
                    value={'Email'}
                />
                <TextInput
                    style={styles.input}
                    value={'Senha'}
                />
                  <TextInput
                    style={styles.input}
                    value={'Repita a Senha'}
                />
                <Button
                    buttonStyle={styles.button}
                    title="Criar Meu Cadastro"
                    titleStyle={styles.text}
                    onPress={() => navigation.navigate('Details')}
                >
                </Button>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    input: {
        backgroundColor: '#ffffff',
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        margin: 7
    },
    button: {
        backgroundColor: '#ffffff',
        height: 50,
        borderRadius: 20,
        margin: 10

    },
    view: {
        backgroundColor: '#1A237E',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#1A237E',
    },
    text2: {
        marginBottom: 50,
        color: '#ffffff',
    }
})
export default SignIn;