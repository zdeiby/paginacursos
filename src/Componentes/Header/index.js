import React from "react";

function Header(){
    return(
        <header className="bg-dark">
        <div className="container pt-4 pt-xl-5">
            <div className="row pt-5">
                <div className="col-md-8 col-xl-6 text-center text-md-start mx-auto">
                    <div className="text-center">
                        <p className="fw-bold text-success mb-2">Dante Castelán Carpinteyro</p>
                        <h1 className="fw-bold">Programación y servicios web</h1>
                        <p>¡Aprende con nosotros!</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}

export {Header}