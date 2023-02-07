import { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import FullListItem from './FullListItem';
import { VPNsStore } from '../../../stores/';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './ListVPN.scss';

const FullListVpn = observer(() => {
  const { vpnsData, isLoadedVPNs } = VPNsStore;

  return (
    <div className="vpn-list__inner">
      {isLoadedVPNs ? (
        <>
          <div className="background">
            {vpnsData.slice(0, 3).map((node, key) => {
              return <FullListItem key={key} item={node} index={key} />;
            })}
          </div>
          <div className="background">
            {vpnsData.slice(3, vpnsData.length).map((node, key) => {
              return <FullListItem key={key} item={node} index={key + 3} />;
            })}
          </div>
        </>
      ) : (
        <Skeleton count={30} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
      )}
    </div>
  );
});

export default FullListVpn;
