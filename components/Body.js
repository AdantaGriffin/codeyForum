import React from 'react';
import comments from './commentData';

function Body(props){
  return (
    <div>
      <p>{props.comment}</p>
    </div>
    );
}

export default Body;
