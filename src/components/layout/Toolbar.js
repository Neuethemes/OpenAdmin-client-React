import React, {Component} from 'react';

class LayoutFooter extends Component {
  render() {
    return (
      <div className="navbar navbar-light bg-white px-3 px-sm-5 py-3">

        <div className="d-inline-block mr-3">
          <a className="btn btn-dark btn-icon rounded-circle" aria-controls="sidebarLeft" tabIndex="1">
            <i className="fa fa-navicon"/>
          </a>
        </div>

        <form className="search-form form-inline my-2 my-lg-0">
          <div className="input-group input-group-built-in">
            <input type="text" className="form-control rounded-1" placeholder="Search for something..."
                   aria-label="Search for something..."/>
          </div>
        </form>

        <ul className="nav ml-auto">

          <li className="m-sm-1 m-md-2">
            <a className="btn btn-light btn-icon rounded-circle position-relative" id="dropdownBasic1">
              <i className="fa fa-bell" aria-hidden="true"/>
              <span className="badge badge-hint badge-primary">8</span>
            </a>

            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownBasic1">

              <ul className="list-unstyled">
                <li className="dropdown-item media border-bottom-1 border-light p-4">
            <span className="btn btn-success btn-icon rounded-circle mr-3">
              <i className="fa fa-download" aria-hidden="true"/>
            </span>
                  <div className="media-body">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1 mr-4">Update downloaded Successfully</h6>
                      <small className="text-nowrap text-muted">3 days ago</small>
                    </div>
                    Lorem ipsum dolor sit amet, consectetur ...
                    <small className="text-muted d-block">11.06.2014 - 2:30am - 2:46am</small>
                  </div>
                </li>
                <li className="dropdown-item media border-bottom-1 border-light p-4">
            <span className="btn btn-danger btn-icon rounded-circle mr-3">
              <i className="fa fa-exclamation-circle" aria-hidden="true"/>
            </span>
                  <div className="media-body">
                    <div className="d-flex w-100 justify-content-between">
                      <h6 className="mb-1 mr-4">Connection was interrupted!</h6>
                      <small className="text-nowrap text-muted">3 days ago</small>
                    </div>
                    Lorem ipsum dolor sit amet, consectetur ...
                    <small className="text-muted d-block">11.06.2014 - 2:30am - 2:46am</small>
                  </div>
                </li>
              </ul>

              <div className="media d-flex pl-4 pr-4 pt-3 pb-3">
                <a href="#!">See all Alerts</a>
              </div>

            </div>
          </li>

          <li className="m-sm-1 m-md-2">
            <a className="btn btn-light btn-icon rounded-circle position-relative" id="dropdownBasic2">
              <i className="fa fa-envelope" aria-hidden="true"/>
              <span className="badge badge-hint badge-success">16</span>
            </a>

            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownBasic2">


              <div className="media d-flex pl-4 pr-4 pt-3 pb-3">
                <a href="#!">Read all Messages</a>
              </div>

            </div>

          </li>

          <li className="m-sm-1 m-md-2">
            <a className="btn btn-light btn-icon rounded-circle" aria-controls="sidebarRight" tabIndex="2">
              <i className="fa fa-ellipsis-h" aria-hidden="true"/>
            </a>
          </li>

          <li className="m-sm-1 m-md-2">
            <a data-toggle="dropdown" id="dropdownBasic3">
              <div className="d-inline-block mr-2">
              </div>
              <div className="d-none d-lg-inline-block">
                <span className="d-block"/>
              </div>
            </a>

            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownBasic3">
              <a className="dropdown-item">
                <i className="fa fa-user-circle-o" aria-hidden="true"/> Profile
              </a>
              <a className="dropdown-item">
                <i className="fa fa-address-card-o" aria-hidden="true"/> Contacts
              </a>
              <a className="dropdown-item">
                <i className="fa fa-envelope-o" aria-hidden="true"/> Mailbox
              </a>
              <div className="dropdown-divider"/>
              <a className="dropdown-item">
                <i className="fa fa-sign-out" aria-hidden="true"/> Logout
              </a>
            </div>

          </li>

        </ul>

      </div>

    );
  }
}

export default LayoutFooter;
