import React from "react";
import InputMask from "react-input-mask";
export default class AddContato extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nome: "", telefone: "", email: "" };
    this.NomeChange = this.NomeChange.bind(this);
    this.TelChange = this.TelChange.bind(this);
    this.EmailChange = this.EmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //funções para pegar o valor dentro de cada caixa de texto
  NomeChange(event) {
    this.setState({ nome: event.target.value });
  }

  TelChange(event) {
    this.setState({ telefone: event.target.value });
  }
  EmailChange(event) {
    this.setState({ email: event.target.value });
  }

  //método para o botão de adicionar contato
  handleSubmit(event) {
    this.props.parentCallback(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <nav
        class="navbar navbar-expand-lg sticky-top navbar-inverse navbar-dark bg-dark d-flex justify-content-center"
        data-spy="affix"
        data-offset-top="200"
      >
        <ul class="nav navbar-nav">
          <form onSubmit={this.handleSubmit}>
            <div class="row p-3 mb-2 text-white d-flex justify-content-evenly">
              <div class="col-sm-3 row">
                <label>Nome:</label>
                <input
                  type="text"
                  maxlength="25"
                  placeholder="Nome"
                  value={this.state.nome}
                  onChange={this.NomeChange}
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
              <div class="col-sm-3 row">
                <label>Telefone:</label>
                <InputMask
                  mask="(99)99999-9999"
                  value={this.state.telefone}
                  onChange={this.TelChange}
                  pattern="[(][0-9]{2}[)][0-9]{5}[-][0-9]{4}"
                  placeholder="(00)00000-0000"
                ></InputMask>
              </div>
              <div class="col-sm-3 row">
                <label>Email:</label>
                <input
                  type="email"
                  maxlength="40"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.EmailChange}
                />
              </div>
              <div class="col-sm-3">
                <button
                  class="btn btn-success rounded-circle my-3 "
                  type="submit"
                >
                  <i class="fas fa-user-plus"></i>
                </button>
              </div>
            </div>
          </form>
        </ul>
      </nav>
    );
  }
}
