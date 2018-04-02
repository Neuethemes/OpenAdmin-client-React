import React, {Component} from 'react';

class ProgressPage extends Component {

  render() {
    return (
      <div className="content-wrapper container-fluid px-5 mt-5 mb-4 trans-03-in-out">


        <div className="row">

          <div className="col-lg-12">
            <section className="widget shadow-01" id="widget-01">
              <div className="widget-block">

                <header>
                  <h3 className="widget-title">Simple Progress</h3>
                  <p>Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don’t use <a
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress">the HTML5 <code
                    className="highlighter-rouge">&lt;progress&gt;</code> element</a>, ensuring you can stack progress bars, animate them, and place text labels
                    over them.</p>
                </header>

                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"/>
                      </div>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                      </div>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                      </div>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"/>
                      </div>
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

          <div className="col-lg-12">
            <section className="widget shadow-01" id="widget-02">
              <div className="widget-block">

                <header>
                  <h3 className="widget-title">Labels</h3>
                  <p>Add labels to your progress bars by placing text within the <code className="highlighter-rouge">.progress-bar</code>.</p>
                </header>

                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

          <div className="col-lg-12">
            <section className="widget shadow-01" id="widget-03">
              <div className="widget-block">

                <header>
                  <h3 className="widget-title">Height</h3>
                  <p>We only set a <code className="highlighter-rouge">height</code> value on the <code className="highlighter-rouge">.progress</code>, so if
                    you
                    change that value the inner <code className="highlighter-rouge">.progress-bar</code> will automatically resize accordingly.</p>
                </header>

                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example">
                      <div className="progress" style={{height: '1px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                      </div>
                      <div className="progress" style={{height: '20px'}}>
                        <div className="progress-bar" role="progressbar" style={{width: '25%', height: '20px'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

          <div className="col-lg-12">
            <section className="widget shadow-01" id="widget-04">
              <div className="widget-block">

                <header>
                  <h3 className="widget-title">Backgrounds</h3>
                  <p>Use background utility classes to change the appearance of individual progress bars.</p>
                </header>

                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example">
                      <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"/>
                      </div>
                      <div className="progress">
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

          <div className="col-lg-12">
            <section className="widget shadow-01" id="widget-05">
              <div className="widget-block">

                <header>
                  <h3 className="widget-title">Multiple bars</h3>
                  <p>Include multiple progress bars in a progress component if you need.</p>
                </header>

                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example">
                      <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{width: '15%'}} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"/>
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '30%'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"/>
                        <div className="progress-bar bg-info" role="progressbar" style={{width: '20%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"/>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

          <div className="col-lg-12">
            <section className="widget shadow-01" id="widget-06">
              <div className="widget-block">

                <header>
                  <h3 className="widget-title">Striped</h3>
                  <p>Add <code className="highlighter-rouge">.progress-bar-striped</code> to any <code className="highlighter-rouge">.progress-bar</code> to
                    apply a
                    stripe via CSS gradient over the progress bar’s background color.</p>
                </header>

                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example">
                      <div className="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '10%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"/>
                      </div>
                      <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"/>
                      </div>
                      <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                      </div>
                      <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"/>
                      </div>
                      <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"/>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

          <div className="col-lg-12">
            <section className="widget shadow-01" id="widget-07">
              <div className="widget-block">

                <header>
                  <h3 className="widget-title">Animated stripes</h3>
                  <p>The striped gradient can also be animated. Add <code className="highlighter-rouge">.progress-bar-animated</code> to <code
                    className="highlighter-rouge">.progress-bar</code> to animate the stripes right to left via CSS3 animations.</p>
                </header>

                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example">
                      <div className="progress">
                        <div className="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: '75%'}}/>
                      </div>
                      <button type="button" className="btn btn-secondary bd-toggle-animated-progress" data-toggle="button" aria-pressed="false">
                        Toggle animation
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>

        </div>

      </div>
    );
  }
}

export default ProgressPage;
