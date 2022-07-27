
import './App.css';

function App() {

  const data=[
    { heading: "Mobile Operating System",
      item:["Android", "blackberry", "iPhone", "Windows Phone"]},
    {
      heading: "Mobile Manufacturers",
      item:["Samsung","HTC","Micromax","Apple"]
    }];
  return (
    <div className="App">
        <div>{data.map((e)=>{
            return <Display title={e.heading} item={e.item}/>
        })}
        </div>
    </div>
  );
}

function Display({title, item}){
  return (<div>
    <ul>
    <h1>{title}</h1>
    {item.map((el)=>{
      console.log(item,el)
      return <li>{el}</li>
    })}
    </ul>
  </div>)
}


export default App;