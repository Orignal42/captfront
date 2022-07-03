import "./App.css";
import Pressure from "./Components/PressuresList";
import Hights from "./Components/HightsList";
function App() {

  // Permet de rafraichir la page toutezs les 60secondes pour afficher la dernière donnée.
  setTimeout(function () {
    window.reload();
  }, 60000);
  return (
    <div>
    {/* Permet d'afficher les 2 composants */}
      <Pressure />
      <Hights />
      <meta http-equiv="refresh" content="60" />
    </div>
  );
}

export default App;
