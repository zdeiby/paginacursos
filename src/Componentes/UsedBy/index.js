import React from "react";
import './UsedBy.css'
import facebook from './img/facebook.png'
import microsoft from './img/microsoft.png'
import apple from './img/apple.png'
import google from './img/google.png'
import twitter from './img/twitter.png'

function UsedBy(){
    return(
<React.Fragment>
        <section className="py-5">
            <div className="container text-center py-5">
                <p className="mb-4 parrafo" >Used by 
                <span className="text-success"><strong>2400+</strong>
                </span>&nbsp;of the best companies in the world.</p><a href="#">
                     <img className="m-3" src={google}/></a><a href="#">
                         <img className="m-3" src={microsoft}/></a><a href="#">
                             <img className="m-3" src={apple}/></a><a href="#">
                                 <img className="m-3" src={facebook}/></a><a href="#">
                                     <img className="m-3" src={twitter}/></a>
            </div>
        </section>
</React.Fragment>
    )
}

export {UsedBy}