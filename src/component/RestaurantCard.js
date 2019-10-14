import React from 'react';

let RestaurantCard = props => (
    <div> 
        <div className="card">
            <div className="card-body">
                <h5 className="card-title font-weight-bold">{props.name}</h5>
            </div>
        </div>
        <br />
    </div>
)

export default RestaurantCard