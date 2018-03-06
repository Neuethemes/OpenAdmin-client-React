import React, {Component} from 'react';
import WidgetComponent from "../../../components/Widget";

class FormsPage extends Component {

  render() {
    return (
      <div className="content-wrapper container-fluid px-5 mb-4 trans-03-in-out">

        <div className="row">


          <div className="col-lg-6 mb-3">
            <WidgetComponent header='Form controls' className='shadow-01 mb-4' excerpt="Textual form controls—like &lt;input&gt;s, &lt;select&gt;s, and &lt;textarea&gt;s—are styled with
                    the .form-control class.">
              <form>
                <div className="form-group">
                  <label htmlFor="exampleFormControlInput1">Email address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect1">Example select</label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                  <select multiple className="form-control" id="exampleFormControlSelect2">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"/>
                </div>
              </form>

            </WidgetComponent>

          </div>

          <div className="col-lg-6 mb-3">
            <WidgetComponent header='Sizing' className='shadow-01 mb-4' excerpt='Set heights using classes like .form-control-lg and .form-control-sm.'>
              <form className="py-4">
                <h4>Input</h4>
                <input className="form-control form-control-lg mb-3" type="text" placeholder=".form-control-lg"/>
                <input className="form-control mb-3" type="text" placeholder="Default input"/>
                <input className="form-control form-control-sm mb-3" type="text" placeholder=".form-control-sm"/>
              </form>
              <form className="py-4">
                <h4>Select</h4>
                <select className="form-control form-control-lg mb-1">
                  <option>Large select</option>
                </select>
                <select className="form-control mb-1">
                  <option>Default select</option>
                </select>
                <select className="form-control form-control-sm mb-1">
                  <option>Small select</option>
                </select>
              </form>
            </WidgetComponent>
          </div>

          <div className="col-lg-6 mb-3">
            <WidgetComponent header='Form groups' className='shadow-01 mb-4' excerpt='The .form-group class is the easiest way to add some structure to forms.'>
              <div className="form-group">
                <label className="form-control-label" htmlFor="formGroupExampleInput">Example label</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
              </div>
              <div className="form-group">
                <label className="form-control-label" htmlFor="formGroupExampleInput2">Another label</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-6 mb-3">
            <WidgetComponent header='Checkboxes and radios' className='shadow-01 mb-4' excerpt='Default checkboxes and radios are improved upon with the help of .form-check, a single class for both input types that
                    improves the layout and behavior of their HTML elements.'>
              <div className="row">
                <div className="col-6">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked/>
                        Option one is this and that
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                        Option two can be something else
                    </label>
                  </div>
                  <div className="form-check disabled">
                    <label className="form-check-label">
                      <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" disabled/>
                        Option three is disabled
                    </label>
                  </div>

                </div>

                <div className="col-6">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" value=""/>
                        Option one is this and that
                    </label>
                  </div>
                  <div className="form-check disabled">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" value="" disabled/>
                        Option two is disabled
                    </label>
                  </div>

                </div>

                <div className="col-6">
                  <div className="form-check form-check-inline">
                    <label className="form-check-label">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/> 1
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/> 2
                    </label>
                  </div>
                  <div className="form-check form-check-inline disabled">
                    <label className="form-check-label">
                      <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" disabled/> 3
                    </label>
                  </div>

                </div>

                <div className="col-6">
                  <div className="form-check form-check-inline">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/> 1
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/> 2
                    </label>
                  </div>
                  <div className="form-check form-check-inline disabled">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled/> 3
                    </label>
                  </div>

                </div>

                <div className="col-6">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="radio" name="blankRadio" id="blankRadio1" value="option1" aria-label="..."/>
                    </label>
                  </div>

                </div>
                <div className="col-6">
                  <div className="form-check">
                    <label className="form-check-label">
                      <input className="form-check-input" type="checkbox" id="blankCheckbox" value="option1" aria-label="..."/>
                    </label>
                  </div>

                </div>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-4 mb-3">
            <WidgetComponent header='Readonly' className='shadow-01 mb-4' excerpt='Add the readonly boolean attribute on an input to prevent modification of the input’s value.'>
              <form>
                <div className="form-group row">
                  <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" value="email@example.com"/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password"/>
                  </div>
                </div>
              </form>
            </WidgetComponent>
          </div>

          <div className="col-lg-4 mb-3">
            <WidgetComponent header='Form grid' className='shadow-01 mb-4' excerpt='More complex forms can be built using our grid classes.'>
              <div className="row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="First name"/>
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Last name"/>
                </div>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-4 mb-3">
            <WidgetComponent header='Form row' className='shadow-01 mb-4' excerpt='You may also swap .row for .form-row, a variation of our standard grid row that overrides the default column
                    gutters for tighter and more compact layouts.'>
              <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="First name"/>
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Last name"/>
                </div>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-12 mb-3">
            <WidgetComponent header='Complex layout' className='shadow-01 mb-4' excerpt='More complex layouts can also be created with the grid system.'>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4" className="col-form-label">Email</label>
                  <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4" className="col-form-label">Password</label>
                  <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress" className="col-form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress2" className="col-form-label">Address 2</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity" className="col-form-label">City</label>
                  <input type="text" className="form-control" id="inputCity"/>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState" className="col-form-label">State</label>
                  <select id="inputState" className="form-control">
                    <option>Choose</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="inputZip" className="col-form-label">Zip</label>
                  <input type="text" className="form-control" id="inputZip"/>
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox"/> Check me out
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Sign in</button>
            </WidgetComponent>
          </div>

          <div className="col-lg-6 mb-3">
            <WidgetComponent header='Horizontal form' className='shadow-01 mb-4' excerpt='Create horizontal forms with the grid by adding the .row class to
             form groups and using the .col-*-* classes to specify the width of your labels and controls.'>
              <div className="container">
                <form>
                  <div className="form-group row">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                      <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                      <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
                    </div>
                  </div>
                  <fieldset className="form-group">
                    <div className="row">
                      <label className="col-form-legend col-sm-2">Radios</label>
                      <div className="col-sm-10">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                              Option one is this and that&mdash;be sure to include why it's great
                          </label>
                        </div>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                              Option two can be something else and selecting it will deselect option one
                          </label>
                        </div>
                        <div className="form-check disabled">
                          <label className="form-check-label">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled/>
                              Option three is disabled
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <div className="form-group row">
                    <div className="col-sm-2">Checkbox</div>
                    <div className="col-sm-10">
                      <div className="form-check">
                        <label className="form-check-label">
                          <input className="form-check-input" type="checkbox"/> Check me out
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                  </div>
                </form>
              </div>
            </WidgetComponent>
          </div>

          <div className="col-lg-6 mb-3">
            <WidgetComponent header='Validation' className='shadow-01 mb-4' excerpt='Provide valuable, actionable feedback to your users with HTML5 form
             validation–available in all our supported browsers.'>
              <form className="container" id="needs-validation" noValidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationCustom01">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="First name" value="Mark" required/>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationCustom02">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required/>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="validationCustom03">City</label>
                    <input type="text" className="form-control" id="validationCustom03" placeholder="City" required/>
                      <div className="invalid-feedback">
                        Please provide a valid city.
                      </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationCustom04">State</label>
                    <input type="text" className="form-control" id="validationCustom04" placeholder="State" required/>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationCustom05">Zip</label>
                    <input type="text" className="form-control" id="validationCustom05" placeholder="Zip" required/>
                      <div className="invalid-feedback">
                        Please provide a valid zip.
                      </div>
                  </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit form</button>
              </form>
            </WidgetComponent>
          </div>

          <div className="col-lg-6 mb-3">
            <WidgetComponent header='Column sizing' className='shadow-01 mb-4' excerpt='As shown in the previous examples, our grid system allows you to place any number
             of .cols within a .row or .form-row.'>
              <form>
                <div className="form-row">
                  <div className="col-7">
                    <input type="text" className="form-control" placeholder="City"/>
                  </div>
                  <div className="col">
                    <input type="text" className="form-control" placeholder="State"/>
                  </div>
                  <div className="col">
                    <input type="text" className="form-control" placeholder="Zip"/>
                  </div>
                </div>
              </form>
            </WidgetComponent>
          </div>

          <div className="col-lg-6 mb-3">
            <WidgetComponent header='Auto-sizing' className='shadow-01 mb-4' excerpt='The example below uses a flexbox utility to vertically center the contents and
             changes .col to .col-auto so that your columns only take up as much space as needed.'>
              <form>
                <div className="form-row align-items-center">
                  <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineFormInput">Name</label>
                    <input type="text" className="form-control mb-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe"/>
                  </div>
                  <div className="col-auto">
                    <label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
                    <div className="input-group mb-2 mb-sm-0">
                      <div className="input-group-addon">@</div>
                      <input type="text" className="form-control" id="inlineFormInputGroup" placeholder="Username"/>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="form-check mb-2 mb-sm-0">
                      <label className="form-check-label">
                        <input className="form-check-input" type="checkbox"/> Remember me
                      </label>
                    </div>
                  </div>
                  <div className="col-auto">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </form>
            </WidgetComponent>
          </div>

        </div>

      </div>

  );
  }
}

export default FormsPage;
