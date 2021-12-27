import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Test from "./routes/Test";
import NavBar from "./components/navBar";
import { ThemeProvider } from "styled-components";
import { useSelector } from 'react-redux';
import getTheme from "./themes/themeProvider";
import { selectorTheme } from "./app/slicer";

const App = () => { 

  const theme = useSelector(selectorTheme)

  return (
      <ThemeProvider theme={getTheme(theme)}>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Router>
      </ThemeProvider>
  );
};

export default App;
