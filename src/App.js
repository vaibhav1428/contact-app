import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import './styles/App.scss';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Addcontact from './components/Addcontact';
import Editcontact from './components/Editcontact';

function App() {
  return (

    <Router>
      <div className="App">
        <Navbar/>

        <Switch>
          <Route path="/"  exact component={Contacts}/>
          <Route path="/contacts/add" component={Addcontact}/>
          <Route path="/contacts/edit/:id" component={Editcontact}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
