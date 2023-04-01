import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { LoginUI } from '../Login/LoginUI';
import { useAuthr } from '../Login/peticion';
import './Config.css'



function Config(){
    const [url, setUrl]= React.useState(true)
    const [get, setGet]= React.useState(false)
    const [on, setOn]= React.useState(true)
    const [getUsers, setGetUsers]= React.useState(false)
    const [pass, setPass]=React.useState([])
    const [val1, setVal1]= React.useState(false)
    const [val2, setVal2]= React.useState(false)
    const [val, setVal]= React.useState(false)
    
    const auth=useAuthr();
    const {slug} = useParams();
    const navigate= useNavigate();
   
    function lectura(e){
             setUrl(e.target.outerText);
             
    }

    let url2='https://api.castelancarpinteyro.com/users'

    React.useEffect(()=>{
    async function leer() {
    const response = await fetch(url2, {
      method: 'GET',
    });
    const data = await response.json();
   const id=JSON.parse(localStorage.getItem("date"))._id;
   for(let i=0; i<data.body.length;i++){ 
    if(data.body[i]._id == id){
        return setGetUsers(await data.body[i])
    }
   
}

  }
  leer()
},[])



    React.useEffect(()=>{
        async function leerCourses() {
                   const response = await fetch('http://localhost:8000/cursos', {
                     method: 'GET',
                   });
                   const data =  await response.json();
                   try{
                       let a=data.body
                       setGet(await data); 
                      
                     //  console.log(data)   
                   }catch{
                       console.log('error')
                   }
               
                 
                 }
   
                 leerCourses()
   },[on])
try{
     if(get!==false){
    let pushCO=get.body.filter(index=> index._id==JSON.parse(localStorage.getItem("date"))._id)
        localStorage.setItem("cursos", JSON.stringify(pushCO))
      
}
} catch{}
  

    function eliminarCursos(id){
        fetch(`http://localhost:8000/cursos/${id}`, {
  method: 'DELETE'
})
  .then(response => console.log('Data deleted'))
  .catch(error => console.error(error));
  setOn(new Date())
    }
    async function modificar(info, id) {
        /*  const response = */ await fetch(`http://localhost:8000/users/${id}`, {
              method: 'PATCH', // or 'PUT'
              body: JSON.stringify(info), // data can be `string` or {object}!
              headers: {
              'Content-Type': 'application/json'
              }
  })}

function enviar(e){
    e.preventDefault()
    console.log(getUsers)
    if(getUsers){
        console.log(getUsers)
        if(pass.actual ===getUsers.password) {
            setVal1(true)
           if(pass.nueva1 ===pass.nueva2 && pass.nueva1.length >= 8) {
            setVal2(true)
            console.log(pass)
            modificar({password:pass.nueva1},getUsers._id)
            navigate('../profile/information')
            return
        }else{
            setVal('err')
            setVal2(false)
            return
        }
        } else{
            setVal('err') 
            setVal1(false);
            setVal2(false);
          //  setVal('err')
            return
        }   
    }
   
  
}
function eliminarUser(id){
    fetch(`http://localhost:8000/users/${id}`, {
method: 'DELETE'
})
}
const [delet, setDelete]=React.useState('')
function deleteUser(){
    if (delet === 'eliminar'){
        eliminarUser(JSON.parse(localStorage.getItem("date"))._id);
        localStorage.clear()
    }
}

let login = false;
    try{
       login= localStorage.getItem("date");
       
    }catch{
            console.log("login")
    }

    return(
        <>
        { login?
        <Container className='pt-4'>
        <Row>
           
            <Col sm={3}>
            <ul className="list-group">
            <Link to='../profile/information'> <li onClick={lectura} name="information" className="list-group-item bg-dark text-light li1">Información</li></Link>
            <Link to='../profile/change'><li onClick={lectura} className="list-group-item bg-dark text-light li1" >Cambiar contraseña</li></Link>
            <Link to='../profile/delete'><li onClick={lectura} className="list-group-item bg-dark text-light li1">Eliminar cursos</li>  </Link>
            <Link to='../profile/drop'><li onClick={lectura} className="list-group-item bg-dark text-light li1">Eliminar cuenta</li></Link>
           <li onClick={()=>{auth.logout()}} className="list-group-item bg-dark text-light li1">cerrar sesion</li>
            </ul>
            </Col> 
    
           {(slug === 'information' )?
            <Col>
            <table className="table ">
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
            <table className="table text-center ">
                <thead>
                    <tr>
                    <th scope="col" className='text-primary'>Change password</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td >
                        <div><form onSubmit={enviar}>
                            <label className='mb-2' >Escribe tu actual contraseña </label>
                                <input required  
                                onChange={(e)=> setPass({
                                    ...pass,
                                    [e.target.name]:e.target.value
                                })}
          name='actual'  className={(val1)?'mb-4 boton2':`mb-4 boton1 ${val}`} type='password'/>
                            <label className='mb-2'>Escribe tu nueva contraseña mayor a 8 caracteres </label>
                                <input required onChange={(e)=> setPass({
                                    ...pass,
                                    [e.target.name]:e.target.value
                                })}name='nueva1'  className={val2?'mb-4 boton2':`boton1 ${val}`}  type='password'/>
                            <label className='mb-2'>Escribe de nuevo tu nueva contraseña </label>
                                <input required onChange={(e)=> setPass({
                                    ...pass,
                                    [e.target.name]:e.target.value
                                })} name='nueva2'  className={val2?'mb-4 boton2':`boton1 ${val}`}  type='password'/>
                                <button type='submit' className='btn btn-primary shadow mb-2'>Enviar</button>
                                </form>
                        </div>
                    </td>
                    </tr>
                   
                </tbody>
                </table>
            </Col>
           :'' }
               {(slug === 'drop' )?
            <Col >
            <table className="table text-center ">
                <thead>
                    <tr>
                    <th scope="col" className='color'>¿Estás seguro que quieres eliminar la cuenta?</th>
                    </tr>
                </thead>
                <tbody >
               
                   <tr><th><div className='divisor '><p className='mt-4'>Escribe <span style={{color:'red'}}>eliminar</span> para borrar la cuenta</p>
                    <form onSubmit={deleteUser}>
                        <input onChange={()=>setDelete('eliminar')} className='eliminar mb-4 '></input><br/>
                        <button className='btn btn-danger' type='form'>Eliminar</button> 
                    </form>
                    </div></th></tr>
                 
                  
                </tbody>
                </table>
            </Col>
           :'' }
                        {(slug === 'delete' )?
            <Col >
            <table className="table text-center ">
                <thead>
                    <tr>
                    <th scope="col" className='text-success'>Cursos</th><th>Eliminar</th>
                    </tr>
                </thead>
                <tbody >
                  {(JSON.parse(localStorage.getItem("cursos"))[0])?JSON.parse(localStorage.getItem("cursos")).map((index)=><tr><th className='texto '>{index.name}</th ><th onClick={()=>eliminarCursos(index.id)} className='eliminar'>x</th></tr>):"No tienes cursos inscritos"}
                </tbody>
                </table>
            </Col>
           :'' }
        </Row>
        </Container>:<LoginUI/> }
      
        </>
        
    )
}

export {Config}