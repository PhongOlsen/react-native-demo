import React, {useEffect} from "react";
import {Text, View} from "react-native";
import {PostsAction} from "../../redux_feature/Posts/PostsSlice";
import {useDispatch, useSelector} from "react-redux";
import ActivityIndicatorScreen from "../../components/ActivityIndicator";

export default function Business() {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.list);
    const loading = useSelector(state => state.posts.loading);

    console.log(loading, posts.length);

    useEffect(() => {
        dispatch(PostsAction.doGetPosts());
    }, [dispatch]);

    if(loading) return (
        <ActivityIndicatorScreen open={loading}/>
    )

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Business</Text>
        </View>
    );
}
