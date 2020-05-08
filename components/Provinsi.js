import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

class DataIndonesia extends React.Component{
    constructor(){
        super();
        this.state = {
            summary: [],
            positive: '',
            meninggal: '',
            sembuh: '',
            perawatan : '',
        }
    }

    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = async () => {
        const response = await fetch('https://kawalcovid19.harippe.id/api/summary');
        const json = await response.json();
        this.setState({positive: json.confirmed.value})
        this.setState({sembuh: json.recovered.value})
        this.setState({meninggal: json.deaths.value})
        this.setState({perawatan: json.activeCare.value})
    }
   
    render(){
        return (
            <View>
            <View >
            <Text style={styles.subJudulIndonesia}>Indonesia</Text>
          </View>
                <View style={styles.IndoContainer}>
                   <View style={styles.containerPositif}>
                       <Text style={styles.Positif}> Positif </Text>
                       <Text style={styles.Positif}>{this.state.positive}</Text>
                   </View>
                   <View style={styles.containerSembuh}>
                       <Text style={styles.Sembuh}> Sembuh </Text>
                       <Text style={styles.Sembuh}>{this.state.sembuh}</Text>
                   </View>
                   <View style={styles.containerMeninggal}>
                        <Text style={styles.Meninggal}> Meninggal </Text>
                        <Text style={styles.Meninggal}>{this.state.meninggal}</Text>
                   </View>
                   <View style={styles.containerPerawatan}>
                        <Text style={styles.Perawatan}> Perawatan </Text>
                        <Text style={styles.Perawatan}>{this.state.perawatan}</Text>
                   </View>
               </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    subJudulIndonesia:{
        fontSize: 20,
        borderWidth: 2,
        borderRadius: 15,
        marginLeft: 70,
        marginRight: 70,
        textAlign: 'center',
        backgroundColor: '#a9a9a9'
      },

    IndoContainer:{
        flexDirection:'row',
        justifyContent: 'flex-start',
        marginBottom: 5,
        marginTop: 10,
        
    },
    containerPositif:{
       marginLeft: 5,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'maroon',
        backgroundColor: '#EBEBEB'
    },
    Positif:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:18,
        color: 'maroon',
        marginLeft: 5,
        marginRight: 5,
        
        },
    containerSembuh:{
        marginLeft: 5,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#006400',
        backgroundColor: '#EBEBEB'
    },
    Sembuh:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:18,
        color: '#006400',
        marginLeft: 5,
        marginRight: 5,
        },
    containerMeninggal:{
        marginLeft: 5,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#808000',
        backgroundColor: '#EBEBEB'
    },
    Meninggal:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:18,
        color: '#808000',
        marginLeft: 5,
        marginRight: 5,
    },
    containerPerawatan:{
        marginLeft: 5,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: 'teal',
        backgroundColor: '#EBEBEB'
    },
    Perawatan:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize:18,
        color: 'teal',
        
        }


    
})


export default DataIndonesia;