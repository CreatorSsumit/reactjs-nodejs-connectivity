import { lazy } from "react";
import LazyComponent from "@Hoc/LazyComponent";
import {Route,Routes} from "react-router-dom";


const LoginComponent = lazy(()=>import('../src/Container/LoginComponent'))

function App() {
  return (
    <Routes>
    <Route path="/login" Component={LazyComponent(LoginComponent)} /> 
    </Routes>
  );
}


export default App;
