import React, {Component} from 'react';
import WidgetComponent from "../../../components/Widget";

class BadgesPage extends Component {

  render() {
    return (
      <div className="content-wrapper container-fluid px-5 mt-5 mb-4 trans-03-in-out">

        <h3 className="fw-200 pb-3 pt-3">Basic usage</h3>

        <div className="row">

          <div className="col-lg-12">
            <WidgetComponent header='Example' className='shadow-01' excerpt={
              <span>
                Badges scale to match the size of the immediate parent element by using relative font sizing and <code
                className="highlighter-rouge">em</code> units.
              </span>
            }>
              <div className="bd-example">
                <div className="h1">Example heading <span className="badge badge-secondary">New</span></div>
                <div className="h2">Example heading <span className="badge badge-secondary">New</span></div>
                <div className="h3">Example heading <span className="badge badge-secondary">New</span></div>
                <div className="h4">Example heading <span className="badge badge-secondary">New</span></div>
                <div className="h5">Example heading <span className="badge badge-secondary">New</span></div>
                <div className="h6">Example heading <span className="badge badge-secondary">New</span></div>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-6">
            <WidgetComponent header='Notifications' className='shadow-01' excerpt={
              <span>Badges can be used as part of links or buttons to provide a counter.</span>
            }>
              <div className="bd-example">
                <button type="button" className="btn btn-primary">
                  Notifications <span className="badge badge-light">4</span>
                </button>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-6">
            <WidgetComponent header='Contextual variations' className='shadow-01' excerpt={
              <span>Add any of the below mentioned modifier classes to change the appearance of a badge.</span>
            }>
              <div className="bd-example">
                <span className="badge badge-primary">Primary</span>
                <span className="badge badge-secondary">Secondary</span>
                <span className="badge badge-success">Success</span>
                <span className="badge badge-danger">Danger</span>
                <span className="badge badge-warning">Warning</span>
                <span className="badge badge-info">Info</span>
                <span className="badge badge-light">Light</span>
                <span className="badge badge-dark">Dark</span>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-6">
            <WidgetComponent header='Pill badges' className='shadow-01' excerpt={
              <span>
                Use the <code className="highlighter-rouge">.badge-pill</code> modifier class to make badges more rounded (with a larger <code
                className="highlighter-rouge">border-radius</code> and additional horizontal <code className="highlighter-rouge">padding</code>). Useful if
                you miss the badges from v3.
              </span>
            }>
              <div className="bd-example">
                <span className="badge badge-pill badge-primary">Primary</span>
                <span className="badge badge-pill badge-secondary">Secondary</span>
                <span className="badge badge-pill badge-success">Success</span>
                <span className="badge badge-pill badge-danger">Danger</span>
                <span className="badge badge-pill badge-warning">Warning</span>
                <span className="badge badge-pill badge-info">Info</span>
                <span className="badge badge-pill badge-light">Light</span>
                <span className="badge badge-pill badge-dark">Dark</span>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-6">
            <WidgetComponent header='Links' className='shadow-01' excerpt={
              <span>
                Using the contextual <code className="highlighter-rouge">.badge-*</code> classes on an <code className="highlighter-rouge">&lt;a&gt;</code>
                element quickly provide <em>actionable</em> badges with hover and focus states.
              </span>
            }>
              <div className="bd-example">
                <a href="#" className="badge badge-primary">Primary</a>
                <a href="#" className="badge badge-secondary">Secondary</a>
                <a href="#" className="badge badge-success">Success</a>
                <a href="#" className="badge badge-danger">Danger</a>
                <a href="#" className="badge badge-warning">Warning</a>
                <a href="#" className="badge badge-info">Info</a>
                <a href="#" className="badge badge-light">Light</a>
                <a href="#" className="badge badge-dark">Dark</a>
              </div>
            </WidgetComponent>
          </div>

        </div>

      </div>
    );
  }
}

export default BadgesPage;
