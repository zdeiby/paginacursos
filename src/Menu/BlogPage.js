import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Footer } from '../Componentes/Footer';
import { Nav } from '../Componentes/Nav';
import { blogdata } from './BlogData';


function BlogPage(){
    return(
        <>
          
     
           {blogdata.map(post => (
                <BlogLink post={post}/>
            ))}
          
        </>
    )
}

function BlogLink({post}){
    return(
       <Container className='text-center pt-3 pb-2'>
          <Link className='text-success' to={`/aprende/articulos/${post.id}/${post.slug}`}>{post.title}</Link>
       </Container>
    );
}



export {BlogPage}