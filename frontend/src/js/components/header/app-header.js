import React from 'react';

export default () => {
  return (
    <header className="navbar navbar-fixed-top navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button aria-expanded="false" className="navbar-toggle collapsed" data-target="#ns-navbar-collapse" data-toggle="collapse" type="button"></button>
          <a id="logo" className="navbar-brand" href="/"></a>
        </div>
        <div className="collapse navbar-collapse" id="ns-navbar-collapse">
          <ul className="nav navbar-nav navbar-right">

          </ul>
        </div>
      </div>
    </header>
  );
}
