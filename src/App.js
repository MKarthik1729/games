import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Abhi from './Abhi/Abhi';
import Karthi from './Karthik/Karthi';
import Home from './Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/abhi" element={<Abhi />} />
        <Route path="/karthik" element={<Karthi />} />
      </Routes>
    </Router>
  );
}

export default App;
