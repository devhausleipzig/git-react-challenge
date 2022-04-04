import "./App.css";
import { ALongComponent } from "./ALongComponent";
import { IngasComponent } from "./IngasComponent";
import AronComponent from "./aron-component";
import { DeansComp } from "./DeansComp";
import TonyComponent from "./TonyComponent.jsx"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ALongComponent />
        <IngasComponent />
        <DeansComp />
        <TonyComponent />

        <p>Hello Devhaus campers!</p>
        <p>Cold as hell today</p>
      </header>
      <h3>Hello!dasdasda dasdada</h3>
      <p>New line 😥</p>
      <AronComponent />
    </div>
  );
}

export default App;
