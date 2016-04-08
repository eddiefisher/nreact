import React from 'react';
import Template from './app-template';
import Hosts from './hosts/app-hosts';

class App extends React.Component {
  render(){
    return (
      <Template>
        <Hosts />
      </Template>
    )
  }
}

export default App;
