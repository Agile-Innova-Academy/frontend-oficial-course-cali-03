import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchCats, fetchCatsFailure, fetchCatSuccess } from "../slices/catSlice";


function* fetchCatsSaga() {
    try {
        const response = yield call(axios.get, 'https://api.thecatapi.com/v1/breeds')
        yield put(fetchCatSuccess(response.data))
        
    } catch  {
        yield put(fetchCatsFailure("La peticion catFetch falló"))
    }
}

export default function* rootSaga(){
    yield takeEvery(fetchCats.type, fetchCatsSaga)
}