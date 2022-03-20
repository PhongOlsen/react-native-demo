import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    list: []
}
const PostsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        doGetPosts(state) {
            state.loading = true
        },
        doGetLoadingSuccess(state, action) {
            state.list = action.payload;
            state.loading = false;
        },
        doGetPostFailed(state) {
            state.loading = false;
        }
    }
});

//Action
export const PostsAction = PostsSlice.actions;
// Reducer
export default PostsSlice.reducer;
