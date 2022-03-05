import React, {useContext} from "react";
import {View, Text, TouchableOpacity, Image, ScrollView} from "react-native";
import COLORS from "../../consts/color";
import {SafeAreaView} from "react-native-safe-area-context";
import Ionicons from "react-native-vector-icons/Ionicons";
import {AuthContext} from "../../contexts/AuthenContext";

export default function GroupChats({navigation}) {
    const {currentUser} = useContext(AuthContext);
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
                <Text style={{fontSize: 20, fontWeight: "bold"}}>Groups Chat</Text>
                <Text/>
            </View>
            <View
                style={{
                    height: 1,
                    backgroundColor: COLORS.light,
                    marginTop: 20,
                }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                {currentUser.groups.map((item, index) => {
                    return (
                        <View key={index}>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                onPress={() => navigation.navigate('Message Screen', {groupName: item})}>
                                <View style={{flexDirection: "row"}}>
                                    <View>
                                        <View style={{
                                            width: 70,
                                            height: 70,
                                            borderRadius: 200,
                                            marginTop: 10
                                        }}>
                                            <Image
                                                source={{
                                                    uri: 'https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/272310841_1391781817908702_1611987567163328222_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=biiDNtFlQ6YAX8Kib3g&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT9xeqZyeYoWTbLGLBO_E2P1BC3IZcseKO_vsZg0mhP-ZQ&oe=6228DF75',
                                                }}
                                                style={{resizeMode: "contain", flex: 1, borderRadius: 200}}
                                            />
                                        </View>
                                        <View>

                                        </View>
                                    </View>
                                    <View
                                        style={{
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            flex: 1,
                                            alignItems: "center"
                                        }}>
                                        <View style={{marginLeft: 10}}>
                                            <Text style={{fontWeight: "bold", fontSize: 18}}>{item}</Text>
                                            <Text style={{fontWeight: "bold", color: "gray"}}>I love you</Text>
                                        </View>
                                        <Text style={{fontWeight: "bold", color: "gray"}}>1 min ago</Text>
                                    </View>
                                </View>
                                <View
                                    style={{
                                        height: 1,
                                        backgroundColor: COLORS.light,
                                        marginTop: 10,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    )
}