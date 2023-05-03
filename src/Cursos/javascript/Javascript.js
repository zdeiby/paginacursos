import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link , useNavigate} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Javascript.css'
import { leer, modificar, postear } from '../../dataBases/db';

function AprendeJavascript(props){

    const navigate = useNavigate()
    let data = {
        check1:false,
        check2:false,
        check3:false,
        check4:false,
        check5:false,
        check6:false,
        check7:false,
        check8:false,
        check9:false,}

    const [time, setTime]= React.useState(1);
    const [duration, setDuration] = React.useState(0);
    const [current, setCurent] = React.useState(0);
    const [check, setCheck] = React.useState({data});
    const [show, setShow] = React.useState(true);
    const [dataC, setData]= React.useState(false);
    const [datosCursos, setDatosCursos]= React.useState(false)

    const handleDuration = (duration) => {
            setDuration(duration);
          };

    function handleProgress(progress) {
        setCurent(progress.playedSeconds) 
    }
    const mediaQuery = window.matchMedia('(min-width: 600px)');

function handleViewportChange(e) {
  if (e.matches) {
   console.log('El ancho de la pantalla es mayor a 600px') 
   setShow(true)
  } else {
    console.log('El ancho de la pantalla es menor a 600px') 
   setShow(false)
  }
}

mediaQuery.addListener(handleViewportChange);

// Ejecutar la función una vez al inicio para establecer el estado inicial
React.useEffect(()=>{
handleViewportChange(mediaQuery);
},[])

React.useEffect(()=>{
    async function leerD(){
    let consultaSql= await leer('cursosadvanced')
    setData(consultaSql)
   }
   leerD()
   },[])
   React.useEffect(()=>{
    async function leerD(){
    let consultaSql= await leer('cursos')
    setDatosCursos(consultaSql)
   }
   leerD()
   },[])
console.log('props.name',props.slug)
console.log(dataC)

   let idUser=JSON.parse(localStorage.getItem('date'))._id;
   let cursoId=JSON.parse(localStorage.getItem('cursos'))


   console.log('id: ', idUser,'idcurso: ',cursoId )

  console.log("que monda marce" ,cursoId)
   
   let findCourse=cursoId.find(cursos => cursos.name ===props.slug)
   let idCurso=findCourse?.id;




let datos;
dataC?(datos=dataC.body.find(element => element.id==idCurso)
 
):console.log('hola')

console.log("holangas" , datosCursos )





let porcentaje=((current * 100)/duration).toFixed(0)

if(porcentaje >= 0 && porcentaje <= 10 && datos?.advanced<=10){
    console.log("databse" , (datos?.id_advance)?.toString() , 'db',porcentaje)
    modificar({advanced:porcentaje,
        },  (datos?.id_advance)?.toString(),'cursosadvanced')
}
if(porcentaje >= 10 && porcentaje <= 20  && datos?.advanced<=20){
    console.log("guardado 20%")
    console.log("databse" , (datos?.id_advance)?.toString() , 'db',porcentaje)
    modificar({advanced:porcentaje,
        },  (datos?.id_advance)?.toString(),'cursosadvanced')
}
if(porcentaje >= 20 && porcentaje <= 30 && datos?.advanced<=30){
    console.log("guardado 30%")
    console.log("databse" , (datos?.id_advance)?.toString() , 'db',porcentaje)
    modificar({advanced:porcentaje,
        },  (datos?.id_advance)?.toString(),'cursosadvanced')
}
if(porcentaje >= 30 && porcentaje <= 40 && datos?.advanced<=40){
    console.log("databse" , (datos?.id_advance)?.toString() , 'db',porcentaje)
    modificar({advanced:porcentaje,
        },  (datos?.id_advance)?.toString(),'cursosadvanced')
}
if(porcentaje >= 40 && porcentaje <= 50 && datos?.advanced<=50){
    console.log("guardado 50%")
    console.log("databse" , (datos?.id_advance)?.toString() , 'db',porcentaje)
    modificar({advanced:porcentaje,
        },  (datos?.id_advance)?.toString(),'cursosadvanced')
}
if(porcentaje >= 50 && porcentaje <= 60 && datos?.advanced<=60){
    console.log("guardado 60%")
    console.log("databse" , (datos?.id_advance)?.toString() , 'db',porcentaje)
    modificar({advanced:porcentaje,
        },  (datos?.id_advance)?.toString(),'cursosadvanced')
}
if(porcentaje >= 60 && porcentaje <= 70 && datos?.advanced<=70){
    console.log("guardado 70%")
    console.log("databse" , (datos?.id_advance)?.toString() , 'db',porcentaje)
    modificar({advanced:porcentaje,
        },  (datos?.id_advance)?.toString(),'cursosadvanced')
}
if(porcentaje >= 70 && porcentaje <= 80 && datos?.advanced<=80){
    console.log("guardado 80%")
    console.log("databse" , (datos?.id_advance)?.toString() , 'db',porcentaje)
    modificar({advanced:porcentaje,
        },  (datos?.id_advance)?.toString(),'cursosadvanced')
}
if(porcentaje >= 80 && porcentaje <= 90 && datos?.advanced<=90){
    console.log("guardado 90%")
    console.log("databse" , (datos?.id_advance)?.toString() , 'db',porcentaje)
    modificar({advanced:porcentaje,
        },  (datos?.id_advance)?.toString(),'cursosadvanced')
}

    return(
        <Container className='pt-4'>
            <Row>
                
          { show ?<Col sm={3}>
                <p>Doble click en parte 1... para señalar como terminado</p>
            <ul className="list-group ">
            <Link to='./'><li value='0' onDoubleClick={(()=>{setCheck({...check, check1:true })})} onClick={()=>setTime(0)} className={(datos?.advanced >= 10  || porcentaje >=10)?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1 "} >{props.title1} <b className='text-success small'>{(((duration*10)/100)/60).toFixed(2)} min</b></li></Link>
            <Link to='./'><li value='10' onDoubleClick={(()=>{setCheck({...check, check2:true })})} onClick={()=>setTime((duration*10/100))} className={(datos?.advanced >=20 || porcentaje >=20)?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"} >{props.title2} <b className='text-success small'>{(((duration*10)/100)/60).toFixed(2)} min</b></li></Link>
            <Link to='./'><li value='20' onDoubleClick={(()=>{setCheck({...check, check3:true })})} onClick={()=>setTime((duration*20/100))} className={(datos?.advanced >=30 || porcentaje >=30)?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"} >{props.title3} <b className='text-success small'>{(((duration*10)/100)/60).toFixed(2)} min</b></li></Link>
            <Link to='./'><li value='30' onDoubleClick={(()=>{setCheck({...check, check4:true })})} onClick={()=>setTime((duration*30/100))} className={(datos?.advanced  >=40  || porcentaje >=40)?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"} >{props.title4} <b className='text-success small'>{(((duration*10)/100)/60).toFixed(2)} min</b></li>  </Link>
            <Link to='./'><li value='40' onDoubleClick={(()=>{setCheck({...check, check5:true })})} onClick={()=>setTime((duration*40/100))} className={(datos?.advanced  >=50  || porcentaje >=50 )?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"} >{props.title5} <b className='text-success small'>{(((duration*10)/100)/60).toFixed(2)} min</b></li></Link>
            <Link to='./'><li value='50' onDoubleClick={(()=>{setCheck({...check, check6:true })})} onClick={()=>setTime((duration*50/100))} className={(datos?.advanced  >= 60 || porcentaje >=60)?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"} >{props.title6} <b className='text-success small'>{(((duration*10)/100)/60).toFixed(2)} min</b></li></Link>
            <Link to='./'><li value='60' onDoubleClick={(()=>{setCheck({...check, check7:true })})} onClick={()=>setTime((duration*60/100))} name="information" className={(datos?.advanced  >= 70 || porcentaje >=70)?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"}>{props.title7} <b className='text-success small'>{(((duration*10)/100)/60).toFixed(2)} min</b></li></Link>
            <Link to='./'><li value='70' onDoubleClick={(()=>{setCheck({...check, check8:true })})} onClick={()=>setTime((duration*70/100))} className={(datos?.advanced  >= 80 || porcentaje >=80)?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"}  >{props.title8} <b className='text-success small'>{(((duration*10)/100)/60).toFixed(2)} min</b></li></Link>
            <Link to='./'><li value='80' onDoubleClick={(()=>{setCheck({...check, check9:true }); navigate('../aprende/cursos')})}  className={(datos?.advanced  >= 90 || porcentaje >=90)?"list-group-item bg-primary text-light active mb-4":"list-group-item bg-dark text-light li1 mb-4"} >{props.title9} <b className='text-success small'>{(((duration*10)/100)/60).toFixed(2)} min</b></li>  </Link>
        <div className='contenedor' onClick={()=>setShow(false)}><div className='ocultar'>-</div></div>
            </ul>
            </Col>:<Col  sm={1}><div className='contenedor' onClick={()=>setShow(true)}><div className='ocultar'>+</div></div></Col>}  
          
            <Col>
          
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${props.url}&t=${time}s`}
                controls
                playing
                volume='1'
                width="100%"
                 height="500px"
                 onDuration={handleDuration}
                 onProgress={handleProgress} 
                // muted
                //muted='false'
                //loop 
                //playbackRate={1.75}1.75x
                onPlay={()=>console.log('se pulso play')}
                onEnded={()=>console.log('terminò el video')}

            />
            <h2 className='text-center mt-3'>{props.title}</h2>
            <p className='text-center'>Duración: {Math.round( duration/60/60)} Horas</p>
            </Col>
            </Row>
        </Container>
        
    )
}

export {AprendeJavascript}

