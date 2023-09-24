import { Route, Routes } from "react-router";
import { Suspense, lazy } from "react";

const loginComponent  = lazy(()=>import('./Container/LoginComponent'))


function App() {
  return (
    <>
    <Routes>
      <Route  /> 
    </Routes>
    </>
  );
}

export default App;
