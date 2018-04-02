import React, {Component} from 'react';
import WidgetComponent from "../../../components/Widget";

class TablesPage extends Component {

  render() {
    return (
      <div className="content-wrapper container-fluid px-5 mb-4 trans-03-in-out">

        <div className="row">

          <div className="col-lg-12 mb-3">
            <WidgetComponent header='Basic Example' className='shadow-01' excerpt='All table styles are inherited in Bootstrap 4, meaning any nested tables will be
             styled in the same manner as the parent.'>
              <table className="table">
                <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                </tbody>
              </table>
            </WidgetComponent>
          </div>

          <div className="col-lg-6 mb-3">
            <WidgetComponent header='Inverse table' className='shadow-01' excerpt='You can also invert the colors—with light text on dark backgrounds—with <code>.table-dark</code>.'>
              <table className="table table-dark">
                <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                </tbody>
              </table>
            </WidgetComponent>
          </div>

          <div className="col-lg-6 mb-3">
            <WidgetComponent header='Table head options' className='shadow-01' excerpt='Similar to default and inverse tables, use one of two modifier classes to make <code>&lt;thead&gt;</code>s appear light or dark gray.'>
              <table className="table">
                <thead className="thead-dark">
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                </tbody>
              </table>
            </WidgetComponent>
          </div>

          <div className="col-lg-6 mb-3">
            <WidgetComponent header='Striped rows' className='shadow-01' excerpt='Use .table-striped to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.'>
              <table className="table table-striped">
                <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>James</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                </tr>
                </tbody>
              </table>
            </WidgetComponent>
          </div>

          <div className="col-lg-6 mb-3">
            <WidgetComponent header='Bordered table' className='shadow-01' excerpt='Add <code>.table-bordered</code> for borders on all sides of the table and cells.'>
              <table className="table table-bordered">
                <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@TwBootstrap</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
                </tbody>
              </table>
            </WidgetComponent>
          </div>

          <div className="col-lg-6 mb-3">
            <WidgetComponent header='Hoverable rows' className='shadow-01' excerpt='Add <code>.table-hover</code> to enable a hover state on table rows within a <code>&lt;tbody&gt;</code>.'>
              <table className="table table-hover">
                <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
                </tbody>
              </table>
            </WidgetComponent>
          </div>

          <div className="col-lg-6 mb-3">
            <WidgetComponent header='Small table' className='shadow-01' excerpt='Add <code>.table-sm</code> to make tables more compact by cutting cell padding in half.'>
              <table className="table table-sm">
                <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colSpan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td colSpan="2">Michael</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td colSpan="2">Olga</td>
                  <td>@twitter</td>
                </tr>
                </tbody>
              </table>
            </WidgetComponent>
          </div>

          <div className="col-lg-12 mb-3">
            <WidgetComponent header='Contextual classes' className='shadow-01' excerpt='Use contextual classes to color table rows or individual cells.'>
              <table className="table">
                <thead>
                <tr>
                  <th>Type</th>
                  <th>Column heading</th>
                  <th>Column heading</th>
                  <th>Column heading</th>
                </tr>
                </thead>
                <tbody>
                <tr className="table-active">
                  <th scope="row">Active</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr>
                  <th scope="row">Default</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="table-primary">
                  <th scope="row">Primary</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="table-secondary">
                  <th scope="row">Secondary</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="table-success">
                  <th scope="row">Success</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="table-danger">
                  <th scope="row">Danger</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="table-warning">
                  <th scope="row">Warning</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="table-info">
                  <th scope="row">Info</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="table-light">
                  <th scope="row">Light</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                <tr className="table-dark">
                  <th scope="row">Dark</th>
                  <td>Column content</td>
                  <td>Column content</td>
                  <td>Column content</td>
                </tr>
                </tbody>
              </table>
            </WidgetComponent>
          </div>

        </div>

      </div>
    );
  }
}

export default TablesPage;
