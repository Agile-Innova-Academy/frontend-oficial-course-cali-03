import { useState } from "react"
import CompPadre from "./componets/CompPadre"
import { UserContext } from "./context/ContextPrueba"


function App() {

  const [user, setUser] = useState({
    nombre: "Yudith",
    email: "yudith@gmail.com",
    pass: "123456"
  })

  return (
    <UserContext.Provider value={{user, setUser}}>   
     <CompPadre/>
    </UserContext.Provider>
  )
}

export default App
