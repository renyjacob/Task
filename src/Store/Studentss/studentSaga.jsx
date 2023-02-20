import * as types from './studentType'
import * as actions from './studentAction'
import { call, put, takeLatest } from 'redux-saga/effects';

export function* addStudentSaga(payload) {
    try {
        const response = yield call(studSvc.addStudent, payload.payload);
        yield put(actions.addStudentSuccess(response))

    } catch (err) {
        console.log('error', err)
    }
}
export function* getAllStudentSaga() {
    try {
        const response = yield call(studSvc.getAllStudent);
        yield put(actions.getAllStudentSuccess(response))
    } catch (err) {
        console.log('error', err)
    }
}


export function* studWatcher() {
    yield takeLatest(types.ADD, addStudentSaga);
    yield takeLatest(types.GET_ALL, getAllStudentSaga);
}
