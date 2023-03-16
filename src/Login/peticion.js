import React from "react";
import { useNavigate } from "react-router-dom";


const AuthContext=React.createContext();

function AuthProvider({children}){
    const [get, setGet]= React.useState("false");
    let url='https://api.castelancarpinteyro.com/message'
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

 
  
    const navigate=useNavigate();
    const [user, setUser]= React.useState(null)

    function login({username,password},l=0){ 
        console.log(username,password,l)
        if(l===1){
            navigate('/')
            localStorage.getItem("correo",username)
            setUser({username});
        }
        //console.log(get)
        if(get !== 'false' ){
            for(let i=0; i<get.body.length; i++){
                if(get.body[i].email === username && get.body[i].password === password){
                setUser({username});
                localStorage.getItem("correo",username)
                navigate('/')
            } 
            }
           
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






