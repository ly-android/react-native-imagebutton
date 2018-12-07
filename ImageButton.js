/**
 * Created by liyong1 on 2018/11/26
 * email:liyong1@yy.com
 */


'use strict';
import React, {Component} from 'react';
import {
    Image,
    ImageStylePropTypes,
    NativeModules,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import PropTypes from 'prop-types';

export default class ImageButton extends Component {
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        activeOpacity: PropTypes.number, //按下的效果，透明度,默认为0.3
        fontSize: PropTypes.number,
        textColor: PropTypes.string,
        onPress: PropTypes.func,
        paddingTop: PropTypes.number, //文本距离上部位置
        paddingLeft: PropTypes.number,
        paddingRight: PropTypes.number,
        paddingBottom: PropTypes.number,
        textAlignVertical: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),//垂直方向位置
        textAlignHorizontal: PropTypes.oneOf(['flex-start', 'center', 'flex-end']) //水平方向位置
    };

    static defaultProps = {
        activeOpacity: 0.3,
        fontSize: 12,
        textColor: 'black',
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        textAlignHorizontal: 'center',
        textAlignVertical: 'center'
    };

    constructor(props) {
        super(props);
        this.state = {};
    }

    _onPress = () => {
        if (this.props.onPress !== undefined) {
            this.props.onPress();
        }
    };

    render() {
        let paddingTop = this.props.paddingTop;
        let isTextEmpty = this.props.text.length === 0;
        return (
            <TouchableOpacity
                style={[{width: this.props.width, height: this.props.height}, this.props.style, styles.container]}
                activeOpacity={this.props.activeOpacity}
                onPress={this._onPress}
            >
                <Image {...this.props} style={{width: this.props.width, height: this.props.height}}/>
                {!isTextEmpty ? <View style={[styles.name, {
                        justifyContent: this.props.textAlignVertical,
                        alignItems: this.props.textAlignHorizontal
                    }]}><Text
                        style={{
                            fontSize: this.props.fontSize,
                            color: this.props.textColor,
                            marginTop: this.props.paddingTop,
                            marginLeft: this.props.paddingLeft,
                            marginBottom: this.props.paddingBottom,
                            marginRight: this.props.paddingRight
                        }}>{this.props.text}</Text></View>
                    : <View/>
                }
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    name: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
});
