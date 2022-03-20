import {all} from "redux-saga/effects";
import PostSaga from "../redux_feature/Posts/PostSaga";

export default function* rootSaga() {
    yield all([PostSaga()]);
}