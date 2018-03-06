import React, {Component} from 'react';
import WidgetComponent from "../../../components/Widget";

class TypographyPage extends Component {

  render() {
    return (
      <div className="content-wrapper container-fluid px-5 mt-5 mb-4 trans-03-in-out">

        <h3 className="fw-200 pb-3 pt-3">Headings</h3>

        <div className="row">

          <div className="col-lg-6">
            <WidgetComponent header="H Headings" className='shadow-01' excerpt={
              <span>
                All HTML headings, <code className="highlighter-rouge">&lt;h1&gt;</code> through <code className="highlighter-rouge">&lt;h6&gt;</code>, are available.
              </span>
            }>
              <div className="bd-example">
                <h1>h1. Bootstrap heading</h1>
                <h2>h2. Bootstrap heading</h2>
                <h3>h3. Bootstrap heading</h3>
                <h4>h4. Bootstrap heading</h4>
                <h5>h5. Bootstrap heading</h5>
                <h6>h6. Bootstrap heading</h6>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-6">
            <WidgetComponent header="Headings via classes" className='shadow-01' excerpt={
              <span>
                <code className="highlighter-rouge">.h1</code> through <code className="highlighter-rouge">.h6</code> classes are also available, for when
                you want to match the font styling of a heading but cannot use the associated HTML element.
              </span>
            }>
              <div className="bd-example">
                <p className="h1">h1. Bootstrap heading</p>
                <p className="h2">h2. Bootstrap heading</p>
                <p className="h3">h3. Bootstrap heading</p>
                <p className="h4">h4. Bootstrap heading</p>
                <p className="h5">h5. Bootstrap heading</p>
                <p className="h6">h6. Bootstrap heading</p>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-6">
            <WidgetComponent header="Display Headings" className='shadow-01' excerpt={
              <span>
                Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider
                using a <strong>display heading</strong>—a larger, slightly more opinionated heading style.
              </span>
            }>
              <div className="bd-example">
                <h1 className="display-1">Display 1</h1>
                <h1 className="display-2">Display 2</h1>
                <h1 className="display-3">Display 3</h1>
                <h1 className="display-4">Display 4</h1>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-6">

            <div className="row">

              <div className="col-lg-12">
                <WidgetComponent header="Customizing headings" className='shadow-01' excerpt={
                  <span>Use the included utility classes to recreate the small secondary heading text from Bootstrap 3.</span>
                }>
                  <h3>
                    Fancy display heading
                    <small className="text-muted">With faded secondary text</small>
                  </h3>
                </WidgetComponent>
              </div>

              <div className="col-lg-12">
                <WidgetComponent header="Lead" className='shadow-01' excerpt={
                  <span>Make a paragraph stand out by adding <code className="highlighter-rouge">.lead</code>.</span>
                }>
                  <div className="bd-example">
                    <p className="lead">
                      Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
                    </p>
                  </div>
                </WidgetComponent>
              </div>

            </div>

          </div>

        </div>


        <h3 className="fw-200 pb-3 pt-3">Text</h3>

        <div className="row">

          <div className="col-lg-9">
            <WidgetComponent header="Inline text elements" className='shadow-01' excerpt={
              <span>Styling for common inline HTML5 elements.</span>
            }>
              <div className="bd-example">
                <p>You can use the mark tag to
                  <mark>highlight</mark>
                  text.
                </p>
                <p>
                  <del>This line of text is meant to be treated as deleted text.</del>
                </p>
                <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
                <p>
                  <ins>This line of text is meant to be treated as an addition to the document.</ins>
                </p>
                <p><u>This line of text will render as underlined</u></p>
                <p>
                  <small>This line of text is meant to be treated as fine print.</small>
                </p>
                <p><strong>This line rendered as bold text.</strong></p>
                <p><em>This line rendered as italicized text.</em></p>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-3">
            <WidgetComponent header="Abbreviations" className='shadow-01' excerpt={
              <span>
                Stylized implementation of HTML’s <code className="highlighter-rouge">&lt;abbr&gt;</code> element for abbreviations and acronyms to show
                the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to
                users of assistive technologies.
              </span>
            }>
              <div className="bd-example">
                <p><abbr title="attribute">attr</abbr></p>
                <p><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
              </div>
            </WidgetComponent>
          </div>

        </div>

        <h3 className="fw-200 pb-3 pt-3">Blockquotes</h3>

        <div className="row">

          <div className="col-lg-6">
            <WidgetComponent header="Simple Blockquote" className='shadow-01' excerpt={
              <span>
                For quoting blocks of content from another source within your document. Wrap <code className="highlighter-rouge">&lt;blockquote
                class="blockquote"&gt;</code> around any <abbr title="HyperText Markup Language">HTML</abbr> as the quote.
              </span>
            }>
              <div className="bd-example">
                <blockquote className="blockquote">
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-6">
            <WidgetComponent header="Naming a source" className='shadow-01' excerpt={
              <span>
                Add a <code className="highlighter-rouge">&lt;footer class="blockquote-footer"&gt;</code> for identifying the source. Wrap the name of the
                source work in <code className="highlighter-rouge">&lt;cite&gt;</code>.
              </span>
            }>
              <div className="bd-example">
                <blockquote className="blockquote">
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-6">
            <WidgetComponent header="Central alignment" className='shadow-01' excerpt={
              <span>Use text utilities as needed to change the alignment of your blockquote.</span>
            }>
              <div className="bd-example">
                <blockquote className="blockquote text-center">
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-6">
            <WidgetComponent header="Right Alignment" className='shadow-01' excerpt={
              <span>Use text utilities as needed to change the alignment of your blockquote.</span>
            }>
              <div className="bd-example">
                <blockquote className="blockquote text-right">
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                  <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
              </div>
            </WidgetComponent>
          </div>

        </div>

        <h3 className="fw-200 pb-3 pt-3">Lists</h3>

        <div className="row">

          <div className="col-lg-6">
            <WidgetComponent header="Unstyled" className='shadow-01' excerpt={
              <span>
                Remove the default <code className="highlighter-rouge">list-style</code> and left margin on list items (immediate children only). <strong>This
                only applies to immediate children list items</strong>, meaning you will need to add the class for any nested lists as well.
              </span>
            }>
              <div className="bd-example">
                <ul className="list-unstyled">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Integer molestie lorem at massa</li>
                  <li>Facilisis in pretium nisl aliquet</li>
                  <li>Nulla volutpat aliquam velit
                    <ul>
                      <li>Phasellus iaculis neque</li>
                      <li>Purus sodales ultricies</li>
                      <li>Vestibulum laoreet porttitor sem</li>
                      <li>Ac tristique libero volutpat at</li>
                    </ul>
                  </li>
                  <li>Faucibus porta lacus fringilla vel</li>
                  <li>Aenean sit amet erat nunc</li>
                  <li>Eget porttitor lorem</li>
                </ul>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-6">
            <WidgetComponent header="Description list alignment" className='shadow-01' excerpt={
              <span>
                Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins). For longer terms, you can
                optionally add a <code className="highlighter-rouge">.text-truncate</code> class to truncate the text with an ellipsis.
              </span>
            }>
              <div className="bd-example">
                <dl className="row">
                  <dt className="col-sm-3">Description lists</dt>
                  <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

                  <dt className="col-sm-3">Euismod</dt>
                  <dd className="col-sm-9">
                    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
                    <p>Donec id elit non mi porta gravida at eget metus.</p>
                  </dd>

                  <dt className="col-sm-3">Malesuada porta</dt>
                  <dd className="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

                  <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                  <dd className="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet
                    risus.
                  </dd>

                  <dt className="col-sm-3">Nesting</dt>
                  <dd className="col-sm-9">
                    <dl className="row">
                      <dt className="col-sm-4">Nested definition list</dt>
                      <dd className="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
                    </dl>
                  </dd>
                </dl>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-12">
            <WidgetComponent header="Inline" className='shadow-01' excerpt={
              <span>
                Remove a list’s bullets and apply some light <code className="highlighter-rouge">margin</code> with a combination of two classes, <code
                className="highlighter-rouge">.list-inline</code> and <code className="highlighter-rouge">.list-inline-item</code>.
              </span>
            }>
              <div className="bd-example">
                <ul className="list-inline">
                  <li className="list-inline-item">Lorem ipsum</li>
                  <li className="list-inline-item">Phasellus iaculis</li>
                  <li className="list-inline-item">Nulla volutpat</li>
                </ul>
              </div>
            </WidgetComponent>
          </div>

        </div>

      </div>
    );
  }
}

export default TypographyPage;
