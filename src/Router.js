import React from 'react';
import { Scene, Router, Stack, Actions, Modal } from 'react-native-router-flux';
import MainContainer from './containers/MainContainer';

const RouterComponent = () => {
    return (
        <Router>
            <Stack key={"root"} hideNavBar={"true"}>
                <Stack key={"home"}>
                    <Scene
                        key={"home"}
                        component={MainContainer}
                        hideNavBar={"true"}
                        initial
                    />
                </Stack>
            </Stack>
        </Router>
    )
}

export default RouterComponent;
// const mapStateToProps = (state) => {
//     return {
//         auth: state.auth
//     };
// };
// export default connect(mapStateToProps)(RouterRoot);