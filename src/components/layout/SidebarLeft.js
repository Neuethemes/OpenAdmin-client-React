import React, { Component } from 'react';
import Logo from '../Logo'
import ProgressListComponent from "../ProgressList";
import MainNavComponent from "./MainNav";
import { authHeader } from "../../helpers/auth-header";
import { connect } from "react-redux";
import classNames from 'classnames';

class SidebarLeftComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monitoring: []
    };
    this.requestOptions = {
      method: 'GET',
      headers: authHeader()
    };
  }

  componentWillMount() {
    this.loadMonitoringData();
  }

  loadMonitoringData() {
    fetch('http://127.0.0.1:3003/stats/monitoring', this.requestOptions)
      .then(response => response.json())
      .then(response => {
        let monitoring = response.data;
        this.setState({monitoring})
      });
  }

  render() {
    const { layout } = this.props;
    return (
      <div className={classNames("sidebar-left", "bg-dark", "text-light", "pl-0", "pr-0", { collapse: !layout.left_sidebar_visible })} id="sidebar-left">
        <div className="collapse-wrapper">
          <Logo/>
          <MainNavComponent/>
          <div className="mt-4 mx-4 d-none d-lg-block">
            <ProgressListComponent data={this.state.monitoring}/>
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

export default connect(mapStateToProps)(SidebarLeftComponent);
