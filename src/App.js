import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div class="container">
      <div class="row">
     <div class="col-md-3">

     </div>
	   <div class="col-md-6">
	      <form method="post" action="#" id="#">
          
          <div class="form-group files color">
            <label>Upload Your File </label>
            <input type="file" class="form-control" multiple=""/>
          </div>
        
        </form>
      </div>
      <div class="col-md-3">
       
     </div>
      </div>
    </div>
  );
}

export default App;
