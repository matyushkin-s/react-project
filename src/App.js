import Button from './components/Button';
import Input from './components/Input';
import './App.css';
// import List from './components/List';

function App() {
  const buttonText = "Click here!";
  // const users = ['User1', 'User2', 'User3', 'User4'];
  const disabled = true;

  const handleSave = (e) => {
    console.log('Save it!');
  }

  const handleSubmit = (e) => {
    console.log('Submit it!');
  }

  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Input
        placeholder="Write something here..."
      />
      <Button text={buttonText} isDisabled={disabled}/>
      <br></br>
      <Button>{buttonText}</Button>

      <Button text="Save" onClick={handleSave} />

      <Button text="Submit" onClick={handleSubmit} />

      <div>
        {/* <List items={users} /> */}
      </div>
    </div>
  );
}

export default App;
