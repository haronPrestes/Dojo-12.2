import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      state: '',
      type: '',
      resume: '',
      role: '',
      roleDescription: '',
      alert: false,
    };

    this.handleNameInput = this.handleNameInput.bind(this);
  }

  handleNameInput(event) {
    const inputValue = event.target.value.toUpperCase();
    this.setState({
      name: inputValue,
    })
  }

  handleAddressInput = (event) => {
    const cleanInput = event.target.value.replace(/[^\w\p{L}\s,-]/giu, '');
    this.setState({
      address: cleanInput,
    })
  }

  handleCityInput = (event) => {
    const { value } = event.target;

    if (value.length > 0 && value[0].match(/[0-9]/)) {
      this.setState({
        city: '',
      })
    }
  }

  handleAlert = (event) => {
    if (!this.state.alert) {
      alert('Preencha com cuidado esta informação.')
      this.setState({
        alert: true,
      })
    }
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  render() {
    const { name, email, cpf, address, city, state, resume, role, roleDescription } = this.state;

    return (
        <form>
          <fieldset>
            <label htmlFor="name">
              Nome:
              <input 
                type="text"
                name="name"
                id="name"
                maxLength="40"
                value={ name }
                onChange={(event) => this.setState({ name: event.target.value.toUpperCase() })}
              />
            </label>
            <label htmlFor="email">
              Email:
              <input
                type="email"
                name="email"
                id="email"
                maxLength="50"
                value={ email }
                onChange={ this.handleInput }
              />
            </label>
            <label htmlFor="cpf">
              CPF:
              <input
                type="text"
                name="cpf"
                id="cpf"
                maxLength="11"
                value={ cpf }
                onChange={ this.handleInput }
              />
            </label>
            <label htmlFor="address">
              Endereço:
              <input
                type="text"
                name="address"
                id="address"
                maxLength="200"
                value={ address }
                onChange={ this.handleAddressInput }
              />
            </label>
            <label htmlFor="city">
              Cidade:
              <input
                type="text"
                name="city"
                id="city"
                maxLength="28"
                value={ city }
                onChange={ this.handleInput }
                onBlur={ this.handleCityInput }
              />
            </label>
            <label htmlFor="state">
              Estado:
              <select name="state" id="state" value={ state } onChange={ this.handleInput }>
                <option value="PE">PE</option>
                <option value="MG">MG</option>
                <option value="SP">SP</option>
              </select>
            </label>
            <div className="housing-type">
              <label htmlFor="house">
                <input
                  type="radio"
                  id="house"
                  name="type"
                  value="house"
                  onClick={ this.handleInput }
                />
                casa
              </label>
              <label htmlFor="apartment">
                <input
                  type="radio"
                  id="apartment"
                  name="type"
                  value="apartment"
                  onClick={ this.handleInput }
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
                value={ resume }
                onChange={ this.handleInput }
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
                value={ role }
                onChange={ this.handleInput }
                onMouseEnter={ this.handleAlert }
              />
            </label>
            <label htmlFor="role-description">
              Descrição do cargo:
              <input
                type="text"
                name="roleDescription"
                id="role-description"
                maxLength="500"
                value={ roleDescription }
                onChange={ this.handleInput }
              />
            </label>
          </fieldset>

          <button type="submit">Enviar</button>
          <button>Limpar</button>
        </form>
    );
  }
}

export default Form;
