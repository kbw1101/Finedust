import React, {Component} from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';

import {
    widthPercentageToDP as WP,
    heightPercentageToDP as HP,
} from 'react-native-responsive-screen';

import BackButton from '../shareds/BackButton';
import DrawerButton from '../shareds/DrawerButton';
import { DrawerActions } from 'react-navigation-drawer';
import { colors } from '../../utils/styles';

import {
    ICON_MEASURE_BAD,
    ICON_MEASURE_GOOD,
    ICON_MEASURE_NICE,
    ICON_MEASURE_SOSO,
    ICON_MEASURE_QUESTION,
} from '../../utils/icons';

import { BoxShadow } from 'react-native-shadow'; 

const MeasureBox = ({title, unit, value, nice, good, soso}) => {
    return(
        <BoxShadow
            setting={{
                width: WP('38%'),
                height: HP('20%'),
                radius: WP('3%'),
                color:"#aaa",
                border:5,
                opacity:0.3,
                x:0,
                y:2,
                style:{
                    marginVertical:5,
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            }}
        >
            <View
                style={{
                    width: '97%',
                    height: '97%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: WP('3%'),
                }}
            >
                <Image
                    style={{
                        width: WP('10%'),
                        height: WP('10%'),
                    }}
                    resizeMode='stretch'
                    source={value < nice ? ICON_MEASURE_NICE : value < good ? ICON_MEASURE_GOOD : value < soso ? ICON_MEASURE_SOSO : ICON_MEASURE_BAD}
                />
                <Text
                    style={{
                        marginTop: HP('2%'),
                        fontSize: WP('4%'),
                        fontWeight: 'bold',
                        color: 'black',
                    }}
                >{title}
                </Text>

                <View
                    style={{
                        marginTop: HP('1%'),
                        width: '100%',
                        height: '25%',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                    }}
                >
                    <Text
                        style={{
                            fontSize: WP('7%'),
                            fontWeight: 'bold',
                            color: colors.main,
                            width : title === '오존' ? '70%' : '48%',
                            height: '100%',
                            textAlign: 'right',
                            textAlignVertical: 'bottom',
                        }}
                    >{value}
                    </Text>

                    <Text
                        style={{
                            marginLeft: WP('1%'),
                            fontSize: WP('3.5%'),
                            color: 'black',
                            width : title === '오존' ? '28%' : '48%',
                            height: '100%',
                            textAlign: 'left',
                            textAlignVertical: 'center',
                        }}
                    >{unit}
                    </Text>
                </View>
            </View>
        </BoxShadow>
    )
}

export default class Measure extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            lastRecord: '2019/09/30 08:44:52',
            finedust: 60,
            ozone: 0.001,
            co: 0.3,
        }
    }

    render() {
        return(
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    backgroundColor: colors.main,
                }}
            >
            
                <View
                    style={{
                        width: '100%',
                        height: '45%',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    <Text
                        style={{
                            marginTop: HP('2%'),
                            width: '100%',
                            height: '10%',
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            fontSize: WP('5%'),
                            fontWeight: 'bold',
                            color: 'white',
                        }}
                    >수치측정
                    </Text>
                    <Text
                        style={{
                            width: '100%',
                            height: '7.5%',
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            fontSize: WP('3.5%'),
                            color: 'white',
                        }}
                    >측정시작
                    </Text>

                    <TouchableOpacity
                        style={{
                            marginTop: HP('3%'),
                            width: WP('40%'),
                            height: WP('40%'),
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgb(240, 240, 240)',
                            borderWidth: WP('3%'),
                            borderColor: 'rgb(200, 200, 200)',
                            borderRadius: WP('20%'),
                        }}
                        onPress={()=>{
                            // Do push.
                        }}
                    >  
                        <Text
                            style={{
                                fontSize: WP('7%'),
                                fontWeight: 'bold',
                                color: 'black',
                            }}
                        >PUSH
                        </Text>
                    </TouchableOpacity>

                    <Text
                        style={{
                            marginTop: HP('2%'),
                            fontSize: WP('4%'),
                            fontWeight: 'bold',
                            color: 'white',
                        }}
                    >최근 측정: {this.state.lastRecord}
                    </Text>
                </View>

                <View
                    style={{
                        width: '100%',
                        height: '55%',
                        borderTopLeftRadius: WP('10%'),
                        borderTopRightRadius: WP('10%'),
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: 'rgb(255, 255, 255)',
                        padding: WP('10%'),
                    }}
                >
                    <View
                        style={{
                            width: '100%',
                            height: '47.5%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <MeasureBox
                            title="미세먼지"
                            unit="UG/M3"
                            value={this.state.finedust}
                            nice={30}
                            good={50}
                            soso={70}
                        />

                        <MeasureBox
                            title="오존"
                            unit="PPM"
                            value={this.state.ozone}
                            nice={0.001}
                            good={0.002}
                            soso={0.003}
                        />
                    </View>

                    <View
                        style={{
                            marginTop: HP('3%'),
                            width: '100%',
                            height: '47.5%',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                        }}
                    >
                        <MeasureBox
                            title="일산화탄소"
                            unit="UG/M3"
                            value={this.state.co}
                            nice={0.5}
                            good={0.75}
                            soso={1.0}
                        />

                        <BoxShadow
                            setting={{
                                width: WP('38%'),
                                height: HP('20%'),
                                radius: WP('3%'),
                                color:"#aaa",
                                border:5,
                                opacity:0.3,
                                x:0,
                                y:2,
                                style:{
                                    marginVertical:5,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    width: '97%',
                                    height: '97%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: 'white',
                                    borderRadius: WP('3%'),
                                }}
                            >
                                <Image
                                    style={{
                                        width: WP('10%'),
                                        height: WP('10%'),
                                    }}
                                    resizeMode='stretch'
                                    source={ICON_MEASURE_QUESTION}
                                />
                                <Text
                                    style={{
                                        marginTop: HP('2%'),
                                        fontSize: WP('4%'),
                                        fontWeight: 'bold',
                                        color: 'black',
                                    }}
                                >사용법
                                </Text>
                            </TouchableOpacity>
                        </BoxShadow>
                    </View>
                </View>

                <BackButton
                    onPress={()=>{
                        this.props.navigation.goBack();
                    }}
                />

                <DrawerButton
                    onPress={()=>{
                        this.props.navigation.dispatch(DrawerActions.toggleDrawer());
                    }}
                />
            </View>
        )
    }
}