import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

class Global extends React.Component{
    constructor(){
        super();
        this.state = {
            api: [],
            positive: '',
            meninggal: '',
            sembuh: '',
        }
    }

    componentDidMount = () => {
        this.getDataApi();
    }

    getDataApi = async () => {
        const response = await fetch('https://covid19.mathdro.id/api');
        const json = await response.json();
        this.setState({positive: json.confirmed.value})
        this.setState({sembuh: json.recovered.value})
        this.setState({meninggal: json.deaths.value})
    }
   
    render(){
        return (
            <View>
            <View >
            <Text style={styles.subJudulIndonesia}>Global</Text>
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
        marginLeft: 20,
        marginRight: 20,
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

})


export default Global;