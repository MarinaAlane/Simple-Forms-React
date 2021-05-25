import React from 'react';

class Forms extends React.Component{
  constructor() {
    super() 
      this.state = {
      name:'',
      sobrenome: '',
      cidade:'',
      frameworkJs: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target}) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return(
      <form>
        <input
          type="text"
          name="nome"
          placeholder="nome"
          onChange={this.handleChange}
          />
        <input
          type="text"
          name="sobrenome"
          placeholder="sobrenome"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="cidade"
          placeholder="Cidade"
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="frameworkJs"
          placeholder="Seu framework JS favorito"
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default Forms;