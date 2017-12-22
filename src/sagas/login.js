import * as types  from '../actions/Types';
//Saga effects
import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

function* login() {
    console.log(`This is login saga`);
}

export function* watchAuthen() {         
    yield takeEvery(types.INIT_APP, login);
}
