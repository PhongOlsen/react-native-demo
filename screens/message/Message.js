import React, {useContext, useEffect} from "react";
import {Text, View, TouchableOpacity, ScrollView} from "react-native";
import COLORS from "../../consts/color";
import {SafeAreaView} from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import {MessageContext} from "../../contexts/MessageContext";
import {AuthContext} from "../../contexts/AuthenContext";
import BottomChat from "./BottomChat";

export default function Message({navigation, route}) {
    const {groupName} = route.params;
    const {
        doGetAllMessage,
        messages,
        doPostMessage,
        doGetOnSnapshotMess,
        messBackup,
        setMessages
    } = useContext(MessageContext);
    const {currentUser} = useContext(AuthContext);

    useEffect(() => {
        if (!messages.some(x => x.id === messBackup.id)) setMessages(messages.concat(messBackup));
    }, [messBackup])

    useEffect(() => {
        doGetAllMessage(groupName);
    }, []);

    useEffect(() => {
        doGetOnSnapshotMess(groupName);
    }, []);

    return (
        <SafeAreaView
            style={{
                flex: 1,
                paddingHorizontal: 20,
                backgroundColor: COLORS.white,
            }}
        >
            <View style={{
                marginTop: 30,
                flexDirection: "row",
                justifyContent: "space-between"
            }}>
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name={"arrow-back"} size={28}/>
                </TouchableOpacity>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>Chats</Text>
                <Text/>
            </View>
            <View style={{
                height: 1,
                backgroundColor: COLORS.light,
                marginTop: 10,
            }}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View>
                        {messages.length > 0 ? messages.map((item) => {
                            return (
                                <View key={item.id} style={{
                                    height: 30,
                                    alignSelf: currentUser.userName === item.userName ? 'flex-end' : 'flex-start',
                                    backgroundColor: currentUser.userName === item.userName ? COLORS.green : 'gray',
                                    borderRadius: 50,
                                    justifyContent: 'center',
                                    marginTop: 10
                                }}>
                                    <Text style={{marginHorizontal: 15, fontWeight: "bold"}}>{item.message}</Text>
                                </View>
                            )
                        }) : (<Text/>)}
                    </View>
                </View>
            </ScrollView>
            <BottomChat groupName={groupName} currentUser={currentUser} doPostMessage={doPostMessage}/>
        </SafeAreaView>
    );
}
