import styles from "./keys.module.css"

const Keys = ({ type, keyValue, idValue, smallFont }) => {

  var width = `40px`

  if(type === "tilda"){width = "30px"}
  if(type === "backspace"){width = "80px"}

  if(type === "backslash"){width = "50px"}
  if(type === "tab"){width = "60px"}

  if(type === "shift"){width = "95px"}
  if(type === "rshift"){width = "125px"}

  if(type === "enter"){width = "95px"}
  if(type === "caps"){width = "70px"}

  if(type === "space"){width = "300px"}

  const keyStyle = {
    width: width
  }

  return(

    <div id={idValue} className={styles.keyShape} style={keyStyle}>

      <p style={{fontSize: `${smallFont && "12px"}`}}>{keyValue}</p>

    </div>

  )

}

export default Keys
