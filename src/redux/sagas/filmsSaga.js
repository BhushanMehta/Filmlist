import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = 'https://ghibliapi.herokuapp.com/films';
 
function getFilmsApi() {
    return fetch(apiUrl, {
        method:'GET',
        headers: {
            'Content-Type':'application/json',
        }
    })
    .then(response => response.json())
    // .then(response=>console.log(response))
    .catch((error) => {throw error})
}

function* fetchFilms(action) {
    try {
        const films = yield call(getFilmsApi);
        yield put({type:'GET_FILMS_SUCCESS',films:films});
        console.log('from saga',films)
    }
    catch(e) {
        yield put({type:'GET_FILMS_FAILED',message:e.message})
    }
}

function* filmsSaga() {
    yield takeEvery('GET_FILMS_REQUESTED',fetchFilms);
    console.log('filmsaga',fetchFilms)

}

export default filmsSaga;