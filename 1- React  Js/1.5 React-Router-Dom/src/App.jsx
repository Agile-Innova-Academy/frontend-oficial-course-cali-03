import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Characters from './components/Characters'

function App () {
  // const [nameUser, setNameUser] = useState(localStorage.getItem('name') || '')
  // const input1 = useRef(null)
  // const batmanImage = useRef(null)
  // const mainLayout = useRef(null)

  // useEffect(() => {
  //   localStorage.setItem('name', nameUser)
  //   console.log(input1.current.value)
  // }, [nameUser])

  // const handleChange = e => {
  //   console.log(e.target.value)
  //   e.preventDefault()
  //   setNameUser(e.target.value)
  // }

  // const form = document.getElementById('form')
  // form.addEventListener('submit', (e) => {
  //   const input = document.getElementById('nomb').value;
  // })

  // function handleImageChange () {
  //   console.log('image changing')
  //   batmanImage.current.src = 'https://i.pinimg.com/originals/0a/70/6d/0a706d337f40cfa30125af24a1db139b.jpg'
  // }

  // function toggleMode () {
  //   mainLayout.current.classList.toggle('darkMode')
  // }

  return (
    <>
      <Navbar />
      <Characters />
      {/* <button onClick={toggleMode}>Dark/Light</button>
      <form>
        <input
          type='text'
          name='nomb'
          value={nameUser}
          // id='nombre'
          // class="inputs"
          ref={input1}
          placeholder='Ingresa tu nombre'
          onChange={handleChange}
        />
        <h1>NANANANANA Batman!!!</h1>
        <img ref={batmanImage} src='https://i.pinimg.com/originals/9b/ea/30/9bea30a3455865294fb27e5a57f209b4.jpg' alt="batman"/>
      </form>
      <button onClick={handleImageChange}>Update Me</button>
      {nameUser} */}
    </>
  )
}
export default App
