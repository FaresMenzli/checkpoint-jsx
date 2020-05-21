import React from 'react';
import './App.css';
import image from './cropped-Asset-3.png' ;
import './style.css';

function App() {
  return (
    <div className="App">
        <div style={{border:'solid 1px black',maxWidth:'100vw'}}>  
 
          <h1 className='title red'>  Fares El Ouissi</h1>  

            <br></br>  

       <img src={image} width='200px' alt='fromSRC'/> <br></br> 

          <img src='/logoamp.png' width='200px' alt='fromPublic' />  

  	</div>  

<video width="320" height="240" controls>  

   <source src="myVideo.mp4" type="video/mp4"></source>

</video> 

     
    </div>
  );
}

export default App;
