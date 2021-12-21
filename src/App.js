import React from "react";
import AuthProvider from "./Auth/AuthProvider";
import AppRouter from "./routes/AppRouter";


function App() {
  return (
    <div className="App">
      <h1 className="App-header">
          <AuthProvider>
              <AppRouter />
          </AuthProvider>
      </h1>
    </div>
  );
}

export default App;
