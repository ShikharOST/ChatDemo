import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
class HomeView extends Component {
    render() {
        return (
            
                <Text style={styles.text}>
                    Sample Text
                </Text>
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        paddingBottom: 14,
        color: '#fff',
        fontSize: 24,
    }
});
export default HomeView