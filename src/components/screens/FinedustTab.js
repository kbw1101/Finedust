import React, {Component} from 'react';
import {
    StyleSheet, 
    View,
    TouchableOpacity,
    Text,
    Image,
    FlatList,
} from 'react-native';

import {
    widthPercentageToDP as WP,
    heightPercentageToDP as HP,
} from 'react-native-responsive-screen';
import { colors } from '../../utils/styles';

import {
    ICON_LEFT_TRIANGLE,
    ICON_RIGHT_TRIANGLE,
} from '../../utils/icons';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });
  
type Props = {};

const listDataFine = [
    {id: 0, date: '2019-09-01 08:44', value: 60},
    {id: 1, date: '2019-09-02 09:52', value: 57},
    {id: 2, date: '2019-09-03 08:42', value: 42},
    {id: 3, date: '2019-09-04 08:49', value: 58},
    {id: 4, date: '2019-09-05 08:56', value: 62},
    {id: 5, date: '2019-09-06 08:50', value: 77},
    {id: 6, date: '2019-09-07 08:48', value: 56},
    {id: 7, date: '2019-09-08 08:29', value: 44},
    {id: 8, date: '2019-09-09 08:39', value: 31},
    {id: 9, date: '2019-09-10 08:30', value: 45},
    {id: 10, date: '2019-09-11 08:40', value: 40},
    {id: 11, date: '2019-09-12 08:44', value: 57},
    {id: 12, date: '2019-09-13 08:41', value: 42},
    {id: 13, date: '2019-09-14 08:57', value: 39},
    {id: 14, date: '2019-09-15 08:43', value: 62},
    {id: 15, date: '2019-09-16 08:43', value: 19},
    {id: 16, date: '2019-09-17 08:37', value: 56},
    {id: 17, date: '2019-09-18 08:49', value: 44},
    {id: 18, date: '2019-09-19 08:46', value: 38},
    {id: 19, date: '2019-09-20 08:21', value: 45},
    {id: 20, date: '2019-09-21 08:44', value: 40},
    {id: 21, date: '2019-09-22 08:46', value: 57},
    {id: 22, date: '2019-09-23 08:18', value: 42},
    {id: 23, date: '2019-09-24 08:43', value: 39},
    {id: 24, date: '2019-09-25 08:41', value: 62},
    {id: 25, date: '2019-09-26 08:55', value: 19},
    {id: 26, date: '2019-09-27 08:47', value: 56},
    {id: 27, date: '2019-09-28 08:29', value: 44},
    {id: 28, date: '2019-09-29 08:40', value: 38},
    {id: 29, date: '2019-09-30 08:31', value: 45},
]

export default class App extends Component<Props> {
  constructor(props) {
      super(props);

      this.state = {
        tabIndex: 0,
        dateString: '2019/09/06 ~ 2019/09/12',
        average: 60,
        max: 75,
        min: 30,
        listYear: 2019,
        isListMode: true,
        listData: listDataFine,
      }
  }

  render() {
    return (
      <View style={styles.container}>
        <View
            style={{
                marginTop: '5%',
                width: '90%',
                height: '8%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <TouchableOpacity
                style={{
                    width: '31%',
                    marginHorizontal: '1%',
                    height: '100%',
                    backgroundColor: 'rgba(230, 230, 230, 0.7)',
                    borderWidth: this.state.tabIndex === 0 ? 2 : 0,
                    borderColor: colors.main,
                    borderRadius: WP('1%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={()=>{
                    this.setState({
                        tabIndex: 0,
                    })
                }}
            >
                <Text style={{
                    fontSize: WP('4%'),
                    fontWeight: 'bold',
                    color: this.state.tabIndex === 0 ? 'black' : 'gray',
                }}>주
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    marginHorizontal: '1%',
                    width: '31%',
                    height: '100%',
                    backgroundColor: 'rgba(230, 230, 230, 0.7)',
                    borderWidth: this.state.tabIndex === 1 ? 2 : 0,
                    borderColor: colors.main,
                    borderRadius: WP('1%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={()=>{
                    this.setState({
                        tabIndex: 1,
                    })
                }}
            >
                <Text style={{
                    fontSize: WP('4%'),
                    fontWeight: 'bold',
                    color: this.state.tabIndex === 1 ? 'black' : 'gray',
                }}>월
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    marginHorizontal: '1%',
                    width: '31%',
                    height: '100%',
                    backgroundColor: 'rgba(230, 230, 230, 0.7)',
                    borderWidth: this.state.tabIndex === 2 ? 2 : 0,
                    borderColor: colors.main,
                    borderRadius: WP('1%'),
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={()=>{
                    this.setState({
                        tabIndex: 2,
                    })
                }}
            >
                <Text style={{
                    fontSize: WP('4%'),
                    fontWeight: 'bold',
                    color: this.state.tabIndex === 2 ? 'black' : 'gray',
                }}>년
                </Text>
            </TouchableOpacity>
        </View>

        <View
            style={{
                width: '60%',
                height: '8%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <TouchableOpacity   
                style={{
                    width: '15%',
                    height: '80%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={()=>{

                }}
            >
                <Image
                    source={ICON_LEFT_TRIANGLE}
                    style={{
                        width: '80%',
                        height: '80%',
                        tintColor: colors.main,
                    }}
                    resizeMode="stretch"
                />
            </TouchableOpacity>

            <Text
                style={{
                    width: '70%',
                    height: '100%',
                    textAlign: 'center',
                    textAlignVertical: 'center',
                    fontSize: WP('3%'),
                    fontWeight: 'bold',
                    color: 'black',
                }}
            >{this.state.dateString}
            </Text>

            <TouchableOpacity   
                style={{
                    width: '15%',
                    height: '80%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={()=>{

                }}
            >
                <Image
                    source={ICON_RIGHT_TRIANGLE}
                    style={{
                        width: '80%',
                        height: '80%',
                        tintColor: colors.main,
                    }}
                    resizeMode="stretch"
                />
            </TouchableOpacity>
        </View>

        <View
            style={{
                width: '90%',
                height: '16%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        fontSize: WP('3%'),
                        fontWeight: 'bold',
                        color: 'black',
                    }}
                >평균
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    <Text
                        style={{
                            fontSize: WP('6%'),
                            color: colors.main,
                            fontWeight: 'bold',
                            textAlignVertical: 'bottom',
                        }}
                    >{this.state.average}
                    </Text>

                    <Text
                        style={{
                            marginLeft: WP('1%'),
                            fontSize: WP('3%'),
                            color: 'black',
                            textAlignVertical: 'bottom',
                        }}
                    >UG/M3
                    </Text>
                </View>
            </View>

            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        fontSize: WP('3%'),
                        fontWeight: 'bold',
                        color: 'black',
                    }}
                >최고
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    <Text
                        style={{
                            fontSize: WP('6%'),
                            color: colors.main,
                            fontWeight: 'bold',
                            textAlignVertical: 'bottom',
                        }}
                    >{this.state.max}
                    </Text>

                    <Text
                        style={{
                            marginLeft: WP('1%'),
                            fontSize: WP('3%'),
                            color: 'black',
                            textAlignVertical: 'bottom',
                        }}
                    >UG/M3
                    </Text>
                </View>
            </View>

            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text
                    style={{
                        fontSize: WP('3%'),
                        fontWeight: 'bold',
                        color: 'black',
                    }}
                >최저
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    <Text
                        style={{
                            fontSize: WP('6%'),
                            color: colors.main,
                            fontWeight: 'bold',
                            textAlignVertical: 'bottom',
                        }}
                    >{this.state.min}
                    </Text>

                    <Text
                        style={{
                            marginLeft: WP('1%'),
                            fontSize: WP('3%'),
                            color: 'black',
                            textAlignVertical: 'bottom',
                        }}
                    >UG/M3
                    </Text>
                </View>
            </View>
        </View>

        <View
            style={{
                width: '100%',
                height: '68%',
                borderRadius: WP('8%'),
                backgroundColor: 'rgb(220, 220, 220)',
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}
        >
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    top: HP('2.5%'),
                    left: WP('82%'),
                    width: WP('13%'),
                    height: HP('4%'),
                    borderRadius: WP('1%'),
                    borderWidth: 2,
                    borderColor: 'rgb(20, 138, 95)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.main,
                    zIndex: 2,
                }}
                onPress={()=>{
                    this.setState({
                        isListMode: !this.state.isListMode,
                    })
                }}
            >
                <Text
                    style={{
                        fontSize: WP('3.5%'),
                        color: 'white',
                        fontWeight: 'bold',
                    }}
                >{this.state.isListMode ? 'Graph' : 'List'}
                </Text>
            </TouchableOpacity>

            {this.state.isListMode ? (
                // Render if selected mode is list.
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            width: '90%',
                            height: '15%',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottomWidth: 2,
                            borderColor: colors.main,
                            flexDirection: 'row',
                        }}
                    >
                        <Text
                            style={{
                                marginLeft: WP('2%'),
                                fontSize: WP('5%'),
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                        >{this.state.listYear}
                        </Text>
                    </View>

                    <View
                        style={{
                            width: '100%',
                            height: '75%',
                        }}
                    >
                        <FlatList
                            contentContainerStyle={{
                                alignSelf: 'center',
                                width: WP('90%'),
                                marginTop: '2.5%',
                            }}
                            data={this.state.listData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item})=>
                                <View
                                    style={{
                                        width: '100%',
                                        height: HP('8%'),
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                        borderBottomWidth: 2,
                                        borderColor: 'white',
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: WP('4.5%'),
                                            fontWeight: 'bold',
                                            color: colors.main,
                                        }}
                                    >{item.value + " ug/m3"}
                                    </Text>

                                    <Text
                                        style={{
                                            marginTop: HP('0.5%'),
                                            fontSize: WP('3%'),
                                            color: 'black',
                                        }}
                                    >{item.date.substring(0, 4) + "년 " + item.date.substring(5, 7) + "월 " + item.date.substring(8, 10) + "일 " + item.date.substring(11, 13) + "시 " + item.date.substring(14, 16) + "분"}
                                    </Text>
                                </View>
                            }
                        />
                    </View>
                </View>
            ) : (
                // Render if selected mode is graph.
                <View/>
            )}
        </View>
      </View>
    );
  }
}