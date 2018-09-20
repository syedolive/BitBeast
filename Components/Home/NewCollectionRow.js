String.prototype.capatilize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1)
}

import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, TouchableOpacity
} from 'react-native';
import Scheme from "../../assets/Scheme";
import Icon from 'react-native-vector-icons/Ionicons'
class NewCollectionRow extends Component {
    constructor(props){
        super(props);
        this.state = {
            meta : this.props.metaData,
            play : false
        }
    }
    _playAudio = () => {
        this.setState({
            play : !this.state.play
        })
    }
    render() {
        const {meta , play} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.upperArea}>
                        <View style={styles.nameContainer}>
                            <Text style={styles.songName} numberOfLines={1} ellipsizeMode={'tail'}>{meta.songName.capatilize()}</Text>
                            <Text style={styles.singerName} numberOfLines={1} ellipsizeMode={'tail'}>{meta.singerName.capatilize()}</Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <Icon name={meta.heart ? 'ios-heart' : 'ios-heart-empty'} size={20} color={Scheme.colors.pomegranate}/>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                        <TouchableOpacity style={styles.playButtonContainer} onPress={() => this._playAudio()}>
                            <View style={styles.triangle}/>
                            <View style={styles.playBtn}>
                               <Icon name={play ? 'ios-pause' : 'ios-play'} color={Scheme.colors.belize} size={40}/>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.timeContainer}>
                            <Text style={styles.songName}>4:30</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor : Scheme.colors.white,
        height: 130,
        maxHeight: 130,
        width : 140,
        borderRadius : 5,
        padding : 10
    },
    content : {
        flex : 1
    },
    upperArea : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        flex : 1,
        alignItems: 'flex-start',
    },
    nameContainer : {

    },
    iconContainer : {

    },
    songName : {
        fontFamily : 'Quicksand',
        fontSize: 14
    },
    singerName : {
        fontFamily : 'Quicksand',
        fontSize: 12
    },
    bottomContainer : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        flex : 1,
        alignItems: 'center',
        padding : 5
    },
    playButtonContainer : {
        justifyContent: 'center',
        alignItems: 'center',
        height : 40,
        width : 40
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
    timeContainer: {
        alignItems : 'flex-end',
        justifyContent : 'center'
    },
    playBtn : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    }

})
export default NewCollectionRow