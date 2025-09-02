import { createContext, useState } from "react";
import Home from "./home/home";
import Navbar from "./navbar/navbar";
import QuickSettings from "./quicksettings/quickSettings";

export const contexts = createContext();

function App() {

  const [showKeyboard, setShowKeyboard] = useState(true)
  const [caps, setCaps] = useState(false)
  const [shift, setShift] = useState(false)
  const [currMode, setCurrMode] = useState("selectWords")
  const [setting, setSetting] = useState(0)

  const timeOptions = [15, 30, 60, 90, 120, "custom"]
  const wordOptions = [20, 50, 100, 150, "custom"]

  return (
    <>

      <contexts.Provider value={{
        showKeyboard, setShowKeyboard, 
        caps, setCaps, 
        shift, setShift, 
        currMode, setCurrMode, 
        setting, setSetting, 
        timeOptions, wordOptions
      }}>
        <Navbar />
        <QuickSettings />
        <Home />
      </contexts.Provider>

    </>
  )
}

export default App
