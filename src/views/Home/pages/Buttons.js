import React, {Component} from 'react';
import WidgetComponent from "../../../components/Widget";
import { Button, ButtonGroup } from 'reactstrap';

class ButtonsPage extends Component {
  constructor (props) {
    super(props);

    this.state = { cSelected: [] };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <div className="content-wrapper container-fluid px-5 mt-5 mb-4 trans-03-in-out">

        <div className="row">

          <div className="col-lg-6">
            <WidgetComponent header='Colorful buttons' className='shadow-01' excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    <br>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
              <Button color="primary">primary</Button>{' '}
              <Button color="secondary">secondary</Button>{' '}
              <Button color="success">success</Button>{' '}
              <Button color="info">info</Button>{' '}
              <Button color="warning">warning</Button>{' '}
              <Button color="danger">danger</Button>{' '}
              <Button color="link">link</Button>
            </WidgetComponent>
          </div>

          <div className="col-lg-6">
            <WidgetComponent header='Outline Buttons' className='shadow-01' excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    <br>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
              <Button outline color="primary">primary</Button>{' '}
              <Button outline color="secondary">secondary</Button>{' '}
              <Button outline color="success">success</Button>{' '}
              <Button outline color="info">info</Button>{' '}
              <Button outline color="warning">warning</Button>{' '}
              <Button outline color="danger">danger</Button>
            </WidgetComponent>
          </div>

          <div className="col-lg-6">
            <WidgetComponent header='Button Sizes' className='shadow-01' excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    <br>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
              <h5 className="fw-200 mt-3 ">Large</h5>
              <Button color="primary" size="lg">Large Button</Button>{' '}
              <Button color="secondary" size="lg">Large Button</Button>
              <h5 className="fw-200 mt-3 ">Regular</h5>
              <Button color="primary">Regular Button</Button>{' '}
              <Button color="secondary">Regular Button</Button>
              <h5 className="fw-200 mt-3 ">Small</h5>
              <Button color="primary" size="sm">Small Button</Button>{' '}
              <Button color="secondary" size="sm">Small Button</Button>
            </WidgetComponent>
          </div>

          <div className="col-lg-6">
            <WidgetComponent header='Active and Disabled Icon States' className='shadow-01' excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    <br>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
              <h5 className="fw-200 pb-1 mt-4">Active</h5>
              <Button color="primary" size="lg" active>Primary link</Button>{' '}
              <Button color="secondary" size="lg" active>Link</Button>
              <h5 className="fw-200 pb-1 mt-4">Disabled</h5>
              <Button color="primary" size="lg" disabled>Primary button</Button>{' '}
              <Button color="secondary" size="lg" disabled>Button</Button>
            </WidgetComponent>
          </div>

          <div className="col-lg-6">
            <WidgetComponent header='Checkbox and Radio Buttons' className='shadow-01' excerpt="Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    <br>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.">
              <h5>Radio Buttons</h5>
              <ButtonGroup>
                <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>One</Button>
                <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Two</Button>
                <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Three</Button>
              </ButtonGroup>
              <p>Selected: {this.state.rSelected}</p>

              <h5>Checkbox Buttons</h5>
              <ButtonGroup>
                <Button color="primary" onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>One</Button>
                <Button color="primary" onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>Two</Button>
                <Button color="primary" onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>Three</Button>
              </ButtonGroup>
              <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
            </WidgetComponent>
          </div>

        </div>

      </div>
    );
  }
}

export default ButtonsPage;
