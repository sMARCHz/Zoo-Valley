/**
 * @format
 */
import React, { Component } from 'react'
import { AppRegistry } from 'react-native';
//import App from './App';
import { name as appName } from './app.json';
import Splash from './Admin/Splash';
import AutoChatBot from './Bot/AutoChatBot';
import Menu from './Admin/Menu';
import PhotoAlbum from './Admin/PhotoAlbum'
import DataZoo from './Admin/DataZoo'
import AppContainer from './Admin/Menu'
AppRegistry.registerComponent(appName, () => Main);
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { currentScreen: 'Splash' };
        setTimeout(() => {
            this.setState({ currentScreen: 'AppContainer' })
        }, 3000)
    }
    render() {
        const { currentScreen } = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash /> : <AppContainer />
        return mainScreen
    }
}