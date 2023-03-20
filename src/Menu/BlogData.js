import React from "react";

const DataContext=React.createContext();

function DataProvider({children}){
const [data, setData]=React.useState([]);
console.log(data)
    React.useEffect( ()=>{
        fetch('https://api.castelancarpinteyro.com/articles')
            .then(response =>  response.json())
            .then(data =>{ 
                try{
                   let a=data.body[0].author
                    setData(data.body)
                }catch{

                }})
    },[])


    const [user, setUser]= React.useState(null)
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
