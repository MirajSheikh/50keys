import { useContext, useEffect, useState } from "react"
import styles from "./home.module.css"
import Keyboard from "./keyboard"
import KeyboardToggle from "./keyboardToggle"
import { contexts } from "../App"
import { AnimatePresence, motion } from "framer-motion"
import ComingSoon from "../comingsoon/comingSoon"

const Home = () => {

  const { showKeyboard, caps, setCaps, setShift, setting, currMode, timeOptions, wordOptions, 
    test, setTest, testComplete, setTestComplete, words, getWords, 
    correctCount, setCorrectCount, typedCount, setTypedCount} = useContext(contexts)

  const [startTime, setStartTime] = useState(0)
  const [endTime, setEndTime] = useState(0)
  const [charCount, setCharCount] = useState(0)
  
  useEffect(() => {
    setTest(false)
    setTestComplete(false)
    setCorrectCount(0)
    setTypedCount(0)
  }, [currMode, setting])

  useEffect(() => {
    if(test === true){
      setStartTime(Date.now())
    }
    else{
      setEndTime(Date.now())
    }
  }, [test])

  useEffect(() => {

    function handleKeyPress(e){

      const keyboard = document.getElementById("keyboard")

      const pressedKey = e.key

      if(keyboard === null && pressedKey !== " " && !test){return}

      if(pressedKey === " " && !test && currMode === "selectWords"){
        restartTest()
        return
      }

      if(test && 
        pressedKey !== "Shift" && 
        pressedKey !== "CapsLock" && 
        pressedKey !== "Control" && 
        pressedKey !== "Meta" && 
        pressedKey !== "Alt" && 
        pressedKey !== "Tab" &&
        pressedKey !== "Enter"){
        checkLetter(pressedKey)
        if(keyboard === null)return
        const keyboardKey = document.getElementById(pressedKey)

        keyboardKey.style.backgroundColor = "hsl(45, 100%, 50%)"
        keyboardKey.style.borderColor = "hsl(45, 100%, 50%)"
        keyboardKey.style.color = "hsl(0, 0%, 20%)"
      }

      else if(pressedKey === "CapsLock" && caps === false){
        if(keyboard === null)return
        const keyboardKey = document.getElementById(pressedKey)

        keyboardKey.style.backgroundColor = "hsl(45, 100%, 50%)"
        keyboardKey.style.borderColor = "hsl(45, 100%, 50%)"
        keyboardKey.style.color = "hsl(0, 0%, 20%)"
        setCaps(c => !c)
      }
      else if(pressedKey === "CapsLock" && caps === true){
        if(keyboard === null)return
        const keyboardKey = document.getElementById(pressedKey)

        keyboardKey.style.background = "transparent"
        keyboardKey.style.borderColor = "hsl(45, 100%, 30%)"
        keyboardKey.style.color = "hsl(45, 100%, 30%)"
        setCaps(c => !c)
      }

      if(pressedKey === "Shift"){
        setShift(true)
        if(keyboard === null)return
        const keyboardKey = document.getElementById(pressedKey)
        keyboardKey.style.backgroundColor = "hsl(45, 100%, 50%)"
        keyboardKey.style.borderColor = "hsl(45, 100%, 50%)"
        keyboardKey.style.color = "hsl(0, 0%, 20%)"
      }

    }

    document.addEventListener("keydown", handleKeyPress)

    return () => document.removeEventListener("keydown", handleKeyPress)
  }, [caps, test, currMode])

  useEffect(() => {

    function handleKeyRelease(e){

      const keyboard = document.getElementById("keyboard")
      if(keyboard === null){return}

      const pressedKey = e.key
      if(pressedKey !== "Shift" && 
        pressedKey !== "CapsLock" && 
        pressedKey !== "Control" && 
        pressedKey !== "Meta" && 
        pressedKey !== "Alt" && 
        pressedKey !== "Tab" &&
        pressedKey !== "Enter"){
        if(keyboard === null)return
        const keyboardKey = document.getElementById(pressedKey)

        keyboardKey.style.background = "transparent"
        keyboardKey.style.borderColor = "hsl(45, 100%, 30%)"
        keyboardKey.style.color = "hsl(45, 100%, 30%)"
      }

      if(pressedKey === "Shift"){
        setShift(false)
        if(keyboard === null)return
        const keyboardKey = document.getElementById(pressedKey)
        keyboardKey.style.background = "transparent"
        keyboardKey.style.borderColor = "hsl(45, 100%, 30%)"
        keyboardKey.style.color = "hsl(45, 100%, 30%)"
      }

    }

    document.addEventListener("keyup", handleKeyRelease)

    return () => document.removeEventListener("keyup", handleKeyRelease)

  }, [])

  var letterTracker = 0
  function checkLetter(key){
    if(letterTracker >= letterId){
      setTest(false)
      setTestComplete(true)
      setCharCount(letterTracker)
      return
    }
    if(key === "Backspace" && letterTracker > 0){
      document.getElementById(`l${letterTracker}`).style.color = "hsl(0, 0%, 50%)"
      if(document.getElementById(`l${letterTracker-1}`).style.color === "white"){
        setCorrectCount(c => c-1)
      }
      document.getElementById(`l${letterTracker}`).style.textDecoration = "none"
      letterTracker--
      document.getElementById(`l${letterTracker}`).style.textDecoration = "underline"
      document.getElementById(`l${letterTracker}`).style.color = "hsl(0, 0%, 50%)"
    }
    else{
      if(key === "Backspace"){
        return
      }
      const letter = document.getElementById(`l${letterTracker}`).innerHTML
      const letterToCheck = letter !== "&nbsp;" ? letter : " "
      if(key === letterToCheck){
        document.getElementById(`l${letterTracker}`).style.color = "white"
        setCorrectCount(c => c+1)
      }
      else{
        document.getElementById(`l${letterTracker}`).style.color = "hsl(0, 100%, 70%)"
      }
      setTypedCount(t => t+1)
      document.getElementById(`l${letterTracker}`).style.textDecoration = "none"
      letterTracker++
      document.getElementById(`l${letterTracker}`).style.textDecoration = "underline"
    }
  }

  var wordId = -1
  function getWordId(){
    let temp = wordId
    wordId++
    return temp + 1
  }

  var letterId = -1
  function getLetterId(){
    let temp = letterId
    letterId++
    return temp + 1
  }

  function getSpeed(){
    const timeElapsed = (endTime - startTime)/1000/60
    return Math.round(words.length/timeElapsed)
  }

  function getTimeTaken(){
    return (endTime - startTime)/1000
  }

  const highlightedStats = {
    color: "hsl(45, 100%, 50%)",
    fontSize: "25px"
  }

  function getAccuracy(){
    return Math.round((correctCount/typedCount)*100)
  }

  function restartTest(){
    setTestComplete(false)
    setTest(true)
    setCorrectCount(0)
    setTypedCount(0)
  }

  function newTest(){
    setTestComplete(false)
    setTest(false)
    setCorrectCount(0)
    setTypedCount(0)
    getWords(currMode, setting)
  }

  return(

    <>

      <AnimatePresence mode="wait">
      {!test && !testComplete && currMode !== "selectTimes" && <motion.div key="startBox"
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        exit={{opacity: 0}} 
        transition={{duration: 0.1}}>
        <div id="startBox" className={styles.startBox}>
          <h2>Press <span style={{color: "hsl(45, 100%, 50%)", fontSize: "30px"}}>{`<SPACEBAR>`}</span> to Start</h2>
        </div>
      </motion.div>}

        {currMode === "selectTimes" && <motion.div key="comingSoon"
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        exit={{opacity: 0}} 
        transition={{duration: 0.1}}>
          <ComingSoon />
        </motion.div>}

      {test && currMode !== "selectTimes" && <motion.div key="wordsBlock"
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        exit={{opacity: 0}} 
        transition={{duration: 0.1}}>
      <div id="wordsBlock" className={styles.wordsBlock}>
        {words.map((word, i) => 
          <div id={`w${getWordId()}`} key={i} className={styles.word}>
            {word.map((letter, j) => <h2 id={`l${getLetterId()}`} key={j}>{letter}</h2>)}
            <h2 id={`l${getLetterId()}`}>&nbsp;</h2>
          </div>
        )}
      </div>
      </motion.div>}

      {testComplete && <motion.div key="results"
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        exit={{opacity: 0}} 
        transition={{duration: 0.1}}>
        <div id="results" className={styles.results}>
          <h2>Speed : <span style={highlightedStats}>{`${getSpeed()} WPM`}</span></h2>
          <h2>Accuracy : <span style={highlightedStats}>{`${getAccuracy()}%`}</span></h2>
          <h2>Time Taken : <span style={highlightedStats}>{`${getTimeTaken()}s`}</span></h2>
          <h2>Characters : {charCount}</h2>
          <h2>Word Count : {words.length}</h2>
            <div className={styles.resultButtons}>
              <button onClick={restartTest}>Retry</button>
              <button onClick={newTest}>New Test</button>
            </div>
          <h3>Press <span style={highlightedStats}>{`<SPACEBAR>`}</span> to Retry</h3>
        </div>
      </motion.div>}
      </AnimatePresence>

      <AnimatePresence>
        {showKeyboard && <Keyboard />}
      </AnimatePresence>

      <KeyboardToggle />

    </>

  )

}

export default Home
