import {takeLatest, call, put} from "redux-saga/effects";
import {PostsAction} from "./PostsSlice";
import {requestGetPosts} from "../../api/requests/posts";

function* fetchPosts() {
    try {
        const response = yield call(requestGetPosts);
        const { status, data } = response;
        if( status === 200) yield put(PostsAction.doGetLoadingSuccess(data));
    } catch (e) {
        yield put(PostsAction.doGetPostFailed())
    }
}

export default function* PostSaga() {
    yield takeLatest(PostsAction.doGetPosts, fetchPosts)
}