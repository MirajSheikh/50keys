import { createContext, useState } from "react";
import Home from "./home/home";
import Navbar from "./navbar/navbar";
import QuickSettings from "./quicksettings/quickSettings";

export const contexts = createContext();

function App() {

  const [showKeyboard, setShowKeyboard] = useState(true)
  const [caps, setCaps] = useState(false)
  const [shift, setShift] = useState(false)

  return (
    <>

      <contexts.Provider value={{showKeyboard, setShowKeyboard, caps, setCaps, shift, setShift}}>
        <Navbar />
        <QuickSettings />
        <Home />
      </contexts.Provider>

    </>
  )
}

export default App
