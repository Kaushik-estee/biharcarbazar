import React from "react";

export const AuthContext = React.createContext();

function AuthContextProvider({children}) {
const[state,setState] = React.useState({
    isAuth:false,
  
})




return(
    <AuthContext.Provider value={{authState:state}} >{children}</AuthContext.Provider>
)


}

export default AuthContextProvider;