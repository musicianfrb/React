import React, { Component } from 'react';


class Hello extends Component{
  render(){
    var place = "World";
    return(
      <h1>Hello {place}</h1>
    );
  };
}


// Parent Component
class GroceryList extends Component{
  render(){
    return(
      <ul>
        <ListItem quantiti="1" name="Bread" />
        <ListItem quantiti="6" name="Eggs" />
        <ListItem quantiti="2" name="Milk" />
      </ul>
    );
  }
}


// Child Component
class ListItem extends Component{
  render(){
    return(
      <li>
        {this.props.quantitiy} x {this.props.name}
      </li>
    );
  }
}



React.render(<GroceryList />, document.getElementById('root'));