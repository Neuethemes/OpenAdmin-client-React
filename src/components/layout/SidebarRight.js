import React, {Component} from 'react';

class SidebarRightComponent extends Component {
  render() {
    return (
      <div id="sidebar-right" className="sidebar-right">

        <div className="sidebar-container">

          <ul className="nav nav-tabs nav-tabs-dark" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="home-tab" data-toggle="tab" href="#notes" role="tab"
                 aria-controls="notes" aria-expanded="true">
                <i className="fa fa-pencil-square" aria-hidden="true"/> Notes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="profile-tab" data-toggle="tab" href="#tasks" role="tab" aria-controls="tasks">
                <i className="fa fa-bar-chart" aria-hidden="true"/> Tasks
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">

            <div className="tab-pane fade show active" id="notes" role="tabpanel" aria-labelledby="home-tab">


            </div>

            <div className="tab-pane fade" id="tasks" role="tabpanel" aria-labelledby="profile-tab">


            </div>

          </div>

        </div>
      </div>

    );
  }
}

export default SidebarRightComponent;
