import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List'

function App() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <form method="post" action="#" id="#">
            <div class="form-group files color">
              <label>Upload Your File </label>
              <input type="file" class="form-control" multiple="" />
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <List />
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <button class="upload-button">Upload</button>
        </div>
      </div>
    </div>
  );
}

export default App;
