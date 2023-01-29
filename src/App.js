import logo from './logo.svg';
import './App.css';
import {FaYoutube} from "react-icons/fa";
import {TbBrandTailwind} from "react-icons/tb";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="p-4">
          Welcome To ReactJS + Tailwind CSS Boilerplate
        </p>
        <div className="yes">Yes</div>

        <div className="App-logo"><TbBrandTailwind className="text-9xl" /></div>
      </header>
    </div>
  );
}

export default App;
