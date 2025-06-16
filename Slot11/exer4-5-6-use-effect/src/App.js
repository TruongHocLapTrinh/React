import './App.css';
import AnotherFormValidation from './components/AnotherFormValidation';
import FormValidation from './components/FormValidation';
import ValidatedInput from './components/ValidatedInput';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <ValidatedInput/>
      <FormValidation/>
      <AnotherFormValidation/>
    </div>
  );
}

export default App;
