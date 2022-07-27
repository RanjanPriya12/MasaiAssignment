
import './App.css';

function App() {
  const logo="LOGOBAKERY";
  const link=["Service", "Project", "About"];
  const btn="Contact";
  return (
    <div className="App">
      <div>{logo}</div>
      <div className='midNav'>
        {link.map((e)=>{
          return <Link link={e}/>
      })}
      </div>
      <button className='btn'>{btn}</button>
    </div>
  );
}

function Link({link}){
    return <p>{link}</p>
}
export default App;