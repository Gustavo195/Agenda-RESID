import React from "react";

export default class AddContato extends React.Component {
    constructor(props) {
      super(props);
      this.state = {nome: '',telefone: '',email: ''};
      this.NomeChange = this.NomeChange.bind(this);
      this.TelChange = this.TelChange.bind(this);
      this.EmailChange = this.EmailChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    //funções para pegar o valor dentro de cada caixa de texto
    NomeChange(event) {
      this.setState({nome: event.target.value});
    }
    
    TelChange(event) {
        this.setState({telefone: event.target.value});
      }
    EmailChange(event) {
        this.setState({email: event.target.value});
    }
  
    //função para o botão de adicionar contato
    handleSubmit(event){
       
      console.log('A name was submitted: ' + Object.values(this.state));
      this.props.parentCallback(this.state);
      
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div class="row">
          <div class="col-2">
          <label>
            Name:
            <input type="text" value={this.state.nome} onChange={this.NomeChange} />
          </label>
          </div>
          <div class="col-2">
          <label>
            Telefone:
            <input type="text"  value={this.state.telefone} onChange={this.TelChange} />
          </label>
          </div>
          <div class="col-2">
          <label>
            Email:
            <input type="text" value={this.state.email} onChange={this.EmailChange} />
          </label>
          </div>
          <div class="col-2">
            <button class="btn btn-success rounded-circle my-3 " type="submit">+</button> 
          </div>
          <div class="col-2">
              
          </div>
          <div class="col-2">
              
          </div>
          </div>
        </form>
      );
    }
  }
  




