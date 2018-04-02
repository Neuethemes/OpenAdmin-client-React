import React, {Component} from 'react';

class StatComponent extends Component {
  render() {
    return (
      <div>
        <p className="h2">{this.props.header}</p>
        <p className="text-muted mt-2">{this.props.excerpt}</p>
      </div>
    );
  }
}

export default StatComponent;
