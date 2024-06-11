import React from 'react';
import {comments} from './components/commentData';
import Card from './components/Card';
import './App.css';

function App(){
  return (
    <div className='app'>
      {
        comments.map(comment => 
        <Card commentObject={comment}/>
        )
      }
    </div>
  )
}

export default App;