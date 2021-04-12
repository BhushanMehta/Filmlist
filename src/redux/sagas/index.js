import {all} from 'redux-saga/effects';
import filmsSaga from './filmsSaga';

export default function* rootSaga() {
    //console.log('root saga',filmsSaga())
    yield all([
        filmsSaga(),
    ]);
}