import { all, delay, put, takeLatest, call } from 'redux-saga/effects';
import * as constants from '../actionTypes'

export function* getUserlistSaga() {
    debugger
    try {
        const userList = yield call('https://jsonplaceholder.typicode.com/users');
        yield put({type: "GET_USER_LIST_SUCCESS", payload: userList});
    } catch (e) {
        yield put({type: "GET_USER_LIST_FAILURE", payload: e.message});
    } 
}

export default function* root() {
  yield all([
    takeLatest('GET_USER_LIST', getUserlistSaga)
  ]);
}