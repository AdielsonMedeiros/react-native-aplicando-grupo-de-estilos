import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function App(){
  return(
    <View style={styles.area}>
    <Text style={[styles.titulo,styles.textoAlinhado]}>Adielson </Text>
    <Text style={[styles.titulo, styles.textoAlinhado]}>Medeiros</Text>
    <Text style={[styles.subTitulo, styles.textoAlinhado]}>AAABBBB</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  area:{
    marginTop: 50
},
titulo:{
  fontSize: 29,
  color: '#FF0000'
},
subTitulo:{
  color:'#00FF00',
  fontSize: 17,
  marginTop: 15
},
textoAlinhado:{
  textAlign:'center'
}
});

export default App;