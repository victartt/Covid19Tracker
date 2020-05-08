import React,{ Component } from 'react';
import { StyleSheet, Text, View,FlatList, SafeAreaView } from 'react-native';


class Indonesia extends Component{
  constructor(){
    super();
    this.state={
        DataIndo: [],
        refreshing: false
    }
}
renderItem=({item})=>
  <SafeAreaView>
    <View style={styles.container}>
      <View >
        <Text style={styles.box1}>{item.provinsi}</Text></View>
      <View >
        <Text style={styles.box2}>{item.kasusPosi}</Text></View>
      <View >
        <Text style={styles.box3}>{item.kasusSemb}</Text></View>
      <View >
        <Text style={styles.box4}>{item.kasusMeni}</Text></View>
    </View>
  </SafeAreaView>
  
  
onRefresh= () =>{
    this.getDataApi();
}

componentDidMount = () =>{
    this.getDataApi();
}

getDataApi = async () => {
  const response = await fetch('https://indonesia-covid-19.mathdro.id/api/provinsi')
  const DataIndo = await response.json()
  const { data } = await DataIndo
  this.setState({
      DataIndo: {
          Data: await data,
      }
  })
}

render(){
    if (!this.state.DataIndo) {
        return <Text>Loading...</Text>
    }
    return (
        <View>
          <View >
            <Text style={styles.subJudulProvinsi}>Data Provinsi</Text>
          </View>
          <View style={styles.IndoContainer}>
              <Text style={styles.Positif}> Positif </Text>
              <Text Text style={styles.Sembuh}> Sembuh </Text>
              <Text Text style={styles.Meninggal}> Meninggal </Text>
          </View>
          <View>
            <FlatList 
                data={this.state.DataIndo.Data}
                keyExtractor={item => item.fid.toString()}
                renderItem={this.renderItem}
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
            />
          </View>
        </View>
        
    )
}
};
export default Indonesia;


const styles = StyleSheet.create({

  subJudulProvinsi:{
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 15,
    marginLeft: 70,
    marginRight: 70,
    textAlign: 'center',
    backgroundColor: '#a9a9a9',
  },

  container: {
    flex: 1,
    flexDirection:'row',
    padding:5,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: 3,
    marginRight: 3,
    backgroundColor: '#EBEBEB'
},
  IndoContainer:{
    justifyContent: 'space-between',
    flexDirection:'row',
    marginBottom: 5,
    marginTop: 20,
},
Positif:{
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize:18,
  padding: 2,
  marginLeft: 3,
  marginRight: 5,
  color: 'maroon',
  borderWidth: 2,
  borderColor: 'maroon'
},
Sembuh:{
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize:18,
  padding: 2,
  marginLeft: 15,
  color: '#006400',
  borderWidth: 2,
  borderColor: '#006400'
},

Meninggal:{
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize:18,
  marginRight: 5,
  padding: 2,
  marginLeft: 15,
  color: '#808000',
  borderWidth: 2,
  borderColor: '#808000'
},
  box1:{
    paddingTop: 5,
    fontSize: 14,
    width:160,
    marginBottom:7,
    height:20
},
  box2:{
    width:50,
    height:30,
    marginLeft: 30,
    paddingTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    backgroundColor:'maroon'
  },
  box3:{
    width:50,
    height:30,
    marginLeft:10,
    paddingTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    backgroundColor:'#006400'
  },
  box4:{
    width:50,
    height:30,
    marginLeft:10,
    paddingTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    backgroundColor:'#808000'
  },
})

 