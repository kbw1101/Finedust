import React, {Component} from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    Modal,
    TouchableWithoutFeedback,
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

import LinearGradient from 'react-native-linear-gradient';

import * as Progress from 'react-native-progress';
import { Easing } from 'react-native-reanimated';
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
            isRecording: false,
            visibleHowto: false,
        }
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return(
            <LinearGradient
                colors={[colors.main, 'rgb(9, 51, 6)']}
                style={{
                    width: '100%',
                    height: '100%',
                }}
                start={{x: 0, y: 0}}
                end={{x: 0, y: 1.0}}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        // backgroundColor: colors.main,
                    }}
                >
                    <Modal
                        visible={this.state.visibleHowto}
                        animationType="slide"
                        transparent={true}
                    >
                        <TouchableWithoutFeedback
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: WP('100%'),
                                height: HP('100%'),
                                backgroundColor: 'rgba(255, 255, 255, 0)',
                                justifyContent: 'flex-end',
                                alignItems: 'center',
                            }}
                            onPress={()=>{
                                this.setState({
                                    visibleHowto: false,
                                })
                            }}
                        >
                            <View
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                }}
                            >
                                <View
                                    style={{
                                        width: WP('100%'),
                                        height: '88%',
                                        backgroundColor: 'white',
                                        borderTopLeftRadius: WP('10%'),
                                        borderTopRightRadius: WP('10%'),
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                    }}
                                >
                                    <View
                                        style={{
                                            marginTop: '7.5%',
                                            width: WP('34%'),
                                            height: WP('34%'),
                                            borderRadius: WP('17%'),
                                            borderWidth: WP('3.5%'),
                                            borderColor: colors.main,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: WP('20%'),
                                                color: colors.main,
                                                fontWeight: 'bold',
                                            }}
                                        >?
                                        </Text>
                                    </View>

                                    <View
                                        style={{
                                            marginTop: '10%',
                                            width: '100%',
                                            height: '50%',
                                            flexDirection: 'column',
                                        }}
                                    >
                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                width: '100%',
                                                height: '30%',
                                            }}
                                        >
                                            <View
                                                style={{
                                                    width: '24%',
                                                    height: '100%',
                                                }}
                                            />

                                            <View
                                                style={{
                                                    width: '19%',
                                                    height: '100%',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    borderColor: 'gray',
                                                }}
                                            >
                                                <Image
                                                    source={ICON_MEASURE_NICE}
                                                    style={{
                                                        width: WP('10%'),
                                                        height: WP('10%'),
                                                    }}
                                                    resizeMode="stretch"
                                                />
                                                <Text
                                                    style={{
                                                        fontSize: WP('3%'),
                                                        color: 'gray',
                                                    }}
                                                >좋음
                                                </Text>
                                            </View>

                                            <View
                                                style={{
                                                    width: '19%',
                                                    height: '100%',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    borderColor: 'gray',
                                                }}
                                            >
                                                <Image
                                                    source={ICON_MEASURE_GOOD}
                                                    style={{
                                                        width: WP('10%'),
                                                        height: WP('10%'),
                                                    }}
                                                    resizeMode="stretch"
                                                />
                                                <Text
                                                    style={{
                                                        fontSize: WP('3%'),
                                                        color: 'gray',
                                                    }}
                                                >보통
                                                </Text>
                                            </View>

                                            <View
                                                style={{
                                                    width: '19%',
                                                    height: '100%',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    borderColor: 'gray',
                                                }}
                                            >
                                                <Image
                                                    source={ICON_MEASURE_SOSO}
                                                    style={{
                                                        width: WP('10%'),
                                                        height: WP('10%'),
                                                    }}
                                                    resizeMode="stretch"
                                                />
                                                <Text
                                                    style={{
                                                        fontSize: WP('3%'),
                                                        color: 'gray',
                                                    }}
                                                >나쁨
                                                </Text>
                                            </View>

                                            <View
                                                style={{
                                                    width: '19%',
                                                    height: '100%',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    borderColor: 'gray',
                                                }}
                                            >
                                                <Image
                                                    source={ICON_MEASURE_BAD}
                                                    style={{
                                                        width: WP('10%'),
                                                        height: WP('10%'),
                                                    }}
                                                    resizeMode="stretch"
                                                />
                                                <Text
                                                    style={{
                                                        fontSize: WP('3%'),
                                                        color: 'gray',
                                                    }}
                                                >매우나쁨
                                                </Text>
                                            </View>
                                        </View>

                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                width: '100%',
                                                height: '17.5%',
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    width: '24%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    fontWeight: 'bold',
                                                    color: 'black',
                                                    borderWidth: 2,
                                                    borderColor: colors.cloudy,
                                                }}
                                            >미세먼지
                                            </Text>
                                            <Text
                                                style={{
                                                    width: '19%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    color: 'black',
                                                    borderWidth: 2,
                                                    borderColor: colors.cloudy,
                                                }}
                                            >0~30
                                            </Text>
                                            <Text
                                                style={{
                                                    width: '19%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    color: 'black',
                                                    borderWidth: 2,
                                                    borderColor: colors.cloudy,
                                                }}
                                            >31~80
                                            </Text>
                                            <Text
                                                style={{
                                                    width: '19%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    color: 'black',
                                                    borderWidth: 2,
                                                    borderColor: colors.cloudy,
                                                }}
                                            >81~150
                                            </Text>
                                            <Text
                                                style={{
                                                    width: '19%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    color: 'black',
                                                    borderWidth: 2,
                                                    borderColor: colors.cloudy,
                                                }}
                                            >151~
                                            </Text>
                                        </View>

                                        {/* <View
                                            style={{
                                                flexDirection: 'row',
                                                width: '100%',
                                                height: '17.5%',
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    width: '24%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    fontWeight: 'bold',
                                                    color: 'black',
                                                    borderWidth: 2,
                                                    borderColor: colors.cloudy,
                                                }}
                                            >초 미세먼지
                                            </Text>
                                            <Text
                                                style={{
                                                    width: '19%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    color: 'black',
                                                    borderWidth: 2,
                                                    borderColor: colors.cloudy,
                                                }}
                                            >0~15
                                            </Text>
                                            <Text
                                                style={{
                                                    width: '19%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    color: 'black',
                                                    borderWidth: 2,
                                                    borderColor: colors.cloudy,
                                                }}
                                            >16~50
                                            </Text>
                                            <Text
                                                style={{
                                                    width: '19%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    color: 'black',
                                                    borderWidth: 2,
                                                    borderColor: colors.cloudy,
                                                }}
                                            >51~100
                                            </Text>
                                            <Text
                                                style={{
                                                    width: '19%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    color: 'black',
                                                    borderWidth: 2,
                                                    borderColor: colors.cloudy,
                                                }}
                                            >101~
                                            </Text>
                                        </View> */}

                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                width: '100%',
                                                height: '17.5%',
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    width: '24%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    fontWeight: 'bold',
                                                    color: 'black',
                                                    borderWidth: 2,
                                                    borderColor: colors.cloudy,
                                                }}
                                            >오존
                                            </Text>
                                            <Text
                                                style={{
                                                    width: '19%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    color: 'black',
                                                    borderWidth: 2,
                                                    borderColor: colors.cloudy,
                                                }}
                                            >0~0.03
                                            </Text>
                                            <Text
                                                style={{
                                                    width: '19%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    color: 'black',
                                                    borderWidth: 2,
                                                    borderColor: colors.cloudy,
                                                }}
                                            >0.03~0.09
                                            </Text>
                                            <Text
                                                style={{
                                                    width: '19%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    color: 'black',
                                                    borderWidth: 2,
                                                    borderColor: colors.cloudy,
                                                }}
                                            >0.09~0.15
                                            </Text>
                                            <Text
                                                style={{
                                                    width: '19%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    color: 'black',
                                                    borderWidth: 2,
                                                    borderColor: colors.cloudy,
                                                }}
                                            >0.15~
                                            </Text>
                                        </View>

                                        <View
                                            style={{
                                                flexDirection: 'row',
                                                width: '100%',
                                                height: '17.5%',
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    width: '24%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    fontWeight: 'bold',
                                                    color: 'black',
                                                    borderWidth: 2,
                                                    borderColor: colors.cloudy,
                                                }}
                                            >일산화탄소
                                            </Text>
                                            <Text
                                                style={{
                                                    width: '19%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    color: 'black',
                                                    borderWidth: 2,
                                                    borderColor: colors.cloudy,
                                                }}
                                            >0~2
                                            </Text>
                                            <Text
                                                style={{
                                                    width: '19%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    color: 'black',
                                                    borderWidth: 2,
                                                    borderColor: colors.cloudy,
                                                }}
                                            >2~9
                                            </Text>
                                            <Text
                                                style={{
                                                    width: '19%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    color: 'black',
                                                    borderWidth: 2,
                                                    borderColor: colors.cloudy,
                                                }}
                                            >9~15
                                            </Text>
                                            <Text
                                                style={{
                                                    width: '19%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    color: 'black',
                                                    borderWidth: 2,
                                                    borderColor: colors.cloudy,
                                                }}
                                            >15~
                                            </Text>
                                        </View>
                                    </View>

                                    <Text
                                        style={{
                                            width: '100%',
                                            height: '15%',
                                            paddingHorizontal: '5%',
                                            fontSize: WP('3%'),
                                            color: 'gray',
                                            textAlign: 'left',
                                            textAlignVertical: 'center',
                                        }}
                                    >* 미세먼지, 오존, 일산화탄소는 현재위치에서의 수치를 측정한 것입니다.
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </Modal>

                    <View
                        style={{
                            position: 'absolute',
                            top: HP('15%'),
                            left: -WP('5%'),
                            width: WP('18%'),
                            height: WP('18%'),
                            borderRadius: WP('9%'),
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            top: HP('22%'),
                            left: WP('4%'),
                            width: WP('12%'),
                            height: WP('12%'),
                            borderRadius: WP('6%'),
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            top: HP('26%'),
                            left: WP('85%'),
                            width: WP('12%'),
                            height: WP('12%'),
                            borderRadius: WP('6%'),
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            top: HP('29%'),
                            left: WP('90%'),
                            width: WP('18%'),
                            height: WP('18%'),
                            borderRadius: WP('9%'),
                            backgroundColor: 'rgba(255, 255, 255, 0.4)',
                        }}
                    />

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
                                marginTop: HP('3.5%'),
                                width: WP('36%'),
                                height: WP('36%'),
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            onPress={()=>{
                                // Do push.
                                this.setState({
                                    isRecording: !this.state.isRecording,
                                })
                            }}
                        >
                            <LinearGradient
                                colors={['rgb(120, 120, 120)', 'rgb(220, 220, 220)']}
                                style={{
                                    width: WP('36%'),
                                    height: WP('36%'),
                                    borderRadius: WP('18%'),
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <View/>
                            </LinearGradient>

                            <LinearGradient
                                colors={['rgb(240, 240, 240)', 'rgb(140, 140, 140)']}
                                style={{
                                    position: 'absolute',
                                    left: WP('2.5%'),
                                    top: WP('2.5%'),
                                    width: WP('31%'),
                                    height: WP('31%'),
                                    borderRadius: WP('15.5%'),
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: WP('7%'),
                                        fontWeight: 'bold',
                                        color: 'black',
                                    }}
                                >{this.state.isRecording ? 'CANCEL' : 'PUSH'}
                                </Text>
                            </LinearGradient>

                            {this.state.isRecording ? (
                                // <ActivityIndicator
                                //     style={{
                                //         position: 'absolute',
                                //         top: -WP('5%'),
                                //         left: -WP('5%'),
                                //         zIndex: 2,
                                //     }}
                                    
                                //     size={WP('46%')}
                                //     color='white'
                                // />
                                <Progress.Circle
                                    style={{
                                        position: 'absolute',
                                        top: -WP('4%'),
                                        left: -WP('4%'),
                                    }}
                                    size={WP('44%')}
                                    borderWidth={WP('0.5%')}
                                    color='white'
                                    indeterminate
                                    borderWidth={WP('1%')}
                                />
                            ) : (
                                <View/>
                            )}
                        </TouchableOpacity>

                        <Text
                            style={{
                                marginTop: HP('4%'),
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
                                    onPress={()=>{
                                        this.setState({
                                            visibleHowto: true,
                                        })
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
                        tintColor='white'
                    />

                    <DrawerButton
                        onPress={()=>{
                            this.props.navigation.dispatch(DrawerActions.toggleDrawer());
                        }}
                        tintColor='white'
                    />
                </View>
            </LinearGradient>
        )
    }
}