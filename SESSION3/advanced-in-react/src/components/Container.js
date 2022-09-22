import React from 'react'

function Container({children, myValue}) {
  return (
    <div>
        <h2>Este é o titulo do container</h2>
        {children}
        <h5>{myValue}</h5>
    </div>
  )
}

export default Container