import React from 'react';
import { Progress } from 'reactstrap';
import MessagesComponent from "./Messages";

const ProgressListComponent = ({data}) => {
  const list = data.map((t) => (
    <div className="mt-3">
      <p className="widget-title">{t.title}</p>
      <p className="text-muted">{t.excerpt}</p>
      <Progress color={t.type} value={t.val}/>
    </div>
  ));
  return list;
};

export default ProgressListComponent;
