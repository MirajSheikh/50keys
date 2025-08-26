import { useContext, useEffect, useState } from "react"
import styles from "./home.module.css"
import Keyboard from "./keyboard"
import axios from "axios"
import KeyboardToggle from "./keyboardToggle"
import { contexts } from "../App"
import { AnimatePresence } from "framer-motion"

const Home = () => {

  const { showKeyboard } = useContext(contexts)

  const [words, setWords] = useState([])

  const [typedString, setTypedString] = useState([])

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

      if(pressedKey !== "CapsLock" && pressedKey !== "Control" && pressedKey !== "Meta" && pressedKey !== "Alt"){
        registerTypedKey(pressedKey)
        const keyboardKey = document.getElementById(pressedKey)

        keyboardKey.style.backgroundColor = "hsl(45, 100%, 50%)"
        keyboardKey.style.borderColor = "hsl(45, 100%, 50%)"
      }
    }

    document.addEventListener("keydown", handleKeyPress)

    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [])

  useEffect(() => {

    function handleKeyRelease(e){

      const keyboard = document.getElementById("keyboard")
      if(keyboard === null){return}

      const pressedKey = e.key
      if(pressedKey !== "CapsLock" && pressedKey !== "Control" && pressedKey !== "Meta" && pressedKey !== "Alt"){
        const keyboardKey = document.getElementById(pressedKey)

        keyboardKey.style.background = "transparent"
        keyboardKey.style.borderColor = "hsl(45, 100%, 30%)"
      }
    }

    document.addEventListener("keyup", handleKeyRelease)

    return () => document.removeEventListener("keyup", handleKeyRelease)

  }, [])

  useEffect(() => {

    console.log(typedString)

  }, [typedString])

  function registerTypedKey(key){
    if(key !== "Backspace"){
      setTypedString(ts => [...ts, key])
    }
    else{
      setTypedString(ts => ts.filter((_, i) => i !== ts.length-1))
    }
  }

  return(

    <>

      <div className={styles.wordsBlock}>
        {words.map((word, i) => <h2 key={i}>{word}&nbsp;</h2>)}
      </div>

      <AnimatePresence>
        {showKeyboard && <Keyboard />}
      </AnimatePresence>

      <KeyboardToggle />

    </>

  )

}

export default Home
