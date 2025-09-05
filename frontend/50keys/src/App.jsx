import { createContext, useState } from "react";
import Home from "./home/home";
import Navbar from "./navbar/navbar";
import QuickSettings from "./quicksettings/quickSettings";
import axios from "axios";

export const contexts = createContext();

function App() {

  async function getWords(currMode, setting){
    //use currMode when implementing Time based Tests
    const mode = wordOptions
    const res = await axios.get(`http://localhost:8080/selectWords/${mode[setting]}`)
    setWords(res.data)
  }

  const [showKeyboard, setShowKeyboard] = useState(true)
  const [caps, setCaps] = useState(false)
  const [shift, setShift] = useState(false)
  const [currMode, setCurrMode] = useState("selectWords")
  const [setting, setSetting] = useState(0)
  const [test, setTest] = useState(false)
  const [testComplete, setTestComplete] = useState(false)
  const [words, setWords] = useState([[]])
  const [correctCount, setCorrectCount] = useState(0)
  const [typedCount, setTypedCount] = useState(0)

  const timeOptions = ["coming soon..."]
  const wordOptions = [20]

  return (
    <>

      <contexts.Provider value={{
        showKeyboard, setShowKeyboard, 
        caps, setCaps, 
        shift, setShift, 
        currMode, setCurrMode, 
        setting, setSetting, 
        timeOptions, wordOptions,
        test, setTest,
        testComplete, setTestComplete,
        words, setWords,
        getWords,
        correctCount, setCorrectCount,
        typedCount, setTypedCount
      }}>
        <Navbar />
        <QuickSettings />
        <Home />
      </contexts.Provider>

    </>
  )
}

export default App
