import React from "react";

function Subscribe(){
    return(
        <React.Fragment>
        <section className="py-5">
        <div className="container">
            <div className="bg-dark border rounded border-dark d-flex flex-column justify-content-between align-items-center flex-lg-row p-4 p-lg-5">
                <div className="text-center text-lg-start py-3 py-lg-1">
                    <h2 className="fw-bold mb-2">Suscríbete a nuestro newsletter</h2>
                    <p className="mb-0">Recibe novedades de artículos y guías.</p>
                </div>
                <form className="d-flex justify-content-center flex-wrap flex-lg-nowrap" method="post">
                    <div className="my-2"><input className="border rounded-pill shadow-sm form-control" type="email" name="email" placeholder="Correo electrónico"/></div>
                    <div className="my-2"><button className="btn btn-primary shadow ms-2" type="submit">Suscríbete</button></div>
                </form>
            </div>
        </div>
    </section>
    </React.Fragment>
    )
}

export {Subscribe}