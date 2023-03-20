import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './BlogPost.css'
//import { blogdata } from './BlogData';
import { useAuth } from './BlogData';

function BlogPost(){
    const auth= useAuth()
    const {slug} = useParams();

    const [data, setData]=React.useState(false);
console.log(data)
    React.useEffect( ()=>{
        fetch('https://api.castelancarpinteyro.com/articles')
            .then(response =>  response.json())
            .then(data =>{ 
                try{
                   let a=data.body[0].author
                    setData(data.body)
                }catch{

                }})
    },[])


    let blogpost=false;
  try{
     blogpost = data.find(post => post.slug ===slug);
  }catch{

  }
    

    let content1=false;
    let image1=false;
    let content2=false;
    let image2=false;
    let content3=false;
    let image3=false;
    let content4=false;
    let image4=false;
    let content5=false;
    let image5=false;

    try{
        content1=  blogpost.content1;
        image1= blogpost.image1;
        content2=  blogpost.content2;
        image2= blogpost.image2;
        content3=  blogpost.content3;
        image3= blogpost.image3;
        content4=  blogpost.content14;
        image4= blogpost.image4;
        content5=  blogpost.content5;
        image5= blogpost.image5;

    }catch{
        console.log("error")
    }

    return(

        <> 
         <div className="bg-dark pt-3">
          {data?
          <>
        <Container className="text-center pt-5 bg-dark"> 
           <h3 className="text-success">{blogpost.date}</h3>
           <h1> {blogpost.title}</h1> 
           <h3 className="pb-5">{blogpost.author}s</h3> 
        </Container>
        <Container className="pb-5 text-center">
        <h5 className="pt-5">
        {blogpost.content}
         </h5>
         </Container>
         <Container className="pb-5 text-center">
        <div className="div1 text-center">
        <img className="img-fluid d-lg-flex justify-content-center align-self-center justify-content-lg-center align-items-lg-center img-article " src={blogpost.imagen}/>
         </div>
         </Container>
         </>
        :'' }
        </div>


            {/* DINAMICAS */}
          
         { (content1)? <Container className="pb-5 text-center">
        <h5 className="pb-4">{content1}</h5>
        <div className="div1 text-center">
        </div>
        </Container>:''}
         { (image1)?    <Container className="pb-5 text-center">
        <div className="div1 text-center">
        <img className="img-fluid d-lg-flex justify-content-center align-self-center justify-content-lg-center align-items-lg-center img-article pb-5 " src={image1}/>
        </div>
        </Container>: ''}

        { (content2)? <Container className="pb-5 text-center">
        <h5 className="pb-4">{content2}</h5>
        <div className="div1 text-center">
        </div>
        </Container>:''}
         { (image2)?    <Container className="pb-5 text-center">
        <div className="div1 text-center">
        <img className="img-fluid d-lg-flex justify-content-center align-self-center justify-content-lg-center align-items-lg-center img-article pb-5 " src={image2}/>
        </div>
        </Container>: ''}
         
        { (content3)? <Container className="pb-5 text-center">
        <h5 className="pb-4">{content3}</h5>
        <div className="div1 text-center">
        </div>
        </Container>:''}
         { (image3)?    <Container className="pb-5 text-center">
        <div className="div1 text-center">
        <img className="img-fluid d-lg-flex justify-content-center align-self-center justify-content-lg-center align-items-lg-center img-article pb-5 " src={image3}/>
        </div>
        </Container>: ''}

        { (content4)? <Container className="pb-5 text-center">
        <h5 className="pb-4">{content4}</h5>
        <div className="div1 text-center">
        </div>
        </Container>:''}
         { (image4)?    <Container className="pb-5 text-center">
        <div className="div1 text-center">
        <img className="img-fluid d-lg-flex justify-content-center align-self-center justify-content-lg-center align-items-lg-center img-article pb-5 " src={image4}/>
        </div>
        </Container>: ''}

            { (content5)? <Container className="pb-5 text-center">
        <h5 className="pb-4">{content5}</h5>
        <div className="div1 text-center">
        </div>
        </Container>:''}
         { (image5)?    <Container className="pb-5 text-center">
        <div className="div1 text-center">
        <img className="img-fluid d-lg-flex justify-content-center align-self-center justify-content-lg-center align-items-lg-center img-article pb-5 " src={image5}/>
        </div>
        </Container>: ''}
            

         </>
    )
}




export {BlogPost}