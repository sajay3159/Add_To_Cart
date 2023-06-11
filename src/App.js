import './App.css';
// import User from './User';
import HomeContainers from './Containers/HomeContainers'



function App() {
  return (
    <div className="App">
      {/* <h1>Redux Tutorials</h1>
      <User data={{name:'Ajay Sahani', Age:25, Relationship:'Single'}}/> */}
      <HomeContainers />

    </div>
  );
}

export default App;
