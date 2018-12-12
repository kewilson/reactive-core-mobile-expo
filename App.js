import React from 'react';
import {AppLoading, Asset} from 'expo';
import Doctors from './app/Doctors'

export default class App extends React.Component {

    state = {
        isLoadingComplete: false
    };


    render() {
        if (!this.state.isLoadingComplete) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );
        } else {
            return (
                <Doctors/>
            );
        }
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require('./assets/images/robot-dev.png'),
                require('./assets/images/robot-prod.png'),
            ]),
            // Font.loadAsync({
            //     ...Icon.Ionicons.font,
            //     'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
            // }),
        ]);
    };

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({isLoadingComplete: true});
    };
}
