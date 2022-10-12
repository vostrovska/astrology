
import './App.css';
import { useState } from 'react';
import { data } from './data'

function App() {
  const [signs, setSigns] = useState(data);
  const [showText, setShowText] = useState(false);

  const removeSign = (id) =>{
    let newSigns = signs.filter((sign)=> sign.id !== id)
    setSigns(newSigns)
  }

  const showTextClick = (item) =>{
    item.showMore = !item.showMore
    setShowText(!showText)
  }
 
        return(<div>
          <div className="container">
          <h1>Signs of {signs.length} Zodiak</h1>
          </div>
          {signs.map((item =>{
            const {id, name, description, image, source, showMore} = item
            return(<div key={id}>
              <div className='container'>
                <h2>{id} - {name}</h2>
              </div>
              <div className='container'>
              <p>{showMore ? description :description.substring(0,220)+ "..."}
              <button onClick={()=> showTextClick(item)}>{showMore? "Show less": "Show more"}</button> </p>
            </div>
            <div className='container'>
              <img src={image} alt="sign" width='500px'/>
            </div>
            <div className='container'>
              <p>{source} </p>
            </div>
            <div className='container'>
              <button className="btn" onClick={()=>removeSign(id)}>REMOVE</button>
            </div>
            </div>
            )
          }))}
       
        </div>)
      }
    
  

export default App;