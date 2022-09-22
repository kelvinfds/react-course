import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {
  const n = 15;
  const redtitle = false;
  return (
    <div className="App">
      {/* CSS Global */}
      <h1>React com CSS</h1>
      {/* CSS de component */}
      <MyComponent />
      <p>Este paragrafo é do App.js</p>
      {/* Inline CSS (não recomendado) */}
      <p style={{color: "brown", padding: "25px", borderTop: "2px solid red"}}>
        Este elemento foi estilizadodd com CSS Inline.
      </p>
      {/* CSS Inline Dinamic */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color:"pink"})}> CSS Dinamico </h2>
      {/* Classes Dinamicas CSS */}
      <h2 className={redtitle ? "subtitle-red" : "subtitle-blue"}>Este titulo vai ter classe dinamica</h2>
      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
