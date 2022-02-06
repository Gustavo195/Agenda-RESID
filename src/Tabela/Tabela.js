import Contatos from "../Contatos/Contatos";
import AddContato from "../AddContato/AddContato";
import { Contato } from "../Models/Contato";
import React from "react";

//A tabela será inicializada com 3 contatos como exemplo,
//sendo assim, será criado um vetor "contatos" com 3 pushs
//para inserir os objetos (Contatos) dentro do vetor. 
let contatos = [];
contatos.push(new Contato(1,"jairo",123456,"jairo@jairo.jairo"));
contatos.push(new Contato(2,"jairo2",789456,"jairo2@jairo2.jairo2"));
contatos.push(new Contato(3,"jairo3",741258,"jairo3@jairo3.jairo3"));


class Tabela extends React.Component{

    constructor(){
        super();
        this.state = {
            data: null
        };
        this.id = 4;
        this.edit = 0;
        this.salvarContato = this.salvarContato.bind(this);

    }

    //método para adicionar os contatos
    addContato(contato){
        contatos.push(new Contato(this.id++, contato.nome,contato.telefone,contato.email));
    }


    salvarContato(id,nome,telefone,email){
        let index = contatos.findIndex(this.finder,{id: id})
        contatos[index] = {nome,telefone,email}
        this.edit = 0;
        this.forceUpdate()
    }
    //método para remover os contatos
    removeContato(id){
        let index = contatos.findIndex(this.finder,{id: id})
        contatos.splice(index,1);
        this.forceUpdate()
    }

    finder(contato) {
        return contato.id === this.id;
    }

    handleCallback = (childData) =>{
        this.setState({data: childData});
        this.addContato(childData);
    }

    
    removeCallback = (id) =>{
        this.removeContato(id);
        
    }
    
    editFilhopai = (id) =>{
        this.edit = id;
        console.log(this.edit)
        this.forceUpdate()
    }
    render(){
        const {data} = this.state;
        console.log("pai ID " + this.edit)
        return(
            <div>
                <AddContato parentCallback = {this.handleCallback}/>
                
                {console.log(data?("data: " + Object.values(data)):"null")}
                {contatos.map((item) => <Contatos salvarContato = {this.salvarContato} editPaifilho = {this.edit} editFilhopai = {this.editFilhopai} removeCallback = {this.removeCallback} contato = {item}></Contatos>)} 
         </div>
        )
    }
}







//Função Tabela irá desenhar a tabela completa fazendo o "mapeamento"
//do vetor contatos após chamar o AddContato (funções para adicionar
//um contato).

export default Tabela;
