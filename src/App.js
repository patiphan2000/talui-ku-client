import './App.css';
import Navbar from './components/layout/Navbar';
import Map from './components/Map';


function App() {

  return (
    <div className="App">
      <Navbar/>
      <div style={{ height: '120vh' }}>
        <Map></Map>
      </div>
    </div>
  );
}

export default App;
