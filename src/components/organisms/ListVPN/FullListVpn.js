import { Component, useEffect, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

import FullListItem from './FullListItem';
import { FiltersVPN } from '../';
import { VPNsStore } from '../../../stores/';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './ListVPN.scss';

const FullListVpn = observer(() => {
  const { isLoadedVPNs, vpnsDataFiltered } = VPNsStore;

  return (
    <>
      <FiltersVPN />
      <div className="vpn-list__inner">
        {isLoadedVPNs ? (
          <>
            {vpnsDataFiltered.length > 0 ? (
              <>
                {vpnsDataFiltered.filter((el) => el.index <= 3).length > 0 && (
                  <div className="background">
                    {vpnsDataFiltered
                      .filter((el) => el.index <= 3)
                      .map((node, key) => {
                        return <FullListItem key={key} item={node} />;
                      })}
                  </div>
                )}
                {vpnsDataFiltered.filter((el) => el.index > 3).length > 0 && (
                  <div className="background">
                    {vpnsDataFiltered
                      .filter((el) => el.index > 3)
                      .map((node, key) => {
                        return <FullListItem key={key} item={node} />;
                      })}
                  </div>
                )}
              </>
            ) : (
              <div className="background">
                <div className="vpn-list__empty">Ничего не найдено</div>
              </div>
            )}
          </>
        ) : (
          <Skeleton count={30} baseColor="#f5f5f5" highlightColor="#fff" className="transition_skeleton" />
        )}
      </div>
    </>
  );
});

export default FullListVpn;
