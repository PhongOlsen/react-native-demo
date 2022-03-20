import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import PostsReducer from "../redux_feature/Posts/PostsSlice";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {
        posts: PostsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false}).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
