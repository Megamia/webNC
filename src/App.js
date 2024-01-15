import React from 'react';
import Test from './Component/Test';
import Home from './Component/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Component/Header&Footer/Footer';

function App() {
  return (
    <div className='a'>
      <Router>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="*" element={<Test />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;