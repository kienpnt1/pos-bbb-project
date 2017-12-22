import React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';

//Redux
import AppReducer from './src/reducers';
import RouterComponent from './src/Router';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/rootSaga';

//Middleware
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
	AppReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

class BBBApp extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<RouterComponent />
			</Provider>
		);
	}
}

AppRegistry.registerComponent('BBBPosProject', () => BBBApp);

export default BBBApp;