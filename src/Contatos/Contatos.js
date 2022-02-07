import React from "react";
import InputMask from "react-input-mask";
//Classe Contatos servirá para:
//- receber os valores do objeto contato
//- fazer uma organização da tabela
//- manusear os botões (editar, remover, salvar, cancelar)

export default class Contatos extends React.Component {
  constructor(props) {
    super(props);
    console.log("this edit " + this.edit);
    this.state = this.props.contato;
    this.NomeChange = this.NomeChange.bind(this);
    this.TelChange = this.TelChange.bind(this);
    this.EmailChange = this.EmailChange.bind(this);
    this.onRemover = this.onRemover.bind(this);
    this.onMudar = this.onMudar.bind(this);
    this.onSalvar = this.onSalvar.bind(this);
    this.onCancelar = this.onCancelar.bind(this);
  }
  //métodos para mudança de estado nas caixas de texto
  NomeChange(event) {
    this.setState({ nome: event.target.value });
  }

  TelChange(event) {
    this.setState({ telefone: event.target.value });
  }
  EmailChange(event) {
    this.setState({ email: event.target.value });
  }
  //método para remoção de contato
  //manda o id do contato para o arquivo Tabela.js,
  //com essa id ele achará o contato para então apagar
  onRemover(event) {
    this.props.removeCallback(this.props.contato.id);

    event.preventDefault();
  }
  //método para edição de contato
  //manda o id do contato para o arquivo Tabela.js
  //para que apenas ele possa ser editado.
  onMudar(event) {
    this.props.editFilhopai(this.props.contato.id);
    this.forceUpdate();
    event.preventDefault();
  }
  //método para cancelar a edição de contato
  //apenas manda um false para o Tabela.js simbolizando
  //que nada fará com o contato
  onCancelar(event) {
    this.setState({ nome: this.props.contato.nome });
    this.setState({ telefone: this.props.contato.telefone });
    this.setState({ email: this.props.contato.email });
    this.props.editFilhopai(0);
    this.forceUpdate();
    event.preventDefault();
  }
  //método para salvar o contato
  //ele pegará tudo salvo em this.state e mandará para
  //o arquivo Tabela.js
  onSalvar(event) {
    this.props.salvarContato(
      this.props.contato.id,
      this.state.nome,
      this.state.telefone,
      this.state.email
    );
    this.forceUpdate();
    event.preventDefault();
  }
  //função render que irá processar as escolhas
  //do usuário.
  render() {
    return (
      <tr>
        {this.props.editPaifilho !== this.props.contato.id && (
          <td class="col-sm-3">{this.props.contato.nome}</td>
        )}
        {this.props.editPaifilho === this.props.contato.id && (
          <td class="col-sm-3">
            <form id="contato" onSubmit={this.onSalvar}>
              <input
                type="text"
                maxlength="25"
                class="text-center col-xs-1"
                placeholder="Nome"
                value={this.state.nome}
                onChange={this.NomeChange}
                required
              />
            </form>
          </td>
        )}
        {this.props.editPaifilho !== this.props.contato.id && (
          <td class="col-sm-3">{this.props.contato.telefone}</td>
        )}
        {this.props.editPaifilho === this.props.contato.id && (
          <td class="col-sm-3">
            <InputMask
              mask="(99)99999-9999"
              value={this.state.telefone}
              onChange={this.TelChange}
              pattern="[(][0-9]{2}[)][0-9]{5}[-][0-9]{4}"
              placeholder="(00)00000-0000"
              class="text-center col-xs-1"
            ></InputMask>
          </td>
        )}
        {this.props.editPaifilho !== this.props.contato.id && (
          <td class="col-sm-3">{this.props.contato.email}</td>
        )}
        {this.props.editPaifilho === this.props.contato.id && (
          <td class="col-sm-3">
            <input
              type="email"
              maxlength="40"
              class="text-center col-xs-1"
              placeholder="Email"
              value={this.state.email}
              onChange={this.EmailChange}
            />
          </td>
        )}
        {this.props.editPaifilho !== this.props.contato.id &&
          !this.props.editPaifilho && (
            <td class="col-sm-3">
              <button class="btn btn-light ms-0 enabled" onClick={this.onMudar}>
                <i class="fas fa-pen"></i>
              </button>
              <button class="btn btn-light " onClick={this.onRemover}>
                <i class="fas fa-trash"></i>
              </button>
            </td>
          )}
        {this.props.editPaifilho !== this.props.contato.id &&
          !!this.props.editPaifilho && (
            <td class="col-sm-3">
              <button class="btn btn-secondary disabled">
                <i class="fas fa-pen"></i>
              </button>
              <button class="btn btn-secondary disabled">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          )}
        {this.props.editPaifilho === this.props.contato.id && (
          <td class="col-sm-3">
            <button form="contato" class="btn btn-light" type="onSubmit">
              <i class="fas fa-save"></i>
            </button>
            <button
              form="contato"
              class="btn btn-light"
              type="button"
              onClick={this.onCancelar}
            >
              <i class="fas fa-window-close"></i>
            </button>
          </td>
        )}
      </tr>
    );
  }
}
