import React from 'react';

import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import GithubCorner from '../github/Corner';
import FloatCart from '../FloatCart';
import Footer from "../Footer"

const App = () => (
  <React.Fragment>
    <GithubCorner />
    <main>
      <div className="children-main">
        <Filter />
        <Shelf />
      </div>
      <Footer />
    </main>
    <FloatCart />
  </React.Fragment>
);

export default App;
