import { useState } from 'react'
import './App.css'

function App() {

  let [count, setCount] = useState(0)
  let [name, setName] = useState("")
  let [pass, setPass] = useState("")

  const updateCount = () => {
    setCount(count + 1)
  }

  const handleSubmit = () => {
    // alert(`Logging in: ${name}, with password: ${pass}`)

    // * Clear Forms
    setName("")
    setPass("")

    // ! eventually will do axios
  }

  return (
    <div>
      <h1>React Local State</h1>
      {/* <button onClick={updateCount}>Click Me!</button> */}
      <button onClick={() => updateCount()}>Click Me!</button>
      The buton has been clicked {count} times!

      <div>
        <input
          onChange={(event) => setName(event.target.value)}
          placeholder='username'
          value={name}
        />

        <br />

        <input
          onChange={(event) => setPass(event.target.value)}
          placeholder='password'
          value={pass}
        />

        <button onClick={handleSubmit}>Login</button>

        <h2>
          Welcome: {name}
        </h2>
        <h3>
          Password: {pass}
        </h3>

      </div>

    </div>
  )
}

export default App
