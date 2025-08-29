import { useContext, useEffect, useState } from "react"
import styles from "./home.module.css"
import Keyboard from "./keyboard"
import axios from "axios"
import KeyboardToggle from "./keyboardToggle"
import { contexts } from "../App"
import { AnimatePresence } from "framer-motion"

const Home = () => {

  const { showKeyboard, caps, setCaps, setShift } = useContext(contexts)

  const [words, setWords] = useState(null)

  const [typedLetters, setTypedLetters] = useState([])

  async function getWords(){
    const res = await axios.get("http://localhost:8080/words")
    setWords(res.data)
  }

  useEffect(() => {
    getWords()
  }, [])

  useEffect(() => {

    function handleKeyPress(e){

      const keyboard = document.getElementById("keyboard")
      if(keyboard === null){return}

      const pressedKey = e.key

      if(pressedKey !== "Shift" && 
        pressedKey !== "CapsLock" && 
        pressedKey !== "Control" && 
        pressedKey !== "Meta" && 
        pressedKey !== "Alt"){
        registerTypedKey(pressedKey)
        const keyboardKey = document.getElementById(pressedKey)

        keyboardKey.style.backgroundColor = "hsl(45, 100%, 50%)"
        keyboardKey.style.borderColor = "hsl(45, 100%, 50%)"
        keyboardKey.style.color = "hsl(0, 0%, 20%)"
      }

      else if(pressedKey === "CapsLock" && caps === false){
        const keyboardKey = document.getElementById(pressedKey)

        keyboardKey.style.backgroundColor = "hsl(45, 100%, 50%)"
        keyboardKey.style.borderColor = "hsl(45, 100%, 50%)"
        keyboardKey.style.color = "hsl(0, 0%, 20%)"
        setCaps(c => !c)
      }
      else if(pressedKey === "CapsLock" && caps === true){
        const keyboardKey = document.getElementById(pressedKey)

        keyboardKey.style.background = "transparent"
        keyboardKey.style.borderColor = "hsl(45, 100%, 30%)"
        keyboardKey.style.color = "hsl(45, 100%, 30%)"
        setCaps(c => !c)
      }

      if(pressedKey === "Shift"){
        setShift(true)
        const keyboardKey = document.getElementById(pressedKey)
        keyboardKey.style.backgroundColor = "hsl(45, 100%, 50%)"
        keyboardKey.style.borderColor = "hsl(45, 100%, 50%)"
        keyboardKey.style.color = "hsl(0, 0%, 20%)"
      }

    }

    document.addEventListener("keydown", handleKeyPress)

    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [caps])

  useEffect(() => {

    function handleKeyRelease(e){

      const keyboard = document.getElementById("keyboard")
      if(keyboard === null){return}

      const pressedKey = e.key
      if(pressedKey !== "Shift" && 
        pressedKey !== "CapsLock" && 
        pressedKey !== "Control" && 
        pressedKey !== "Meta" && 
        pressedKey !== "Alt"){
        const keyboardKey = document.getElementById(pressedKey)

        keyboardKey.style.background = "transparent"
        keyboardKey.style.borderColor = "hsl(45, 100%, 30%)"
        keyboardKey.style.color = "hsl(45, 100%, 30%)"
      }

      if(pressedKey === "Shift"){
        setShift(false)
        const keyboardKey = document.getElementById(pressedKey)
        keyboardKey.style.background = "transparent"
        keyboardKey.style.borderColor = "hsl(45, 100%, 30%)"
        keyboardKey.style.color = "hsl(45, 100%, 30%)"
      }

    }

    document.addEventListener("keyup", handleKeyRelease)

    return () => document.removeEventListener("keyup", handleKeyRelease)

  }, [])

  function registerTypedKey(key){
    if(key !== "Backspace"){
      setTypedLetters(l => [...l, key])
    }
    else{
      setTypedLetters(l => l.slice(0, l.length-1))
    }
  }

  return(

    <>

      <div className={styles.wordsBlock}>
        <h2>{words}</h2>
      </div>

      <div className={styles.typedWords}>
        {typedLetters.map((letter, i) => <h2 key={i}>{letter}</h2>)}
      </div>

      <AnimatePresence>
        {showKeyboard && <Keyboard />}
      </AnimatePresence>

      <KeyboardToggle />

    </>

  )

}

export default Home
