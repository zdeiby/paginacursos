import React from "react";
import './Cards.css'
import { Link } from "react-router-dom";


function Cards(props){
    return(
    <React.Fragment>
            <div className="col mb-4">
                <div className="card shadow-sm">
                    <div className="card-body px-4 py-5 px-md-5">
                        <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon tarjeta" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="-32 0 512 512" width="1em" height="1em" fill="currentColor" className="text-success">
                             
                                <path d={props.patch}></path>
                            </svg></div>
                        <h5 className="fw-bold card-title">{props.title}</h5>
                        <p className="text-muted card-text mb-4">{props.text}</p><Link to={`aprende/cursos/${props.url}`}><button className="btn btn-primary shadow" type="button">Learn more</button></Link>
                    </div>
                </div>
            </div>
           
            </React.Fragment>
    )
}

export {Cards}