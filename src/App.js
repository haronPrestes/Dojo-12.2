import React from 'react';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
    };

    this.handleNameInput = this.handleNameInput.bind(this);
  }

  handleNameInput(event) {
    // this.setState()
    event.target.value.toUpperCase();
  }

  render() {
    return (
      <div className="App">
        <form>
          <fieldset>
            <label htmlFor="name">
              Nome:
              <input type="text" name="name" id="name" maxLength="40" />
            </label>
            <label htmlFor="email">
              Email:
              <input type="email" name="email" id="email" maxLength="50" />
            </label>
            <label htmlFor="cpf">
              CPF:
              <input type="text" name="cpf" id="cpf" maxLength="11" />
            </label>
            <label htmlFor="address">
              Endereço:
              <input type="text" name="address" id="address" maxLength="200" />
            </label>
            <label htmlFor="city">
              Cidade:
              <input type="text" name="city" id="city" maxLength="28" />
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
                <input type="radio" id="house" name="house" value="house" />
                casa
              </label>
              <label htmlFor="apartment">
                <input
                  type="radio"
                  id="apartment"
                  name="apartment"
                  value="apartment"
                />
                apartamento
              </label>
            </div>
          </fieldset>
          <fieldset>
            <label htmlFor="resume">
              Resumo do currículo:
              <textarea
                name="resume"
                id="resume"
                cols="30"
                rows="10"
                maxLength="1000"
              />
            </label>
            <label htmlFor="role">
              Cargo:
              <textarea
                name="role"
                id="role"
                cols="30"
                rows="10"
                maxLength="40"
              />
            </label>
            <label htmlFor="role-description">
              Descrição do cargo:
              <input
                type="text"
                name="role-description"
                id="role-description"
                maxLength="500"
              />
            </label>
          </fieldset>

          <button type="submit">Enviar</button>
          <button>Limpar</button>
        </form>
      </div>
    );
  }
}

export default App;
