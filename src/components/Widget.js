import React, { Component } from 'react';

class WidgetComponent extends Component {
  static defaultProps = {
    header: '',
    excerpt: '',
    badge: { val: 0 },
    moreLink: ''
  };

  render() {
    return (
      <section className={'widget ' + this.props.className}>

        <div className="widget-block">
          <header>
            <h3 className="widget-title">{this.props.header}</h3>
            <p className="text-muted">{this.props.excerpt}</p>
          </header>
          <div className="widget-content pt-1">
            { this.props.children }
          </div>
          {this.props.moreLink !== '' &&
            <footer>
              <a href={this.props.moreLink}>See More <i className="fa fa-long-arrow-right" aria-hidden="true"/></a>
            </footer>
          }
        </div>

        {this.props.badge.val !== 0 &&
          <span className={"badge badge-" + this.props.badge.type}>
            {this.props.badge.val} <i className={this.props.badge.ico} aria-hidden="true"/>
          </span>
        }

      </section>
    )
  }
}

export default WidgetComponent;
