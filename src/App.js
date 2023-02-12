import './index.css';
import React,{useState} from 'react';
import Values from 'values.js';
import SingleColor from './single-color';

function App() {
console.log(new Values().all());
const[color,setColor] = useState('');
const[error,setError]=useState(false);
const[list,setList]=useState(new Values('#f15025').all(10));



const handleSubmit = (e)=>{
  e.preventDefault();
  
  try {
    const getColor = new Values(color).all(10);
    setList(getColor)
    console.log(getColor);
  } catch (error) {
    console.log(error);
    setError(true)
  }

}

  return (
   <>
   <section className="container">
    <h3>color generator</h3>
    <form onSubmit={handleSubmit}>
      <input className={`${error? 'error' : null}`} type="text" value={color} onChange={(e)=> setColor(e.target.value)} placeholder='#f15025' />
      <button type='submit' className='btn'>submit</button>
    </form>
   </section>
   <section className="colors">
    {
      list.map((item,index)=>{
        console.log(item);
        return(
          <SingleColor key={index} {...item} index = {index} hexColor={item.hex}/>
        )
      })
    }
   </section>
   </>
  );
}

export default App;
