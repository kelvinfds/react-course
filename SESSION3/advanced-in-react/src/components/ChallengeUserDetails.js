import React from 'react'

const ChallengeUserDetails = ({name, idade, ocupacao}) => {

  return <div>
    {idade >= 18 ? 
    <p>O(a) usuário(a) {name}, com ocupaçao de {ocupacao}, pode tirar a CNH.</p> :
    <p>O(a) usuário(a) {name}, com ocupaçao de {ocupacao}, não pode tirar a CNH.</p>
    }
  </div>
}

export default ChallengeUserDetails