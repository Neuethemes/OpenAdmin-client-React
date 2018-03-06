import React, {Component} from 'react';

class GridPage extends Component {

  render() {
    return (
      <div className="content-wrapper container-fluid px-5 mt-5 mb-4 trans-03-in-out">


        <h2 className="fw-200 pb-3 pt-3">Grid System</h2>
        <div className="row">
          <div className="col-lg-12 mb-3">
            <section className="widget shadow-01" id="widget-01">
              <div className="widget-block">
                <header>
                  <h3 className="widget-title">Grid options</h3>
                  <p>While Bootstrap uses <code className="highlighter-rouge">em</code>s or <code className="highlighter-rouge">rem</code>s for defining most
                    sizes,
                    <code className="highlighter-rouge">px</code>s are used for grid breakpoints and container widths. This is because the viewport width is in
                    pixels and does not change with the <a href="https://drafts.csswg.org/mediaqueries-3/#units">font size</a>.</p>
                </header>
                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <table className="table table-bordered table-striped">
                      <thead>
                      <tr>
                        <th/>
                        <th className="text-center">
                          Extra small<br/>
                          <small>&lt;576px</small>
                        </th>
                        <th className="text-center">
                          Small<br/>
                          <small>≥576px</small>
                        </th>
                        <th className="text-center">
                          Medium<br/>
                          <small>≥768px</small>
                        </th>
                        <th className="text-center">
                          Large<br/>
                          <small>≥992px</small>
                        </th>
                        <th className="text-center">
                          Extra large<br/>
                          <small>≥1200px</small>
                        </th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <th className="text-nowrap" scope="row">Max container width</th>
                        <td>None (auto)</td>
                        <td>540px</td>
                        <td>720px</td>
                        <td>960px</td>
                        <td>1140px</td>
                      </tr>
                      <tr>
                        <th className="text-nowrap" scope="row">Class prefix</th>
                        <td><code>.col-</code></td>
                        <td><code>.col-sm-</code></td>
                        <td><code>.col-md-</code></td>
                        <td><code>.col-lg-</code></td>
                        <td><code>.col-xl-</code></td>
                      </tr>
                      <tr>
                        <th className="text-nowrap" scope="row"># of columns</th>
                        <td colSpan="5">12</td>
                      </tr>
                      <tr>
                        <th className="text-nowrap" scope="row">Gutter width</th>
                        <td colSpan="5">30px (15px on each side of a column)</td>
                      </tr>
                      <tr>
                        <th className="text-nowrap" scope="row">Nestable</th>
                        <td colSpan="5">Yes</td>
                      </tr>
                      <tr>
                        <th className="text-nowrap" scope="row">Column ordering</th>
                        <td colSpan="5">Yes</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </section>
          </div>
          <div className="col-lg-6 mb-3">
            <section className="widget shadow-01" id="widget-02">
              <div className="widget-block">
                <header>
                  <h3 className="widget-title">Equal-width</h3>
                  <p>For example, here are two grid layouts that apply to every device and viewport, from <code className="highlighter-rouge">xs</code> to <code
                    className="highlighter-rouge">xl</code>. Add any number of unit-less classes for each breakpoint you need and every column will be the same
                    width.</p>
                </header>
                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example-row">
                      <div className="bd-example">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col">
                              1 of 2
                            </div>
                            <div className="col">
                              2 of 2
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              1 of 3
                            </div>
                            <div className="col">
                              2 of 3
                            </div>
                            <div className="col">
                              3 of 3
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>
          <div className="col-lg-6 mb-3">
            <section className="widget shadow-01" id="widget-03">
              <div className="widget-block">
                <header>
                  <h3 className="widget-title">Setting one column width</h3>
                  <p>Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize
                    around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no
                    matter the width of the center column.</p>
                </header>
                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example-row">
                      <div className="bd-example">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col">
                              1 of 3
                            </div>
                            <div className="col-6">
                              2 of 3 (wider)
                            </div>
                            <div className="col">
                              3 of 3
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              1 of 3
                            </div>
                            <div className="col-5">
                              2 of 3 (wider)
                            </div>
                            <div className="col">
                              3 of 3
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-6 mb-3">
            <section className="widget shadow-01" id="widget-04">
              <div className="widget-block">
                <header>
                  <h3 className="widget-title">Variable width content</h3>
                  <p>Use <code className="highlighter-rouge">col-{}breakpoint{}-auto</code> classes to size columns based on the natural width of
                    their content.</p>
                </header>
                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example-row">
                      <div className="bd-example">
                        <div className="container-fluid">
                          <div className="row justify-content-md-center">
                            <div className="col col-lg-2">
                              1 of 3
                            </div>
                            <div className="col-md-auto">
                              Variable width content
                            </div>
                            <div className="col col-lg-2">
                              3 of 3
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              1 of 3
                            </div>
                            <div className="col-md-auto">
                              Variable width content
                            </div>
                            <div className="col col-lg-2">
                              3 of 3
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-6 mb-3">
            <section className="widget shadow-01" id="widget-05">
              <div className="widget-block">
                <header>
                  <h3 className="widget-title">Equal-width multi-row</h3>
                  <p>Create equal-width columns that span multiple rows by inserting a <code className="highlighter-rouge">.w-100</code> where you want the
                    columns to break to a new line. Make the breaks responsive by mixing the <code className="highlighter-rouge">.w-100</code> with some <a
                      href="/docs/4.0/utilities/display/">responsive display utilities</a>.</p>
                </header>
                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example-row">
                      <div className="bd-example">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col">col</div>
                            <div className="col">col</div>
                            <div className="w-100"/>
                            <div className="col">col</div>
                            <div className="col">col</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <h2 className="fw-200 pb-3 pt-3">Responsive classes</h2>
        <p>Bootstrap’s grid includes five tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra
          small, small, medium, large, or extra large devices however you see fit.</p>

        <div className="row">
          <div className="col-lg-12 mb-3">
            <section className="widget shadow-01" id="widget-06">
              <div className="widget-block">
                <header>
                  <h3 className="widget-title">All breakpoints</h3>
                  <p>For grids that are the same from the smallest of devices to the largest, use the <code className="highlighter-rouge">.col</code> and <code
                    className="highlighter-rouge">.col-*</code> classes. Specify a numbered class when you need a particularly sized column; otherwise, feel
                    free to stick to <code className="highlighter-rouge">.col</code>.</p>
                </header>
                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example-row">
                      <div className="bd-example">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col">col</div>
                            <div className="col">col</div>
                            <div className="col">col</div>
                            <div className="col">col</div>
                          </div>
                          <div className="row">
                            <div className="col-8">col-8</div>
                            <div className="col-4">col-4</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-6 mb-3">
            <section className="widget shadow-01" id="widget-07">
              <div className="widget-block">
                <header>
                  <h3 className="widget-title">Stacked to horizontal</h3>
                  <p>Using a single set of <code className="highlighter-rouge">.col-sm-*</code> classes, you can create a basic grid system that starts out
                    stacked on extra small devices before becoming horizontal on desktop (medium) devices.</p>
                </header>
                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example-row">
                      <div className="bd-example">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-sm-8">col-sm-8</div>
                            <div className="col-sm-4">col-sm-4</div>
                          </div>
                          <div className="row">
                            <div className="col-sm">col-sm</div>
                            <div className="col-sm">col-sm</div>
                            <div className="col-sm">col-sm</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-lg-6 mb-3">
            <section className="widget shadow-01" id="widget-08">
              <div className="widget-block">
                <header>
                  <h3 className="widget-title">Mix and match</h3>
                  <p>Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the
                    example below for a better idea of how it all works.</p>
                </header>
                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example-row">
                      <div className="bd-example">
                        <div className="container-fluid">
                          {/*Stack the columns on mobile by making one full-width and the other half-width*/}
                          <div className="row">
                            <div className="col-12 col-md-8">.col-12 .col-md-8</div>
                            <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                          </div>

                          {/*Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop*/}
                          <div className="row">
                            <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                            <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                            <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                          </div>

                          {/*Columns are always 50% wide, on mobile and desktop*/}
                          <div className="row">
                            <div className="col-6">.col-6</div>
                            <div className="col-6">.col-6</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>
        </div>

        <h2 className="fw-200 pb-3 pt-3">Alignment</h2>
        <p>Use flexbox alignment utilities to vertically and horizontally align columns.</p>

        <div className="row">
          <div className="col-lg-12 mb-3">
            <section className="widget shadow-01" id="widget-09">
              <div className="widget-block">
                <header>
                  <h3 className="widget-title">Vertical alignment</h3>
                </header>
                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example-row">
                      <div className="bd-example">
                        <div className="container-fluid">
                          <div className="row align-items-start">
                            <div className="col">
                              One of three columns
                            </div>
                            <div className="col">
                              One of three columns
                            </div>
                            <div className="col">
                              One of three columns
                            </div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col">
                              One of three columns
                            </div>
                            <div className="col">
                              One of three columns
                            </div>
                            <div className="col">
                              One of three columns
                            </div>
                          </div>
                          <div className="row align-items-end">
                            <div className="col">
                              One of three columns
                            </div>
                            <div className="col">
                              One of three columns
                            </div>
                            <div className="col">
                              One of three columns
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>
          <div className="col-lg-12 mb-3">
            <section className="widget shadow-01" id="widget-10">
              <div className="widget-block">
                <header>
                  <h3 className="widget-title">Horizontal alignment</h3>
                </header>
                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example-row">
                      <div className="bd-example">
                        <div className="container-fluid">
                          <div className="row justify-content-start">
                            <div className="col-4">
                              One of two columns
                            </div>
                            <div className="col-4">
                              One of two columns
                            </div>
                          </div>
                          <div className="row justify-content-center">
                            <div className="col-4">
                              One of two columns
                            </div>
                            <div className="col-4">
                              One of two columns
                            </div>
                          </div>
                          <div className="row justify-content-end">
                            <div className="col-4">
                              One of two columns
                            </div>
                            <div className="col-4">
                              One of two columns
                            </div>
                          </div>
                          <div className="row justify-content-around">
                            <div className="col-4">
                              One of two columns
                            </div>
                            <div className="col-4">
                              One of two columns
                            </div>
                          </div>
                          <div className="row justify-content-between">
                            <div className="col-4">
                              One of two columns
                            </div>
                            <div className="col-4">
                              One of two columns
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>
        </div>

        <h2 className="fw-200 pb-3 pt-3">Reordering</h2>
        <div className="row">
          <div className="col-lg-12 mb-3">
            <section className="widget shadow-01" id="widget-11">
              <div className="widget-block">
                <header>
                  <h3 className="widget-title">Order classes</h3>
                  <p>Use <code className="highlighter-rouge">.order-</code> classes for controlling the <strong>visual order</strong> of your content. These
                    classes are responsive, so you can set the <code className="highlighter-rouge">order</code> by breakpoint (e.g., <code
                      className="highlighter-rouge">.order-1.order-md-2</code>). Includes support for <code className="highlighter-rouge">1</code> through <code
                      className="highlighter-rouge">12</code> across all five grid tiers.</p>
                </header>
                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example-row">
                      <div className="bd-example">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col">
                              First, but unordered
                            </div>
                            <div className="col order-12">
                              Second, but last
                            </div>
                            <div className="col order-1">
                              Third, but first
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>
        </div>

        <h2 className="fw-200 pb-3 pt-3">Offsetting columns</h2>
        <p>You can offset grid columns in two ways: our responsive <code className="highlighter-rouge">.offset-</code> grid classes and our <a
          href="/docs/4.0/utilities/spacing/">margin utilities</a>. Grid classes are sized to match columns while margins are more useful for quick layouts
          where the width of the offset is variable.</p>
        <div className="row">
          <div className="col-lg-12 mb-3">
            <section className="widget shadow-01" id="widget-12">
              <div className="widget-block">
                <header>
                  <h3 className="widget-title">Offset classes</h3>
                  <p>Move columns to the right using <code className="highlighter-rouge">.offset-md-*</code> classes. These classes increase the left margin of
                    a
                    column by <code className="highlighter-rouge">*</code> columns. For example, <code
                      className="highlighter-rouge">.offset-md-4</code> moves <code
                      className="highlighter-rouge">.col-md-4</code> over four columns.</p>
                </header>
                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example-row">
                      <div className="bd-example">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-4">.col-md-4</div>
                            <div className="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
                          </div>
                          <div className="row">
                            <div className="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
                            <div className="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>
          <div className="col-lg-12 mb-3">
            <section className="widget shadow-01" id="widget-13">
              <div className="widget-block">
                <header>
                  <h3 className="widget-title">Margin utilities</h3>
                  <p>With the move to flexbox in v4, you can use margin utilities like <code className="highlighter-rouge">.mr-auto</code> to force sibling
                    columns away from one another.</p>
                </header>
                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example-row">
                      <div className="bd-example">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-md-4">.col-md-4</div>
                            <div className="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
                          </div>
                          <div className="row">
                            <div className="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
                            <div className="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
                          </div>
                          <div className="row">
                            <div className="col-auto mr-auto">.col-auto .mr-auto</div>
                            <div className="col-auto">.col-auto</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>
          </div>
          <div className="col-lg-12 mb-3">
            <section className="widget shadow-01" id="widget-14">
              <div className="widget-block">
                <header>
                  <h3 className="widget-title">Nesting</h3>
                  <p>To nest your content with the default grid, add a new <code className="highlighter-rouge">.row</code> and set of <code
                    className="highlighter-rouge">.col-sm-*</code> columns within an existing <code className="highlighter-rouge">.col-sm-*</code> column.
                    Nested
                    rows should include a set of columns that add up to 12 or fewer (it is not required that you use all 12 available columns).</p>
                </header>
                <div className="row">
                  <div className="col-lg-12 widget-content py-2">
                    <div className="bd-example-row">
                      <div className="bd-example">
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-sm-9">
                              Level 1: .col-sm-9
                              <div className="row">
                                <div className="col-8 col-sm-6">
                                  Level 2: .col-8 .col-sm-6
                                </div>
                                <div className="col-4 col-sm-6">
                                  Level 2: .col-4 .col-sm-6
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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

export default GridPage;
