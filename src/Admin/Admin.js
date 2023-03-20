import { Container, Row, Col } from "react-bootstrap"
import React from 'react'
import { useAuth } from "../Menu/BlogData"
import { Link, useNavigate } from "react-router-dom";


function Enviar(){
  const navigate=useNavigate();
  const auth=useAuth()
  let url ='https://api.castelancarpinteyro.com/articles';
  async function leer(info) {
    /*  const response = */ await fetch(url, {
          method: 'POST', // or 'PUT'
          body: JSON.stringify(info), // data can be `string` or {object}!
          headers: {
          'Content-Type': 'application/json'
          }
})
  }
  console.log(auth.blogdata)
    const [data, setData]=React.useState({slug:'10',id:'1'})
    const [n, setn]=React.useState(0)
    let ref= React.useRef();
    let arr=[];
    if(n>=0 && n<=5){
        for(let i=0; i<n; i++){
      arr[i]=i
    }
    }
  
console.log(data)
    React.useEffect(() => {
        // 👇️ use a ref (best)
        const element2 = ref.current;
        setData({...data,date:element2.value});
      }, []);
  function almacen(e){
    setData({
       
        ...data,
        [e.target.name]:e.target.value,
    })

   }
  console.log(auth.blogdata.length-1)
  function enviar(e){
    e.preventDefault()
    data.slug=data.title.split(" ").join("-") 
    leer(data)
    data.id=(auth.blogdata.length)
    console.log(data)
    auth.blogdata.push(data)
    navigate('../aprende/articulos')
    }

    return(
        <>
        <Container className="text-center pt-3">
          <Row>
          <Col className="col-3 pt-5 ">
          <label className="text-success pb-2">Numero de campos a agregar</label><br/>
         <input type='number' min='0' max="5" onChange={(e)=>{setn(parseInt(e.target.value))}} placeholder="num"/><br/>
         <label className="pb-4 pt-2">Rango entre 0 a 5 </label>
         <label>Por cada numero que agregue sale un campo de texto y otro de imagen, si no desea colocar una imagen puede
          dejarlo en blanco
         </label>
          </Col>
         <Col>
        <form onSubmit={enviar}>
          <label >Ingresa el Titulo del articulo</label>
          <input required onChange={almacen} className="form-control mb-3 mt-3" type="text" name="title" placeholder="Titulo del articulo"/>
          <label >Ingresa el nombre del autor o autores</label>
          <input required onChange={almacen} className="form-control mb-3 mt-3" type="text" name="author" placeholder="author"/>
          <label >Ingresa la fecha de publicacion</label>
          <input required  ref={ref} className="form-control mb-3 mt-3"  value={new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) } type="text" name="date"/>
          <label >Ingresa tu articulo</label>
          <textarea  name="content" rows="10" cols="50" required onChange={almacen} className="form-control mb-3 mt-3" type="text" placeholder="Escribe tu articulo aquí"/>
          <label >Ingresa una imagen url</label>
          <input required onChange={almacen} className="form-control mb-3 mt-3" type="text" name="imagen" placeholder="Ingresa una url de imagen"/>

  
          {arr.map(numero=>(
            <>
             <label >Ingresa tu articulo {numero}</label>
             <textarea  name={`content${numero+1}`} rows="10" cols="50" onChange={almacen} className="form-control mb-3 mt-3" type="text" placeholder="Escribe tu articulo aquí"/>
             <label >Ingresa una imagen url {numero}</label>
            <input onChange={almacen} className="form-control mb-3 mt-3" type="text" name={`image${numero+1}`} placeholder="Titulo del articulo"/>
          </>
          ))}
            <button type="submit" className="btn btn-primary shadow d-block w-100 mb-4" >Enviar datos</button>
       </form>
       </Col>
         </Row>
       </Container>
        </>
        )
 
}




export {Enviar}
