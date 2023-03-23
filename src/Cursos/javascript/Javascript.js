import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AprendeJavascript(props){
    function lectura(){}
    return(
        <Container>
            <Row>
            <Col sm={3}>
            <ul className="list-group">
            <Link to='./'><li onClick={lectura} className="list-group-item bg-dark text-light li1" >{props.title1}</li></Link>
            <Link to='./'><li onClick={lectura} className="list-group-item bg-dark text-light li1">{props.title2}</li></Link>
            <Link to='./'><li onClick={lectura} className="list-group-item bg-dark text-light li1">{props.title3}</li></Link>
            <Link to='./'><li onClick={lectura} className="list-group-item bg-dark text-light li1">{props.title4}</li>  </Link>
            <Link to='./'><li onClick={lectura} className="list-group-item bg-dark text-light li1">{props.title5}</li></Link>
            <Link to='./'><li onClick={lectura} className="list-group-item bg-dark text-light li1">{props.title6}</li></Link>
            <Link to='./'> <li onClick={lectura} name="information" className="list-group-item bg-dark text-light li1">{props.title7}</li></Link>
            <Link to='./'><li onClick={lectura} className="list-group-item bg-dark text-light li1" >{props.title8}</li></Link>
            <Link to='./'><li onClick={lectura} className="list-group-item bg-dark text-light li1">{props.title9}</li>  </Link>
          
            </ul>
            </Col> 
            <Col>
            <iframe width="100%" height="500px" src={`https://youtube.com/embed/${props.url}`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullscreen autoPlay></iframe>
            <h2 className='text-center'>{props.title}</h2>
            </Col>
            </Row>
        </Container>
        
    )
}

export {AprendeJavascript}

