import './App.css';
import Navbar from './components/layout/Navbar';
import Map from './components/Map';


function App() {

  let line = "map"

  return (
    <div className="App">
      <Navbar/>
      <Map></Map>
    </div>
  );
}

export default App;
