import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link , useNavigate} from 'react-router-dom';
import ReactPlayer from 'react-player';

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
    const [check, setCheck] = React.useState({data});

    const handleDuration = (duration) => {
            setDuration(duration);
          };
    function lectura(e){
        console.log(e.target.value)
        if(e.target.value == 10){
            setTime(2)
        } if(e.target.value == 90){
            setTime(35825)
        }if(e.target.value != 10 && e.target.value != 90){
            setTime((duration*e.target.value)/100)
        }
    } 
    function checkear(){
        setCheck({
            ...check,
           check1:true
            
        })
    }
    console.log(check)
    return(
        <Container className='pt-4'>
            <Row>
            <Col sm={3}>
                <p>Doble click en parte 1... para señalar como terminado</p>
            <ul className="list-group ">
            <Link to='./'><li value='10' onDoubleClick={(()=>{setCheck({...check, check1:true })})} onClick={lectura} className={check.check1?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"} >{props.title1}</li></Link>
            <Link to='./'><li value='20' onDoubleClick={(()=>{setCheck({...check, check2:true })})} onClick={lectura} className={check.check2?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"} >{props.title2}</li></Link>
            <Link to='./'><li value='30' onDoubleClick={(()=>{setCheck({...check, check3:true })})} onClick={lectura} className={check.check3?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"} >{props.title3}</li></Link>
            <Link to='./'><li value='40' onDoubleClick={(()=>{setCheck({...check, check4:true })})} onClick={lectura} className={check.check4?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"} >{props.title4}</li>  </Link>
            <Link to='./'><li value='50' onDoubleClick={(()=>{setCheck({...check, check5:true })})} onClick={lectura} className={check.check5?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"} >{props.title5}</li></Link>
            <Link to='./'><li value='60' onDoubleClick={(()=>{setCheck({...check, check6:true })})} onClick={lectura} className={check.check6?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"} >{props.title6}</li></Link>
            <Link to='./'><li value='70' onDoubleClick={(()=>{setCheck({...check, check7:true })})} onClick={lectura} name="information" className={check.check7?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"}>{props.title7}</li></Link>
            <Link to='./'><li value='80' onDoubleClick={(()=>{setCheck({...check, check8:true })})} onClick={lectura} className={check.check8?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"}  >{props.title8}</li></Link>
            <Link to='./'><li value='90' onDoubleClick={(()=>{setCheck({...check, check9:true }); navigate('../aprende/cursos')})}  className={check.check9?"list-group-item bg-primary text-light active":"list-group-item bg-dark text-light li1"} >{props.title9}</li>  </Link>
          
            </ul>
            </Col> 
            <Col>
            <ReactPlayer
                url={`https://www.youtube.com/watch?v=${props.url}&t=${time}s`}
                controls
                playing
                volume='1'
                width="100%"
                 height="500px"
                 onDuration={handleDuration}
                 muted
                //muted='false'
                //loop 
                //playbackRate={1.75}1.75x
                onPlay={()=>console.log('se pulso play')}
                onEnded={()=>console.log('terminò el video')}

            />
            <h2 className='text-center'>{props.title}</h2>
            <p className='text-center'>Duración: {Math.round( duration/60/60)} Horas</p>
            </Col>
            </Row>
        </Container>
        
    )
}

export {AprendeJavascript}

