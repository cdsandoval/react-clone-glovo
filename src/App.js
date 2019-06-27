import React from "react";
import Login from "./components/company-name-form";

function App() {
  const [companyName, setCompanyName] = React.useState(
    localStorage.getItem("company-name")
  );

  function handleCompanyNameSubmit(name) {
    setCompanyName(name);
    localStorage.setItem("company-name", name);
  }

  return (
    <>
      <h1>Hola</h1>
      <Login onSubmit={handleCompanyNameSubmit} />
    </>
  );
}

export default App;
