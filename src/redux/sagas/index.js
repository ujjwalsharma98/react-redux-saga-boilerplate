import { all, fork } from 'redux-saga/effects'
import UserSaga from './userSaga'

export default function* rootSaga() {
    yield all([
        fork(UserSaga)
    ]);
}