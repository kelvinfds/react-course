import React from 'react'

const ChangeMessageState = ({handleMessage}) => {
    const messages = ["oi", "olá", "Oi, tudo bem?"];
  return <div>
    <button onClick={() => handleMessage(messages[0])} >First Message</button>
    <button onClick={() => handleMessage(messages[1])} >Second Message</button>
    <button onClick={() => handleMessage(messages[2])} >Third Message</button>
  </div>
}

export default ChangeMessageState