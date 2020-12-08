import React from 'react';
import { Text, StyleSheet, View, Image, TextInput, StatusBar } from 'react-native';
export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#fff" barStyle="light-content" />
                <View style={styles.container1}>
                    <Image source={require('./assets/chat.png')} style={styles.image} />
                    <Text style={styles.TextUpper}>Intrinsik OMS</Text>
                </View>
                <View style={styles.middleViewContainer}>
                    <Text style={styles.SigninText}>Sign In</Text>
                    <Text style={styles.TextInPutHeaderText}>Email</Text>
                    <TextInput style={styles.TextInputLayoutStyle} placeholder="Type your email!" underlineColorAndroid="#d3d3d3" />
                    <Text style={styles.TextInPutHeaderText}>Password</Text>
                    <TextInput secureTextEntry={true} style={styles.TextInputLayoutStyle} placeholder="Type your password!" underlineColorAndroid="#d3d3d3" />
                    <View style={styles.Button}>
                        <Text style={styles.ButtonText}>{'Sign In'}</Text>
                    </View>
                    <Text style={styles.buttonBottom}>Sign Up</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: { backgroundColor: '#fff', flex: 1 },
    container1: { marginTop: 50, alignItems: 'center', justifyContent: 'center' },
    middleViewContainer: { margin: 40, alignItems: 'flex-start', justifyContent: 'flex-start' },
    image: { height: 50, width: 50 },
    TextUpper: { color: '#00CDCF', fontWeight: 'bold', fontSize: 12, letterSpacing: 0.5 },
    text: { paddingBottom: 14, color: '#000000', fontSize: 24, },
    SigninText: { fontWeight: "bold", color: '#000000', fontSize: 15 },
    TextInPutHeaderText: { color: '#00CDCF', marginTop: 10, fontWeight: 'bold', fontSize: 12 },
    TextInputLayoutStyle: { paddingHorizontal: 0, paddingVertical: 0, letterSpacing: 0.2, color: '#000000', marginTop: -5, height: 40, width: '100%' },
    Button: { width: '100%', marginTop: 20, alignSelf: 'center', backgroundColor: '#00CDCF', borderRadius: 3, padding: 6, alignItems: "center", shadowColor: '#000', shadowOffset: { width: 2, height: 2 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 5 },
    ButtonText: { color: '#fff', fontSize: 12, fontWeight: 'bold' },
    buttonBottom: { alignSelf: 'center', color: '#00CDCF', marginTop: 15, fontWeight: 'bold', fontSize: 12 }
});
