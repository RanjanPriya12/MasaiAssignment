
// import { useContext } from 'react';
import './App.css';
// import Body from './Components/Body/Body';
// import Navbar from './Components/Body/Navbar';
// import { ThemeContext } from './Components/Context/ThemeContext';
import TodoApp from './Components/TodoApp/TodoApp';

// import Hook from './Components/Reducer';

function App() {
  // const {isLight}=useContext(ThemeContext);
  return (
    <div className='App'>
      {/* <Hook/> */}
      {/* <Navbar/>
      <Body/> */}
      <TodoApp/>
    </div>
  );
}

export default App;
