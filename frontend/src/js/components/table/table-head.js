import React from 'react';
import ReactDOM from 'react-dom';

class TableHead extends React.Component {
  render(){
    let cells = this.props.cells.map(cell => {
      return <th key={cell}>{cell}</th>
    });
    return(
      <thead>
        <tr style={this.props.style && this.props.style}>
          { this.props.checkall && <td>
            <input type="checkbox" onChange={this.props.checkall} />
            </td> }
          { cells }
        </tr>
      </thead>
    )
  }
}

export default TableHead;
