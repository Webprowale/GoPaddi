import { useState } from 'react'
import Liberty from './Components/Liberty'
import Carousel from './Components/Carousel'
import Description from './Components/Description'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container-fluid bg-white'>
      <Carousel />
       <Liberty />
       <Description />
    </div>
  )
}

export default App
