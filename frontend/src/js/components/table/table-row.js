import React from 'react';
import ReactDOM from 'react-dom';

class TableRow extends React.Component {
  render(){
    let cells = this.props.cells.map(cell => {
      return <td key={this.props.key + cell}>{cell}</td>
    });
    return(
      <tr style={this.props.style && this.props.style}>
        {this.props.checkall && <td><input type="checkbox" checked={this.props.check} /></td>}
        {cells}
      </tr>
    )
  }
}

export default TableRow;
