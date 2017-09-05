import React, { Component } from 'react';
import { AppRegistry, Text, View, WebView, TouchableOpacity, BackHandler } from 'react-native';

// var DEFAULT_URL = 'http://192.168.1.154/';
var DEFAULT_URL = 'https://www.channelfix.com';
var WEBVIEW_REF = 'webview';

export default class AwesomeApp extends Component {
    constructor(props) {
        super(props);
    }

    onNavigationStateChange(navState) {
        this.setState({
            canGoBack: navState.canGoBack
        });
    }

    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress', this.backHandler);
    }

    componentWillUnmount(){
        BackHandler.removeEventListener('hardwareBackPress', this.backHandler);
    }

    backHandler = () => {
        if(this.state.canGoBack) {
            this.refs[WEBVIEW_REF].goBack();
            return true;
        }
        return false;
    }

    render() {
        return (
            <WebView
                ref={WEBVIEW_REF}
                source={{uri: DEFAULT_URL}}
                onNavigationStateChange={this.onNavigationStateChange.bind(this)}
                builtInZoomControls={false}
            />
        );
    }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeApp', () => AwesomeApp);