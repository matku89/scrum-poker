import {call, takeEvery, put} from "redux-saga/effects";
import * as actions from '../actions';
import * as types from '../actions/actionTypes';
import {getUsersFailure} from "../actions";


function* fetchUsers() {
    try {
        const response = yield call(fetch, 'http://localhost:3000/users');
        yield put({type: actions.getUsersDone(response.json())});
    } catch(e) {
        yield put({type: getUsersFailure(e), message: e.message});
    }
}

function* storySaga() {
    yield takeEvery(types.GET_USERS_REQUESTED, fetchUsers);
}

export default storySaga;