import React, { useState,useReducer } from 'react';
import GLOBELCONSTANT from '../Const/GlobalConst';

const AppContext = React.createContext({});
export default AppContext;
export const AppConsumer = AppContext.Consumer;

let user = localStorage.getItem('user')
	? JSON.parse(localStorage.getItem('user'))
	: '';



const initialState = {
    user: user
}

export const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            localStorage.setItem('user', JSON.stringify(action.value));
            return {
                ...state,
                user: {...action.value}
            };
        case "LOGOUT":
            localStorage.clear();
            sessionStorage.clear(); 
            return {
                ...state,
                user: {}
            }
        default:
            return state

    }
}

export const AppProvider = (props) => {
    const [authState, dispatch] = useReducer(authReducer, initialState)

    function setUserValue(type, value) {
        dispatch({type, value});
    }
   
    const appData = {
        ROLE: GLOBELCONSTANT.ROLE,
        ...authState,
        setUserValue
    };

    return <AppContext.Provider value={{
        ...appData,
    }} > {props.children} </ AppContext.Provider>
}