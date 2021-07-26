import './App.css';

function App() {
  return (
    <div className="App">
      <form>
        <fieldset>
          <label htmlFor="name">
            Nome:
            <input type="text" id="name" name="name" maxLength="40"/>
          </label>
          <label htmlFor="email">
            Email:
            <input type="email" id="email" name="email" maxLength="50" />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input type="text" id="cpf" name="cpf"  maxLength="11"/>
          </label>
          <label htmlFor="address">
            Endereço:
            <input type="text" id="address" name="address"  maxLength="200"/>
          </label>
          <label htmlFor="city">
            Cidade:
            <input type="text" id="city" name="city"  maxLength="28"/>
          </label>
          <label htmlFor="state">
            Estado:
            <select name="state" id="state">
              <option value="PE">PE</option>
              <option value="MG">MG</option>
              <option value="SP">SP</option>
            </select>
          </label>
          <div className="housing-type">
            <label htmlFor="house">
              <input type="radio" id="house" name="house" value="house"/>
              casa
            </label>
            <label htmlFor="apartment">
              <input type="radio" id="apartment" name="apartment" value="apartment"/>
              apartamento
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
