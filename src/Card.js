import React from 'react';

const Card = (props)=>
{
    return(
        <div className=' tc bg-gold dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${props.id}.png`} alt='robots'/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.username}</p>
            </div>
        </div>
    );
}

export default Card;