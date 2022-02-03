function Contatos({contato}) {
    return (
      <div class = "row">
        <div class = "col-sm-2">
          <p>{contato.nome}</p>
        </div>
        <div class = "col-sm-2">
          <p>{contato.telefone}</p>
        </div>
        <div class = "col-sm-2">
          <p>{contato.email}</p>
        </div>
        <div class = "col-sm-2">

        </div>
        <div class = "col-sm-2">
          <button class = "btn btn-primary">editar</button>
        
        </div>
        <div class = "col-sm-2">
          <button class = "btn btn-danger">remover</button>
        </div>
      </div>
    );
}
  
export default Contatos;