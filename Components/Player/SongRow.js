String.prototype.capatilize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, Image
} from 'react-native';

class SongRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            meta : this.props.item,

        }
    }
    render() {
        const {meta} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.imageArea}>
                    <View style={styles.imageContainer}>
                        <Image source={{uri : meta.image}} style={{width : 50, height : 50}}/>
                    </View>
                </View>
                <View style={styles.songsDetails}>
                    <Text style={styles.songName}>{meta.songName.capatilize()}</Text>
                    <Text style={styles.singerName}>{meta.singerName.capatilize()}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection : 'row',
        height : 70,
        maxHeight: 70
    },
    imageArea : {
        flex : 1,
        maxWidth: 60,
        width : 60,
        justifyContent :'center',
        alignItems : 'center'
    },
    imageContainer : {
        flex: 1,
        maxWidth: 50,
        width : 50,
        maxHeight : 50,
        height : 50,
        borderRadius: 50,
        overflow: 'hidden',
        justifyContent :'center',
        alignItems : 'center'
    },
    songsDetails : {
        flex: 1,
        justifyContent :'center',
        alignItems : 'flex-start',
        padding : 10
    },
    songName : {
        fontFamily: 'Quicksand-Regular',
        fontSize : 17
    },
    singerName : {
        fontFamily: 'Quicksand-Regular'
    }
})
export default SongRow