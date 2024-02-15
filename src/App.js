import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import List from './Components/List';
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
