import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, TextInput, FlatList
} from 'react-native';
import {TopSongs} from "../assets/samples/Home";
import Scheme from "../assets/Scheme";
import TopSongsRow from "../Components/Home/TopSongsRow";

class Favourites extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs : TopSongs()
        }
    }
    _renderTopSongsRow = ({item}) => {
        return <TopSongsRow metaData={item} navigation={this.props.navigation}/>
    }
    _renderNewCollectionSeparator = () => {
        return <View style={styles.newCollectionSeparator}/>
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circleOverlayout}/>
                <View style={styles.header}>
                    <Text style={styles.title}>Your Favourite Songs</Text>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        data={this.state.songs}
                        extraData={this.state}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this._renderTopSongsRow}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={this._renderNewCollectionSeparator}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#ecf0f1'
    },
    circleOverlayout : {
        height : 450,
        width : 450,
        backgroundColor: '#bdc3c7',
        borderRadius: 450,
        position: 'absolute',
        top : -225,
        left : -225
    },
    header : {
        flex : 1,
        height : 110,
        maxHeight: 110,
        paddingLeft : 15,
        paddingRight : 15,
        paddingTop : 50,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    title : {
        fontSize: 20,
        fontFamily: 'Quicksand-Bold',
        flex : 1
    },
    listContainer: {
        flex: 1,
        padding : 10
    },
    newCollectionSeparator : {
        flex : 1,
        margin : 5
    },
})
export default Favourites