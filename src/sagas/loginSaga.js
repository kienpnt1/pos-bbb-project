import { LOGIN, CHANGE_LOGIN, LOGOUT }  from '../actions/Types';
//Saga effects
import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

export function* sayHello() {
    console.log('Hello world !');
}

function* login() {
    console.log(`This is login saga`);
}

export function* watchLogin() {         
    yield takeEvery(LOGIN, login);
}

function* changeLogin() {
    console.log(`This is decrement saga`);
}

export function* watchChangeLogin() {     
    console.log(`watchChangeLogin saga`);
    yield takeEvery(CHANGE_LOGIN, changeLogin);
}