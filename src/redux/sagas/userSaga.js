import { all, delay, put, takeLatest, call } from 'redux-saga/effects';
import * as constants from '../actionTypes'
import {getUsersListApi} from '../apis/userApis'

export function* getUserlistSaga() {
    try {
        const userList = yield call(getUsersListApi);
        yield put({type: "GET_USER_LIST_SUCCESS", payload: userList});
    } catch (e) {
        yield put({type: "GET_USER_LIST_FAILURE", payload: e.message});
    } 
}

export default function* root() {
  yield takeLatest('GET_USER_LIST', getUserlistSaga)
}