String.prototype.capatilize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
}
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, TouchableOpacity, Image
} from 'react-native';
import Scheme from "../../assets/Scheme";
import Icon from 'react-native-vector-icons/Ionicons'
class TopSongsRow extends Component {
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
                <View style={styles.avatarContainer}>
                    <View style={styles.imageContainer}>
                        <Image source={{uri : meta.image}} style={{height : 60, width: 60}}/>
                    </View>
                </View>
                <View style={styles.detailsContainer}>
                    <Text style={styles.songName} maxLines={1}>{meta.songName.capatilize()}...</Text>
                    <Text style={styles.singerName}>{meta.singerName}</Text>
                    <Text style={styles.singerName}>4:30 min</Text>
                </View>
                <View style={styles.heartContainer}>
                    <Icon name={meta.heart ? 'ios-heart' : 'ios-heart-empty'} size={20} color={Scheme.colors.pomegranate}/>
                </View>
                <View style={styles.playBtnContainer}>
                    <TouchableOpacity style={styles.playButtonContainer} onPress={() => this._playAudio()}>
                        <View style={styles.triangle}/>
                        <View style={styles.playBtn}>
                            <Icon name={'ios-play'} color={Scheme.colors.belize} size={30}/>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex : 1,
        flexDirection : 'row',
        padding : 5,
        height : 90,
        maxHeight : 90,
        backgroundColor : Scheme.colors.white,
        borderRadius : 5,
        alignItems : 'center'
    },
    avatarContainer : {
        flex : 1,
        height: 70,
        maxHeight: 70,
        width : 70,
        maxWidth: 70,
        justifyContent : 'center',
        alignItems : 'center',
        marginRight : 10
    },
    imageContainer : {
        flex : 1,
        height : 60,
        maxHeight : 60,
        width : 60,
        maxWidth: 60,
        borderRadius: 60,
        justifyContent : 'center',
        alignItems : 'center',
        overflow : 'hidden'
    },
    detailsContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'flex-start',
        marginRight : 10
    },
    songName : {
        fontFamily : 'Quicksand',
        fontSize : 15,
    },
    singerName : {
        fontFamily : 'Quicksand',
        fontSize : 14,
        color: Scheme.colors.silver,
    },
    heartContainer : {
        width : 20,
        maxWidth : 20,
        justifyContent : 'center',
        alignItems : 'center',
        height: 60,
        maxHeight: 60,
        marginRight : 10
    },
    playBtnContainer : {
        flex: 1,
        width : 30,
        maxWidth : 30,
        justifyContent : 'center',
        alignItems : 'center',
        height: 60,
        maxHeight: 60,
        marginRight : 10
    },
    playButtonContainer : {
        justifyContent: 'center',
        alignItems: 'center',
        height : 30,
        width : 30
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 20,
        borderRightWidth: 20,
        borderBottomWidth: 30,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#bdc3c7',
        transform: [
            {rotate: '85deg'}
        ],
        borderRadius: 5,
        opacity: 0.5,
        ...StyleSheet.absoluteFillObject,

    },
    playBtn : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
export default TopSongsRow