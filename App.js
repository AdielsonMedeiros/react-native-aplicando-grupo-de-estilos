import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function App(){
  return(
    <View style={{flex: 1, flexDirection:'column', alignItems:'flex-start', justifyContent:'flex-end'}}>
    <View style={{height: 50,width: 50,  backgroundColor: '#121212'}}></View>
    <View style={{height: 50,width: 50, backgroundColor: 'red'}}></View>
    <View style={{height: 50,width: 50, backgroundColor: 'green'}}></View>
    <View style={{height: 50,width: 50, backgroundColor: 'blue'}}></View>
    </View>
)
}
export default App;