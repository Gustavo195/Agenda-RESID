import Contatos from "../Contatos/Contatos";
import AddContato from "../AddContato/AddContato";
import { Contato } from "../Models/Contato";
import React from "react";

//A tabela será inicializada com 3 contatos como exemplo,
//sendo assim, será criado um vetor "contatos" com 3 pushs
//para inserir os objetos (Contatos) dentro do vetor.
let contatos = [];
contatos.push(new Contato(1, "Jairo", "(84)55555-5555", "jairo@hotmail.com"));
contatos.push(new Contato(2, "Gustavo", "(84)66666-6666", "gustavo@yahoo.com"));
contatos.push(new Contato(3, "Dmytres", "(84)77777-7777", "dmytres@gmail.com"));

class Tabela extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
    };
    this.id = 4;
    this.edit = 0;
    this.salvarContato = this.salvarContato.bind(this);
  }

  //método para adicionar os contatos
  addContato(contato) {
    contatos.push(
      new Contato(this.id++, contato.nome, contato.telefone, contato.email)
    );
  }
  //método para salvar o contato
  salvarContato(id, nome, telefone, email) {
    let index = contatos.findIndex(this.finder, { id: id });
    console.log(contatos[index]);
    contatos[index] = { id, nome, telefone, email };
    this.edit = 0;
    this.forceUpdate();
  }
  //método para remover os contatos
  removeContato(id) {
    let index = contatos.findIndex(this.finder, { id: id });
    contatos.splice(index, 1);
    this.forceUpdate();
  }
  //método para retornat a id do contato caso seja
  //igual à id do contato atual para poder
  //encontrar o contato
  finder(contato) {
    return contato.id === this.id;
  }
  //método para chamar o método para adicionar contato
  handleCallback = (childData) => {
    this.setState({ data: childData });
    this.addContato(childData);
  };
  //método para chamar o método para remover contato
  removeCallback = (id) => {
    this.removeContato(id);
  };
  //método utilizado para receber o id
  //do contato a ser editado
  editFilhopai = (id) => {
    this.edit = id;
    console.log(this.edit);
    this.forceUpdate();
  };
  render() {
    const { data } = this.state;
    console.log("pai ID " + this.edit);
    return (
      <div>
        <AddContato parentCallback={this.handleCallback} />
        {console.log(data ? "data: " + Object.values(data) : "null")}
        <div>
          <table class="table table-striped">
            {!!Object.entries(contatos).length > 0 && (
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">Email</th>
                  <th scope="col"></th>
                </tr>
              </thead>
            )}
            <tbody>
              {contatos.map((item) => (
                <Contatos
                  salvarContato={this.salvarContato}
                  editPaifilho={this.edit}
                  editFilhopai={this.editFilhopai}
                  removeCallback={this.removeCallback}
                  contato={item}
                ></Contatos>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

//Função Tabela irá desenhar a tabela completa fazendo o "mapeamento"
//do vetor contatos após chamar o AddContato (funções para adicionar
//um contato).

export default Tabela;
