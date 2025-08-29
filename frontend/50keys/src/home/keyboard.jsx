import Keys from "./keys"
import styles from "./keyboard.module.css"
import { useContext, useState } from "react"
import { motion } from "framer-motion"
import { contexts } from "../App"

const Keyboard = () => {

  const { caps, shift } = useContext(contexts)

  const [keyboardSize, setKeyboardSize] = useState("1")

  return(

    <motion.div 
    initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} transition={{duration: 0.3}}>

    <div id="keyboard" className={styles.keyboard} style={{transform: `scale(${keyboardSize})`}}>

      <div className={styles.numRow}>

        {shift === true ? <Keys idValue={"~"} keyValue={"~"} type={"tilda"}/> : <Keys idValue={"`"} keyValue={"`"} type={"tilda"}/>}
        {shift === true ? <Keys idValue={"!"} keyValue={"!"}/> : <Keys idValue={"1"} keyValue={"1"}/>}
        {shift === true ? <Keys idValue={"@"} keyValue={"@"}/> : <Keys idValue={"2"} keyValue={"2"}/>}
        {shift === true ? <Keys idValue={"#"} keyValue={"#"}/> : <Keys idValue={"3"} keyValue={"3"}/>}
        {shift === true ? <Keys idValue={"$"} keyValue={"$"}/> : <Keys idValue={"4"} keyValue={"4"}/>}
        {shift === true ? <Keys idValue={"%"} keyValue={"%"}/> : <Keys idValue={"5"} keyValue={"5"}/>}
        {shift === true ? <Keys idValue={"^"} keyValue={"^"}/> : <Keys idValue={"6"} keyValue={"6"}/>}
        {shift === true ? <Keys idValue={"&"} keyValue={"&"}/> : <Keys idValue={"7"} keyValue={"7"}/>}
        {shift === true ? <Keys idValue={"*"} keyValue={"*"}/> : <Keys idValue={"8"} keyValue={"8"}/>}
        {shift === true ? <Keys idValue={"("} keyValue={"("}/> : <Keys idValue={"9"} keyValue={"9"}/>}
        {shift === true ? <Keys idValue={")"} keyValue={")"}/> : <Keys idValue={"0"} keyValue={"0"}/>}
        {shift === true ? <Keys idValue={"_"} keyValue={"_"}/> : <Keys idValue={"-"} keyValue={"-"}/>}
        {shift === true ? <Keys idValue={"+"} keyValue={"+"}/> : <Keys idValue={"="} keyValue={"="}/>}
        <Keys idValue={"Backspace"} keyValue={"<-"} type={"backspace"}/>

      </div>

      <div className={styles.firstRow}>
        <Keys idValue={"Tab"} keyValue={"tab"} type={"tab"} smallFont={true} />
        {caps === true || shift ? <Keys idValue={"Q"} keyValue={"Q"} /> : <Keys idValue={"q"} keyValue={"q"} />}
        {caps === true || shift ? <Keys idValue={"W"} keyValue={"W"} /> : <Keys idValue={"w"} keyValue={"w"} />}
        {caps === true || shift ? <Keys idValue={"E"} keyValue={"E"} /> : <Keys idValue={"e"} keyValue={"e"} />}
        {caps === true || shift ? <Keys idValue={"R"} keyValue={"R"} /> : <Keys idValue={"r"} keyValue={"r"} />}
        {caps === true || shift ? <Keys idValue={"T"} keyValue={"T"} /> : <Keys idValue={"t"} keyValue={"t"} />}
        {caps === true || shift ? <Keys idValue={"Y"} keyValue={"Y"} /> : <Keys idValue={"y"} keyValue={"y"} />}
        {caps === true || shift ? <Keys idValue={"U"} keyValue={"U"} /> : <Keys idValue={"u"} keyValue={"u"} />}
        {caps === true || shift ? <Keys idValue={"I"} keyValue={"I"} /> : <Keys idValue={"i"} keyValue={"i"} />}
        {caps === true || shift ? <Keys idValue={"O"} keyValue={"O"} /> : <Keys idValue={"o"} keyValue={"o"} />}
        {caps === true || shift ? <Keys idValue={"P"} keyValue={"P"} /> : <Keys idValue={"p"} keyValue={"p"} />}
        {shift === true ? <Keys idValue={"{"} keyValue={"{"}/> : <Keys idValue={"["} keyValue={"["}/>}
        {shift === true ? <Keys idValue={"}"} keyValue={"}"}/> : <Keys idValue={"]"} keyValue={"]"}/>}
        {shift === true ? <Keys idValue={"|"} keyValue={"|"} type={"backslash"}/> : <Keys idValue={"\\"} keyValue={"\\"} type={"backslash"}/>}
      </div>

      <div className={styles.secondRow}>

        <Keys idValue={"CapsLock"} keyValue={"caps lock"} type={"caps"}  smallFont={true}/>
        {caps === true || shift ? <Keys idValue={"A"} keyValue={"A"} /> : <Keys idValue={"a"} keyValue={"a"} />}
        {caps === true || shift ? <Keys idValue={"S"} keyValue={"S"} /> : <Keys idValue={"s"} keyValue={"s"} />}
        {caps === true || shift ? <Keys idValue={"D"} keyValue={"D"} /> : <Keys idValue={"d"} keyValue={"d"} />}
        {caps === true || shift ? <Keys idValue={"F"} keyValue={"F"} /> : <Keys idValue={"f"} keyValue={"f"} />}
        {caps === true || shift ? <Keys idValue={"G"} keyValue={"G"} /> : <Keys idValue={"g"} keyValue={"g"} />}
        {caps === true || shift ? <Keys idValue={"H"} keyValue={"H"} /> : <Keys idValue={"h"} keyValue={"h"} />}
        {caps === true || shift ? <Keys idValue={"J"} keyValue={"J"} /> : <Keys idValue={"j"} keyValue={"j"} />}
        {caps === true || shift ? <Keys idValue={"K"} keyValue={"K"} /> : <Keys idValue={"k"} keyValue={"k"} />}
        {caps === true || shift ? <Keys idValue={"L"} keyValue={"L"} /> : <Keys idValue={"l"} keyValue={"l"} />}
        {shift === true ? <Keys idValue={":"} keyValue={":"}/> : <Keys idValue={";"} keyValue={";"}/>}
        {shift === true ? <Keys idValue={"\""} keyValue={"\""}/> : <Keys idValue={"'"} keyValue={"'"}/>}
        <Keys idValue={"Enter"} keyValue={"enter"} type={"enter"} smallFont={true}/>

      </div>

      <div className={styles.thirdRow}>
        <Keys idValue={"Shift"} keyValue={"shift"} type={"shift"} smallFont={true}/>
        {caps === true || shift ? <Keys idValue={"Z"} keyValue={"Z"} /> : <Keys idValue={"z"} keyValue={"z"} />}
        {caps === true || shift ? <Keys idValue={"X"} keyValue={"X"} /> : <Keys idValue={"x"} keyValue={"x"} />}
        {caps === true || shift ? <Keys idValue={"C"} keyValue={"C"} /> : <Keys idValue={"c"} keyValue={"c"} />}
        {caps === true || shift ? <Keys idValue={"V"} keyValue={"V"} /> : <Keys idValue={"v"} keyValue={"v"} />}
        {caps === true || shift ? <Keys idValue={"B"} keyValue={"B"} /> : <Keys idValue={"b"} keyValue={"b"} />}
        {caps === true || shift ? <Keys idValue={"N"} keyValue={"N"} /> : <Keys idValue={"n"} keyValue={"n"} />}
        {caps === true || shift ? <Keys idValue={"M"} keyValue={"M"} /> : <Keys idValue={"m"} keyValue={"m"} />}
        {shift === true ? <Keys idValue={"<"} keyValue={"<"}/> : <Keys idValue={","} keyValue={","}/>}
        {shift === true ? <Keys idValue={">"} keyValue={">"}/> : <Keys idValue={"."} keyValue={"."}/>}
        {shift === true ? <Keys idValue={"?"} keyValue={"?"}/> : <Keys idValue={"/"} keyValue={"/"}/>}
        <Keys idValue={"Shift"} keyValue={"shift"} type={"rshift"} smallFont={true}/>
      </div>

      <div className={styles.spacebar}>
        <Keys idValue={" "} keyValue={"___"} type={"space"} />
      </div>

    </div>

    </motion.div>

  )

}

export default Keyboard
