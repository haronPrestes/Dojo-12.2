import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <fieldset>
          <label>
            Nome:
            <input type="text" id="name" name="name" maxLength="40"/>
          </label>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
