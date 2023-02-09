import React from "react";
import './Cards2.css'


function Cards2(props){

    return(
    <React.Fragment>
    <div className="col mb-5">
        <div className="card shadow-sm">
            <div className="card-body px-4 py-5 px-md-5">
                <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon tarjeta">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-file-earmark-code-fill text-success">
                        <path d={props.patch}></path>
                    </svg></div>
                <h5 className="fw-bold card-title">{props.title}</h5>
                <p className="text-muted card-text mb-4">{props.text}</p>
                <button className="btn btn-primary shadow" type="button">Learn more</button>
            </div>
        </div>
    </div>
            </React.Fragment>
    )
}

export {Cards2}