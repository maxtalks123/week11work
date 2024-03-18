import { UserProvider } from "./UserContext/UserContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { ThemeProvider } from "./ThemeContext";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
