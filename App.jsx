import logo from './logo.svg';
import './App.css';
import Header from './components/Heading'
import Random from './components/Random'
import Target from './components/Target'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Random></Random>
      <Target></Target>
    </div>
  );
}

export default App;
