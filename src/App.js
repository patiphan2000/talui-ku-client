import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'
import Map from './components/Map';
import GraphPage from './components/GraphPage';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
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
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
