import "./App.css";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";
import {BrowserRouter ,Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>

   <Navbar/>
  <Route path="/" component={Dashboard}/>
  <Route path="add"  component={AddEmployee}/>
    </BrowserRouter>
  );
}

export default App;
