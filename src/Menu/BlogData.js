import React from "react";
import {leer} from '../dataBases/db'

const DataContext=React.createContext();

function DataProvider({children}){
const [data, setData]=React.useState([]);

    React.useEffect( ()=>{
       leer('articles')
            .then(data =>{ 
                try{
                   let a=data.body[0].author
                    setData(data.body)
                }catch{

                }})
    },[])

    const blogdata=data;

    const auth={blogdata}

    return (
        <DataContext.Provider value={auth}>
            {children}
        </DataContext.Provider>
    )
}



function useAuth(){
   const auth =  React.useContext(DataContext);
   return auth;
}


export {
    DataProvider,
    useAuth
}
