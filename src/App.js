import React from 'react';
import './App.css';
import SchoolAdmin from './components/SchoolAdmin';
function App() {
  return (
    <div className="App">
       <SchoolAdmin upload={"Upload Assesment"} admin={"School Admin Dashborad"}/>
    </div>
  );
}

export default App;
