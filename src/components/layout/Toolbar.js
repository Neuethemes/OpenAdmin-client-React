import React, { Component } from 'react';
import { connect } from 'react-redux';
import { layoutActions } from "../../actions/layout.actions";
import classNames from "classnames";
import {authHeader} from "../../helpers/auth-header";
import MessagesComponent from "../Messages";

class ToolbarComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      showProfileDropdown: false,
      showMessagesDropdown: false,
      showNotifyDropdown: false
    };
    this.requestOptions = {
      method: 'GET',
      headers: authHeader()
    };

    this.leftSidebarToggle = this.leftSidebarToggle.bind(this);
    this.rightSidebarToggle = this.rightSidebarToggle.bind(this);
    this.onProfileDropdownClick = this.onProfileDropdownClick.bind(this);
    this.onMessagesDropdownClick = this.onMessagesDropdownClick.bind(this);
    this.onNotifyDropdownClick = this.onNotifyDropdownClick.bind(this);
  }

  leftSidebarToggle() {
    const { layout, dispatch } = this.props;
    return layout.left_sidebar_visible ? dispatch(layoutActions.leftSidebarHide()) : dispatch(layoutActions.leftSidebarShow());
  }

  rightSidebarToggle() {
    const { layout, dispatch } = this.props;
    return layout.right_sidebar_visible ? dispatch(layoutActions.rightSidebarHide()) : dispatch(layoutActions.rightSidebarShow());
  }

  onProfileDropdownClick() {
    this.setState({ showProfileDropdown: !this.state.showProfileDropdown });
  }

  onMessagesDropdownClick() {
    this.setState({ showMessagesDropdown: !this.state.showMessagesDropdown });
  }

  onNotifyDropdownClick() {
    this.setState({ showNotifyDropdown: !this.state.showNotifyDropdown });
  }

  componentWillMount() {
    this.loadMessagesData();
  }

  loadMessagesData() {
    fetch('http://127.0.0.1:3003/messages', this.requestOptions)
      .then(response => response.json())
      .then(response => {
        let messages = response.messages;
        this.setState({messages})
      });
  }

  render() {
    let auth_user = JSON.parse(localStorage.getItem('auth_user'));
    let user_email = auth_user.user_email || "";
    let user_avatar = auth_user.user_avatar || "http://01.gridus-samuel.neuehost.net/wp-content/uploads/2017/04/03-3.jpg";
    return (
      <div className="navbar navbar-light bg-white px-3 px-sm-5 py-3">

        <div className="d-inline-block mr-3">
          <a className="btn btn-dark btn-icon rounded-circle" aria-controls="sidebarLeft" tabIndex="1" onClick={this.leftSidebarToggle}>
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
            <a className="btn btn-light btn-icon rounded-circle position-relative" id="dropdownBasic1" onClick={this.onNotifyDropdownClick}>
              <i className="fa fa-bell" aria-hidden="true"/>
              <span className="badge badge-hint badge-primary">8</span>
            </a>

            <div className={classNames('dropdown-menu', 'dropdown-menu-right', { show: this.state.showNotifyDropdown})}>

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
            <a className="btn btn-light btn-icon rounded-circle position-relative" onClick={this.onMessagesDropdownClick}>
              <i className="fa fa-envelope" aria-hidden="true"/>
              <span className="badge badge-hint badge-success">16</span>
            </a>

            <div className={classNames('dropdown-menu', 'dropdown-menu-right', { show: this.state.showMessagesDropdown})}>

              <div className="p-4">
                <h5 className="tab-title">{this.state.messages.length} Notes Received</h5>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet
                </p>
              </div>
              <MessagesComponent list={this.state.messages}/>

              <div className="media d-flex pl-4 pr-4 pt-3 pb-3">
                <a href="#!">Read all Messages</a>
              </div>

            </div>

          </li>

          <li className="m-sm-1 m-md-2">
            <a className="btn btn-light btn-icon rounded-circle" aria-controls="sidebarRight" tabIndex="2" onClick={this.rightSidebarToggle}>
              <i className="fa fa-ellipsis-h" aria-hidden="true"/>
            </a>
          </li>

          <li className="m-sm-1 m-md-2">
            <a data-toggle="dropdown" id="dropdownBasic3" onClick={this.onProfileDropdownClick}>
              <div className="d-inline-block mr-2">
                <img src={user_avatar} className="rounded-circle" height="32px"/>
              </div>
              <div className="d-none d-lg-inline-block">
                <span className="d-block">{user_email}</span>
              </div>
            </a>

            <div className={classNames('dropdown-menu', 'dropdown-menu-right', { show: this.state.showProfileDropdown})}>
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

function mapStateToProps(state) {
  const { layout } = state;
  return {
    layout
  };
}

export default connect(mapStateToProps)(ToolbarComponent);
