import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, Image
} from 'react-native';

class TopSingersRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            meta : this.props.metaData,

        }
    }
    render() {
        const {meta} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image source={{uri : meta.image}} style={{width : 80, height: 80}}/>
                </View>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{meta.name}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        height : 120,
        maxHeight: 120,
        width : 100,
    },
    imageContainer :{
        flex : 1,
        maxHeight: 80,
        height: 80,
        width : 80,
        borderRadius : 80,
        justifyContent: 'center',
        alignItems: 'center',
        overflow : 'hidden'
    },
    nameContainer : {
        flex: 1,
        height : 20,
        maxHeight : 20,
    },
    name : {
        fontFamily : 'Quicksand',
        fontSize : 13
    }
})
export default TopSingersRow