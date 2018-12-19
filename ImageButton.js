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
        backgroundColor: PropTypes.string,
        activeOpacity: PropTypes.number,
        fontSize: PropTypes.number,
        textColor: PropTypes.string,
        onPress: PropTypes.func,
        onPressIn: PropTypes.func,
        onPressOut: PropTypes.func,
        paddingTop: PropTypes.number,
        paddingLeft: PropTypes.number,
        paddingRight: PropTypes.number,
        paddingBottom: PropTypes.number,
        textAlignVertical: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
        textAlignHorizontal: PropTypes.oneOf(['flex-start', 'center', 'flex-end'])
    };

    static defaultProps = {
        activeOpacity: 0.3,
        fontSize: 12,
        textColor: 'black',
        backgroundColor: 'transparent',
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
        if (this.props.onPress) {
            this.props.onPress();
        }
    };

    _onPressIn = () => {
        if (this.props.onPressIn) {
            this.props.onPressIn();
        }
    };

    _onPressOut = () => {
        if (this.props.onPressOut) {
            this.props.onPressOut();
        }
    };

    renderContent() {
        let arr = [];
        let isTextEmpty = this.props.text.length === 0;
        let backgroundColor = this.props.backgroundColor || 'transparent';
        if (this.props.source) {
            arr.push(<Image key={0} {...this.props} style={{width: this.props.width, height: this.props.height}}/>);
        }
        if (!isTextEmpty) {
            arr.push(
                <View key={1} style={[styles.name, {
                    justifyContent: this.props.textAlignVertical,
                    alignItems: this.props.textAlignHorizontal,
                    backgroundColor: backgroundColor
                }]}><Text style={{
                    fontSize: this.props.fontSize,
                    color: this.props.textColor,
                    marginTop: this.props.paddingTop,
                    marginLeft: this.props.paddingLeft,
                    marginBottom: this.props.paddingBottom,
                    marginRight: this.props.paddingRight
                }}>{this.props.text}</Text></View>
            );
        } else {
            arr.push(<View key={2}/>)
        }

        return arr;
    }

    render() {

        return (
            <TouchableOpacity
                style={[{width: this.props.width, height: this.props.height}, this.props.style, styles.container]}
                activeOpacity={this.props.activeOpacity}
                onPress={this._onPress}
                onPressIn={this._onPressIn}
                onPressOut={this._onPressOut}

            >
                {this.renderContent()}
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
