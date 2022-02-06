import React from "react";

//Classe Contatos servirá para:
//- receber os valores do objeto contato
//- fazer uma organização da tabela
//- manusear os botões (editar e remover)

export default class Contatos extends React.Component {
  constructor(props) {
    super(props);
    console.log("this edit "+this.edit)
    this.state = this.props.contato;
    this.NomeChange = this.NomeChange.bind(this);
    this.TelChange = this.TelChange.bind(this);
    this.EmailChange = this.EmailChange.bind(this);
    this.onRemover = this.onRemover.bind(this);
    this.onMudar = this.onMudar.bind(this);
    this.onSalvar = this.onSalvar.bind(this);
    this.onCancelar = this.onCancelar.bind(this);
  }
  NomeChange(event) {
    this.setState({nome: event.target.value});
  }
  
  TelChange(event) {
      this.setState({telefone: event.target.value});
    }
  EmailChange(event) {
      this.setState({email: event.target.value});
  }
  onRemover(event){
       
    this.props.removeCallback(this.props.contato.id);
    
    event.preventDefault();
  }
  onMudar(event){
    
    this.props.editFilhopai(this.props.contato.id);
    this.forceUpdate();
    event.preventDefault();
    
  }
  onCancelar(event){
    this.setState({nome: this.props.contato.nome })
    this.setState({telefone: this.props.contato.telefone})
    this.setState({email: this.props.contato.email})
    this.props.editFilhopai(0);
    this.forceUpdate();
    event.preventDefault();
    
  }
  onSalvar(event){
    
    this.props.salvarContato(this.props.contato.id, this.state.nome, this.state.telefone, this.state.email);
    this.forceUpdate();
    event.preventDefault();
  }
  render() {
      return (
        
        <div >

          { this.props.editPaifilho !== this.props.contato.id&& <div class = "row">
            <div class = "col-sm-2">
            <p>{this.props.contato.nome}</p>
          </div>
          <div class = "col-sm-2">
            <p>{this.props.contato.telefone}</p>
          </div>
          <div class = "col-sm-2">
            <p>{this.props.contato.email}</p>
          </div>
          <div class = "col-sm-2">

          </div>
          {
            !!this.props.editPaifilho&&<div class = "col-sm-4">

            </div>
          }
          { !this.props.editPaifilho&& <div class = "col-sm-2">
            <button class = "btn btn-primary" onClick={this.onMudar}>Editar</button>
          
          </div>}
          { !this.props.editPaifilho&& <div class = "col-sm-2">
            <button class = "btn btn-danger" onClick={this.onRemover}>Remover</button>
          </div>}
          </div>
          }

          { this.props.editPaifilho === this.props.contato.id&& <div class = "row">
          <div class="col-2">
          <label>
           
            <input type="text"  placeholder="Nome" value={this.state.nome} onChange={this.NomeChange} />
          </label>
          </div>
          <div class="col-2">
          <label>
            
            <input type="text"  placeholder="Telefone" value={this.state.telefone} onChange={this.TelChange} />
          </label>
          </div>
          <div class="col-2">
          <label>
            
            <input type="text"  placeholder="Email" value={this.state.email} onChange={this.EmailChange} />
          </label>
          </div>
          <div class = "col-sm-2">

          </div>
          <div class = "col-sm-2">
            <button class = "btn btn-primary" onClick={this.onSalvar}>Salvar</button>
          
          </div>
          <div class = "col-sm-2">
            <button class = "btn btn-danger" onClick={this.onCancelar}>Cancelar</button>
          </div>
          </div>
          }
        </div>
      );
  }
}