import React, {Component} from 'react';
import {
    Image,
    View,
    Modal,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    ImageBackground,
    FlatList,
} from 'react-native';

import {
    ICON_FINEDUST,
} from '../../utils/icons';

import {
    IMAGE_LOADING,
} from '../../utils/images';

import {
    widthPercentageToDP as WP,
    heightPercentageToDP as HP,
} from 'react-native-responsive-screen';

import {
    colors,
} from '../../utils/styles';

import BluetoothSerial from 'react-native-bluetooth-serial-next';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionSetBluetooth } from '../../../actions/index';

const dummyListData = [
    {id: 0, name: 'FB155V2.2.1', mac: '00:19:01:37:7F:CC'},
    {id: 1, name: 'YONGDEV', mac: '60:6C66:BA:C3:D0'},
]

class Loading extends Component<Props> {
    mytimeout = null;

    permissionCheck() {
        this.setState({
            visibleBluetoothList: false,
        })

        BluetoothSerial.disconnectAll();
        BluetoothSerial.discoverUnpairedDevices()
        .then((values) => {
            if(this.state.selectFlag == false) {
                this.setState({
                    listData: values,
                    visibleBluetoothList: true,
                })
            }
        })
        .catch((err) => {
        })

        if(this.state.visibleBluetoothList == true) {
            mytimeout = setTimeout(() => {
                this.permissionCheck();
            }, 3000);
        }
    }

    constructor(props) {
        super(props);

        this.state = {
            visibleBluetoothList: false,
            listData: [],
            selectFlag: false,
        };

        this.permissionCheck();
    }

    render() {
        return(
            <View
                style={{
                    width: '100%',
                    height: '100%',
                }}
            >
                <Modal
                    visible={this.state.visibleBluetoothList}
                    transparent={true}
                    animationType="fade"
                >
                    <View
                        style={{
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(50, 50, 50, 0.7)'
                        }}
                    >
                        <View
                            style={{
                                width: '90%',
                                height: '60%',
                                borderRadius: WP('5%'),
                                backgroundColor: 'white',
                            }}
                        >
                            <View
                                style={{
                                    width: '100%',
                                    height: '15%',
                                    borderBottomWidth: 1,
                                    borderColor: colors.cloudy,
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                }}
                            >   
                                <Text
                                    style={{
                                        marginLeft: WP('5%'),
                                        fontWeight: 'bold',
                                        fontSize: WP('5%'),
                                        color: 'gray',
                                    }}
                                >Bluetooth 장치선택
                                </Text>
                            </View>

                            {/* <View
                                style={{
                                    width: '100%',
                                    height: '10%',
                                    borderBottomWidth: 1,
                                    borderColor: colors.cloudy,
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                }}
                            >   
                                <Text
                                    style={{
                                        marginLeft: WP('5%'),
                                        fontSize: WP('3.5%'),
                                        color: 'gray',
                                    }}
                                >장치선택
                                </Text>
                            </View> */}

                            <View
                                style={{
                                    width: '100%',
                                    height: '70%',
                                }}
                            >
                                <FlatList
                                    keyExtractor={(item, index) => index.toString()}
                                    data={this.state.listData}
                                    renderItem={({item}) => 
                                        <TouchableOpacity
                                            style={{
                                                width: '100%',
                                                height: HP('9%'),
                                                borderBottomWidth: 1,
                                                borderColor: colors.cloudy,
                                                justifyContent: 'center',
                                                alignItems: 'flex-start',
                                                paddingLeft: WP('5%'),
                                            }}
                                            onPress={()=>{
                                                this.setState({
                                                    visibleBluetoothList: false,
                                                    selectFlag: true,
                                                })

                                                BluetoothSerial.connect(item.address)
                                                .then((res) => {
                                                    this.props.actionSetBluetooth(item);

                                                    console.log(res);
                                                    this.setState({
                                                        visibleBluetoothList: false,
                                                    })
                                                    clearTimeout(this.mytimeout);
                                                    this.props.navigation.navigate('Measure');
                                                })
                                                .catch((err) => {
                                                    console.log(err)
                                                    this.setState({
                                                        visibleBluetoothList: false,
                                                        selectFlag: false,
                                                    })
                                                    this.permissionCheck();
                                                });
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: WP('3.5%'),
                                                    color: 'gray',
                                                    fontWeight: 'bold',
                                                }}
                                            >{item.name}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontSize: WP('3.5%'),
                                                    color: 'gray',
                                                }}
                                            >{item.address}
                                            </Text>
                                        </TouchableOpacity>
                                    }
                                />
                            </View>

                            <TouchableOpacity
                                style={{
                                    width: '100%',
                                    height: '15%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: colors.main,
                                    borderBottomStartRadius: WP('5%'),
                                    borderBottomEndRadius: WP('5%'),
                                }}
                                onPress={()=>{
                                    this.permissionCheck();
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: WP('4%'),
                                        fontWeight: 'bold',
                                        color: 'white',
                                    }}
                                >장치 검색
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                <ImageBackground
                    source={IMAGE_LOADING}
                    style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                    resizeMode="stretch"
                >
                    <View
                        style={{
                            marginTop: HP('20%'),
                            width: WP('30%'),
                            height: WP('30%'),
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: WP('3%'),
                        }}
                    >
                        <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: WP('30%'),
                                height: WP('30%'),
                                transform: [{rotate: '45deg'}],
                                zIndex: 0,
                                backgroundColor: 'rgba(125, 214, 175, 1)',
                                borderRadius: WP('3%'),
                            }}
                        />

                        <View
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: WP('30%'),
                                height: WP('30%'),
                                zIndex: 0,
                                backgroundColor: 'white',
                                borderRadius: WP('3%'),
                            }}
                        />

                        <Image
                            source={ICON_FINEDUST}
                            style={{
                                width: WP('30%'),
                                height: WP('30%'),
                            }}
                            resizeMode="stretch"
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: HP('5%'),
                            fontSize: WP('6%'),
                            color: 'white',
                            fontWeight: 'bold',
                        }}
                    >미세 측정
                    </Text>

                    {this.state.visibleBluetoothList ? (
                        <View/>
                    ) : (
                        <ActivityIndicator
                            style={{
                                marginTop: HP('10%'),
                            }}
                            size={WP('15%')}
                            color='white'
                        />
                    )}
                   
                </ImageBackground>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const { bluetoothReducer } = state;
    return { bluetoothReducer};
}
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        actionSetBluetooth,
    }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(Loading);