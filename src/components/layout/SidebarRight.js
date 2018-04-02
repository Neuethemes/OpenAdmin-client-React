import React, { Component } from 'react';
import MessagesComponent from "../Messages";
import { TabContent, TabPane } from 'reactstrap';
import { connect } from "react-redux";
import { authHeader } from "../../helpers/auth-header";
import classNames from "classnames";

class SidebarRightComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      activeTab: 'notes',
    };
    this.requestOptions = {
      method: 'GET',
      headers: authHeader()
    };
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

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const { layout } = this.props;
    return (
      <div id="sidebar-right" className="sidebar-right" style={{right: layout.right_sidebar_visible ? 0 : -300}}>

        <div className="sidebar-container">

          <ul className="nav nav-tabs nav-tabs-dark" id="myTab" role="tablist">
            <li className="nav-item">
              <a className={classNames('nav-link', { active: this.state.activeTab === 'notes' })} onClick={() => { this.toggle('notes'); }} >
                <i className="fa fa-pencil-square" aria-hidden="true"/> Notes
              </a>
            </li>
            <li className="nav-item">
              <a className={classNames('nav-link', { active: this.state.activeTab === 'tasks' })} onClick={() => { this.toggle('tasks'); }} >
                <i className="fa fa-bar-chart" aria-hidden="true"/> Tasks
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">

            <TabContent activeTab={this.state.activeTab}>

              <TabPane tabId="notes">
                <div className="p-4">
                  <h5 className="tab-title">{this.state.messages.length} Notes Received</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
                <MessagesComponent list={this.state.messages}/>
              </TabPane>

              <TabPane tabId="tasks">
                <div className="p-4">
                  <h5 className="tab-title">6 Tasks are Active</h5>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>

                <ul className="list-unstyled list-striped">

                  <li className="media d-flex pl-4 pr-4 pt-3 pb-4">
                    <div className="media-body">
                      <a href="#!">
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-1 mr-4">Meeting at 6PM</h6>
                          <span className="badge badge-primary text-uppercase">New</span>
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et quam elit.
                      </a>
                    </div>
                  </li>

                  <li className="media d-flex pl-4 pr-4 pt-3 pb-4">
                    <div className="media-body">
                      <a href="#!">
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-1 mr-4">Annual Report</h6>
                          <span className="text-muted"><small>12 days ago</small></span>
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et quam elit.
                      </a>
                    </div>
                  </li>

                  <li className="media d-flex pl-4 pr-4 pt-3 pb-4">
                    <div className="media-body">
                      <a href="#!">
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-1 mr-4">Landing Page Design</h6>
                          <span className="text-muted"><small>12 days ago</small></span>
                        </div>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et quam elit.</p>
                      </a>
                    </div>
                  </li>

                  <li className="media d-flex pl-4 pr-4 pt-3 pb-4">
                    <div className="media-body">
                      <a href="#!">
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-1 mr-4">Meeting at 6PM</h6>
                          <span className="text-muted"><small>6 hrs ago</small></span>
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et quam elit.
                      </a>
                    </div>
                  </li>

                  <li className="media d-flex pl-4 pr-4 pt-3 pb-4">
                    <div className="media-body">
                      <a href="#!">
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-1 mr-4">Annual Report</h6>
                          <span className="text-muted"><small>12 hrs ago</small></span>
                        </div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et quam elit.
                      </a>
                    </div>
                  </li>

                  <li className="media d-flex pl-4 pr-4 pt-3 pb-4">
                    <div className="media-body">
                      <a href="#!">
                        <div className="d-flex w-100 justify-content-between">
                          <h6 className="mb-1 mr-4">Landing Page Design</h6>
                          <span className="text-muted"><small>18 hrs ago</small></span>
                        </div>
                        <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et quam elit.</p>
                      </a>
                    </div>
                  </li>

                </ul>
              </TabPane>
            </TabContent>

          </div>

        </div>
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

export default connect(mapStateToProps)(SidebarRightComponent);
