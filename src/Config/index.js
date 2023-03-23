import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuthr } from '../Login/peticion';
import './Config.css'



function Config(){
    const [url, setUrl]= React.useState(true)
    const [mouse, setMouse]= React.useState(true)
    const auth=useAuthr();
    const {slug} = useParams();
    const navigate= useNavigate();
    console.log("un profile",auth.user)
    function lectura(e){
             setUrl(e.target.outerText);
             
    }
    
    


    console.log(slug)
    return(
        <Container className='pt-4'>
        <Row>
           
            <Col sm={3}>
            <ul class="list-group">
            <Link to='../profile/information'> <li onClick={lectura} name="information" class="list-group-item bg-dark text-light li1">Information</li></Link>
            <Link to='../profile/change'><li onClick={lectura} class="list-group-item bg-dark text-light li1" >Change password</li></Link>
            <Link to='../profile/delete'><li onClick={lectura} class="list-group-item bg-dark text-light li1">Delete courses</li>  </Link>
            <Link to='../profile/drop'><li onClick={lectura} class="list-group-item bg-dark text-light li1">Drop out</li></Link>
           <li onClick={()=>{auth.logout()}} class="list-group-item bg-dark text-light li1">Logout</li>
            </ul>
            </Col> 
    
           {(slug === 'information' )?
            <Col>
            <table class="table ">
                <thead>
                    <tr>
                    <th scope="col">Nombre</th>
                    <td >{auth.user.name}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="col">Apellido</th>
                    <td >{auth.user.lastName}</td>
                    </tr>
                    <tr>
                    <th scope="col">Email</th>
                    <td >{auth.user.email}</td>
                    </tr>
                </tbody>
                </table>
          
            </Col>
           :'' }

           
        {(slug === 'change' )?
            <Col >
            <table class="table text-center ">
                <thead>
                    <tr>
                    <th scope="col" className='text-primary'>Change password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td >
                        <div>
                            <label className='mb-2'>Escribe tu actual contraseña </label>
                                <input className='mb-4 boton1' type='password'/>
                            <label className='mb-2'>Escribe tu nueva contraseña </label>
                                <input className='mb-4 boton1'  type='password'/>
                            <label className='mb-2'>Escribe de nuevo tu nueva contraseña </label>
                                <input className=' boton1 mb-4'  type='password'/>
                                <button className='btn btn-primary shadow mb-2'>Enviar</button>
                        </div>
                    </td>
                    </tr>
                   
                </tbody>
                </table>
            </Col>
           :'' }
               {(slug === 'drop' )?
            <Col >
            <table class="table text-center ">
                <thead>
                    <tr>
                    <th scope="col" className='color'>¿Estás seguro que quieres eliminar la cuenta?</th>
                    </tr>
                </thead>
                <tbody >
                   <tr ><th><div className='divisor '><p className='mt-4'>Escribe <span style={{color:'red'}}>eliminar</span> para borrar la cuenta</p>
                   <input className='eliminar mb-4 '></input><br/>
                   <button className='btn btn-danger'>Eliminar</button></div></th></tr>
                </tbody>
                </table>
            </Col>
           :'' }
                        {(slug === 'delete' )?
            <Col >
            <table class="table text-center ">
                <thead>
                    <tr>
                    <th scope="col" className='text-success'>No tienes cursos seleccionados</th>
                    </tr>
                </thead>
                <tbody >
                   <tr ><th></th></tr>
                </tbody>
                </table>
            </Col>
           :'' }
        </Row>
        </Container>
    )
}

export {Config}