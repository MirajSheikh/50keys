import { useContext, useEffect, useState } from "react"
import styles from "./home.module.css"
import Keyboard from "./keyboard"
import axios from "axios"
import KeyboardToggle from "./keyboardToggle"
import { contexts } from "../App"
import { AnimatePresence, press } from "framer-motion"

const Home = () => {

  const { showKeyboard } = useContext(contexts)

  const [words, setWords] = useState("")
  const [caps, setCaps] = useState(false)

  async function getWords(){
    const wordString = await axios.get("http://localhost:8080/words")
    setWords(wordString.data)
  }

  useEffect(() => {
    getWords()
  }, [])

  useEffect(() => {

    function handleKeyPress(e){

      const keyboard = document.getElementById("keyboard")
      if(keyboard === null){return}

      const pressedKey = e.key

      if(pressedKey !== "Control" && pressedKey !== "Meta" && pressedKey !== "Alt"){
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
      if(pressedKey !== "Control" && pressedKey !== "Meta" && pressedKey !== "Alt"){
        const keyboardKey = document.getElementById(pressedKey)

        keyboardKey.style.background = "transparent"
        keyboardKey.style.borderColor = "hsl(45, 100%, 30%)"
      }
    }

    document.addEventListener("keyup", handleKeyRelease)

    return () => document.removeEventListener("keyup", handleKeyRelease)

  }, [])

  return(

    <>

      <div className={styles.wordsBlock}>
        <h2>{words}</h2>
      </div>

      <AnimatePresence>
        {showKeyboard && <Keyboard />}
      </AnimatePresence>

      <KeyboardToggle />

    </>

  )

}

export default Home
