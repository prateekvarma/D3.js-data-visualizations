import logo from './logo.svg';
import './App.css';
import CsvData from './components/CsvData';
import CsvToPie from './components/CsvToPie';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Paragraph
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
        >
          Link
        </a>
      </header>
      <CsvToPie />
      <CsvData />
    </div>
  );
}

export default App;
