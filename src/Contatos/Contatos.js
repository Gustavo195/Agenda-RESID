import React from "react";

//Função Contatos servirá para:
//- receber os valores do objeto contato
//- fazer uma organização da tabela
//- manusear os botões

export default class Contatos extends React.Component {
  constructor(props) {
    super(props);
    this.onRemover = this.onRemover.bind(this);
  }

  onRemover(event){
       
    this.props.removeCallback(this.props.contato.id);
    
    event.preventDefault();
  }
  render() {
      return (
        <div class = "row">
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
          <div class = "col-sm-2">
            <button class = "btn btn-primary">editar</button>
          
          </div>
          <div class = "col-sm-2">
            <button class = "btn btn-danger" onClick={this.onRemover}>remover</button>
          </div>
        </div>
      );
  }
}