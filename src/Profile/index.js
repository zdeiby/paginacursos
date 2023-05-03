import React from 'react'
import './Profile.css'
import profileImg from '../assets/img/profileImages/308005691_464884012340731_7728597009113021700_n.jpg'
import { Col, Container, Row } from 'react-bootstrap'



function Profile(){
    let data=JSON.parse(localStorage.getItem("date"));
    const [edit,setEdit]=React.useState(true)
    const [editAbout,setEditAbout]=React.useState(true)


    
  console.log(edit)

let foto=false;
  try{
   foto= localStorage.getItem('profileImg')
  }catch{

  }
  const [fileContent, setFileContent] = React.useState(profileImg);

  function handleFileRead(e) {
    const content = e.target.result;
    setFileContent(content);
    localStorage.setItem('profileImg', content)
   
   
  }
  
  
  function handleFileChosen(file) {
    const reader = new FileReader();
    reader.onloadend = handleFileRead;
    reader.readAsDataURL(file); 
   
  }
  
  function handleLabelClick(e) {
    e.stopPropagation();
  }
  
  function handleImageMouseDown(e) {
    e.preventDefault();
  }

function guardar(){
  setEditAbout(true)
}
  
    return(<>
   
   <header>
    <div className="cover-photo">
      <img
        src="https://concepto.de/wp-content/uploads/2014/08/programacion-2-e1551291144973.jpg"
        alt="Foto de portada"
      />
    </div>
    <div className="profile-photo">
      <div>
        <label htmlFor="fileInput" onClick={handleLabelClick}>
          <img
            src={foto?foto:profileImg}
            alt="Archivo seleccionado"
      
            onMouseDown={handleImageMouseDown}
          /> <div className="profile-photo-circle" >+</div>
        </label>
       
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={e => handleFileChosen(e.target.files[0])}
        />
      </div>
    </div>
  </header>
    <section>
      <Container className='pt-5'>
      <h1 className='text-center text-success' >{data.name+" "+ data.lastName}</h1>
      <p className='text-center'>{data.email}</p>
      </Container>
    </section>

    <section>
      <Container>
        <Row>
          <Col className='text-center '>
           <div className='aboutMe'>
            <h5>Acerca de mi &nbsp; &nbsp;  <svg onClick={()=>{setEditAbout(false)}} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="white" class="bi bi-pencil-square" viewBox="0 0 16 16">
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                          <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                        </svg></h5>
            {editAbout?<label className='pb-4'>Soy Deiby tengo 19 años, vivo en Colombia, programo en Javascript </label>:<><textarea placeholder='Ingresa una pequeña biografia sobre ti'></textarea><br/><button onClick={()=>guardar()} className="btn btn-primary shadow">Guardar</button></> }

           
           </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col className='text-center pt-4'>
           <div className='aboutMe'>
            <h5 >Cursos en los que está inscrito &nbsp; &nbsp; </h5>
            <Container className='p-4'>
              <Row>
                <Col> 
                <div className='courses'>
                  <Container>
                     <div className='aboutMe'>
                  <h5 className='text-success'>Javascript</h5>
                  <label className='pb-2'>Avance en el curso</label>
                  <div  className='percent' style={{width:'50%'}}>50%</div>
                </div>
                  </Container>
               <Container>
                     <div className='aboutMe'>
                    <h5  className='text-success'>SQL</h5>
                    <label className='pb-2'>Avance en el curso</label>
                    <div className='percent'  style={{width:'50%'}}>50%</div>
                  </div>

               </Container>
               
                </div>
                </Col>
              </Row>
                
            </Container>
         
               
           </div>
          </Col>
        </Row>
      </Container>
    </section>
    
    </>)
}

export {Profile}