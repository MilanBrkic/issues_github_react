import '../styles/App.css';
import Table from './Table'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Issue from './Issue';

export default function App() {
    return (
      <div className='appClass'>
        <Router>
          <Switch>
            <Route path='/' exact>
              <h1>Issues GitHub</h1>
              <Table/>
            </Route >
            <Route path='/issue/:id'>
              <Issue />
            </Route>
          </Switch>
        </Router>
      </div>
    )
}
