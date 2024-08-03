import { createContext, useContext, useState } from "react";

export let dataContext = createContext();


export const UseDataContext = () => {
    return useContext(dataContext);
  };

export let DataContextProvider = (props)=>{
    let [isLoginCheck,setIsLoginCheck] = useState(false);

    return(
        <dataContext.Provider value={{isLoginCheck,setIsLoginCheck}}>
            {props.children}
        </dataContext.Provider>
    )
}
