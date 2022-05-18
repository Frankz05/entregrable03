import './App.css';
import Location from './components/Location';
import header from "./asset/header.svg"

function App() {
  return (
    <div className="App">
      <div className='imgHeader'>
        <img src={header} alt="" />
      </div>
      <Location/>
    </div>
  );
}

export default App;
