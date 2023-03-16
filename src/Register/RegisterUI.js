import React from "react";
import { Col ,Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Register.css'

function RegisterUI(){
    const [get, setGet]= React.useState("false");
    const [info, setInfo]= React.useState('');
    const [post, setPost]= React.useState('');
    let url='https://api.castelancarpinteyro.com/message'
    React.useEffect(()=> {
        async function leer() {
        const response = await fetch(url, {
          method: 'GET',
        });
        const data =  await response.json();

        return setGet(await data);
       
      
      }
      leer()
    },[])

console.log(get)
   
function sendData(e){
    e.preventDefault();
    if(get !=="false"){
        if(get?.body[0].email === info.name || (!info.lastName || !info.email || !info.password) ){
            console.log("no puedes registrarte ya existe el correo")
    } else {
        async function leer(info) {
            const response = await fetch(url, {
                method: 'POST', // or 'PUT'
                body: JSON.stringify(info), // data can be `string` or {object}!
                headers: {
                  'Content-Type': 'application/json'
                }
            })
            const data = await response.json();
          
            return setPost(await data)
          }
       leer(info);
    }
    }
    console.log(post)
    console.log(info)
   
    
}

function form(e){
    setInfo({
        ...info,
        [e.target.name]:e.target.value,
        })
}

    return(
        <React.Fragment>
           <section className="py-5">
        <div className="container py-5">
            <div className="row mb-4 mb-lg-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <p className="fw-bold text-success mb-2">sign up</p>
                    <h2 className="fw-bold">Register</h2>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 col-xl-4">
                    <div className="card">
                        <div className="card-body text-center d-flex flex-column align-items-center">
                            <div className="bs-icon-xl bs-icon-circle bs-icon-primary shadow bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-person">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                                </svg></div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
        <div className="container mb-4 input" >
            <form onSubmit={sendData}>
                    <div  className="d-flex flex-column justify-content-between align-items-center flex-lg-row " > 
                            <Col >
                                 <div className="mb-3"><input onChange={form} className="form-control" type="text" name="name" placeholder="Name"/></div>
                                 <div className=""><input  onChange={form} className="form-control" type="text" name="lastName" placeholder="Last name"/></div>
                                </Col>
                                <Col className="text-center  ">     
                                <div className="mb-3"><input onChange={form} className="form-control" type="text" name="email" placeholder="Email"/></div>
                                <div className=""><input onChange={form} className="form-control" type="password" name="password" placeholder="Password"/></div>
                                </Col>
                    </div>
                     
                         <div className="mb-3 pt-4 divBoton " ><button className="btn btn-primary shadow d-block boton" type="submit">Sign up</button></div>
                         <p className="text-muted divBoton ">Already have an account?&nbsp;<Link to='../login'>Log in</Link></p>
             </form>
             </div>
           
        
   
    </React.Fragment>
    )
}

export {RegisterUI}