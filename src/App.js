import logo from './logo.svg';
import './App.css';
import Test from './Component/Test';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
function App() {
  return (
    <div className='a'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Test" element={<Test />} />
        <Route path="*" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;