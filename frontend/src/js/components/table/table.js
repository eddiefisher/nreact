import React from 'react';
import ReactDOM from 'react-dom';
import TableHead from './table-head';

import AppStore from '../../stores/app-store';
import TableRow from '../table/table-row';

import Modal from '../modal/modal'

class Table extends React.Component {
  constructor() {
    super();
    this.state = {
      checkAll: false
    }
    this.checkAll = this.checkAll.bind(this)
  }
  checkAll(e) {
    let state = this.state.checkAll ? false : true
    this.setState({ checkAll: state });
  }
  _executeAfterModalOpen(){
    alert('Executed after open');
  }
  render(){
    let rows = AppStore.getProducts().map(product => {
      let style = product.stocked ? {} : { color: 'red' }
      let product_data = [
        product.category,
        product.name,
        product.price,
        (product.stocked ? <button onClick={() => this.refs.simpleDialog.show()} className="btn btn-default btn-xs">Open Modal</button> : 'false')
      ]
      return(
        <TableRow
          ref={ 'row' }
          key={ product.id }
          style={ style }
          check={ this.state.checkAll }
          checkall={ true }
          cells={ product_data } />
      )
    });
    return(
      <table className="table">
        <TableHead cells={ this.props.headCells } checkall={ this.props.checkall } checkall={this.checkAll} />
        <tbody> { rows } </tbody>
        <Modal
          afterOpen={this._executeAfterModalOpen}
          hideOnOverlayClicked ref="simpleDialog" title="Hi, I'm a simple modal">
          Hello, I dont have any callback.
        </Modal>
      </table>
    )
  }
}

export default Table;

