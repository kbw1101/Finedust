import React, {Component} from 'react';
import {
    TouchableOpacity,
    Image,
} from 'react-native';

import { ICON_DRAWER } from '../../utils/icons';

import {
    widthPercentageToDP as WP,
    heightPercentageToDP as HP,
} from 'react-native-responsive-screen'

export default class SharedForm extends Component<Props> {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        source: ICON_DRAWER,
    }

    render() {
        return (
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    top: WP('4%'),
                    left: WP('90%'),
                    width: WP('6%'),
                    height: WP('6%'),
                    zIndex: 1,
                }}
                onPress={this.props.onPress} 
                >
                <Image
                    source={this.props.source}
                    style={{
                        width:'100%',
                        height:'100%',
                    }}
                >
                </Image>
            </TouchableOpacity>
        );
    }
}

