import Button from './components/Button';
import Input from './components/Input';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Input
        placeholder="Write something here..."
      />
      <br></br>
      <Button title="Click" text="Click 1" />

      <Button title="Test title" text="Click " />
    </div>
  );
}

export default App;
