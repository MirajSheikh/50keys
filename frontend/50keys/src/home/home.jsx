import { useEffect, useState } from "react"
import styles from "./home.module.css"
import Keyboard from "./keyboard"
import axios from "axios"

const Home = () => {

  const [words, setWords] = useState("")

  async function getWords(){
    const wordString = await axios.get("http://localhost:8080/words")
    setWords(wordString.data)
  }

  useEffect(() => {
    getWords()
  }, [])

  useEffect(() => {

    function handleKeyPress(e){
      const pressedKey = e.key
      const keyboardKey = document.getElementById(pressedKey)

      keyboardKey.style.backgroundColor = "hsl(45, 100%, 40%)"
      keyboardKey.style.borderColor = "hsl(45, 100%, 40%)"

      setTimeout(() => {
        keyboardKey.style.background = "transparent"
        keyboardKey.style.borderColor = "hsl(45, 100%, 20%)"
      }, 100)
    }

    document.addEventListener("keydown", handleKeyPress)

    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [])

  return(

    <>

      <div className={styles.wordsBlock}>
        <h2>{words}</h2>
      </div>

      <Keyboard />

    </>

  )

}

export default Home
