import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Button } from 'react-native-elements';


import { useNavigation } from '@react-navigation/native'

const SignIn: React.FC = () => {
    const navigation = useNavigation();
    return (
        <>
            <Appbar.Header style={styles.header}>
                <Appbar.Action icon="menu" />
                <Appbar.Content title="Home" />
                <Appbar.Action icon="dots-vertical" />
            </Appbar.Header>

            <View style={styles.view}>
                <Button
                    buttonStyle={styles.button}
                    title="Botão"
                    titleStyle={styles.text}
                    onPress={() => navigation.navigate('Home')}

                >
                </Button>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: '#1A237E',
        height: 50,
        borderRadius: 10,
        margin: 10

    },
    view: {
        backgroundColor: '#ffffff',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#ffffff',
    },
    header: {
        position: 'absolute',
        width: '100%',
        backgroundColor: '#1A237E',
    }
})
export default SignIn;