import React, {Component} from 'react';

import {
    View,
    Image,
    TextInput,
    Text,
    TouchableOpacity,
    FlatList,
} from 'react-native';

import {
    widthPercentageToDP as WP,
    heightPercentageToDP as HP,
} from 'react-native-responsive-screen';

import BackButton from '../shareds/BackButton';
import DrawerButton from '../shareds/DrawerButton';

import {
    ICON_STAR_BLACK,
    ICON_STAR_WHITE,
    ICON_HEART,
} from '../../utils/icons';

import {
    IMAGE_LEAVES,
} from '../../utils/images';
import { DrawerActions } from 'react-navigation-drawer';

import { colors } from '../../utils/styles';

const dummyListData = [
    {id: 0, nickname: '양갱', rating: 4, date: '2019/09/29 13:14:03', like: 609, review: '미세먼지 뿐만 아니라 오존이나 일산화탄소량을 확인할 수 있어서 매우 좋아요~'},
    {id: 1, nickname: '낑깡', rating: 5, date: '2019/09/29 17:03:39', like: 734, review: '미세먼지 수치를 시간대 별로 확인할 수 있어서 좋습니다.'},
];

export default class Review extends Component<Props> {
    constructor(props) {
        super(props);

        this.state = {
            visibleWrite: false,
            nickname: '',
            password: '',
            rating: 4,
            review: '',
            listData: dummyListData,
        }
    }

    render() {
        return(
            <View
                style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'flex-start',
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

                <View
                    style={{
                        width: '100%',
                        height: '12.5%',
                        backgroundColor: 'rgba(200, 200, 200, 0.2)',
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
                    >리뷰
                    </Text>
                    <Text
                        style={{
                            marginTop: HP('0.5%'),
                            fontSize: WP('3%'),
                            color: 'black',
                        }}
                    >리뷰작성
                    </Text>
                </View>

                <View
                    style={{
                        width: '100%',
                        height: '87.5%',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                    }}
                >
                    {this.state.visibleWrite ? (
                        <View
                            style={{
                                padding: WP('5%'),
                                width: '100%',
                                height: '30%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <View
                                style={{
                                    paddingHorizontal: WP('3%'),
                                    width: '100%',
                                    height: '20%',
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <View
                                    style={{
                                        width: '28%',
                                        height: '100%',
                                        borderWidth: 1,
                                        borderColor: colors.main,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <TextInput
                                        onChangeText={(text)=>{
                                            this.setState({
                                                nickname: text,
                                            })
                                        }}
                                        placeholder="닉네임"
                                        style={{
                                            fontSize: WP('3%'),
                                            width: '100%',
                                            height: '100%',
                                            paddingVertical: 0,
                                            textAlign: 'center',
                                            textAlignVertical: 'center',
                                        }}
                                    />
                                </View>

                                <View
                                    style={{
                                        marginLeft: WP('1%'),
                                        width: '28%',
                                        height: '100%',
                                        borderWidth: 1,
                                        borderColor: colors.main,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <TextInput
                                        onChangeText={(text)=>{
                                            this.setState({
                                                password: text,
                                            })
                                        }}
                                        placeholder="비밀번호 입력"
                                        secureTextEntry={true}
                                        style={{
                                            fontSize: WP('3%'),
                                            width: '100%',
                                            height: '100%',
                                            paddingVertical: 0,
                                            textAlign: 'center',
                                            textAlignVertical: 'center',
                                        }}
                                    />
                                </View>

                                <View
                                    style={{
                                        width: '10%',
                                        height: '100%',
                                    }}
                                />

                                <TouchableOpacity
                                    style={{
                                        width: '6%',
                                        height: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    onPress={()=>{
                                        this.setState({
                                            rating: 1,
                                        })
                                    }}
                                >   
                                    <Image
                                        source={this.state.rating >= 1.0 ? ICON_STAR_BLACK : ICON_STAR_WHITE}
                                        style={{
                                            width: WP('5%'),
                                            height: WP('5%'),
                                        }}
                                        resizeMode="stretch"
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{
                                        width: '6%',
                                        height: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    onPress={()=>{
                                        this.setState({
                                            rating: 2,
                                        })
                                    }}
                                >   
                                    <Image
                                        source={this.state.rating >= 2.0 ? ICON_STAR_BLACK : ICON_STAR_WHITE}
                                        style={{
                                            width: WP('5%'),
                                            height: WP('5%'),
                                        }}
                                        resizeMode="stretch"
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{
                                        width: '6%',
                                        height: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    onPress={()=>{
                                        this.setState({
                                            rating: 3,
                                        })
                                    }}
                                >   
                                    <Image
                                        source={this.state.rating >= 3.0 ? ICON_STAR_BLACK : ICON_STAR_WHITE}
                                        style={{
                                            width: WP('5%'),
                                            height: WP('5%'),
                                        }}
                                        resizeMode="stretch"
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{
                                        width: '6%',
                                        height: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    onPress={()=>{
                                        this.setState({
                                            rating: 4,
                                        })
                                    }}
                                >   
                                    <Image
                                        source={this.state.rating >= 4.0 ? ICON_STAR_BLACK : ICON_STAR_WHITE}
                                        style={{
                                            width: WP('5%'),
                                            height: WP('5%'),
                                        }}
                                        resizeMode="stretch"
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{
                                        width: '6%',
                                        height: '100%',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    onPress={()=>{
                                        this.setState({
                                            rating: 5,
                                        })
                                    }}
                                >   
                                    <Image
                                        source={this.state.rating >= 5.0 ? ICON_STAR_BLACK : ICON_STAR_WHITE}
                                        style={{
                                            width: WP('5%'),
                                            height: WP('5%'),
                                        }}
                                        resizeMode="stretch"
                                    />
                                </TouchableOpacity>
                            </View>

                            <View
                                style={{
                                    marginTop: '2%',
                                    width: '100%',
                                    height: '58%',
                                    backgroundColor: 'rgb(220, 220, 220)',
                                    borderRadius: WP('3%'),
                                }}
                            >
                                <TextInput
                                    onPress={()=>{
                                        this.setState({
                                            review: '',
                                        })
                                    }}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        paddingVertical: WP('1.5%'),
                                        paddingLeft: WP('5%'),
                                        textAlign: 'left',
                                        fontSize: WP('3%'),
                                        textAlignVertical: 'top',
                                        color: 'black',
                                    }}
                                />
                            </View>

                            <View
                                style={{
                                    marginTop: '2%',
                                    width: '100%',
                                    height: '18%',
                                    justifyContent: 'center',
                                    alignItems: 'flex-end',
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        width: '20%',
                                        height: '100%',
                                        borderRadius: WP('2%'),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: colors.main,
                                    }}
                                    onPress={()=>{
                                        this.setState({
                                            visibleWrite: false,
                                        })
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: WP('3%'),
                                            color: 'white',
                                        }}
                                    >완료
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ) : (
                        <View
                            style={{
                                width: '100%',
                                height: '10%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    width: '25%',
                                    height: '60%',
                                    borderRadius: WP('4%'),
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: colors.main,
                                }}
                                onPress={()=>{
                                    this.setState({
                                        visibleWrite: true,
                                    })
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: WP('4%'),
                                        color: 'white',
                                    }}
                                >리뷰 작성
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    <View
                        style={{
                            width: '100%',
                            height: this.state.visibleWrite ? '70%' : '80%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <FlatList
                            data={this.state.listData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({item})=>
                                <View
                                    style={{
                                        width: WP('90%'),
                                        height: HP('40%'),
                                        justifyContent: 'flex-start',
                                        alignItems: 'center',
                                        paddingHorizontal: WP('5%'),
                                    }}
                                >
                                    <View
                                        style={{
                                            width: '100%',
                                            height: '20%',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: WP('3.5%'),
                                                color: 'black',
                                                fontWeight: 'bold',
                                                width: '25%',
                                                height: '100%',
                                                textAlign: 'center',
                                                textAlignVertical: 'center',
                                            }}
                                        >{item.nickname}
                                        </Text>

                                        <View
                                            style={{
                                                width: '6%',
                                                height: '100%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Image
                                                style={{
                                                    width: WP('5%'),
                                                    height: WP('5%'),
                                                }}
                                                source={item.rating >= 1.0 ? ICON_STAR_BLACK : ICON_STAR_WHITE}
                                                resizeMode="stretch"
                                            />
                                        </View>

                                        <View
                                            style={{
                                                width: '6%',
                                                height: '100%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Image
                                                style={{
                                                    width: WP('5%'),
                                                    height: WP('5%'),
                                                }}
                                                source={item.rating >= 2.0 ? ICON_STAR_BLACK : ICON_STAR_WHITE}
                                                resizeMode="stretch"
                                            />
                                        </View>

                                        <View
                                            style={{
                                                width: '6%',
                                                height: '100%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Image
                                                style={{
                                                    width: WP('5%'),
                                                    height: WP('5%'),
                                                }}
                                                source={item.rating >= 3.0 ? ICON_STAR_BLACK : ICON_STAR_WHITE}
                                                resizeMode="stretch"
                                            />
                                        </View>

                                        <View
                                            style={{
                                                width: '6%',
                                                height: '100%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Image
                                                style={{
                                                    width: WP('5%'),
                                                    height: WP('5%'),
                                                }}
                                                source={item.rating >= 4.0 ? ICON_STAR_BLACK : ICON_STAR_WHITE}
                                                resizeMode="stretch"
                                            />
                                        </View>

                                        <View
                                            style={{
                                                width: '7%',
                                                height: '100%',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Image
                                                style={{
                                                    width: WP('5%'),
                                                    height: WP('5%'),
                                                }}
                                                source={item.rating >= 5.0 ? ICON_STAR_BLACK : ICON_STAR_WHITE}
                                                resizeMode="stretch"
                                            />
                                        </View>

                                        <Text
                                            style={{
                                                width: '45%',
                                                height: '100%',
                                                textAlign: 'center',
                                                textAlignVertical: 'center',
                                                fontSize: WP('3%'),
                                                color: colors.main,
                                            }}
                                        >{item.date}
                                        </Text>
                                    </View>

                                    <View
                                        style={{
                                            width: '100%',
                                            height: '80%',
                                            borderRadius: WP('3%'),
                                            backgroundColor: 'rgb(220, 220, 220)',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            padding: WP('5%'),
                                        }}
                                    >
                                        <Text
                                            style={{
                                                width: '100%',
                                                height: '90%',
                                                textAlign: 'left',
                                                textAlignVertical: 'top',
                                                color: 'black',
                                            }}
                                        >{item.review}
                                        </Text>

                                        <View
                                            style={{
                                                width: '100%',
                                                height: '10%',
                                                flexDirection: 'row',
                                                justifyContent: 'flex-start',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <TouchableOpacity
                                                style={{
                                                    width: WP('6%'),
                                                    height: WP('6%'),
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                }}
                                                onPress={()=>{
                                                    // Do like.
                                                }}
                                            >
                                                <Image
                                                    source={ICON_HEART}
                                                    style={{
                                                        width: WP('6%'),
                                                        height: WP('6%'),
                                                        tintColor: colors.main
                                                    }}
                                                    resizeMode='stretch'
                                                />
                                            </TouchableOpacity>

                                            <Text
                                                style={{
                                                    fontSize: WP('4%'),
                                                    color: colors.main,
                                                    marginLeft: WP('2%'),
                                                }}
                                            >{item.like}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            }
                        />
                    </View>
                </View>

                <BackButton
                    onPress={()=>{
                        this.props.navigation.goBack()
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