import FactWindow from './FactWindow';
import './App.css';

/**
 * The main App component of the application.
 * 
 * This component renders a header and three FactWindow components with different types.
 * 
 * @returns {JSX.Element} The rendered React element.
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Presented facts might not be factual!</h1>
      </header>
      <FactWindow type={'Funny'}/>
      <FactWindow type={'Interesting'}/>
      <FactWindow type={'Creepy'}/>
    </div>
  );
}

export default App;