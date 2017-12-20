import { delay } from 'redux-saga';
import { all } from 'redux-saga/effects';

import { sayHello, watchLogin, watchChangeLogin } from './loginSaga';

export default function* rootSaga() {
    yield all([
        sayHello,
        watchLogin(), 
        watchLogin(), 
    ]);
}