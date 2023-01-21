import React from 'react';
import Home from './Pages/Home';
import Completed from './Pages/Completed';
import NotFound from './Pages/404';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <Switch>
       <Route path="/" component={Home} exact />  
       <Route path="/completed"  component={Completed} />  
       <Route component={NotFound}/>
     </Switch>
    </BrowserRouter>
  );
}

export default App;
