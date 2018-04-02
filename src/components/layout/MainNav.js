import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Badge, Collapse } from 'reactstrap';

class MainNavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { showNavItem: { root: 0, sub: 0 } };
  }

  menuToggle(e) {
    let navRoot = +e.currentTarget.dataset.navRoot || 0;
    let navSub = +e.currentTarget.dataset.navSub || 0;

    if (this.state.showNavItem.root === navRoot && navSub === 0) {
      this.setState({ showNavItem: { root: 0, sub: 0 } });
    } else if (this.state.showNavItem.sub >= navSub) {
      this.setState({ showNavItem: { root: navRoot, sub: --navSub } });
    } else {
      this.setState({ showNavItem: { root: navRoot, sub: navSub } });
    }
  }

  render() {
    return (
      <nav className="sidebar-nav">
        <div className="mb-1 text-uppercase d-none d-lg-block text-muted">
          <small>General</small>
        </div>
        <ul id="sidebarNav" className="nav nav-dark flex-column">
          <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/dashboard`}>
              <i className="fa fa-tachometer" aria-hidden="true"/>
              <span className="d-none d-lg-inline">Dashboards</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/charts`}>
              <i className="fa fa-pie-chart" aria-hidden="true"/>
              <span className="d-none d-lg-inline">Charts</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/widgets`}>
              <i className="fa fa-list" aria-hidden="true"/>
              <span className="d-none d-lg-inline">Widgets</span>
              <Badge color="success" className='text-uppercase float-right d-none d-lg-block'>New</Badge>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/tables`}>
              <i className="fa fa-table" aria-hidden="true"/>
              <span className="d-none d-lg-inline">Tables</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={this.menuToggle.bind(this)} aria-expanded={this.state.showNavItem.root === 1}
               data-nav-root="1">
              <i className="fa fa-sitemap" aria-hidden="true"/>
              <span className="d-none d-lg-inline">Menu Levels</span>
            </a>
            <Collapse isOpen={this.state.showNavItem.root === 1} tag="ul" className="nav flex-column bg-dark">
              <li className="nav-item">
                <a className="nav-link nav-level-1">Level 1-1</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-level-1" onClick={this.menuToggle.bind(this)} aria-expanded={this.state.showNavItem.sub > 0}
                   data-nav-root="1" data-nav-sub="1">
                  Level 1-2
                </a>
                <Collapse isOpen={this.state.showNavItem.sub > 0} tag="ul" className="nav flex-column">
                  <li className="nav-item">
                    <a className="nav-link nav-level-2">Level 2-1</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link nav-level-2" onClick={this.menuToggle.bind(this)} aria-expanded={this.state.showNavItem.sub > 1}
                       data-nav-root="1" data-nav-sub="2">
                      Level 2-2
                    </a>
                    <Collapse isOpen={this.state.showNavItem.sub > 1} tag="ul" className="nav flex-column">
                      <li className="nav-item">
                        <a className="nav-link nav-level-3">Level 3-1</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link nav-level-3">Level 3-2</a>
                      </li>
                    </Collapse>
                  </li>
                </Collapse>
              </li>
            </Collapse>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/grid`}>
              <i className="fa fa-th" aria-hidden="true"/>
              <span className="d-none d-lg-inline">Grid</span>
              <Badge color="danger" className='text-uppercase float-right d-none d-lg-block'>Hot</Badge>
            </Link>
          </li>
        </ul>

        <div className="mt-4 mb-1 text-uppercase d-none d-lg-block text-muted">
          <small>Extras</small>
        </div>
        <ul className="nav nav-dark flex-column">
          <li className="nav-item">
            <a className="nav-link" onClick={this.menuToggle.bind(this)} aria-expanded={this.state.showNavItem.root === 2}
               data-nav-root="2">
              <i className="fa fa-files-o" aria-hidden="true"/>
              <span className="d-none d-lg-inline">Pages</span>
            </a>
            <Collapse isOpen={this.state.showNavItem.root === 2} tag="ul" className="nav flex-column bg-dark">
              <li className="nav-item">
                <Link className="nav-link nav-level-1" to={`${process.env.PUBLIC_URL}/login`}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-level-1" to={`${process.env.PUBLIC_URL}/404`}>404 Error</Link>
              </li>
            </Collapse>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={this.menuToggle.bind(this)} aria-expanded={this.state.showNavItem.root === 3}
               data-nav-root="3">
              <i className="fa fa-suitcase" aria-hidden="true"/>
              <span className="d-none d-lg-inline">UI Elements</span>
            </a>
            <Collapse isOpen={this.state.showNavItem.root === 3} tag="ul" className="nav flex-column bg-dark">
              <li className="nav-item">
                <Link className="nav-link nav-level-1" to={`${process.env.PUBLIC_URL}/buttons`}>Buttons</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-level-1" to={`${process.env.PUBLIC_URL}/typography`}>Typography</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-level-1" to={`${process.env.PUBLIC_URL}/icons`}>Icons</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-level-1" to={`${process.env.PUBLIC_URL}/navs`}>Navs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-level-1" to={`${process.env.PUBLIC_URL}/badges`}>Badges, Labels</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-level-1" to={`${process.env.PUBLIC_URL}/progress`}>Progress</Link>
              </li>
            </Collapse>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={`${process.env.PUBLIC_URL}/forms`}>
              <i className="fa fa-id-card" aria-hidden="true"/>
              <span className="d-none d-lg-inline">Forms</span>
            </Link>
          </li>
        </ul>

      </nav>
    );
  }
}

export default MainNavComponent;
