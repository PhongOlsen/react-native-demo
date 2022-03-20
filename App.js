import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {Text, Platform, InteractionManager} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {AuthenProvider} from "./contexts/AuthenContext";
import {CartProvider} from "./contexts/CartContext";
import {DemoProvider} from "./contexts/DemoContext";
import {HomeProvider} from "./contexts/HomeContext";
import {ProductProvider} from "./contexts/ProductContext";
import AppNavigator from "./navigation/AppNavigator";
import {MessageProvider} from "./contexts/MessageContext";
import {Provider} from 'react-redux';
import store from "./redux/store";

export default function App() {
    const _setTimeout = global.setTimeout;
    const _clearTimeout = global.clearTimeout;
    const MAX_TIMER_DURATION_MS = 60 * 1000;
    if (Platform.OS === 'android') {
        const timerFix = {};
        const runTask = (id, fn, ttl, args) => {
            const waitingTime = ttl - Date.now();
            if (waitingTime <= 1) {
                InteractionManager.runAfterInteractions(() => {
                    if (!timerFix[id]) {
                        return;
                    }
                    delete timerFix[id];
                    fn(...args);
                });
                return;
            }

            const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
            timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
        };

        global.setTimeout = (fn, time, ...args) => {
            if (MAX_TIMER_DURATION_MS < time) {
                const ttl = Date.now() + time;
                const id = '_lt_' + Object.keys(timerFix).length;
                runTask(id, fn, ttl, args);
                return id;
            }
            return _setTimeout(fn, time, ...args);
        };

        global.clearTimeout = id => {
            if (typeof id === 'string' && id.startsWith('_lt_')) {
                _clearTimeout(timerFix[id]);
                delete timerFix[id];
                return;
            }
            _clearTimeout(id);
        };
    }
    return (
        <Provider store={store}>
            <HomeProvider>
                <AuthenProvider>
                    <ProductProvider>
                        <CartProvider>
                            <DemoProvider>
                                <MessageProvider>
                                    <SafeAreaProvider fallback={<Text>Loading...</Text>}>
                                        <NavigationContainer>
                                            <AppNavigator/>
                                        </NavigationContainer>
                                    </SafeAreaProvider>
                                </MessageProvider>
                            </DemoProvider>
                        </CartProvider>
                    </ProductProvider>
                </AuthenProvider>
            </HomeProvider>
        </Provider>
    );
}
