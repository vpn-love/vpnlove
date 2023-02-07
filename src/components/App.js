import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';
import AlternativeVPNPage from './pages/AlternativeVPNPage/AlternativeVPNPage';
import PostsPage from './pages/PostsPage/PostsPage';
import PostsListPage from './pages/PostsPage/PostsListPage';
import RatingPage from './pages/RatingPage/RatingPage';
import VPNPage from './pages/VPNPage/VPNPage';
import Sitemap from './Sitemap';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { BannersStore, PostsStore, VPNsStore } from '../stores/';

const App = () => {
  BannersStore.getBannersListAsync();
  PostsStore.getPostsAsync();
  VPNsStore.getVPNsAsync();
  PostsStore.getTopRatedAsync();
  PostsStore.getCategoriesAsync();

  return (
    <div className="wrapper" id="wrapper">
      <>
        <Routes>
          <Route path="/" element={<MainPage />} sitemapIndex="true" priority="1" />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/index.html" element={<MainPage />} sitemapIndex="true" priority="1" />
          <Route path="/about" element={<AboutPage />} sitemapIndex="true" priority="1" />
          <Route path="/alternatives" element={<AlternativeVPNPage />} sitemapIndex="true" priority="1" />
          <Route path="/rating" element={<RatingPage />} sitemapIndex="true" priority="1" />
          <Route path="/rating/:vpn" element={<VPNPage />} sitemapIndex="true" priority="1" />
          <Route path="/news" element={<PostsListPage />} sitemapIndex="true" priority="1" />
          <Route path="/top" element={<PostsListPage />} sitemapIndex="true" priority="1" />
          <Route path="/reviews" element={<PostsListPage />} sitemapIndex="true" priority="1" />

          <Route path="/news/:newsName" element={<PostsPage />} sitemapIndex="true" priority="1" />
          <Route path="/top/:newsName" element={<PostsPage />} sitemapIndex="true" priority="1" />
          <Route path="/reviews/:newsName" element={<PostsPage />} sitemapIndex="true" priority="1" />

          <Route path="/search" element={<PostsListPage />} sitemapIndex="true" />
          <Route path="/sitemap" element={<Sitemap />} />
        </Routes>
      </>
    </div>
  );
};

export default App;
