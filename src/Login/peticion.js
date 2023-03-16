import React from "react";
import { useNavigate } from "react-router-dom";


const AuthContext=React.createContext();

function AuthProvider({children}){

    const navigate=useNavigate();
    const [user, setUser]= React.useState(null)

    async function login({username,password},l=0){ 
     
        console.log(username,password,l)
        if(l===1){
            navigate('/')
            localStorage.getItem("correo",username)
            setUser({username});
        } 
        if(l===2){
            navigate('/')
            localStorage.getItem("correo",username)
            setUser({username}); 
        }
       
    }
    const logout=() =>{
        localStorage.clear();
        setUser(null);
        navigate('/')
    }
    
    const auth={user,login,logout}
    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}



function useAuth(){
   const auth =  React.useContext(AuthContext);
   return auth;
}


export {
    AuthProvider,
    useAuth
}






