import {TextInput, TouchableOpacity, View} from "react-native";
import COLORS from "../../consts/color";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useState} from "react";

export default function BottomChat({currentUser, doPostMessage, groupName}) {
    const [messValue, setMessValue] = useState('');
    return (
        <View style={{marginTop: "auto", marginBottom: 10, flexDirection: "row", alignItems: "center"}}>
            <View style={{flex: 1, flexDirection: "row", alignItems: "center"}}>
                <View style={{
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: COLORS.light,
                    flex: 0.95,
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <TextInput
                        placeholder="Message"
                        onChangeText={(value) => setMessValue(value)}
                        value={messValue}
                        style={{
                            width: "100%",
                            fontWeight: "bold",
                            fontSize: 18,
                            flex: 1,
                            marginHorizontal: 15
                        }}/>
                </View>
                <TouchableOpacity onPress={() => {
                    const currentDate = new Date();
                    doPostMessage(groupName, {userName: currentUser.userName, message: messValue, createdAt: currentDate});
                    setMessValue('');
                }}>
                    <Ionicons style={{marginLeft: 20, marginRight: 0}} name={"ios-send"} size={28}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}