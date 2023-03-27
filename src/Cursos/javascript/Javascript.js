import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link , useNavigate} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Javascript.css'

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


    return(
        <Container className='pt-4'>
            <Row>
                
          { show ?<Col sm={3}>
                <p>Doble click en parte 1... para señalar como terminado</p>
            <ul className="list-group ">
            <Link to='./'><li value='0' onDoubleClick={(()=>{setCheck({...check, check1:true })})} onClick={()=>setTime(0)} className={(check.check1 || (duration*10)/100 <= current )?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1 "} >{props.title1} <b className='text-success small'>{(((duration*10)/100)/60).toFixed(2)} min</b></li></Link>
            <Link to='./'><li value='10' onDoubleClick={(()=>{setCheck({...check, check2:true })})} onClick={()=>setTime((duration*10/100))} className={(check.check2 || (duration*20)/100 <= current )?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"} >{props.title2} <b className='text-success small'>{(((duration*10)/100)/60).toFixed(2)} min</b></li></Link>
            <Link to='./'><li value='20' onDoubleClick={(()=>{setCheck({...check, check3:true })})} onClick={()=>setTime((duration*20/100))} className={(check.check3|| (duration*30)/100 <= current)?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"} >{props.title3} <b className='text-success small'>{(((duration*10)/100)/60).toFixed(2)} min</b></li></Link>
            <Link to='./'><li value='30' onDoubleClick={(()=>{setCheck({...check, check4:true })})} onClick={()=>setTime((duration*30/100))} className={(check.check4|| (duration*40)/100 <= current)?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"} >{props.title4} <b className='text-success small'>{(((duration*10)/100)/60).toFixed(2)} min</b></li>  </Link>
            <Link to='./'><li value='40' onDoubleClick={(()=>{setCheck({...check, check5:true })})} onClick={()=>setTime((duration*40/100))} className={(check.check5|| (duration*50)/100 <= current)?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"} >{props.title5} <b className='text-success small'>{(((duration*10)/100)/60).toFixed(2)} min</b></li></Link>
            <Link to='./'><li value='50' onDoubleClick={(()=>{setCheck({...check, check6:true })})} onClick={()=>setTime((duration*50/100))} className={(check.check6|| (duration*60)/100 <= current)?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"} >{props.title6} <b className='text-success small'>{(((duration*10)/100)/60).toFixed(2)} min</b></li></Link>
            <Link to='./'><li value='60' onDoubleClick={(()=>{setCheck({...check, check7:true })})} onClick={()=>setTime((duration*60/100))} name="information" className={(check.check7 || (duration*70)/100 <= current)?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"}>{props.title7} <b className='text-success small'>{(((duration*10)/100)/60).toFixed(2)} min</b></li></Link>
            <Link to='./'><li value='70' onDoubleClick={(()=>{setCheck({...check, check8:true })})} onClick={()=>setTime((duration*70/100))} className={(check.check8 || (duration*80)/100 <= current)?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"}  >{props.title8} <b className='text-success small'>{(((duration*10)/100)/60).toFixed(2)} min</b></li></Link>
            <Link to='./'><li value='80' onDoubleClick={(()=>{setCheck({...check, check9:true }); navigate('../aprende/cursos')})}  className={(check.check9 || (duration*99)/100 <= current)?"list-group-item bg-primary text-light active mb-4":"list-group-item bg-dark text-light li1 mb-4"} >{props.title9} <b className='text-success small'>{(((duration*10)/100)/60).toFixed(2)} min</b></li>  </Link>
        <div className='contenedor' onClick={()=>setShow(false)}><div className='ocultar'>-</div></div>
            </ul>
            </Col>:<Col  sm={1}><div className='contenedor1' onClick={()=>setShow(true)}><div className='ocultar'>+</div></div></Col>}  
          
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
                 muted
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

