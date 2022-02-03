import Contatos from "../Contatos/Contatos";
import AddContato from "../AddContato/AddContato";
import { Contato } from "../Models/Contato";

let contatos = [];
contatos.push(new Contato("jairo",123456,"jairo@jairo.jairo"));
contatos.push(new Contato("jairo2",789456,"jairo2@jairo2.jairo2"));
contatos.push(new Contato("jairo3",741258,"jairo3@jairo3.jairo3"));



function Tabela() {
  return (
    <div>
        <AddContato/>
        {contatos.map(contato => <Contatos contato = {contato}></Contatos>)}
        
    </div>
   
    
  );
}

export default Tabela;
