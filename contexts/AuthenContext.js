import React, {createContext, useContext, useState} from "react";
import { db } from "../firebase";
import {HomeContext} from "./HomeContext";

export const AuthContext = createContext();

export const AuthenProvider = ({children}) => {
    const [isLogined, setIsLogined] = useState(false);
    const [currentUser, setCurrentUser] = useState();
    const { setIsLoading } = useContext(HomeContext);

    const doLoginUsingFirebase = async (user, callback) => {
        setIsLoading(true);
        try {
            db.collection('users').get().then((querySnapshot) => {
                const newUsers = [];
                querySnapshot.forEach(snapshot => {
                    const data = snapshot.data();
                    newUsers.push(data);
                });
                const userExits = newUsers.find(x => x.userName === user.userName && x.password === user.password);
                if (callback) {
                    callback(userExits);
                }
                setCurrentUser(userExits);
                setIsLoading(false);
            });
        } catch (e) {
            setIsLoading(false);
            console.log('err')
        }

    };

    return (
        <AuthContext.Provider
            value={{
                isLogined,
                currentUser,
                setIsLogined,
                doLoginUsingFirebase
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
