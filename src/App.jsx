import { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';

import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './config/Routes';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route
          render={(props) => (
            <>
              <Header></Header>
              <Routes></Routes>
              <Footer></Footer>
            </>
          )}
        ></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
