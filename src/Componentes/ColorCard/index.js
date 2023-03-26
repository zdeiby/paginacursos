import React from "react";
import { Link , useNavigate} from "react-router-dom";
import './ColorCard.css'

function ColorCard(props){
    const [mostrar, setMostrar]=React.useState(false)
    const navigate= useNavigate()
    function inscribirse(e){
        console.log(e)
        if(e==='JavaScript'){
            console.log("inscripto correctamente")
            setMostrar(true)
         //   alert("inscrito correctamente")
          //  navigate('../aprende/cursos/javascript')
        }
        if(e==='HTML'){
            console.log("inscripto correctamente")
            setMostrar(true)
          //  navigate('../aprende/cursos/html')
        }
        if(e==='CSS'){
            console.log("inscripto correctamente")
            setMostrar(true)
        //    navigate('../aprende/cursos/css')
        }
        if(e==='Bootstrap'){
            console.log("inscripto correctamente")
            setMostrar(true)
         //   navigate('../aprende/cursos/bootstrap')
        }
    }

    

    return(
        <React.Fragment>
            {mostrar?<>
                        <button onClick={()=>navigate(`../aprende/cursos/${props.name}`)} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                        Inscripto correctamente Click aqui para continuar
                        </button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                            </div>
                        </div>
                        </div></>

            : <div className="col mb-4">
                <div className={`card bg-${props.color}-light`}>
                    <div className="card-body text-center px-4 py-5 px-md-5">
                        <p className="fw-bold text-info card-text mb-2">{props.name}</p>
                        <h5 className="fw-bold card-title mb-3">{props.text}</h5>
                        <button onClick={()=>inscribirse(props.name)}className="btn btn-info btn-sm" type="button">{props.nombre?props.nombre:'leer mas'}</button>
                    </div>
                </div>
            </div>}
    </React.Fragment>
    )
}

export {ColorCard}