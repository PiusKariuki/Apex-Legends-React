import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import { Home } from './components/Home';
import { Tier1 } from './Tiers/Tier1';
import { Tier2 } from './Tiers/Tier2';
import { Tier3 } from './Tiers/Tier3';
import {About} from './components/About';
import { NoMatch} from './components/NoMatch';
import { Layout} from './layout/Layout';
import {Navigate} from './components/Navigate';


 function App() { 
     return(
    <React.Fragment>
    <Navigate />
    <Layout>
        <Router>
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route path="/tier1" component={ Tier1 }/>
                <Route path="/tier2" component={ Tier2 } />
                <Route path="/tier3" component={ Tier3 } />
                <Route  path="/about" component={ About }/>
                <Route   component={ NoMatch}/>
            </Switch>
        </Router>
        </Layout>
    </React.Fragment>
     );
 }
 export default App;