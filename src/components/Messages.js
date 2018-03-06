import React, {Component} from 'react';

class MessagesComponent extends Component {
  static defaultProps = {
    list: []
  };

  render() {

    const list = this.props.list.map((t) => (
      <li className="media border-bottom-1 border-light p-4">
        <img src={t.avatar} height="44px" className="rounded-circle d-flex mr-3" alt={t.name}/>
        <div className="media-body">
          <div className="d-flex w-100 justify-content-between">
            <h6 className="mb-1 mr-4">{t.header}</h6>
            <small className=" text-secondary">5 hrs ago</small>
          </div>
          {t.content}
          <small className="text-muted d-block">{t.name} at 2:30 am 11.06.2014</small>
        </div>
      </li>
    ));

    return (
      <ul className="list-unstyled">
        {list}
      </ul>
    );
  }
}

export default MessagesComponent;
