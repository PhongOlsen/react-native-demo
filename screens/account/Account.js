import React, {useCallback, useMemo, useState} from "react";
import {Text, View, Button} from "react-native";
import {DemoMemo} from "./DemoCallBack";

export default function Account() {
    const [number1, setNumber1] = useState(1);
    const [number2, setNumber2] = useState(1);
    const [number3, setNumber3] = useState(1);

    console.log("KT");
    const DemoUseMemo = useMemo(() => {
        console.log("HN");
        return number1 + number2;
    }, [number1, number2]);

    const doSetNumber3 = useCallback(() => {
        console.log("TP");
        setNumber3(number3 + 1);
    },[]);

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Account</Text>
            <Text>
                {DemoUseMemo}
            </Text>
            <Text>{number3}</Text>
            <Text>{number2}</Text>
            <Button title={"Number1"} onPress={() => setNumber1(number1 + 1)}/>
            <Button title={"Number3"} onPress={() => setNumber3(number3 + 1)}/>
            <DemoMemo setNumber3={doSetNumber3}/>
        </View>
    );
}
