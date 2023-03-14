import React from "react";
import { useNavigate } from "react-router-dom";


const AuthContext=React.createContext();

function AuthProvider({children}){
    const [get, setGet]= React.useState('');
    let url='http://localhost:8000/mysql/'

    React.useEffect(()=> {
        async function leer() {
        const response = await fetch(url, {
          method: 'GET',
        });
        const data = await response.json();
      
        return setGet(await data)
      }
      leer()
    },[])
    console.log(get)
   
    const navigate=useNavigate();
    const [user, setUser]= React.useState(null)

    function login({username}){
        setUser({username});
        localStorage.getItem("correo",username)
       navigate('/')
    }
    const logout=() =>{
        setUser(null);
        localStorage.clear();
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






