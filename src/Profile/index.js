import React from 'react'
import './Profile.css'
import profileImg from '../assets/img/profileImages/308005691_464884012340731_7728597009113021700_n.jpg'
import { Col, Container, Row } from 'react-bootstrap'


function Profile(){
    let data=JSON.parse(localStorage.getItem("date"));
    const [edit,setEdit]=React.useState(true)
  console.log(edit)
    return(<>
          <header>
      <div class="cover-photo">
        <img src='https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg' alt="Foto de portada"/>
      </div>
      <div class="profile-photo">
        <img src={profileImg} alt="Foto de perfil"/>
      </div>
    </header>
    <section>
      <Container>
      <h1 className='text-center text-success' >{data.name+" "+ data.lastName}</h1>
      <p className='text-center'>{data.email}</p>
      </Container>
    </section>
    <section>
        <Container className=' pb-2 text-center skills contaner'>
            <Row  className='skills1 pb-2 pt-3 mb-4'>
                 <h4>Habilidades</h4>
            </Row>
            <Row>
              {edit?<Col className='skills2 mb-4 m-4'>
                <div className="">
                <div className="card shadow-sm">
                    <div className="card-body px-4 py-5 px-md-5">
                        <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon tarjeta" >
                        <svg onClick={()=>{setEdit(false)}} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                            
                            </div>
                        <h5 className="fw-bold card-title">React</h5>
                        <h5 className="stars">★ ★ ★ ☆ ☆</h5>
                        <h5 contentEditable className="fw-bold card-title">1 año</h5>
                        <button className="btn btn-primary shadow" type="button">Learn more</button>
                    </div>
                </div>
                   </div>
                </Col>:<Col className='skills2 mb-4 m-4'>
                <div className="">
                <div className="card shadow-sm">
                    <div className="card-body px-4 py-5 px-md-5">
                        <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon tarjeta" >
                            </div>
                        <h5 contentEditable className="fw-bold card-title">React</h5>
                        <h5 contentEditable className="stars">★ ★ ★ ☆ ☆</h5>
                        <h5 contentEditable className="fw-bold card-title">1 año</h5>
                        <button onClick={()=>{setEdit(true)}} className="btn btn-primary shadow" type="button">Aceptar cambios</button>
                    </div>
                </div>
                   </div>
                </Col>}

                {edit?<Col className='skills2 mb-4 m-4'>
                <div className="">
                <div className="card shadow-sm">
                    <div className="card-body px-4 py-5 px-md-5">
                        <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon tarjeta" >
                        <svg onClick={()=>{setEdit(false)}} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg>
                            
                            </div>
                        <h5 className="fw-bold card-title">React</h5>
                        <h5 className="stars">★ ★ ★ ☆ ☆</h5>
                        <h5 contentEditable className="fw-bold card-title">1 año</h5>
                        <button className="btn btn-primary shadow" type="button">Learn more</button>
                    </div>
                </div>
                   </div>
                </Col>:<Col className='skills2 mb-4 m-4'>
                <div className="">
                <div className="card shadow-sm">
                    <div className="card-body px-4 py-5 px-md-5">
                        <div className="bs-icon-lg d-flex justify-content-center align-items-center mb-3 bs-icon tarjeta" >
                            </div>
                        <h5 contentEditable className="fw-bold card-title">php</h5>
                        <h5 contentEditable className="stars">★ ★ ★ ☆ ☆</h5>
                        <h5 contentEditable className="fw-bold card-title">1 año</h5>
                        <button onClick={()=>{setEdit(true)}} className="btn btn-primary shadow" type="button">Aceptar cambios</button>
                    </div>
                </div>
                   </div>
                </Col>}
            </Row>
       
        </Container>
    </section>
    </>)
}

export {Profile}