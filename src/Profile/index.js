import React from 'react'
import './Profile.css'
import profileImg from '../assets/img/profileImages/308005691_464884012340731_7728597009113021700_n.jpg'
import { Col, Container, Row } from 'react-bootstrap'


function Profile(){
    let data=JSON.parse(localStorage.getItem("date"))

  
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
                <Col className='skills2 mb-4 m-4'>
                <h4  className='pt-3'>React</h4>
                <h5 className='stars'>   ★ ★ ★ ☆ ☆</h5>
                <h5>experiencia 1 año</h5>
                </Col>
                <Col className='skills2  mb-4 m-4'>
                <h4 className='pt-3'>PHP</h4>
                <h5 className='stars'>   ★ ★ ★ ☆ ☆</h5>
                <h5 className='pb-3'>experiencia 1 año</h5>
                </Col>
            </Row>
       
        </Container>
    </section>

 



    </>)
}

export {Profile}