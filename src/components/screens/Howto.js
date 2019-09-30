import React, {Component} from 'react';

import {
    View,
    Image,
    Text,
} from 'react-native';

import {
    widthPercentageToDP as WP,
    heightPercentageToDP as HP,
} from 'react-native-responsive-screen';

import BackButton from '../shareds/BackButton';
import DrawerButton from '../shareds/DrawerButton';

import LinearGradient from 'react-native-linear-gradient';

import {
    colors,
} from '../../utils/styles';

import { DrawerActions } from 'react-navigation-drawer';

import {
    ICON_HOWTO_LEAF,
    ICON_CAPSULE,
    ICON_CLEANER,
    ICON_MASK_BOX,
} from '../../utils/icons';

export default class Howto extends Component<Props> {
    render() {
        return(
            <LinearGradient
                colors={['rgb(19, 138, 95)', 'rgb(1, 189, 104)']}
                style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        marginTop: HP('2%'),
                        fontSize: WP('5%'),
                        fontWeight: 'bold',
                        color: 'white',
                    }}
                >Mask Style 사용법
                </Text>

                <View
                    style={{
                        marginTop: HP('6%'),
                        width: '90%',
                        height: '80%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        borderRadius: WP('3%'),
                    }}
                >
                    <Image
                        source={ICON_HOWTO_LEAF}
                        style={{
                            position: 'absolute',
                            top: -HP('7%'),
                            left: WP('27%'),
                            width: WP('33%'),
                            height: HP('14%'),
                        }}
                        resizeMode='stretch'
                    />

                    <View
                        style={{
                            width: '100%',
                            height: '20%',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                paddingLeft: WP('6%'),
                                width: '70%',
                                height: '100%',
                            }}
                        >
                            <View
                                style={{
                                    position: 'absolute',
                                    top: -HP('3%'),
                                    left: WP('10%'),
                                    width: WP('16%'),
                                    height: WP('16%'),
                                    borderRadius: WP('8%'),
                                    backgroundColor: 'rgba(138, 162, 203, 0.3)',
                                }}
                            />

                            <Text
                                style={{
                                    fontSize: WP('6%'),
                                    fontWeight: 'bold',
                                    color: colors.main,
                                }}
                            >첫번째,
                            </Text>
                            <Text
                                style={{
                                    marginTop: HP('1%'),
                                    fontSize: WP('3%'),
                                    color: 'black',
                                }}
                            >마스크 보관함 안에 마스크를 넣습니다.
                            </Text>
                        </View>

                        <View
                            style={{
                                width: '30%',
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}
                        >
                            <View
                                style={{
                                    position: 'absolute',
                                    top: -HP('1%'),
                                    left: -WP('6%'),
                                    width: WP('36%'),
                                    height: WP('36%'),
                                    borderRadius: WP('18%'),
                                    backgroundColor: 'rgba(138, 162, 203, 0.1)',
                                }}
                            />

                            <Image
                                style={{
                                    width: '70%',
                                    height: '80%',
                                }}
                                resizeMode='stretch'
                                source={ICON_MASK_BOX}
                            />
                        </View>
                    </View>

                    <View
                        style={{
                            marginTop: HP('5%'),
                            width: '100%',
                            height: '20%',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                width: '40%',
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <View
                                style={{
                                    position: 'absolute',
                                    top: -HP('5%'),
                                    left: -WP('6%'),
                                    width: WP('36%'),
                                    height: WP('36%'),
                                    borderRadius: WP('18%'),
                                    backgroundColor: 'rgba(138, 162, 203, 0.1)',
                                }}
                            />

                            <Image
                                style={{
                                    width: '60%',
                                    height: '70%',
                                }}
                                resizeMode='stretch'
                                source={ICON_CAPSULE}
                            />
                        </View>

                        <View
                            style={{
                                paddingLeft: WP('2%'),
                                width: '60%',
                                height: '100%',
                            }}
                        >
                            <View
                                style={{
                                    position: 'absolute',
                                    top: -HP('3%'),
                                    left: WP('10%'),
                                    width: WP('16%'),
                                    height: WP('16%'),
                                    borderRadius: WP('8%'),
                                    backgroundColor: 'rgba(138, 162, 203, 0.3)',
                                }}
                            />

                            <Text
                                style={{
                                    fontSize: WP('6%'),
                                    fontWeight: 'bold',
                                    color: colors.main,
                                }}
                            >두번째,
                            </Text>
                            <Text
                                style={{
                                    marginTop: HP('1%'),
                                    fontSize: WP('3%'),
                                    color: 'black',
                                }}
                            >탈취캡슐을 사용하여{'\n'}마스크의 찌든 냄새를 빼줍니다.
                            </Text>
                        </View>
                    </View>

                    <View
                        style={{
                            marginTop: HP('5%'),
                            width: '100%',
                            height: '20%',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                paddingLeft: WP('6%'),
                                width: '70%',
                                height: '100%',
                            }}
                        >
                            <View
                                style={{
                                    position: 'absolute',
                                    top: -HP('3%'),
                                    left: WP('10%'),
                                    width: WP('16%'),
                                    height: WP('16%'),
                                    borderRadius: WP('8%'),
                                    backgroundColor: 'rgba(138, 162, 203, 0.3)',
                                }}
                            />

                            <Text
                                style={{
                                    fontSize: WP('6%'),
                                    fontWeight: 'bold',
                                    color: colors.main,
                                }}
                            >세번째,
                            </Text>
                            <Text
                                style={{
                                    marginTop: HP('1%'),
                                    fontSize: WP('3%'),
                                    color: 'black',
                                }}
                            >미니흡입기를 내부에서 미세먼지를{'\n'}제거합니다.
                            </Text>
                        </View>

                        <View
                            style={{
                                width: '30%',
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                            }}
                        >
                            <View
                                style={{
                                    position: 'absolute',
                                    top: -HP('1%'),
                                    left: -WP('6%'),
                                    width: WP('36%'),
                                    height: WP('36%'),
                                    borderRadius: WP('18%'),
                                    backgroundColor: 'rgba(138, 162, 203, 0.1)',
                                }}
                            />

                            <View
                                style={{
                                    position: 'absolute',
                                    top: HP('11%'),
                                    left: WP('14%'),
                                    width: WP('18%'),
                                    height: WP('18%'),
                                    borderRadius: WP('9%'),
                                    backgroundColor: 'rgba(138, 162, 203, 0.25)',
                                }}
                            />

                            <Image
                                style={{
                                    width: '70%',
                                    height: '80%',
                                }}
                                resizeMode='stretch'
                                source={ICON_CLEANER}
                            />
                        </View>
                    </View>
                </View>

                <BackButton
                    onPress={()=>{
                        this.props.navigation.goBack()
                    }}
                    tintColor='white'
                />
                <DrawerButton
                    onPress={()=>{
                        this.props.navigation.dispatch(DrawerActions.toggleDrawer())
                    }}
                    tintColor='white'
                />
            </LinearGradient>
        )
    }
}