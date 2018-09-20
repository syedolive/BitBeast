import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet, TouchableOpacity
} from 'react-native';
import Scheme from "../assets/Scheme";
import Icon from 'react-native-vector-icons/Ionicons'

class CustomTabBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentRoute : 'Home'
        }
    }
    componentDidMount = () => {

    };
    changeTab = (TabName) => {
        this.setState({
            currentRoute : TabName
        },() => this.props.navigation.navigate(TabName));
    }
    render() {
        const {currentRoute} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconSelected} onPress={() => this.changeTab('Home')} >
                        <View style={[styles.overlay, currentRoute === 'Home' ? {backgroundColor : Scheme.colors.pomegranate}: {backgroundColor : Scheme.colors.white}]}/>
                        <Icon name={'ios-musical-notes'} size={25} color={Scheme.colors.pomegranate}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconSelected} onPress={() => this.changeTab('Search')}>
                        <View style={[styles.overlay, currentRoute === 'Search' ? {backgroundColor : Scheme.colors.belize}: {backgroundColor : Scheme.colors.white}]}/>
                        <Icon name={'ios-search'} size={25} color={Scheme.colors.belize}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconSelected} onPress={() => this.changeTab('Favourites')}>
                        <View style={[styles.overlay, currentRoute === 'Favourites' ? {backgroundColor : Scheme.colors.alizarin}: {backgroundColor : Scheme.colors.white}]}/>
                        <Icon name={'ios-heart'} size={25} color={Scheme.colors.alizarin}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconSelected} onPress={() => this.changeTab('Profile')}>
                        <View style={[styles.overlay, currentRoute === 'Profile' ? {backgroundColor : Scheme.colors.peterRiver}: {backgroundColor : Scheme.colors.white}]}/>
                        <Icon name={'ios-contact'} size={25} color={Scheme.colors.peterRiver}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height : 70,
        maxHeight: 70,
        backgroundColor : Scheme.colors.white,
        paddingLeft : 10,
        paddingRight : 10,
        flexDirection : 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingTop: 5,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor : Scheme.colors.silver
    },
    iconSelected : {
        height: 40,
        width : 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer : {
        flex : 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    overlay : {
        opacity : 0.5,
        ...StyleSheet.absoluteFillObject,
        borderRadius: 40

    }

})
export default CustomTabBar