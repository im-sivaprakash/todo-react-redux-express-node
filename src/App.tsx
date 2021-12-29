import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Pages/Home'
import Completed from './Pages/Completed';
import NotFound from './Pages/404';


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
