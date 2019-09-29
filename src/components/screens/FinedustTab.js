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

export default class App extends Component<Props> {
  constructor(props) {
      super(props);

      this.state = {
        tabIndex: 0,
        dateString: '2019/09/06 ~ 2019/09/12',
        average: 60,
        max: 75,
        min: 30,
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
      </View>
    );
  }
}