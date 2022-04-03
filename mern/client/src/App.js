import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/navbar';
import RecordList from './components/recordList';
import Edit from './components/edit';
import Create from './components/create';
function App() {
  return (
    <Router>
    <Navbar />
    <main>
    <Routes>
      <Route exact path="/" element={<RecordList />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/create" element={<Create />} />
    </Routes>
    </main>
    </Router>
  );
}

export default App;
