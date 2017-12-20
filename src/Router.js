import React from 'react';
import { Scene, Router, Stack, Actions, Modal } from 'react-native-router-flux';
import LoginChoseForm from './containers/LoginChoseForm';
import LoginTypeForm from './containers/LoginTypeForm';
import SignUpTypeForm from './containers/SignUpTypeForm';
import LoginForm from './containers/LoginForm';
import SignUpForm from './containers/SignUpForm';
import Home_Seller from './containers/Home_Seller/Home_Seller';
import Notification from './containers/Home_Seller/Notification';
import Favourite from './containers/Home_Seller/Favourite';
import Settings from './containers/Settings/Settings';
import BottomNavBar from './components/common/BottomNavBar';
import AddNewProduct from './containers/AddNewProduct/AddNewProduct';
import Discover from './containers/Discover';
import Feed from './containers/Feed';
import ThankYouMessage from "./containers/Settings/ThankYouMessage/index";
import NavBar from './components/common/NavBar';
import SearchResult from './containers/AddNewProduct/SearchResult';
import ViewStoreInfo from './containers/Discover/ViewStoreInfo';
import Tools from './containers/DevelopmentTools/Tools';
import CreditCard from "./containers/Settings/PrivateInfo/CreditCard";
import ShippingAddress from "./containers/Settings/PrivateInfo/ShippingAddress";

const RouterComponent = () => {
    return (
        <Router>
            <Modal>
                <Stack key={"home"}>
                    <Scene
                        key={"home"}
                        component={LoginChoseForm}
                        hideNavBar={"true"}
                        initial
                    />
                    <Scene
                        key={"login"}
                        component={LoginTypeForm}
                        backButtonTintColor={'#1e1e1e'}
                        onLeft={() => Actions.home()}
                        navTransparent={true}
                    />
                </Stack>
            </Modal>
        </Router>
    )
}

export default RouterComponent;