import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/layout/Navbar';
import Map from './components/Map';
import GraphPage from './components/GraphPage';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div style={{ height: '120vh' }}>
              <Map />
            </div>
          } />
          <Route path="/graph" element={
            <div style={{ height: '120vh' }}>
              <GraphPage />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
