import React, {Component} from 'react';
import {
    Image,
    TouchableOpacity,
} from 'react-native';

import { ICON_BACK } from '../../utils/icons';

import {
    widthPercentageToDP as WP,
    heightPercentageToDP as HP,
} from 'react-native-responsive-screen'

export default class SharedForm extends Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                style={[{
                    position: 'absolute',
                    width: WP('6%'),
                    height: WP('6%'),
                    top: WP('4%'),
                    left: WP('4%'),
                    zIndex: 1,
                }, this.props.style]}
                onPress={this.props.onPress}
            >
                <Image
                    source={this.props.source}
                    style={{width:'100%', height:'100%', tintColor: this.props.tintColor}}
                />
            </TouchableOpacity>
        );
    }
}

SharedForm.defaultProps = {
    style: {
        
    },
    source: ICON_BACK,
}