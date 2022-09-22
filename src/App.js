
import './App.css';

function App() {

  return (
    <div className="App">
      <District name='noakhali' speciallity='Bivag'></District>
      <District name='dhaka' speciallity='capital'></District>
      <District name='bogra' speciallity='district'></District>
    </div>
  );
}

function District(props){
  return(
    <div className='district'>
      <h2>Name: {props.name} </h2>
      <p>Speciality: {props.speciallity} </p>
    </div>
  )
}

export default App;
