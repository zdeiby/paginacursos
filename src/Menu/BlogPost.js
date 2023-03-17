import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { Footer } from '../Componentes/Footer';
import { Nav } from '../Componentes/Nav';
import { blogdata } from './BlogData';

function BlogPost(){
    const {slug} = useParams();

    const blogpost = blogdata.find(post => post.slug ===slug);
    return(
        
        <>
        <Container className='text-center pb-2'>
            <h5 className='text-success'>{blogpost.date}</h5>
            <h2>{blogpost.title}</h2>
            <h5 className='pb-4'>{blogpost.author}</h5>
            <h5  className='pb-4'>{blogpost.content}</h5>
            <img className='pb-4' src={blogpost.imagen}/>
          
        </Container> 
        
         </>
    )
}




export {BlogPost}