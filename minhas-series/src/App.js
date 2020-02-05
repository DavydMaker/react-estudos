import React from 'react';
import Header from './components/Header';

import Generos from './pages/Generos';
import NovoGenero from './pages/Generos/novo';
import EditarGenero from './pages/Generos/editar';

import Series from './pages/Series';
import NovaSerie from './pages/Series/novo';

import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import InfoSerie from './pages/Series/info';


const Home = () => {
  return (
    <h1>teste</h1>
  )
}

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/generos' exact component={Generos}></Route>        
          <Route path='/generos/novo' exact component={NovoGenero}></Route>
          <Route path='/generos/:id' exact component={EditarGenero}></Route>                          
          <Route path='/series' exact component={Series}></Route>        
          <Route path='/series/novo' exact component={NovaSerie}></Route>
          <Route path='/series/:id' exact component={InfoSerie}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
