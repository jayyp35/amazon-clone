import React , { createContext, useContext, useReducer } from 'react'

//Prepare the dataLayer
export const StateContext = createContext();

//Wrap our app and provide the dataLayer
export const StateProvider = ({reducer,initialState,children}) => {
    return(
        <StateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </StateContext.Provider>
    )
};

//pull info from the dataLayer
export const useStateValue = () => useContext(StateContext);