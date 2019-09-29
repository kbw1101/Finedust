import React, {Component} from 'react';

import {
    View,
    TouchableOpacity,
    ImageBackground,
    Image,
    Text,
} from 'react-native';

import {
    widthPercentageToDP as WP,
    heightPercentageToDP as HP,
} from 'react-native-responsive-screen';    

import { IMAGE_DRAWER_BACKGROUND } from '../../utils/images';

import {
    ICON_DRAWER_HOWTO,
    ICON_DRAWER_MEASURE,
    ICON_DRAWER_RECORD,
    ICON_DRAWER_REVIEW,
} from '../../utils/icons';

const DrawerItem = ({source, title, onPress}) => {
    return(
        <TouchableOpacity
            style={{
                width: '100%',
                height: HP('8%'),
                flexDirection: 'row',
                backgroundColor: 'white',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginBottom: HP('3%'),
            }}
            onPress={onPress}
        >
            <View
                style={{
                    width: '3%',
                    height: '100%',
                    backgroundColor: 'yellow',
                }}
            />

            <View
                style={{
                    marginLeft: WP('3%'),
                    width: WP('10%'),
                    height: WP('10%'),
                    backgroundColor: 'rgb(211, 233, 225)',
                    borderRadius: WP('5%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Image
                    source={source}
                    style={{
                        position: 'absolute',
                        top: WP('2.5%'),
                        left: WP('2.5%'),
                        width: WP('5%'),
                        height: WP('5%'),
                    }}
                    resizeMode="stretch"
                />
            </View>

            <Text
                style={{
                    width: '70%',
                    height: '100%',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontWeight: 'bold',
                    fontSize: WP('4%'),
                    color: 'black',
                }}
            >{title}
            </Text>
        </TouchableOpacity>
    )
}

export default class App extends Component<Props> {
    render() {
        return(
            <View
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(1, 190, 105, 0.5)',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}
            >
                <ImageBackground
                    source={IMAGE_DRAWER_BACKGROUND}
                    style={{
                        width: '100%',
                        height: HP('40%'),
                        zIndex: 0,
                    }}
                    resizeMode="stretch"
                >
                </ImageBackground>

                <DrawerItem
                    source={ICON_DRAWER_MEASURE}
                    title="수치 측정"
                    onPress={()=>{
                        this.props.navigation.navigate('Measure');
                    }}
                />

                <DrawerItem
                    source={ICON_DRAWER_RECORD}
                    title="수치 기록"
                    onPress={()=>{
                        this.props.navigation.navigate('TabNavigator');
                    }}
                />

                <DrawerItem
                    source={ICON_DRAWER_HOWTO}
                    title="Mask Styler 사용법"
                    onPress={()=>{
                        this.props.navigation.navigate('Howto');
                    }}
                />

                <DrawerItem
                    source={ICON_DRAWER_REVIEW}
                    title="리뷰"
                    onPress={()=>{
                        this.props.navigation.navigate('Review');
                    }}
                />
            </View>
        )
    }
}