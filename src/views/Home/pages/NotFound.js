import React, {Component} from 'react';

class NotFoundPage extends Component {

  render() {
    return (
      <div className="content-wrapper container-fluid px-5 mb-4 trans-03-in-out">

        <div className="row">

          <div className="col-lg-12">

            <div className="text-center">

              <h1 className="display-1">404</h1>
              <h3 className="font-bold">Page Not Found</h3>

              <div className="error-desc">
                Sorry, but the page you are looking for has note been found. Try checking the URL for error, then hit the refresh button on your browser or try
                found
                something else in our app.
              </div>

              <div className="search d-none d-md-inline-block mt-5">

                <form className="form-inline my-2 my-lg-0">
                  <div className="input-group input-group-built-in">
                    <input type="text" className="form-control rounded-1" placeholder="Search for something..." aria-label="Search for something..."/>
                    <span className="input-group-btn">
                      <a href="#" className="btn btn-icon">
                        <i className="fa fa-search"/>
                      </a>
                    </span>
                  </div>
                </form>

              </div>

            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default NotFoundPage;
