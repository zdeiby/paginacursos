import React from "react";
import './ColorCard.css'

function ColorCard(props){
    return(
        <React.Fragment>
             <div class="col mb-4">
                <div className={`card bg-${props.color}-light`}>
                    <div className="card-body text-center px-4 py-5 px-md-5">
                        <p className="fw-bold text-info card-text mb-2">{props.name}</p>
                        <h5 className="fw-bold card-title mb-3">{props.text}</h5><button className="btn btn-info btn-sm" type="button">Learn more</button>
                    </div>
                </div>
            </div>
    </React.Fragment>
    )
}

export {ColorCard}