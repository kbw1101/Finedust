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

import {
    LineChart,
} from 'react-native-chart-kit';

import AsyncStorage from '@react-native-community/async-storage';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'rgba(245, 252, 255, 0.3)',
    },
  });
  
type Props = {};

// const listData = [
//     {id: 0, date: '2019-09-01T08:44:00Z', finedust: 60, ozone: 0.002, co: 0.5}, // UG/M3, PPM, UG/M3
//     {id: 1, date: '2019-09-02T09:52:00Z', finedust: 57, ozone: 0.007, co: 0.4},
//     {id: 2, date: '2019-09-03T08:42:00Z', finedust: 42, ozone: 0.012, co: 0.6},
//     {id: 3, date: '2019-09-04T08:49:00Z', finedust: 58, ozone: 0.008, co: 0.7},
//     {id: 4, date: '2019-09-05T08:56:00Z', finedust: 62, ozone: 0.007, co: 0.5},
//     {id: 5, date: '2019-09-06T08:50:00Z', finedust: 77, ozone: 0.006, co: 0.6},
//     {id: 6, date: '2019-09-07T08:48:00Z', finedust: 56, ozone: 0.009, co: 0.8},
//     {id: 7, date: '2019-09-08T08:29:00Z', finedust: 44, ozone: 0.012, co: 0.5},
//     {id: 8, date: '2019-09-09T08:39:00Z', finedust: 31, ozone: 0.015, co: 0.4},
//     {id: 9, date: '2019-09-10T08:30:00Z', finedust: 45, ozone: 0.018, co: 0.7},
//     {id: 10, date: '2019-09-11T08:40:00Z', finedust: 40, ozone: 0.021, co: 0.3},
//     {id: 11, date: '2019-09-12T08:44:00Z', finedust: 57, ozone: 0.012, co: 0.4},
//     {id: 12, date: '2019-09-13T08:41:00Z', finedust: 42, ozone: 0.016, co: 0.6},
//     {id: 13, date: '2019-09-14T08:57:00Z', finedust: 39, ozone: 0.013, co: 0.7},
//     {id: 14, date: '2019-09-15T08:43:00Z', finedust: 62, ozone: 0.014, co: 0.4},
//     {id: 15, date: '2019-09-16T08:43:00Z', finedust: 19, ozone: 0.016, co: 1.2},
//     {id: 16, date: '2019-09-17T08:37:00Z', finedust: 56, ozone: 0.017, co: 0.6},
//     {id: 17, date: '2019-09-18T08:49:00Z', finedust: 44, ozone: 0.013, co: 0.7},
//     {id: 18, date: '2019-09-19T08:46:00Z', finedust: 38, ozone: 0.013, co: 0.5},
//     {id: 19, date: '2019-09-20T08:21:00Z', finedust: 45, ozone: 0.016, co: 0.4},
//     {id: 20, date: '2019-09-21T08:44:00Z', finedust: 40, ozone: 0.017, co: 1.0},
//     {id: 21, date: '2019-09-22T08:46:00Z', finedust: 57, ozone: 0.018, co: 0.5},
//     {id: 22, date: '2019-09-23T08:18:00Z', finedust: 42, ozone: 0.017, co: 0.6},
//     {id: 23, date: '2019-09-24T08:43:00Z', finedust: 39, ozone: 0.015, co: 0.7},
//     {id: 24, date: '2019-09-25T08:41:00Z', finedust: 62, ozone: 0.014, co: 0.8},
//     {id: 25, date: '2019-09-26T08:55:00Z', finedust: 19, ozone: 0.013, co: 0.9},
//     {id: 26, date: '2019-09-27T08:47:00Z', finedust: 56, ozone: 0.016, co: 0.6},
//     {id: 27, date: '2019-09-28T08:29:00Z', finedust: 44, ozone: 0.018, co: 0.4},
//     {id: 28, date: '2019-09-29T08:40:00Z', finedust: 38, ozone: 0.016, co: 0.5},
//     {id: 29, date: '2019-09-30T08:31:00Z', finedust: 45, ozone: 0.015, co: 1.1},
// ]

// const listDataWeek = [
//     {id: 0, date: '2019-09-01T08:44:00Z', finedust: 60, ozone: 0.002, co: 0.5}, // UG/M3, PPM, UG/M3
//     {id: 1, date: '2019-09-02T09:52:00Z', finedust: 57, ozone: 0.007, co: 0.4},
//     {id: 2, date: '2019-09-03T08:42:00Z', finedust: 42, ozone: 0.012, co: 0.6},
//     {id: 3, date: '2019-09-04T08:49:00Z', finedust: 58, ozone: 0.008, co: 0.7},
//     {id: 4, date: '2019-09-05T08:56:00Z', finedust: 62, ozone: 0.007, co: 0.5},
//     {id: 5, date: '2019-09-06T08:50:00Z', finedust: 77, ozone: 0.006, co: 0.6},
//     {id: 6, date: '2019-09-07T08:48:00Z', finedust: 56, ozone: 0.009, co: 0.8},
// ]

// const listDataMonth = [
//     {id: 0, date: '2019-09-01T08:44:00Z', finedust: 60, ozone: 0.002, co: 0.5}, // UG/M3, PPM, UG/M3
//     {id: 1, date: '2019-09-08T09:52:00Z', finedust: 49, ozone: 0.007, co: 0.4},
//     {id: 2, date: '2019-09-15T08:42:00Z', finedust: 57, ozone: 0.012, co: 0.6},
//     {id: 3, date: '2019-09-22T08:49:00Z', finedust: 66, ozone: 0.008, co: 0.7},
// ]

// const listDataYear = [
//     {id: 0, date: '2019-01-01T08:44:00Z', finedust: 43, ozone: 0.002, co: 0.5}, // UG/M3, PPM, UG/M3
//     {id: 1, date: '2019-02-01T09:52:00Z', finedust: 61, ozone: 0.007, co: 0.4},
//     {id: 2, date: '2019-03-01T08:42:00Z', finedust: 39, ozone: 0.012, co: 0.6},
//     {id: 3, date: '2019-04-01T08:49:00Z', finedust: 37, ozone: 0.008, co: 0.7},
//     {id: 4, date: '2019-05-01T08:56:00Z', finedust: 62, ozone: 0.007, co: 0.5},
//     {id: 5, date: '2019-06-01T08:50:00Z', finedust: 77, ozone: 0.006, co: 0.6},
//     {id: 6, date: '2019-07-01T08:48:00Z', finedust: 56, ozone: 0.009, co: 0.8},
//     {id: 7, date: '2019-08-01T08:29:00Z', finedust: 44, ozone: 0.012, co: 0.5},
//     {id: 8, date: '2019-09-01T08:39:00Z', finedust: 31, ozone: 0.015, co: 0.4},
//     {id: 9, date: '2019-10-01T08:30:00Z', finedust: 45, ozone: 0.018, co: 0.7},
//     {id: 10, date: '2019-11-01T08:40:00Z', finedust: 40, ozone: 0.021, co: 0.3},
//     {id: 11, date: '2019-12-01T08:44:00Z', finedust: 57, ozone: 0.012, co: 0.4},
// ]

export default class App extends Component<Props> {
  constructor(props) {
      super(props);

      this.state = {
        tabIndex: 0,
        timeIndex: 0,
        dateString: '2019/09/06 ~ 2019/09/12',
        average: 0,
        max: 0,
        min: 0,
        listYear: 2019,
        isListMode: true,

        listData: [],
        graphData: [],
        graphLabels: [],
        textUnit: 'UG/M3',
      }
  }

  initData = async(type) => {
    let newListData = [];
    let newData = [];
    let newLabels = [];
    let avg = 0, min = 9999, max = 0;
    let numOfDatas = 0;
    let datas = null;
    let dateStrBefore = null;
    let dateStrAfter = null;
    let dateBefore = null;
    let dateAfter = null;
    let today = null;

    switch(type) {
        case 0:
            datas = await AsyncStorage.getItem('datas');
            datas = JSON.parse(datas);

            today = new Date();

            dateStrBefore = today.getTime() - (6 * 24 * 60 * 60 * 1000) - (this.state.timeIndex * 7 * 24 * 60 * 60 * 1000);
            dateBefore = new Date();
            dateBefore.setTime(dateStrBefore);
            dateStrBefore = dateBefore.getFullYear() + "/" + (dateBefore.getMonth() + 1) + "/" + dateBefore.getDate();
            
            dateStrAfter = today.getTime() - (this.state.timeIndex * 7 * 24 * 60 * 60 * 1000);
            dateAfter = new Date();
            dateAfter.setTime(dateStrAfter);
            dateStrAfter = dateAfter.getFullYear() + "/" + (dateAfter.getMonth() + 1) + "/" + dateAfter.getDate();

            this.setState({
                dateString: dateStrBefore + " ~ " + dateStrAfter,
            })

            if(datas !== null)
            {
                let lastWeekTime = today.getTime() - (7 * 24 * 60 * 60 * 1000) - (this.state.timeIndex * 7 * 24 * 60 * 60 * 1000);

                for(let i = 1; i<=7; i++)
                {
                    let curDayTime = lastWeekTime + (i * 24 * 60 * 60 * 1000);
                    let curDay = new Date();
                    curDay.setTime(curDayTime);

                    let has = 0;
                    for(let data in datas)
                    {
                        if(curDay.getFullYear() == datas[data].year)
                        {
                            if(curDay.getMonth() + 1 == datas[data].month)
                            {
                                if(curDay.getDate() == datas[data].day)
                                {
                                    newListData.push(datas[data]);
                                    newData.push(datas[data].h);
                                    newLabels.push(datas[data].day);
                                    avg = avg + parseFloat(datas[data].h);
                                    numOfDatas = numOfDatas + 1;
                                    if(min > datas[data].h) min = datas[data].h;
                                    if(max < datas[data].h) max = datas[data].h;
                                    has = 1;
                                    break;
                                }
                            }
                        }
                    }
                    if(has == 0) {
                        let obj = new Object();
                        obj.year = curDay.getFullYear();
                        obj.month = curDay.getMonth() + 1;
                        obj.day = curDay.getDate();
                        obj.hour = curDay.getHours();
                        obj.minute = curDay.getMinutes();
                        obj.second = curDay.getSeconds();
                        obj.finedust = -1;
                        obj.co = -1;
                        obj.h = -1;
                        newListData.push(obj);
                        newData.push(0);
                        newLabels.push(curDay.getDate());    
                    }
                }
            }
            else {
                for(let i = 0; i<7; i++)
                {
                    let obj = new Object();
                    obj.year = 0;
                    obj.month = 0;
                    obj.day = 0;
                    obj.hour = 0;
                    obj.minute = 0;
                    obj.second = 0;
                    obj.finedust = -1;
                    obj.co = -1;
                    obj.h = -1;
                    newListData.push(obj);
                    newData.push(0);
                    newLabels.push(0);    
                }
            }

            if(numOfDatas != 0) avg = avg / numOfDatas;
            if(min == 9999) min = 0;
            this.setState({
                listData: newListData,
                graphData: newData,
                graphLabels: newLabels,
                average: avg,
                max: max,
                min: min,
            })
            break;
        case 1:
            datas = await AsyncStorage.getItem('datas');
            datas = JSON.parse(datas);

            today = new Date();

            dateStrBefore = today.getTime() - (28 * 24 * 60 * 60 * 1000) - (this.state.timeIndex * 28 * 24 * 60 * 60 * 1000);
            dateStrAfter = dateStrBefore + (28 * 24 * 60 * 60 * 1000);
            dateBefore = new Date();
            dateBefore.setTime(dateStrBefore);
            dateStrBefore = dateBefore.getFullYear() + "/" + (dateBefore.getMonth() + 1) + "/" + dateBefore.getDate();
            
            dateAfter = new Date();
            dateAfter.setTime(dateStrAfter);
            dateStrAfter = dateAfter.getFullYear() + "/" + (dateAfter.getMonth() + 1) + "/" + dateAfter.getDate();

            this.setState({
                dateString: dateStrBefore + " ~ " + dateStrAfter,
            })

            if(datas !== null)
            {
                let today = new Date();
                let lastMonthTime = today.getTime() - (28 * 24 * 60 * 60 * 1000) - (this.state.timeIndex * 28 * 24 * 60 * 60 * 1000);
                let lastMonth = new Date();
                lastMonth.setTime(lastMonthTime);
                lastMonth.setHours(23);
                lastMonth.setMinutes(59);
                lastMonthTime = lastMonth.getTime();

                for(let i = 0; i<4; i++)
                {
                    let curDayBeforeTime = lastMonthTime + (7 * i * 24 * 60 * 60 * 1000);
                    let curDayBefore = new Date();
                    curDayBefore.setTime(curDayBeforeTime);
                    let curDayAfterTime = curDayBeforeTime + (7 * 24 * 60 * 60 * 1000);
                    let curDayAfter = new Date();
                    curDayAfter.setTime(curDayAfterTime);

                    let has = 0;
                    for(let data in datas)
                    {
                        let dataDate = new Date();
                        dataDate.setFullYear(datas[data].year);
                        dataDate.setMonth(datas[data].month - 1);
                        dataDate.setDate(datas[data].day);
                        let dataDateTime = dataDate.getTime();
                        if(curDayBeforeTime <= dataDateTime && dataDateTime <= curDayAfterTime)
                        {
                                newListData.push(datas[data]);
                                newData.push(datas[data].h);
                                newLabels.push(datas[data].day);
                                avg = avg + parseFloat(datas[data].h);
                                numOfDatas = numOfDatas + 1;
                                if(min > datas[data].h) min = datas[data].h;
                                if(max < datas[data].h) max = datas[data].h;
                                has = 1;
                                break;
                        }
                    }
                    if(has == 0) {
                        let obj = new Object();
                        obj.year = curDayBefore.getFullYear();
                        obj.month = curDayBefore.getMonth() + 1;
                        obj.day = curDayBefore.getDate();
                        obj.hour = curDayBefore.getHours();
                        obj.minute = curDayBefore.getMinutes();
                        obj.second = curDayBefore.getSeconds();
                        obj.finedust = -1;
                        obj.co = -1;
                        obj.h = -1;
                        newListData.push(obj);
                        newData.push(0);
                        newLabels.push(curDayBefore.getDate());    
                    }
                }
            }
            else {
                for(let i = 0; i<4; i++)
                {
                    let obj = new Object();
                    obj.year = 0;
                    obj.month = 0;
                    obj.day = 0;
                    obj.hour = 0;
                    obj.minute = 0;
                    obj.second = 0;
                    obj.finedust = -1;
                    obj.co = -1;
                    obj.h = -1;
                    newListData.push(obj);
                    newData.push(0);
                    newLabels.push(0);    
                }
            }

            if(numOfDatas != 0) avg = avg / numOfDatas;
            if(min == 9999) min = 0;
            this.setState({
                listData: newListData,
                graphData: newData,
                graphLabels: newLabels,
                average: avg,
                max: max,
                min: min,
            })
            break;
        case 2:
            datas = await AsyncStorage.getItem('datas');
            datas = JSON.parse(datas);

            today = new Date();
            let thisYear = today.getTime() - (this.state.timeIndex * 365 * 24 * 60 * 60 * 1000);
            let thisYearDate = new Date();
            thisYearDate.setTime(thisYear);
            dateStrBefore = thisYearDate.getFullYear() + "/" + "1";
            dateStrAfter = thisYearDate.getFullYear() + "/" + "12";
            
            this.setState({
                dateString: dateStrBefore + " ~ " + dateStrAfter,
            })

            if(datas !== null)
            {
                let year = new Date();
                let yearTime = year.getTime() - (this.state.timeIndex * 365 * 24 * 60 * 60 * 1000);
                year.setTime(yearTime);
                year = year.getFullYear();

                for(let i = 1; i<=12; i++)
                {
                    let has = 0;
                    for(let data in datas)
                    {
                        if(year == datas[data].year)
                        {
                            if(i == datas[data].month)
                            {
                                newListData.push(datas[data]);
                                newData.push(datas[data].h);
                                newLabels.push(datas[data].day);
                                avg = avg + parseFloat(datas[data].h);
                                numOfDatas = numOfDatas + 1;
                                if(min > datas[data].h) min = datas[data].h;
                                if(max < datas[data].h) max = datas[data].h;
                                has = 1;
                                break;
                            }
                        }
                    }
                    if(has == 0) {
                        let obj = new Object();
                        obj.year = year
                        obj.month = i;
                        obj.day = 1;
                        obj.hour = 1;
                        obj.minute = 1;
                        obj.second = 1;
                        obj.finedust = -1;
                        obj.co = -1;
                        obj.h = -1;
                        newListData.push(obj);
                        newData.push(0);
                        newLabels.push(i);    
                    }
                }
            }
            else {
                for(let i = 0; i<12; i++)
                {
                    let obj = new Object();
                    obj.year = 0;
                    obj.month = 0;
                    obj.day = 0;
                    obj.hour = 0;
                    obj.minute = 0;
                    obj.second = 0;
                    obj.finedust = -1;
                    obj.co = -1;
                    obj.h = -1;
                    newListData.push(obj);
                    newData.push(0);
                    newLabels.push(0);    
                }
            }

            if(numOfDatas != 0) avg = avg / numOfDatas;
            if(min == 9999) min = 0;
            this.setState({
                listData: newListData,
                graphData: newData,
                graphLabels: newLabels,
                average: avg,
                max: max,
                min: min,
            })  
            break;
      }
  }

  componentDidMount() {
    this.initData(0);
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
                    this.initData(0);
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
                    this.initData(1);
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
                    this.initData(2);
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
                    this.setState({
                        timeIndex: this.state.timeIndex + 1,
                    })
                    this.initData(this.state.tabIndex);
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
                    if(this.state.timeIndex > 0) {
                        this.setState({
                            timeIndex: this.state.timeIndex - 1,
                        })
                    }
                    this.initData(this.state.tabIndex);
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
                    >{this.state.average.toFixed(1)}
                    </Text>

                    <Text
                        style={{
                            marginLeft: WP('1%'),
                            fontSize: WP('3%'),
                            color: 'black',
                            textAlignVertical: 'bottom',
                        }}
                    >{this.state.textUnit}
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
                    >{this.state.textUnit}
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
                    >{this.state.textUnit}
                    </Text>
                </View>
            </View>
        </View>

        <View
            style={{
                width: '100%',
                height: '68%',
                borderTopLeftRadius: WP('10%'),
                borderTopRightRadius: WP('10%'),
                backgroundColor: this.state.isListMode ? 'rgb(220, 220, 220)' : 'rgb(240, 240, 240)',
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
                                        height: item.h === -1 ? 0 : HP('8%'),
                                        justifyContent: 'center',
                                        alignItems: 'flex-start',
                                        borderBottomWidth: item.h === -1 ? 0 : 2,
                                        borderColor: 'white',
                                    }}
                                >
                                    {item.h === -1 ? (<View/>) : (
                                        <View>
                                        <Text
                                            style={{
                                                fontSize: WP('4.5%'),
                                                fontWeight: 'bold',
                                                color: colors.main,
                                            }}
                                        >{item.h + " " + this.state.textUnit}
                                        </Text>

                                        <Text
                                            style={{
                                                marginTop: HP('0.5%'),
                                                fontSize: WP('3%'),
                                                color: 'black',
                                            }}
                                        >{item.year + "년 " + item.month + "월 " + item.day + "일 " + item.hour + "시 " + item.minute + "분"}
                                        </Text>
                                        </View>
                                    )}
                                </View>
                            }
                        />
                    </View>
                </View>
            ) : (
                // Render if selected mode is graph.
                <View
                    style={{
                        width: '100%',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <LineChart
                        fromZero
                        data={{
                        labels: this.state.graphLabels,
                        datasets: [{
                            data: this.state.graphData,
                            color: (opacity = 1) => colors.main,
                        }]
                        }}
                        width={WP('95%')} // from react-native
                        height={HP('45%')}
                        chartConfig={{
                            backgroundGradientFrom: 'rgb(240, 240, 240)',
                            backgroundGradientTo: 'rgb(240, 240, 240)',
                            decimalPlaces: 2, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(50, 50, 50, ${opacity})`,
                            style: {
                                borderRadius: 16
                            }
                        }}
                        bezier
                        style={{
                            borderRadius: 16,
                        }}
                    />
                </View>
            )}
        </View>
      </View>
    );
  }
}