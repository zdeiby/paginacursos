import { Container, Row, Col } from "react-bootstrap"
import React from 'react'
import { useAuth } from "../Menu/BlogData"
import { Link, useNavigate } from "react-router-dom";
import { borrar, leer, modificar, postear } from "../dataBases/db";


function Enviar(){
  const navigate=useNavigate();
  const auth=useAuth();
  const [datos, setDatos]=React.useState();
  const [data, setData]=React.useState({slug:'10',id:'1'})
  const [data2, setData2]=React.useState(false)
  const [n, setn]=React.useState(0)
  const [states, setState]=React.useState(false);
  const [state1, setState1]=React.useState(false);
  const [edit, setEdit]=React.useState(false);
  const [borrado, setBorrado]=React.useState(true);

  async function enviarA(info) {
    postear(info,'articles')
  }

  React.useEffect( ()=>{
      leer('articles')
          .then(data =>{ 
              try{
                  let a=data.body[0].author
                  setDatos(data.body)
              }catch{

              }})
  },[borrado])
  
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

  function enviar(e){
    e.preventDefault()
    data.slug=data.title.split(" ").join("-") 
    enviarA(data)
    data.id=(auth.blogdata.length)
 
    auth.blogdata.push(data)
    navigate('../aprende/articulos')
    }

    function selection(e){
      for(let i=0; i<datos.length; i++)
      if(datos[i].title == e.target.value){
        setEdit(datos[i]);
      }
    
    }
      function almacen2(e){
        setEdit({
           
            ...edit,
            [e.target.name]:e.target.value,
        })

       }
      
    function editar(id){
     
     setData2(true)
      async function actualizar(id, info) {
       const data = await modificar(info,id,'articles')
       return data;
     }
     actualizar(id, edit)
     navigate('../aprende/articulos')
     }
     function borrarD(e){
        let recorte = parseInt(e.target.value);
        if(window.confirm(`¿Quieres eliminar este articulo? ${e.target.value}`)){
          borrar(recorte, 'articles')
          leer('articles')
          setBorrado(new Date())
  
        }else{
          console.log("no pudiste papu, te falta fuerza")
        }

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
         <button onClick={()=>{setState1(true)} } className='mt-4  mb-3 btn btn-primary shadow d-block w-100 mb-4'>Click si quieres eliminar un articulo</button>
         {state1 ?<> <label className='mt-4  mb-3 text-success'>Eliminar articulos publicados</label>
         <select onChange={borrarD}>
          {datos?datos.map(articles => (
            <>
             <option >{articles._id}   {articles.title} </option></>
          )):''}  

          </select>
          </>:''}
        
          </Col>
         <Col><button onClick={()=>{setState(true); setn(5)}  } className='mt-4  mb-3 btn btn-primary shadow d-block w-100 mb-4'>Click si quieres editar un articulo</button>
        
      {states ?<> <label className='mt-4  mb-3 text-success'>Editar articulos publicados</label>
         <select onChange={selection}>
          {datos?datos.map(articles => (
            <>
             <option> {articles.title}</option></>
          )):''}  

          </select>
          </>:''}

        {(states && datos && edit)? <form onSubmit={(e)=>{
          e.preventDefault()
            editar(edit._id)
        }}> 
        
        <label className="mt-5">Ingresa el Titulo del articulo</label>
        <input  onChange={almacen2} defaultValue={edit.title} className="form-control mb-3 mt-3" type="text" name="title" placeholder="Titulo del articulo"/>
        <label >Ingresa el nombre del autor o autores</label>
        <input required onChange={almacen2} defaultValue={edit.author} className="form-control mb-3 mt-3" type="text" name="author" placeholder="author"/>
        <label >Ingresa la fecha de publicacion</label>
        <input required  className="form-control mb-3 mt-3"   type="text" name="date" readOnly/>
        <label >Ingresa tu articulo</label>
        <textarea   defaultValue={edit.content} name="content" rows="10" cols="50" required onChange={almacen2} className="form-control mb-3 mt-3" type="text" placeholder="Escribe tu articulo aquí"/>
        <label >Ingresa una imagen url</label>
        <input   required defaultValue={edit.imagen} onChange={almacen2} className="form-control mb-3 mt-3" type="text" name="imagen" placeholder="Ingresa una url de imagen"/>

        
      {/*  {arr.map(numero=>(
          <>
           <label >Ingresa tu articulo {numero}</label>
           <textarea defaultValue={edit.content1} name={`content${numero+1}`} rows="10" cols="50" onChange={almacen2} className="form-control mb-3 mt-3" type="text" placeholder="Escribe tu articulo aquí"/>
           <label >Ingresa una imagen url {numero}</label>
          <input defaultValue={edit.image1}  onChange={almacen2} className="form-control mb-3 mt-3" type="text" name={`image${numero+1}`} placeholder="Titulo del articulo"/>
        </>
        ))}   */}
          <button type="submit" className="btn btn-primary shadow d-block w-100 mb-4" >Enviar datos</button>
     </form>:  <form onSubmit={enviar}> 
        
        <label className="mt-5">Ingresa el Titulo del articulo</label>
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
     </form>}
      
       </Col>
         </Row>
       </Container>
        </>
        )
 
}




export {Enviar}
