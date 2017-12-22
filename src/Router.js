import React from 'react';
import { Scene, Router, Stack, Actions, Modal } from 'react-native-router-flux';
import MainContainer from './containers/MainContainer';
import LoginContainer from './containers/LoginContainer';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key={"root"} hideNavBar={"true"}>
                <Stack key={"home"}>
                    <Scene
                        key={"home"}
                        component={MainContainer}
                        hideNavBar={"true"}
                        initial />
                    <Scene
                        key="login_screen"
                        component={LoginContainer}
                        title="Login" />
                </Stack>
            </Stack>
        </Router>
    )
}

export default RouterComponent;