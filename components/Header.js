import React from 'react';
import '../style.css';
function Header(props){
  return (
    <div>
      <img src={props.profileImg}></img>
      <h1>{props.username}</h1>
    </div>
  )
}

export default Header;
