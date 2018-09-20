import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, TextInput, ScrollView, FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import {NewCollection, TopSingers, TopSongs} from "../assets/samples/Home";
import NewCollectionRow from "../Components/Home/NewCollectionRow";
import TopSingersRow from "../Components/Home/TopSingersRow";
import Scheme from "../assets/Scheme";
import TopSongsRow from "../Components/Home/TopSongsRow";
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            newCollection : NewCollection(),
            topSingers : TopSingers(),
            topSongs : TopSongs()
        }
    }
    _renderNewCollectionRow = ({item}) => {
        return <NewCollectionRow metaData={item} navigation={this.props.navigation}/>
    }
    _renderNewCollectionSeperator = () => {
        return <View style={styles.newCollectionSeparator}/>
    }
    _renderTopSingersRow = ({item}) => {
        return <TopSingersRow metaData={item} navigation={this.props.navigation}/>
    }
    _renderTopSongsRow = ({item}) => {
        return <TopSongsRow metaData={item} navigation={this.props.navigation}/>
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circleOverlayout}/>
                <View style={styles.header}>
                    <View style={styles.searchInputContainer}>
                        <TextInput
                            placeholder={'Search'}
                            style={styles.searchInput}
                        />
                        <View style={styles.iconContainer}>
                            <Icon name={'ios-search'} color={'#bdc3c7'} size={29}/>
                        </View>
                    </View>
                </View>
                <ScrollView style={styles.content}>
                    <View style={styles.collectionContainer}>
                        <View style={styles.collectionHeader}>
                            <Text style={styles.collectionTitle}>New Collection</Text>
                            <View style={styles.seeAllContainer}>
                                <Text>See All</Text>
                                <Icon name={'ios-arrow-forward'} color={'#bdc3c7'} size={20}/>
                            </View>
                        </View>
                        <View style={styles.listContainer}>
                            <FlatList
                                data={this.state.newCollection}
                                extraData={this.state}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal
                                renderItem={this._renderNewCollectionRow}
                                showsHorizontalScrollIndicator={false}
                                ItemSeparatorComponent={this._renderNewCollectionSeperator}
                            />
                        </View>
                    </View>
                    <View style={styles.collectionContainer}>
                        <View style={styles.collectionHeader}>
                            <Text style={styles.collectionTitle}>Top Singers</Text>
                            <View style={styles.seeAllContainer}>
                                <Text>See All</Text>
                                <Icon name={'ios-arrow-forward'} color={'#bdc3c7'} size={20}/>
                            </View>
                        </View>
                        <View style={styles.listContainer}>
                            <FlatList
                                data={this.state.topSingers}
                                extraData={this.state}
                                keyExtractor={(item, index) => index.toString()}
                                horizontal
                                renderItem={this._renderTopSingersRow}
                                showsHorizontalScrollIndicator={false}
                                ItemSeparatorComponent={this._renderNewCollectionSeperator}
                            />
                        </View>
                    </View>
                    <View style={styles.separator}/>
                    <View style={styles.collectionContainer}>
                        <View style={styles.collectionHeader}>
                            <Text style={styles.collectionTitle}>Top Songs</Text>
                            <View style={styles.seeAllContainer}>
                                <Text>See All</Text>
                                <Icon name={'ios-arrow-forward'} color={'#bdc3c7'} size={20}/>
                            </View>
                        </View>
                        <View style={styles.listContainer}>
                            <FlatList
                                data={this.state.topSongs}
                                extraData={this.state}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={this._renderTopSongsRow}
                                showsHorizontalScrollIndicator={false}
                                ItemSeparatorComponent={this._renderNewCollectionSeperator}
                            />
                        </View>
                    </View>
                </ScrollView>
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
        paddingTop : 50
    },
    searchInputContainer : {
        flex: 1,
        height : 50,
        maxHeight : 50,
        backgroundColor : '#fff',
        borderRadius: 5,
        overflow : 'hidden',
        flexDirection : 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 10
    },
    searchInput : {
        fontSize : 20,
        fontFamily : 'Quicksand',
        flex: 1
    },
    iconContainer : {
        padding : 10
    },
    content : {
        flex : 1,
    },
    collectionContainer : {
        flex : 1,
        alignItems: 'flex-start',
        marginBottom : 10
    },
    collectionHeader : {
        alignItems : 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft : 20,
        paddingRight : 20
    },
    collectionTitle : {
        fontSize: 20,
        fontFamily: 'Quicksand-Bold',
        color : '#7f8c8d',
        flex : 1
    },
    seeAllContainer : {
        flexDirection : 'row',
        width : 60,
        justifyContent: 'space-between',
        alignItems : 'center'
    },
    listContainer : {
        flex : 1,
        padding : 10,
        width : '100%'
    },
    newCollectionSeparator : {
        flex : 1,
        margin : 5
    },
    separator : {
        height : null,
        width : '100%',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor : Scheme.colors.silver,
        marginLeft : 20,
        marginBottom : 10
    }
})
export default Home