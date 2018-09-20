import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Image, Slider, FlatList, Animated, PanResponder, Easing} from 'react-native'
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'
import Home from "./Screens/Home";
import Search from "./Screens/Search";
import Favourites from "./Screens/Favourites";
import CustomTabBar from "./Components/CustomTabBar";
import Scheme from "./assets/Scheme";
import Icon from 'react-native-vector-icons/Ionicons'
import {TopSongs} from "./assets/samples/Home";
import SongRow from "./Components/Player/SongRow";
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
const PLAYER_CONTAINER_HEIGHT = SCREEN_HEIGHT - 50;
const PLAYER_CLOSE_BOTTOM = -PLAYER_CONTAINER_HEIGHT + 25;
const PLAYER_OPEN_BOTTOM = 0;
const BottomTabStack =  createBottomTabNavigator({
    Home : {
        screen : Home,
        navigationOptions : {
          header : null,
        }
    },
    Search : {
        screen : Search,
        navigationOptions: {
          header : null,
        }
    },
    Favourites : {
        screen : Favourites,
        navigationOptions : {
          header : null
        }
    }
}, {
    tabBarComponent : CustomTabBar
});

class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            songs : TopSongs(),
            playerBottom : new Animated.Value(PLAYER_CLOSE_BOTTOM),
        };
        this._panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderGrant: (evt, gestureState) => {
            },
            onPanResponderMove: (evt, gestureState) => {
                const starter_difference = 35;
                if(gestureState.dy <= -starter_difference){
                    this.state.playerBottom.setValue(PLAYER_CLOSE_BOTTOM - gestureState.dy)
                    console.log(gestureState.dy, "player opening")
                }else if(gestureState.dy > starter_difference){
                    this.state.playerBottom.setValue(-gestureState.dy)
                    console.log(gestureState.dy, "player closing")
                }

            },
            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
                if(gestureState.dy <= -225){
                    Animated.timing(this.state.playerBottom,{
                        toValue : PLAYER_OPEN_BOTTOM,
                        duration : 500,
                        easing : Easing.linear()
                    }).start()
                }else if(gestureState.dy >= 245){
                    Animated.timing(this.state.playerBottom,{
                        toValue : PLAYER_CLOSE_BOTTOM,
                        duration : 500,
                        easing : Easing.linear()
                    }).start()
                }
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
                return true;
            },
        });
    }
    _renderSongItem = ({item}) => {
        return <SongRow item={item}/>
    }
    _renderNewCollectionSeperator = () => {
        return <View style={styles.newCollectionSeparator}/>
    }
    render(){
       return(
           <View style={styles.container}>
               <BottomTabStack/>
               <Animated.View style={[styles.playerContainer, {bottom : this.state.playerBottom}]} >
                    <Animated.View style={styles.toggleArea} {...this._panResponder.panHandlers}>
                        <View style={styles.toggler}/>
                    </Animated.View>
                   <Animated.View style={styles.playerContent}>
                        <View style={styles.player}>
                            <View style={styles.playerInside}>
                                <View style={styles.songContent}>
                                    <View style={styles.imageContainer}>
                                        <Image source={{uri : 'https://picsum.photos/200/300/?gravity=east'}} style={{height: 100, width : 100}}/>
                                    </View>
                                    <View style={styles.songsDetails}>
                                        <Text style={styles.songName}>Lit Up Feat. Dirty Radio</Text>
                                        <Text style={styles.singerName}>Jean Tonique</Text>
                                    </View>
                                </View>
                                <View style={styles.playerControls}>
                                    <View style={styles.playerButtons}>
                                        <Icon name={'ios-skip-backward'} size={25} color={Scheme.colors.silver}/>
                                        <Icon name={'ios-play'} size={30} color={Scheme.colors.silver}/>
                                        <Icon name={'ios-skip-forward'} size={25} color={Scheme.colors.silver}/>
                                    </View>
                                    <View style={styles.playerSlider}>
                                        <View style={styles.timeContainer}>
                                            <Text style={styles.time}>4:30</Text>
                                        </View>
                                        <View style={styles.sliderContainer}>
                                            <Slider
                                                maximumValue={100}
                                                minimumValue={0}
                                                style={styles.slider}
                                                thumbTintColor={Scheme.colors.belize}
                                                thumbImage={require('./assets/images/icons8-music-record-29.png')}
                                                minimumTrackTintColor={Scheme.colors.belize}
                                                maximumTrackTintColor={Scheme.colors.silver}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                       <View style={styles.songsListContainer}>
                            <FlatList
                                data={this.state.songs}
                                extraData={this.state}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={this._renderSongItem}
                                ItemSeparatorComponent={this._renderNewCollectionSeperator}
                            />
                       </View>
                   </Animated.View>
               </Animated.View>
           </View>
       )
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    playerContainer : {
        position: 'absolute',
        height : PLAYER_CONTAINER_HEIGHT,
        width : SCREEN_WIDTH,
        flex : 1,

    },
    toggleArea : {
        flex:  1,
        height : 25,
        maxHeight: 25,
        //backgroundColor: Scheme.colors.pomegranate,
        alignItems : 'center',
        justifyContent : 'center',
    },
    toggler : {
        height : 5,
        width: SCREEN_WIDTH / 2,
        backgroundColor : Scheme.colors.pomegranate,
        borderRadius: 5
    },
    playerContent : {
        flex : 1,
        borderTopRightRadius : 5,
        borderTopLeftRadius : 5,
        overflow: 'hidden',
        //padding : 20
    },
    player : {
        flex : 1,
        height : 230,
        maxHeight : 230,
        padding : 10,
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    playerInside : {
        flex : 1,
    },
    songContent : {
        flex : 1,
        height : 120,
        maxHeight : 120,
        flexDirection : 'row'
    },
    imageContainer : {
        flex : 1,
        width :100,
        maxWidth : 100,
        height : 100,
        maxHeight : 100,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 5,
        overflow: 'hidden',
        shadowOffset: { width: 0, height: 0.5 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
    },
    songsDetails : {
        flex : 1,
        alignItems : 'flex-start',
        justifyContent : 'flex-start',
        padding : 10
    },
    songName : {
        fontFamily: 'Quicksand',
        color: Scheme.colors.white,
        fontSize : 17
    },
    singerName : {
        fontFamily: 'Quicksand',
        color: Scheme.colors.white,
        fontSize : 14
    },
    playerControls : {
        flex : 1,

    },
    playerButtons : {
        flex : 1,
        flexDirection: 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        paddingLeft : 20,
        paddingRight: 20

    },
    playerSlider : {
        flex: 1,
        alignItems : 'center',
        flexDirection : 'row',
        padding : 10
    },
    sliderContainer : {
        flex : 1,
        padding : 10,

    },
    timeContainer : {
        flex : 1,
        width  : 50,
        maxWidth: 50
    },
    time : {
        fontFamily: 'Quicksand',
        color: Scheme.colors.white,
        fontSize : 16
    },
    slider : {
        height : 50,
        maxHeight : 50,
    },
    songsListContainer : {
        flex : 1,
        backgroundColor : Scheme.colors.white,
        padding : 10
    },
    newCollectionSeparator : {
        flex : 1,
        margin : 2
    },
})

export default App