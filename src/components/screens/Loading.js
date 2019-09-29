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
    IMAGE_LOADING,
} from '../../utils/images';

import {
    widthPercentageToDP as WP,
    heightPercentageToDP as HP,
} from 'react-native-responsive-screen';

import {
    colors,
} from '../../utils/styles';

const dummyListData = [
    {id: 0, name: 'FB155V2.2.1', mac: '00:19:01:37:7F:CC'},
    {id: 1, name: 'YONGDEV', mac: '60:6C66:BA:C3:D0'},
]

export default class Loading extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            visibleBluetoothList: false,
            listData: dummyListData,
        };

        setTimeout(()=>{
            this.setState({
                visibleBluetoothList: true,
            })
        }, 2000);
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
                                                })
                                                this.props.navigation.navigate('MainTabNavigator');
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
                                            >{item.mac}
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
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    resizeMode="stretch"
                >
                    {this.state.visibleBluetoothList ? (
                        <View/>
                    ) : (
                        <ActivityIndicator
                            style={{
                                marginTop: HP('40%'),
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