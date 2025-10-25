
import './App.css'
import Carta from './components/Carta'
function App() {

  const mostrarCarta = (numero:number , tinta:string) => {

    alert(`carta de numero: ${numero} y de pinta ${tinta}`);
  };

  return (
    <div>
    <h1> mi primera app en react</h1>
    <p> Hecho por nano</p>
    <p>dias 2 peruano</p>

    <Carta numero={1} tinta="🐱" mostrarCarta={mostrarCarta}/>
    <Carta numero={5} tinta="🐱‍🏍"mostrarCarta={mostrarCarta}/>
    <Carta numero={8} tinta="🏍"mostrarCarta={mostrarCarta}/>
    <Carta numero={88} tinta="🐱‍🚀"mostrarCarta={mostrarCarta}/>



      
    </div>
  )
}



export default App
