import styles from "./keys.module.css"

const Keys = ({ type, keyValue, idValue }) => {

  var width = `50px`

  if(type === "shift"){width = "120px"}
  if(type === "backslash"){width = "75px"}
  if(type === "rshift"){width = "150px"}
  if(type === "space"){width = "400px"}
  if(type === "backspace"){width = "100px"}
  if(type === "enter"){width = "120px"}

  const keyStyle = {
    width: width
  }

  return(

    <div id={idValue} className={styles.keyShape} style={keyStyle}>

      <p>{keyValue}</p>

    </div>

  )

}

export default Keys
