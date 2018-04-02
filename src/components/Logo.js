import React, {Component} from 'react';

class LogoComponent extends Component {
  render() {
    return (
      <div className="logo px-4 pt-5 pb-2">
        <a>
          <div className="text-center text-nowrap">
            <i className="fa fa-spin fa-play-circle rounded-circle" aria-hidden="true"/>
            <h6 className="logo-title text-uppercase mt-3">OpenAdmin</h6>
            <p className="text-muted">
              <small>ver. 1.0.0</small>
            </p>
          </div>
        </a>
      </div>
    );
  }
}

export default LogoComponent;
