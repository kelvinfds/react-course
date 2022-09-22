import './App.css';
import { MyForm } from './components/MyForm';

function App() {
  return (
    <div className="App">
        <h2>Forms</h2>
        <MyForm user={{ name: "Kelvin", email: "kelvin@test.com", bio: "Sou Desenvolvedor", role: "admin"}} />
    </div>
  );
}

export default App;
