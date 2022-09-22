import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const cars = [
    {id: 1, brand: "GM", model: "Cruze", year: "2019"},
    {id: 2, brand: "Volkswagen", model: "Fox", year: "2021"},
    {id: 3, brand: "GM", model: "Vectra", year: "2015"}
  ]

  return (
    <div className="App">
      <h1>Desafio CSS - Sessão 4</h1>
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} model={car.model} year={car.year}/>
      ))}
    </div>
  );
}

export default App;
