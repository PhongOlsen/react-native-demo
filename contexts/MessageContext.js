import React, {createContext, useContext, useState} from "react";
import {HomeContext} from "./HomeContext";
import {db} from "../firebase";

export const MessageContext = createContext();
export const MessageProvider = ({children}) => {
    const {setIsLoading} = useContext(HomeContext);
    const [messages, setMessages] = useState([]);
    const [messBackup, setMessBackup] = useState([]);

    const doGetAllMessage = async (groupName) => {
        setIsLoading(true);
        try {
            const citiesRef = db.collection(groupName);
            const snapshot = await citiesRef.get();
            const messagesRes = [];
            snapshot.forEach(doc => {
                const data = doc.data();
                data.id = doc.id;
                messagesRes.push(data);
            });
            setMessages(messagesRes);
            setIsLoading(false);
        } catch (e) {
            setIsLoading(false);
        }
    }

    const doGetOnSnapshotMess = async (groupName) => {
        try {
            const query = db.collection(groupName);
            query.onSnapshot(querySnapshot => {
                const newArray = [];
                querySnapshot.docChanges().forEach(change => {
                    const data = change.doc.data();
                    data.id = change.doc.id;
                    newArray.push(data);
                });
                if (newArray.length === 1) setMessBackup(newArray[0]);
            });
        } catch (e) {
            console.log(e);
        }
    }

    const doPostMessage = (groupName, mess) => {
        try {
            db.collection(groupName).doc().set(mess);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <MessageContext.Provider value={{
            messages,
            messBackup,
            setMessages,
            doGetAllMessage,
            doPostMessage,
            doGetOnSnapshotMess
        }}>
            {children}
        </MessageContext.Provider>
    )
}