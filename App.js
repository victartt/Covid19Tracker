import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Judul from './components/Judul';
import Global from './components/Global';
import Provinsi from './components/Provinsi';
import Indonesia from './components/Indonesia';
const App = () => {
  

  return (
    <View style={styles.container}>
        <View style={styles.boxJudul}>
          <Judul/>
        </View>
        <View style={styles.boxGlobal}>  
            <Global/>
        </View>
        <View style={styles.boxProvinsi}>
        <Provinsi/>
        </View>
        <View style={styles.boxIndonesia}>
          <Indonesia/>
        </View>
    </View>
)
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor:'#EBEBEB',
      alignItems: 'stretch',
      justifyContent: 'center'
  },
  boxJudul: {
      flex: 2,
      alignItems: 'center',
      backgroundColor: 'white'
  },
  boxGlobal: {
      flex: 4,
      alignItems: 'center',
      backgroundColor: 'white'
  },
  boxProvinsi: {
    flex: 4,
    alignItems: 'center',
    backgroundColor: 'white'
},
  boxIndonesia: {
      flex: 12
  }
})

export default App;