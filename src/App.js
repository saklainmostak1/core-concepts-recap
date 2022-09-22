
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      
      <District name='noakhali' speciallity='Bivag'></District>
      <District name='dhaka' speciallity='capital'></District>
      <District name='bogra' speciallity='district'></District>
      
    </div>
  );
}
function LoadPosts(){
  const [posts, setPosts] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response => Response.json())
    .then(data => setPosts(data))
  }, [])

  return(
    <div>
      <h1>Post: {posts.length}</h1>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}
function Post(props){
  return(
    <div>
      <h2>Title: {props.title} </h2>
      <p>Body: {props.body} </p>
    </div>
  )
}

function District(props){
  const [count, setCount] = useState(1)

  const CountPower = () => {
  const newCount = count * 2
  setCount(newCount) 
}
  return(
    <div className='district'>
      <h2>Name: {props.name} </h2>
      <h4>Power: {count} </h4>
      <p>Speciality: {props.speciallity} </p>
      <button onClick={CountPower}>Increase</button>
    </div>
  )
}

export default App;
