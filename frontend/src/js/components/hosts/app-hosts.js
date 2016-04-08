import React from 'react';
import ReactDOM from 'react-dom';
import Table from '../table/table';

class Hosts extends React.Component {
  render(){
    return (
      <Table headCells={ ['Category', 'Name', 'Price', 'Stocked'] } checkall={ true } />
    );
  }
}

export default Hosts;
