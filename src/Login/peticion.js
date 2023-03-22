import React from "react";
import { useNavigate } from "react-router-dom";


const AuthContext=React.createContext();

function AuthProvider({children}){

    const navigate=useNavigate();
    const [user, setUser]= React.useState("false")

    async function login(get,l=0){ 
    
        console.log("hola soy un get" ,get)
        if(l===1){
           setUser({get}); 
        } 
        if(l===2){
           
            setUser(get);
             navigate('/profile/information') 
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



function useAuthr(){
   const auth =  React.useContext(AuthContext);
   return auth;
}


export {
    AuthProvider,
    useAuthr
}






