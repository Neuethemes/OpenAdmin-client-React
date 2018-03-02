import React, {Component} from 'react';
import Logo from '../Logo'
import ProgressList from "../ProgressList";
import LayoutMainNav from "./MainNav";

class LayoutSidebarLeft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monitoring: []
    }
  }

  componentWillMount() {
    this.loadMonitoringData();
  }

  loadMonitoringData() {
    fetch('/stats/monitoring')
      .then(response => response.json())
      .then(response => {
        let monitoring = response.data.data;
        this.setState({monitoring})
      });
  }

  render() {
    return (
      <div className="sidebar-left bg-dark text-light pl-0 pr-0" id="sidebar-left">
        <div className="collapse-wrapper">
          <Logo/>
          <LayoutMainNav/>
          <div className="mt-4 mx-4 d-none d-lg-block">
            <ProgressList data={this.state.monitoring}/>
          </div>
        </div>
      </div>
    );
  }
}

export default LayoutSidebarLeft;
