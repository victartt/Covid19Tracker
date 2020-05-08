import React from 'react';
import { View, Text } from 'react-native';

const Judul = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={styles.c}>
            <Text style = {styles.judulGlobal}>Data Covid-19 Global & Indonesia</Text>
        </View>
    );
};


const styles = {
    containerHeader: {
        height: 22,
        backgroundColor: '#a9a9a9',

    },
    judulGlobal:{
        textAlign: "center",
        fontSize: 22,
        color: '#006400',
        marginTop: 25,

        padding: 5,
        paddingLeft: 25,
        paddingRight: 25,
        fontWeight: 'bold',
        backgroundColor: '#ffdab9'
    }
}
export default Judul;