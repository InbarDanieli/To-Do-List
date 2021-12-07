import React, { useState } from "react"

function OptionItem() {
  const [bool, setBool] = useState(false)

  function disableOption() {
    if (bool === false) {
      setBool(true)
    }
    else {
      setBool(false)
    }
  }

  return (
    <details>
      <summary style = {{listStyle:"none", cursor: "pointer"}}><b>+</b></summary>
      <input type="number" min="1" max="999" value="1" disabled={bool} />
      <input type="text" placeholder="description..." disabled={bool} />
      <button disabled={bool} onClick={disableOption}>done</button>
      <button onClick={disableOption}>edit</button>
    </details>
  )
}

export default OptionItem