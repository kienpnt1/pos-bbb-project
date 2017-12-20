import React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

//Redux
import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';

//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas/rootSaga'; 

//Middleware
const sagaMiddleware = createSagaMiddleware();
store = createStore(AppReducer, applyMiddleware(sagaMiddleware));
class BBBApp extends React.Component {
	render() {
		return (
			<Provider store={this.store}>
				<AppWithNavigationState />
			</Provider>
		);
	}
}
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent('BBBPosProject', () => BBBApp);

export default BBBApp;