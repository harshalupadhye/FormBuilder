import SchemaInput from './components/schemaInput'
import './App.css';
import {Route,Switch,withRouter} from "react-router-dom"
import FormRenderer from './components/formRenderer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={SchemaInput}/>
        <Route pathe="/Form" exact component={FormRenderer}/>

      </Switch>
    
    </div>
  );
}

export default App;
