import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from './BlogData';
//import { blogdata } from './BlogData';


function BlogPage(){
    const auth=useAuth();
    return(
        <>
           {auth.blogdata.map(post => (
                <BlogLink post={post}/>
            ))}
          
        </>
    )
}

function BlogLink({post}){
    return(
      
       <Container className='text-center  pt-4 pb-2'>
          <Link className='text-success ' to={`/aprende/articulos/${post._id}/${post.slug}`}>

<table class="table">
  <thead class="thead-light">
  
  </thead>
  <tbody>
    <tr>
      <td className='text-success'>{post.title}</td>
     
    </tr>
   
  </tbody>
</table>
         
         </Link>
       </Container>
    
    );
}



export {BlogPage}