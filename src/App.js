import React from 'react'
import {Route} from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PageItemWithRouter from './pages/PageItem'
import CategoriesContainer from './components/CategoryAndSort/CategoriesContainer'
import ResultItemsSearch from './pages/ResultItems'


function App() {
  return (
    <div className="App">
      <Header />
      <CategoriesContainer />
      <Route path="/" exact component={Home}/>
      <Route path="/cart" exact component={Cart} />
      <Route path="/:path/:id" exact component={PageItemWithRouter} />
      <Route path="/search" exact component={ResultItemsSearch} />
    </div>
  );
}

export default App;
