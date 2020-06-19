import React, { useState } from 'react';
import Form from './components/Form';
import Welcome from './components/Welcome';
import './App.css';

function App() {
  const [valideForm, setValidForm] = useState(false);

  return (
    <div className='container'>
      {!valideForm ? <Form handleValidForm={setValidForm} /> : <Welcome />}
    </div>
  );
}

export default App;
