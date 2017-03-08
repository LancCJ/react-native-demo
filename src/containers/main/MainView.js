/**
 * Launch Screen
 *  - Shows a nice loading screen whilst:
 *  - Checking if user is logged in, and redirects from there
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component, PropTypes } from 'react';
import {
    View,
    Image,
    StatusBar,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppStyles, AppSizes } from '@theme/';
import { Text} from '@ui/';
import SwiperBanner from '@components/compo/SwiperBanner';
import LineButtons from '@components/compo/LineButtons';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
    launchImage: {
        width: AppSizes.screen.width,
        height: AppSizes.screen.height,
    },
});

/* Component ==================================================================== */
class Main extends Component {
    static componentName = 'Main';

    static propTypes = {

    }

    componentDidMount = () => {

    }

    render = () => (
        <View style={[AppStyles.container]}>
            <SwiperBanner/>
            <LineButtons/>
        </View>
    );
}

/* Export Component ==================================================================== */
export default Main;
