import React from "react";
import { useAuth } from "./peticion";

function LoginUI(){
const auth= useAuth();

    const [info, setInfo]= React.useState({
        email:'',
        password:'',

    });
    function sendData(e){
        e.preventDefault();
        let username=info.email;
        let password=info.password;
       auth.login({username, password}) 
console.log(username, password)
    }

    function almacen(e){
      setInfo({
            ...info,
            [e.target.name]:e.target.value,
            })
       
    }
  
    return(
        <section className="py-5">
        <div className="container py-5">
            <div className="row mb-4 mb-lg-5">
                <div className="col-md-8 col-xl-6 text-center mx-auto">
                    <p className="fw-bold text-success mb-2">Login</p>
                    <h2 className="fw-bold">Welcome back</h2>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 col-xl-4">
                    <div className="card">
                        <div className="card-body text-center d-flex flex-column align-items-center">
                            <div className="bs-icon-xl bs-icon-circle bs-icon-primary shadow bs-icon my-4"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-person">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path>
                                </svg></div>
                            <form onSubmit={sendData}>
                                
                                <div className="mb-3"><input onChange={almacen} className="form-control" type="email" name="email" placeholder="Email"/></div>
                                <div className="mb-3"><input onChange={almacen} className="form-control" type="password" name="password" placeholder="Password"/></div>
                                <div className="mb-3"><button type="submit" className="btn btn-primary shadow d-block w-100" >Log in</button></div>
                                <p className="text-muted">Forgot your password?</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export {LoginUI}