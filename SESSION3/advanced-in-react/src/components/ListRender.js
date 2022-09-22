import React, {useState} from 'react'

export const ListRender = () => {
    const [list] = useState(["Kelvin", "Clayton", "Bruno"]);
    const [users, setUsers] = useState ([
      {"id": 1, "name": "Kaua", "age": 19},
      {"id": 2, "name": "Karol", "age": 28},
      {"id": 3, "name": "Kleber", "age": 33}      
    ])

    const deleteRandom = () => {
      const randomNumber = Math.floor(Math.random() * 4);

      setUsers((prevUsers) => {
        return prevUsers.filter((user) => randomNumber !== user.id)
      })
    }

  return (
    <div>
        <ul>
            {
                list.map((item, index) => (
                <li key={index}>{item}</li>
                ))
            }
        </ul>
        <ul>
          {
            users.map((user) => (
              <li key={user.id}>{user.name} - {user.age}</li>
            ))
          }
        </ul>
        <button onClick={deleteRandom}>Delete Random User</button>
    </div>
  )
}
