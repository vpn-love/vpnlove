import React from 'react';
import Routes from './App';
import DynamicSitemap from 'react-dynamic-sitemap';

export default function Sitemap(props) {
  return <DynamicSitemap routes={Routes} prettify={true} {...props} />;
}
