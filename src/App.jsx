import { useState } from 'react'
import './App.css'
import Header from '../src/components/Header/Header.jsx'
import Form from '../src/components/Form/Form.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  )
}

export default App
