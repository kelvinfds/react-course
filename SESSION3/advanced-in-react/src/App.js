import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import ChallengeUserDetails from './components/ChallengeUserDetails';
import ChangeMessageState from './components/ChangeMessageState';
import { ConditionalRender } from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { ListRender } from './components/ListRender';
import { ManageData } from './components/ManageData';
import Message from './components/Message';
import ShowUserName from './components/ShowUserName';

function App() {
  const [userName] = useState("Maria");

  function showMessage() {
    console.log('Evento do componente pai')
  }
  
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };
  const cars = [
    {id: 1, brand: 'GM', color: 'Black', newCar: true, km: 0},
    {id: 2, brand: 'FIAT', color: 'White', newCar: false, km: 125000},
    {id: 3, brand: 'Volkswagem', color: 'red', newCar: true, km: 0}
]

const users = [
  {id: 1, name: 'Talita', idade: 24, ocupacao: 'Atendente de caixa'},
  {id: 2, name: 'Kaique', idade: 16, ocupacao: 'Estagiário'},
  {id: 3, name: 'Thiago', idade: 13, ocupacao: 'Estudante'},
  {id: 4, name: 'Patricia', idade: 32, ocupacao: 'Cabeleireira'}
]

  return (
    <div className="App">
      <h1>Avançando no React Js</h1>
      {/* <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="City" />
      </div> */}

      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring */}
      <CarDetails brand="GM" km={80000} color="Branco" newCar={false} />
      {/* reaproveitando */}
      <CarDetails brand="Fiat" km={145000} color="Verde" newCar={false} />
      <CarDetails brand="VW" km={0} color="Preto" newCar={true} />
      {/* loop array de objectos */}
      {cars.map((car) => (
        <CarDetails key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          newCar={car.newCar} 
        />
      ))}
      {/* Children */}
      <Container myValue='valor por props'>
        <p>Este é o conteúdo</p>
      </Container>

      {/* executar função por props */}
      <ExecuteFunction myFunction={showMessage} />

      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
        {users.map((user) => (
          <ChallengeUserDetails
            key={user.id} 
            name={user.name}
            idade={user.idade}
            ocupacao={user.ocupacao}
          />

        ))}
    </div>
  );
}

export default App;
