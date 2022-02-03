import React from "react";
import ReactDOM from "react-dom";

export default class AddContato extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          </div>
          <div>
          <label>
            Telefone:
            <input type="text"  value={this.state.value} onChange={this.handleChange} />
          </label>
          </div>
          <div>
          <label>
            Email:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          </div>
          <div>

          </div>
          <div>
              
          </div>
          <div>
              
          </div>
          
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <AddContato/>,
    document.getElementById('root')
  );


