import { Component } from 'react';
import { Link } from 'react-router-dom';
import ListItem from './ListItem';

import './ListVPN.scss';

const ListVPN = (props) => {
  const { list } = props;
  return (
    <div className="vpn-list__inner background">
      {list.slice(0, 6).map((node, key) => {
        return <ListItem key={key} item={node} index={key} />;
      })}
    </div>
  );
};

export default ListVPN;
