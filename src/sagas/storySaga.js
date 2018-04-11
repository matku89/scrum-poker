import {call, takeEvery, put} from "redux-saga/effects";
import * as types from '../actions/actionTypes';
import {getUsersFailure, getUsersDone} from "../actions";


function* fetchUsers() {
    try {
        const response = yield call(fetch, 'http://localhost:3000/users');
        const data = yield response.json();
        yield put(getUsersDone(data));
    } catch(e) {
        yield put(getUsersFailure(e));
    }
}

function* storySaga() {
    yield takeEvery(types.GET_USERS_REQUESTED, fetchUsers);
}

export default storySaga;