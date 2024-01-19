import { SET_EXAMPLE, SET_EXAMPLE_SUCCESS } from 'reducers'
import { put, takeLatest } from 'redux-saga/effects'

export default function* watchSearchMedia() {
  yield takeLatest(SET_EXAMPLE, exampleSaga)
}

export function* exampleSaga({ payload }) {
  console.log('exampleSaga caught', payload)
  yield put({ type: SET_EXAMPLE_SUCCESS, payload: 'success' })
}
