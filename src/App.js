import React from 'react';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import './App.css';

function App() {
  return (
    <div className="App">
      Hooks Examples for Richa
      <hr/>
      Example using Class components<ClassCounter />
      <hr/>
      Example using Functional hooks components<HookCounter />
    </div>
  );
}

export default App;
