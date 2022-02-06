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
      console.log(event.target)
      //if event
      this.props.parentCallback(this.state);
      
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} >
          <div class="row">
          <div class="col-2">
          <label>
            Nome:
            <input type="text" maxlength="25" placeholder="Nome" value={this.state.nome} onChange={this.NomeChange} required/>
          </label>
          </div>
          <div class="col-2">
          <label>
            Telefone:
            <input type="tel" placeholder="(00)00000-0000" value={this.state.telefone} onChange={this.TelChange} required pattern="[(][0-9]{2}[)][0-9]{5}[-][0-9]{4}"/>
          </label>
          </div>
          <div class="col-2">
          <label>
            Email:
            <input type="email" maxlength="40" placeholder="Email" value={this.state.email} onChange={this.EmailChange} required />
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