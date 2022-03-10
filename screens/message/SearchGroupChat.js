import React from "react";
import {View, TextInput} from "react-native";
import COLORS from "../../consts/color";

export default function SearchGroupChat() {
    return (
        <View style={{
            height: 50,
            backgroundColor: COLORS.light,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
        }}>
            <TextInput placeholder="Search" style={{
                fontSize: 18,
                fontWeight: "bold",
                color: COLORS.dark,
                paddingLeft: 10,
                width: "100%",
            }}/>
        </View>
    );
}