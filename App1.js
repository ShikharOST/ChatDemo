import React from 'react';
import { Text, StyleSheet, View, Image, TextInput, StatusBar } from 'react-native';
export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="#fff" barStyle="light-content" />
                <View style={styles.container1}>
                    <Image source={require('./assets/left-arrow.png')} style={styles.image} />
                    <Text style={styles.TextUpper}>Back</Text>
                </View>
                <Text style={styles.NameText}>John Smith</Text>
                    <View style = {styles.lineStyle} />
                <View style={styles.LeftSide}>
                    <Text style={styles.ButtonText}>{'Signasdsadsad asdasdsad asdsadsa\n asdasdsa In'}</Text>
                </View>
                <View style={styles.RightSide}>
                    <Text style={styles.ButtonText1}>{'Signasdsadsad asdasdsad asdsadsa\n asdasdsa In'}</Text>
                </View>
                <View style={styles.RightSide}>
                    <Text style={styles.ButtonText1}>{'Signasdsadsad asdasdsad asdsadsa\n asdasdsa In'}</Text>
                </View>
                <View style={styles.LeftSide}>
                    <Text style={styles.ButtonText}>{'Signasdsadsad asdasdsad asdsadsa\n asdasdsa In'}</Text>
                </View>
                <View style={styles.LeftSide}>
                    <Text style={styles.ButtonText}>{'Signasdsadsad asdasdsad asdsadsa\n asdasdsa In'}</Text>
                </View>
              
              
                
                <View style={styles.BottomBar}>
                    <View style = {styles.lineStyle} />
                    <View style={{flexDirection:'row'}}>
                    <Image source={require('./assets/left-arrow.png')} style={styles.image} />
                    <TextInput  style={styles.TextInputLayoutStyle} placeholder="Type your password!" />
                    <Image source={require('./assets/left-arrow.png')} style={styles.imageLast} />
                    </View>
                    </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    lineStyle:{borderWidth: 0.4,width:'100%',borderColor:'#00CDCF',marginTop:10,marginBottom:10},
    container: { backgroundColor: '#fff', flex: 1 },
    container1: {marginLeft:10, marginTop: 10,flexDirection:'row',alignItems:'center', justifyContent: 'flex-start' },
    middleViewContainer: { marginLeft: 40,marginRight:30,marginTop:10, alignItems: 'flex-start', justifyContent: 'flex-start' },
    image: { height: 20, width: 20,alignSelf:'center' },
    imageLast:{height: 20, width: 20,alignSelf:'flex-end' },
    TextUpper: { color: '#00CDCF', fontWeight: 'bold', fontSize: 12, letterSpacing: 0.5 },
    text: { paddingBottom: 14, color: '#000000', fontSize: 24, },
    NameText: { color: '#00CDCF', fontSize: 12,alignSelf:'center' },
    TextInPutHeaderText: { color: '#00CDCF', marginTop: 10, fontWeight: 'bold', fontSize: 12 },
    TextInputLayoutStyle: {alignSelf:'center',marginRight:50,paddingHorizontal: 0, paddingVertical: 0, letterSpacing: 0.2, color: '#000000', width: '100%' },
    RightSide: { marginTop: 20,marginRight:20, alignSelf: 'flex-end', borderColor: '#00CDCF',borderWidth:2, borderRadius: 8, padding: 5, alignItems: "center"},
    LeftSide:{  marginTop: 20,marginLeft:20 ,alignSelf: 'flex-start', backgroundColor: '#00CDCF', borderRadius: 8, padding: 5 },
    ButtonText: { color: '#fff', fontSize: 10 },
    ButtonText1: { color: '#00CDCF', fontSize: 10 },
    buttonBottom: { alignSelf: 'center', color: '#00CDCF', marginTop: 15, fontWeight: 'bold', fontSize: 12 },
    BottomBar:{ position: 'absolute',bottom: 0,width: '100%',height: 60}
});
