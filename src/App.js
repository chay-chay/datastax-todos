import logo from './logo.svg';
import './App.css';
import List from './components/List'
import Item from './components/List'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <List itemList={["Get Milk", "Say hi to friends", "Buy Amazon"]} />
        <Item itemList={["Get Milk", "Say hi to friends", "Buy Amazon"]}/>
      </header>
    </div>
  );
}

export default App;
