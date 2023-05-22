import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import APIContextProvider from './api/apiContext';
import { useAPI } from './api/apiContext';
import { NAV } from './constants/general'
import slugify from './utils/slugify';
import './styles.css';

import Nav from './components/Nav';
import Error from './components/Error';
import Carousel from './containers/Carousel';
import Program from './containers/Program';

export const App = (): JSX.Element => {

const checkError = (): JSX.Element => {
  const { isError } = useAPI();
  return <>{isError && <Error/>}</>;
};

const AppRoutes = (): JSX.Element => {
    const { data } = useAPI();
    return (
      <Routes>
          {NAV?.map(item => {
              const { path, type, title } = item;
              return<Route path={`/${path}`} element={<Carousel type={type as 'series' | 'movie' | null} />} key={title}/>
          })}
          {data?.map(item => {
              const { id, title } = item;
              return <Route path={`/${slugify(title)}`} element={<Program id={id} />} key={title} />
          })}
      </Routes>
    )
};

  return (
    <APIContextProvider>
      <Router>
          <Nav />
          {checkError()}
          <AppRoutes />
      </Router>
    </APIContextProvider>
  )
};