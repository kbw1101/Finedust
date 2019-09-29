import { createMaterialTopTabNavigator, } from 'react-navigation-tabs';
import { createAppContainer, } from 'react-navigation';
import { createDrawerNavigator, DrawerActions, } from 'react-navigation-drawer';

import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    Image,
} from 'react-native';

import COTab from '../screens/COTab';
import FinedustTab from '../screens/FinedustTab';
import OzoneTab from '../screens/OzoneTab';
import Measure from '../screens/Measure';

import {
    widthPercentageToDP as WP,
    heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import { colors } from '../../utils/styles';

import BackButton from '../shareds/BackButton';
import DrawerButton from '../shareds/DrawerButton';
import {
    IMAGE_LEAVES,
} from '../../utils/images';

import CustomDrawer from './CustomDrawer';

const Tab = ({currentIndex, index, title, onPress}) => {
    const mapName = (name) => {
        switch(name) {
            case 'FinedustTab':
                return '미세먼지';
            case 'OzoneTab':
                return '오존';
            case 'COTab':
                return '일산화탄소';
        }
    }

    return(
        <TouchableOpacity
            style={{
                width: '30%',
                height: HP('7.5%'),
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onPress={onPress}
        >
            <Animated.View
                style={{
                    width: '100%',
                    height: '100%',
                    // borderColor: focusAnim.interpolate({
                    //     inputRange: [0, 1],
                    //     outputRange: ['rgba(50, 50, 50, 0)', colors.main],
                    // }),
                    borderColor: currentIndex === index ? colors.main : 'rgba(50, 50, 50, 0)',
                    borderBottomWidth: WP('1%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Animated.Text style={{
                    fontSize: WP('3.5%'),
                    // color: focusAnim.interpolate({
                    //     inputRange: [0, 1],
                    //     outputRange: [colors.cloudy, 'black'],
                    // }),
                    color: currentIndex === index ? 'black' : colors.cloudy,
                    fontWeight: 'bold',
                }}>{mapName(title)}
                </Animated.Text>
            </Animated.View>
        </TouchableOpacity>
    )
}

const TabBar = (props) => {
    const { navigationState, navigation, position } = props;

    return (
        <View
            style={{
                width: '100%',
                height: HP('15%'),
                backgroundColor: 'rgb(240, 240, 240)',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Image
                source={IMAGE_LEAVES}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: WP('10%'),
                    width: WP('100%'),
                    height: HP('30%'),
                    zIndex: 0,
                }}
                resizeMode="stretch"
            />

            <DrawerButton
                onPress={()=>{
                    navigation.dispatch(DrawerActions.toggleDrawer());
                }}
            />

            <BackButton
                onPress={()=>{
                    navigation.goBack();
                }}
            />

            <View
                style={{
                    width: '90%',
                    height: HP('7.5%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        fontSize: WP('5%'),
                        fontWeight: 'bold',
                        color: 'black',
                    }}
                >수치기록
                </Text>
            </View>

            <View
                style={{
                    width: '90%',
                    height: HP('7.5%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}
            >

                {navigationState.routes.map((route, index) => {
                    // const focusAnim = navigationState.index.interpolate({          
                    //     inputRange: [index - 1, index, index + 1],          
                    //     outputRange: [0, 1, 0],
                    // })

                    return(
                        <Tab
                            currentIndex={navigationState.index}
                            index={index}
                            title={route.routeName}
                            onPress={()=>{
                                navigation.navigate(route.routeName)
                            }}
                        />
                    )
                })}
            </View>
        </View>
    )
}

const TabNavigator = createMaterialTopTabNavigator(
    {
        FinedustTab,
        OzoneTab,
        COTab,
    },
    {
        initialRouteName: 'FinedustTab',
        tabBarComponent: TabBar,
    },
);

const DrawerNavigator = createDrawerNavigator(
    {
        TabNavigator,
        Measure,
    },
    {
        contentComponent: CustomDrawer,
        drawerPosition: 'right',
    },
)

export default Navi = createAppContainer(DrawerNavigator);