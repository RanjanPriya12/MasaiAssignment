
import { useContext } from 'react';
import './App.css';
import Body from './Components/Body/Body';
import Navbar from './Components/Body/Navbar';
import { ThemeContext } from './Components/Context/ThemeContext';
// import Hook from './Components/Reducer';

function App() {
  const {isLight}=useContext(ThemeContext);
  return (
    <div className={`App ${isLight?'light':'dark'}`}>
      {/* <Hook/> */}
      <Navbar/>
      <Body/>
    </div>
  );
}

export default App;
