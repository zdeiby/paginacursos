import React from "react";
import { Link , useNavigate} from "react-router-dom";
import './ColorCard.css'
import { leer, postear } from "../../dataBases/db";

function ColorCard(props){
    const [mostrar, setMostrar]=React.useState(false)
    const navigate= useNavigate()

    async function postearC(info) {
      postear(info,'cursos')
}
async function leerC() {
   
    return await leer('cursos')
}

async function postearA(info) {
    postear(info,'cursosadvanced')
}

let datos;

try{
  datos=  localStorage.getItem("cursos").includes('JavaScript')
}catch{

}
 async   function inscribirse(e){
        console.log(e)
        if(e==='sql'){
            if(localStorage.getItem("cursos").includes('sql')){
                setMostrar(false)
                navigate('../aprende/cursos/sql') 
               
            }else{
                 setMostrar(true)
                 postearC({
                    name:props.name,
                    brand:'sql',
                    created_by:JSON.parse(localStorage.getItem('date'))._id  }
                    ) 
                    const cursos=JSON.parse(localStorage.getItem("cursos"))
                    cursos.push({
                        name:props.name,
                        brand:'sql',
                        _id:JSON.parse(localStorage.getItem('date'))._id  }) 
                        localStorage.setItem("cursos",JSON.stringify(cursos)) 
                       
            }
          
                 
          //  navigate('../aprende/cursos/html')
     
             

        }
       
        if(e==='JavaScript'){
            console.log("inscripto correctamente")
            if(datos){
                setMostrar(false)
                navigate('../aprende/cursos/javascript')
            }else{
                 setMostrar(true)
                 postearC({
                    name:props.name,
                    brand:'Js',
                    created_by:JSON.parse(localStorage.getItem('date'))._id  }
                    ) 
                    const cursos=JSON.parse(localStorage.getItem("cursos"))
                    cursos.push({
                        name:props.name,
                        brand:'js',
                        _id:JSON.parse(localStorage.getItem('date'))._id
                     }) 
                        localStorage.setItem("cursos2",JSON.stringify(cursos)) 
            }
        }
        if(e==='HTML'){
            if(localStorage.getItem("cursos").includes('html')){
                setMostrar(false)
                navigate('../aprende/cursos/html')
            }else{
                 setMostrar(true)
                 postearC({
                    name:props.name,
                    brand:'html',
                    created_by:JSON.parse(localStorage.getItem('date'))._id  }
                    ) 
                    const cursos=JSON.parse(localStorage.getItem("cursos"))
                    cursos.push({
                        name:props.name,
                        brand:'html',
                        _id:JSON.parse(localStorage.getItem('date'))._id  }) 
                        localStorage.setItem("cursos",JSON.stringify(cursos)) 
            }
          //  navigate('../aprende/cursos/html')
        }
        if(e==='CSS'){
            console.log("inscripto correctamente")
            if(localStorage.getItem("cursos").includes('css')){
                setMostrar(false)
                navigate('../aprende/cursos/css')
            }else{
                 setMostrar(true)
                 postearC({
                    name:props.name,
                    brand:'css',
                    created_by:JSON.parse(localStorage.getItem('date'))._id  }
                    )  
                    const cursos=JSON.parse(localStorage.getItem("cursos"))
                    cursos.push({
                        name:props.name,
                        brand:'css',
                        _id:JSON.parse(localStorage.getItem('date'))._id }) 
                        localStorage.setItem("cursos",JSON.stringify(cursos))
            }
        }
        if(e==='Bootstrap'){
            if(localStorage.getItem("cursos").includes('Bootstrap')){
                setMostrar(false)
                navigate('../aprende/cursos/css')
            }else{
                 setMostrar(true)
                 postearC({
                    name:props.name,
                    brand:'Bootstrap',
                    created_by:JSON.parse(localStorage.getItem('date'))._id  }
                    )  
                    const cursos=JSON.parse(localStorage.getItem("cursos"))
                    cursos.push({
                        name:props.name,
                        brand:'Bootstrap',
                        _id:JSON.parse(localStorage.getItem('date'))._id }) 
                        localStorage.setItem("cursos",JSON.stringify(cursos))
            }
        }
    }

    

    return(
        <React.Fragment>
            {mostrar?<>
                        <button onClick={()=>{navigate(`../aprende/cursos/${props.name}`)}} type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
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