import React, {memo} from "react";
import {Button} from "react-native";

export function DemoCallBack ({setNumber3}) {
    console.log("ML");
    return <Button title={"Number3CallBack"} onPress={() => setNumber3}/>
}

export const DemoMemo = memo(DemoCallBack);