import Keys from "./keys"
import styles from "./keyboard.module.css"

const Keyboard = () => {

  return(

    <div className={styles.keyboard}>

      <div className={styles.numRow}>

        <Keys idValue={"1"} keyValue={"1"}/>
        <Keys idValue={"2"} keyValue={"2"}/>
        <Keys idValue={"3"} keyValue={"3"}/>
        <Keys idValue={"4"} keyValue={"4"}/>
        <Keys idValue={"5"} keyValue={"5"}/>
        <Keys idValue={"6"} keyValue={"6"}/>
        <Keys idValue={"7"} keyValue={"7"}/>
        <Keys idValue={"8"} keyValue={"8"}/>
        <Keys idValue={"9"} keyValue={"9"}/>
        <Keys idValue={"0"} keyValue={"0"}/>
        <Keys idValue={"-"} keyValue={"-"}/>
        <Keys idValue={"="} keyValue={"="}/>
        <Keys idValue={"Backspace"} keyValue={"<-"} type={"backspace"}/>

      </div>

      <div className={styles.firstRow}>
        <Keys idValue={"q"} keyValue={"Q"} />
        <Keys idValue={"w"} keyValue={"W"} />
        <Keys idValue={"e"} keyValue={"E"} />
        <Keys idValue={"r"} keyValue={"R"} />
        <Keys idValue={"t"} keyValue={"T"} />
        <Keys idValue={"y"} keyValue={"Y"} />
        <Keys idValue={"u"} keyValue={"U"} />
        <Keys idValue={"i"} keyValue={"I"} />
        <Keys idValue={"o"} keyValue={"O"} />
        <Keys idValue={"p"} keyValue={"P"} />
        <Keys idValue={"["} keyValue={"["} />
        <Keys idValue={"]"} keyValue={"]"} />
        <Keys idValue={"\\"} keyValue={"\\"} type={"backslash"}/>
      </div>

      <div className={styles.secondRow}>

        <Keys idValue={"a"} keyValue={"A"} />
        <Keys idValue={"s"} keyValue={"S"} />
        <Keys idValue={"d"} keyValue={"D"} />
        <Keys idValue={"f"} keyValue={"F"} />
        <Keys idValue={"g"} keyValue={"G"} />
        <Keys idValue={"h"} keyValue={"H"} />
        <Keys idValue={"j"} keyValue={"J"} />
        <Keys idValue={"k"} keyValue={"K"} />
        <Keys idValue={"l"} keyValue={"L"} />
        <Keys idValue={";"} keyValue={";"} />
        <Keys idValue={"'"} keyValue={"'"} />
        <Keys idValue={"Enter"} keyValue={"enter"} type={"enter"}/>

      </div>

      <div className={styles.thirdRow}>
        <Keys idValue={"Shift"} keyValue={"shift"} type={"shift"}/>
        <Keys idValue={"z"} keyValue={"Z"} />
        <Keys idValue={"x"} keyValue={"X"} />
        <Keys idValue={"c"} keyValue={"C"} />
        <Keys idValue={"v"} keyValue={"V"} />
        <Keys idValue={"b"} keyValue={"B"} />
        <Keys idValue={"n"} keyValue={"N"} />
        <Keys idValue={"m"} keyValue={"M"} />
        <Keys idValue={","} keyValue={","} />
        <Keys idValue={"."} keyValue={"."} />
        <Keys idValue={"/"} keyValue={"/"} />
        <Keys idValue={"Shift"} keyValue={"shift"} type={"rshift"}/>
      </div>

      <div className={styles.spacebar}>
        <Keys idValue={" "} keyValue={"___"} type={"space"} />
      </div>

    </div>

  )

}

export default Keyboard
