import React, {Component} from 'react';
import WidgetComponent from "../../../components/Widget";

class WidgetsPage extends Component {

  render() {
    return (
      <div className="content-wrapper container-fluid px-5 mt-5 mb-4 trans-03-in-out">

        <h3 className="fw-200 pb-3">Small widgets</h3>

        <div className="row">

          <div className="col-lg-4">
            <WidgetComponent header='Income' className='shadow-01 small' badge={{type:'danger',val:20,ico:'fa fa-level-up'}}>
              <div>
                <p className="h1">$23.654 <span>bn</span></p>
                <p className="text-muted mt-2">Total per Month</p>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-4">
            <WidgetComponent header='Income' className='shadow-01 widget-dark bg-danger small' badge={{type:'warning',val:20,ico:'fa fa-level-up'}}>
              <div>
                <p className="h1">$23.654 <span>bn</span></p>
                <p className="text-muted mt-2">Total per Month</p>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-4">
            <WidgetComponent header='Income' className='shadow-01 widget-dark bg-dark small' badge={{type:'secondary',val:20,ico:'fa fa-level-up'}}>
              <div>
                <p className="h1">$23.654 <span>bn</span></p>
                <p className="text-muted mt-2">Total per Month</p>
              </div>
            </WidgetComponent>
          </div>

        </div>


        <h3 className="fw-200 pb-3 pt-3">General widgets</h3>

        <div className="row">

          <div className="col-lg-6">
            <WidgetComponent header='Plain Widget' className='shadow-01' moreLink='#!' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod. Maecenas luctus urna a erat rutrum aliquet.
                Suspendisse potenti. Aenean dapibus elit sit amet magna aliquet fermentum. Aliquam tristique et risus ut iaculis.
                Maecenas at urna quis nisl iaculis consectetur. Donec non eros egestas, pulvinar arcu id, malesuada lectus.
                Donec hendrerit scelerisque diam, vitae feugiat magna venenatis vel.
              </p>
            </WidgetComponent>
          </div>

          <div className="col-lg-6">
            <WidgetComponent header='Inverted Widget' className='shadow-01 widget-dark bg-dark' moreLink='#!' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod. Maecenas luctus urna a erat rutrum aliquet.
                Suspendisse potenti. Aenean dapibus elit sit amet magna aliquet fermentum. Aliquam tristique et risus ut iaculis.
                Maecenas at urna quis nisl iaculis consectetur. Donec non eros egestas, pulvinar arcu id, malesuada lectus.
                Donec hendrerit scelerisque diam, vitae feugiat magna venenatis vel.
              </p>
            </WidgetComponent>
          </div>

          <div className="col-lg-3">
            <WidgetComponent header='Green Widget' className='shadow-01 widget-dark bg-success' moreLink='#!' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod.
              </p>
            </WidgetComponent>
          </div>

          <div className="col-lg-3">
            <WidgetComponent header='Red Widget' className='shadow-01 widget-dark bg-danger' moreLink='#!' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod.
              </p>
            </WidgetComponent>
          </div>

          <div className="col-lg-3">
            <WidgetComponent header='Yellow Widget' className='shadow-01 widget-dark bg-warning' moreLink='#!' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod.
              </p>
            </WidgetComponent>
          </div>

          <div className="col-lg-3">
            <WidgetComponent header='Grey Widget' className='shadow-01 widget-dark bg-secondary' moreLink='#!' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod.
              </p>
            </WidgetComponent>
          </div>

        </div>


        <h3 className="fw-200 pb-3 pt-3">Shadows</h3>

        <div className="row">

          <div className="col-lg-3">
            <WidgetComponent header='No Shadow' moreLink='#!' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod.
              </p>
            </WidgetComponent>
          </div>

          <div className="col-lg-3">
            <WidgetComponent header='Shadow 01' moreLink='#!' className='shadow-01' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod.
              </p>
            </WidgetComponent>
          </div>

          <div className="col-lg-3">
            <WidgetComponent header='Shadow 02' moreLink='#!' className='shadow-02' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod.
              </p>
            </WidgetComponent>
          </div>

          <div className="col-lg-3">
            <WidgetComponent header='Shadow 03' moreLink='#!' className='shadow-03' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod.
              </p>
            </WidgetComponent>
          </div>

        </div>


        <h3 className="fw-200 pb-3 pt-3">Color Accents</h3>

        <div className="row">

          <div className="col-lg-3">
            <WidgetComponent header='Plain Widget' moreLink='#!' className='shadow-01 headerline-danger' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod.
              </p>
            </WidgetComponent>
          </div>

          <div className="col-lg-3">
            <WidgetComponent header='Plain Widget' moreLink='#!' className='shadow-01 headerline-success' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod.
              </p>
            </WidgetComponent>
          </div>

          <div className="col-lg-3">
            <WidgetComponent header='Plain Widget' moreLink='#!' className='shadow-01 headerline-primary' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod.
              </p>
            </WidgetComponent>
          </div>

          <div className="col-lg-3">
            <WidgetComponent header='Plain Widget' moreLink='#!' className='shadow-01 headerline-dark' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod.
              </p>
            </WidgetComponent>
          </div>

        </div>


        <h3 className="fw-200 pb-3 pt-3">Outlines</h3>

        <div className="row">

          <div className="col-lg-6">
            <WidgetComponent header='Plain Widget' moreLink='#!' className='shadow-01 border-1 border-dark' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod.
              </p>
            </WidgetComponent>
          </div>

          <div className="col-lg-6">
            <WidgetComponent header='Plain Widget' moreLink='#!' className='shadow-01 border-2 border-danger' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod.
              </p>
            </WidgetComponent>
          </div>

          <div className="col-lg-6">
            <WidgetComponent header='Plain Widget' moreLink='#!' className='shadow-01 border-3 border-success' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod.
              </p>
            </WidgetComponent>
          </div>

          <div className="col-lg-6">
            <WidgetComponent header='Plain Widget' moreLink='#!' className='shadow-01 border-4 border-primary' excerpt='Lorem ipsum dolor sit amet, consectetur adipisicing elit'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod.
              </p>
            </WidgetComponent>
          </div>

        </div>

      </div>
    );
  }
}

export default WidgetsPage;
