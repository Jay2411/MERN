
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AllUsers from "./components/AllUsers";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/add' component={AddUser} />
        <Route exact path='/all' component={AllUsers} />
        <Route exact path='/edit/:id' component={EditUser} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
