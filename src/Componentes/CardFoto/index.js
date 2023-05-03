import React from 'react';
import { Link } from 'react-router-dom';
import './CardFoto.css'
import { Container , Row} from 'react-bootstrap';
function CardFoto(props){
    return(
      
                 <div className="card tarjeta text-center">
        <img className="card-img-top " src={props.foto} />
        <div className="card-body">
            <h5 className="card-title text-success">{props.title}</h5>
            <p className="card-text">{props.text}.</p>
            <Link to={props.url}>Solicitar este servicio</Link>
        </div>
        </div> 
   
       
    )
}

export {CardFoto}