
import './App.css';
import { useState } from 'react';
import { data } from './data'

function App() {
  const [sign, setSign] = useState(data[0])
  const [showText, setShowText] = useState(false)
const showTextClick = (item) =>{
  item.showMore = !item.showMore
  setShowText(!showText)
}
const{imageOne, imageTwo,imageThree, descriptionOne, descriptionTwo, descriptionThree} = data[sign]
const nextPicture =() => {
  setSign((sign => {
    sign++;
    return sign
  }))
}
const prevPicture =() => {
  setSign((sign => {
    sign++;
    return sign
  }))
}

  return (<div>
    <div className='container'>
      <h1>Elements of Sign of Zodiak</h1>
    </div>
    <div>
      {sign.map((item =>{
        const { id, name, description, image,showMore} = item;
        return(<div>
          <div className='container'> 
            <h2>{id} - {name}</h2>
          </div>
          <div className='container'>
            <p>{showMore ? description : description.substring (0,200) + "..."}
            <button onClick={() => showTextClick(item)}>{showMore ? "Show less" : "Show more"}</button>
            </p>
          </div>
          <div className='container'>
            <img src={image} width ="500px" alt="zodiak"/>
          </div>
           <div className='container'>
            <button onClick={prevPicture}>Previos</button>
            <button onClick={nextPicture}>Next</button>
          </div> 
        </div>

        )
      }))}
    </div>
    </div>
  );
}

export default App;
